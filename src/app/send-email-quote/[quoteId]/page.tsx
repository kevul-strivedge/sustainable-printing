"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { fetchOrderById, sendQuoteEmail } from "@/src/services/api";

export default function SendEmailQuotePage() {
  const { quoteId } = useParams<{ quoteId: string }>();
  const { user, hydrated } = useAuth();
  const router = useRouter();

  const [productName, setProductName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (hydrated && !user) router.push("/login");
  }, [hydrated, user, router]);

  useEffect(() => {
    if (!quoteId) return;
    fetchOrderById(Number(quoteId)).then((order) => {
      const name = order?.stock || order?.format || "";
      setProductName(name);
      setSubject(`Quote #${quoteId}${name ? ` (${name})` : ""}`);
    });
  }, [quoteId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) { setError("Message is required."); return; }
    if (!user?.token) return;
    setSubmitting(true);
    setError(null);
    try {
      await sendQuoteEmail(Number(quoteId), { subject, message }, user.token);
      router.push("/my-history?emailSent=1");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send email.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!hydrated || !user) return null;

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Subject */}
          <div className="mb-6">
            <label className="block text-[15px] font-semibold text-gray-800 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] text-gray-800 focus:outline-none focus:border-[#3d9e5f]"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-[15px] font-semibold text-gray-800 mb-2">
              Input your text here <span className="text-red-500">*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] text-gray-800 focus:outline-none focus:border-[#3d9e5f] resize-y"
            />
          </div>

          <p className="text-[13px] text-gray-600 mb-8">
            <span className="text-red-500 font-bold">*</span> – Required Fields
          </p>

          {error && (
            <p className="mb-4 text-[13px] text-red-500 bg-red-50 border border-red-200 rounded px-4 py-2.5">{error}</p>
          )}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#292560] text-white text-[14px] font-semibold px-8 py-2.5 rounded hover:bg-[#1e1b4b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Submit"}
            </button>
            <button
              type="button"
              onClick={() => router.push("/my-history")}
              className="border border-gray-300 text-[14px] font-semibold px-8 py-2.5 rounded text-gray-700 hover:border-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
