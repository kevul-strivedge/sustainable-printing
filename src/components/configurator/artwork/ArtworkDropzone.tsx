"use client";

import { useRef, useState } from "react";

const ACCEPTED = ".pdf,.jpg,.jpeg,.png,.ai,.psd";

export default function ArtworkDropzone() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  function openPicker() {
    inputRef.current?.click();
  }

  function handleFile(f: File) {
    setFile(f);
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  }

  function onDragOver(e: React.DragEvent) {
    e.preventDefault();
    setDragging(true);
  }

  function onDragLeave(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  }

  function removeFile(e: React.MouseEvent) {
    e.stopPropagation();
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED}
        className="hidden"
        onChange={onInputChange}
      />

      <div
        onClick={openPicker}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`border-2 border-dashed rounded-lg px-6 py-10 flex flex-col items-center text-center cursor-pointer transition-colors duration-150 ${
          dragging
            ? "border-[#3d9e5f] bg-[#f0faf5]"
            : file
            ? "border-[#3d9e5f] bg-[#f0faf5]"
            : "border-gray-300 bg-[#fafbf9] hover:border-[#3d9e5f] hover:bg-[#f3f7f4]"
        }`}
      >
        {/* Upload icon */}
        <div className="w-14 h-14 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-4">
          {file ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="#3d9e5f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 16V8M8 12l4-4 4 4" stroke="#3d9e5f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1" stroke="#3d9e5f" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </div>

        {file ? (
          <>
            <p className="text-[14px] font-bold text-[#292560] mb-1 break-all px-2">{file.name}</p>
            <p className="text-[12px] text-gray-400 mb-2">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
            <button
              type="button"
              onClick={removeFile}
              className="text-[12px] text-red-500 underline hover:text-red-600"
            >
              Remove file
            </button>
          </>
        ) : (
          <>
            <p className="text-[15px] font-bold text-[#292560] mb-1">Drag and drop your files here</p>
            <p className="text-[13px] text-gray-500 mb-0.5">
              or{" "}
              <span className="text-[#3d9e5f] font-semibold underline">click to browse</span>
            </p>
            <p className="text-[12px] text-gray-400 mt-2">
              Supported formats: PDF, JPG, PNG, AI, PSD (max 50MB)
            </p>
          </>
        )}
      </div>
    </>
  );
}
