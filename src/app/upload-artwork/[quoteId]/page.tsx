"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/src/context/AuthContext";
import { fetchOrderById, uploadArtwork, attachArtworkToQuote } from "@/src/services/api";

const ACCEPTED = ".pdf,.jpg,.jpeg,.png,.ai,.psd";

function UploadIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="#f0faf5" />
      <path d="M20 26V14M14 20l6-6 6 6" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="24" fill="#f0faf5" />
      <path d="M14 24l8 8 12-14" stroke="#3d9e5f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function UploadArtworkPage() {
  const { quoteId } = useParams<{ quoteId: string }>();
  const { user, hydrated } = useAuth();
  const router = useRouter();

  const [orderDetails, setOrderDetails] = useState<string>("Order #" + quoteId);
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (hydrated && !user) router.push("/login");
  }, [hydrated, user, router]);

  useEffect(() => {
    if (!user || !quoteId) return;
    fetchOrderById(Number(quoteId)).then((order) => {
      if (order) {
        const parts = [order.format, order.stock].filter(Boolean).join(" · ");
        setOrderDetails(parts || `Order #${quoteId}`);
      }
    });
  }, [user, quoteId]);

  function pickFile(f: File) {
    setFile(f);
    setError(null);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) pickFile(f);
  }

  async function handleUpload() {
    if (!file || !user?.token) return;
    setUploading(true);
    setError(null);
    try {
      const result = await uploadArtwork(file);
      await attachArtworkToQuote(Number(quoteId), {
        artworkFileUrl: result.fileUrl,
        artworkFileName: result.fileName,
      }, user.token);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  if (!hydrated || !user) return null;

  return (
    <main className="min-h-screen bg-[#faf9f7] py-12 px-4">
      <div className="max-w-xl mx-auto">

        {/* Back link */}
        <Link href="/my-history" className="inline-flex items-center gap-1.5 text-[13px] text-[#3d9e5f] hover:underline mb-6">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to My Orders
        </Link>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

          {/* Header */}
          <div className="border-t-4 border-[#3d9e5f] px-8 py-7">
            <p className="text-[12px] font-medium text-[#3d9e5f] uppercase tracking-wide mb-1">Step 2 — Upload Artwork</p>
            <h1 className="text-[22px] font-bold text-[#292560] mb-0.5">Upload Your Artwork</h1>
            <p className="text-[13px] text-gray-500">
              Order <span className="font-semibold text-[#292560]">#{quoteId}</span>
              {orderDetails && orderDetails !== `Order #${quoteId}` && (
                <> &mdash; {orderDetails}</>
              )}
            </p>
          </div>

          <div className="px-8 pb-8">
            {done ? (
              /* Success state */
              <div className="flex flex-col items-center text-center py-8 gap-4">
                <CheckIcon />
                <div>
                  <p className="text-[18px] font-bold text-[#292560]">Artwork Uploaded!</p>
                  <p className="text-[13px] text-gray-500 mt-1">Our team will review your file within 1 business day.</p>
                </div>
                <Link
                  href="/my-history"
                  className="mt-2 bg-[#004E24] text-white text-[14px] font-semibold rounded-full px-8 py-2.5 hover:bg-[#003a1b] transition-colors"
                >
                  Back to My Orders
                </Link>
              </div>
            ) : (
              <>
                {/* Dropzone */}
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={onDrop}
                  onClick={() => inputRef.current?.click()}
                  className={`mt-2 flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl px-6 py-10 cursor-pointer transition-colors ${
                    dragging
                      ? "border-[#3d9e5f] bg-[#f0faf5]"
                      : file
                      ? "border-[#3d9e5f] bg-[#f0faf5]"
                      : "border-gray-300 bg-gray-50 hover:border-[#3d9e5f] hover:bg-[#f0faf5]"
                  }`}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    accept={ACCEPTED}
                    className="hidden"
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) pickFile(f); }}
                  />
                  <UploadIcon />
                  {file ? (
                    <div className="text-center">
                      <p className="text-[14px] font-semibold text-[#292560]">{file.name}</p>
                      <p className="text-[12px] text-gray-400 mt-0.5">{(file.size / 1024 / 1024).toFixed(2)} MB — click to change</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-[14px] font-semibold text-[#292560]">Drag & drop your file here</p>
                      <p className="text-[12px] text-gray-400 mt-0.5">or click to browse — PDF, JPG, PNG, AI, PSD</p>
                    </div>
                  )}
                </div>

                {/* Guidelines */}
                <ul className="mt-5 space-y-1.5 text-[12px] text-gray-500">
                  {[
                    "Supply files at 300 DPI or higher",
                    "Include 3mm bleed on all sides",
                    "Embed all fonts or convert to outlines",
                    "Use CMYK colour mode",
                  ].map((g) => (
                    <li key={g} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-[#3d9e5f]">✓</span>
                      {g}
                    </li>
                  ))}
                </ul>

                {error && (
                  <p className="mt-4 text-[13px] text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">{error}</p>
                )}

                <button
                  onClick={handleUpload}
                  disabled={!file || uploading}
                  className="mt-6 w-full bg-[#004E24] text-white text-[14px] font-semibold rounded-full py-3 hover:bg-[#003a1b] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {uploading ? "Uploading…" : "Confirm & Upload Artwork"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
