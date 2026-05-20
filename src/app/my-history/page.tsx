"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { fetchMyOrders, reQuoteOrder, MyOrder } from "@/src/services/api";
import { products } from "@/src/constants/products";

const STATUS_STYLES: Record<string, string> = {
  quotedOnline:  "text-[#3d9e5f]",
  pending:       "text-[#d97706]",
  closed:        "text-[#6b7280]",
  quoted:        "text-[#7c3aed]",
  delivered:     "text-[#16a34a]",
  confirmed:     "text-[#2563eb]",
  active:        "text-[#0891b2]",
};

function statusClass(status: string) {
  return STATUS_STYLES[status.toLowerCase().replace(/\s/g, "")] ?? "text-[#292560]";
}

function formatDate(dateStr: string) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-AU", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function ChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api/v1';

function ActionDropdown({
  orderId,
  productType,
  paymentStatus,
  token,
  onReQuoteSuccess,
}: {
  orderId: number;
  productType: number | null;
  paymentStatus: string;
  token: string;
  onReQuoteSuccess: (msg: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [requoting, setRequoting] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadingInvoice, setDownloadingInvoice] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isPaid = paymentStatus === "Paid";
  const actions = isPaid
    ? ["Download Invoice", "Upload Artwork", "Re-Quote", "Send Email"]
    : ["Order Now", "Pay Now", "Download Quote", "Upload Artwork", "Re-Quote", "Send Email"];

  async function handleAction(action: string) {
    setOpen(false);
    if (action === "Upload Artwork") {
      router.push(`/upload-artwork/${orderId}`);
      return;
    }
    if (action === "Send Email") {
      router.push(`/send-email-quote/${orderId}`);
      return;
    }
    if (action === "Order Now" || action === "Pay Now") {
      const slug = products.find((p) => p.dbId === productType)?.slug;
      if (slug) {
        router.push(`/${slug}?startStep=4&quoteId=${orderId}`);
      }
      return;
    }
    if (action === "Download Quote") {
      setDownloading(true);
      try {
        const res = await fetch(`${BASE}/quotes/${orderId}/pdf`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to download");
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Quote-${orderId}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch {
        // silent — browser will show nothing if it fails
      } finally {
        setDownloading(false);
      }
      return;
    }
    if (action === "Download Invoice") {
      setDownloadingInvoice(true);
      try {
        const res = await fetch(`${BASE}/quotes/${orderId}/invoice`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to download");
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Invoice-${orderId}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch {
        // silent — browser will show nothing if it fails
      } finally {
        setDownloadingInvoice(false);
      }
      return;
    }
    if (action === "Re-Quote") {
      setRequoting(true);
      try {
        await reQuoteOrder(orderId, token);
        onReQuoteSuccess("Order re-quoted successfully. Your new order has been added.");
      } catch {
        onReQuoteSuccess("Failed to re-quote order. Please try again.");
      } finally {
        setRequoting(false);
      }
    }
  }

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 px-4 py-1.5 text-[13px] font-medium border rounded transition-colors duration-150 whitespace-nowrap ${
          open
            ? "border-[#3d9e5f] text-[#3d9e5f] bg-white"
            : "border-gray-300 text-gray-600 bg-white hover:border-[#3d9e5f] hover:text-[#3d9e5f]"
        }`}
      >
        Select Action
        <ChevronDown />
      </button>
      {open && (
        <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-white border border-gray-200 rounded shadow-xl z-50 min-w-44 py-1">
          {actions.map((a) => {
            const busy =
              (a === "Re-Quote"        && requoting)         ||
              (a === "Download Quote"  && downloading)       ||
              (a === "Download Invoice" && downloadingInvoice);
            const label =
              a === "Re-Quote"         && requoting          ? "Re-Quoting…"   :
              a === "Download Quote"   && downloading        ? "Downloading…"  :
              a === "Download Invoice" && downloadingInvoice ? "Downloading…"  : a;
            return (
              <li key={a}>
                <button
                  disabled={busy}
                  className="w-full text-left px-4 py-2 text-[13px] text-gray-700 hover:text-[#3d9e5f] hover:bg-gray-50 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => handleAction(a)}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Pagination({
  page,
  totalPages,
  onPage,
}: {
  page: number;
  totalPages: number;
  onPage: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1, 2, 3, 4, 5, 6, 7);
    if (totalPages > 8) pages.push("...");
    if (totalPages - 1 > 7) pages.push(totalPages - 1);
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center gap-1 mt-6 justify-start flex-wrap">
      <button
        onClick={() => onPage(page - 1)}
        disabled={page === 1}
        className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#3d9e5f] hover:text-[#3d9e5f] disabled:opacity-30 disabled:cursor-not-allowed text-[13px] transition-colors"
      >
        ‹
      </button>
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} className="w-8 h-8 flex items-center justify-center text-gray-400 text-[13px]">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPage(p as number)}
            className={`w-8 h-8 flex items-center justify-center rounded border text-[13px] font-medium transition-colors ${
              page === p
                ? "bg-[#3d9e5f] border-[#3d9e5f] text-white"
                : "border-gray-300 text-gray-600 hover:border-[#3d9e5f] hover:text-[#3d9e5f]"
            }`}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onPage(page + 1)}
        disabled={page === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-500 hover:border-[#3d9e5f] hover:text-[#3d9e5f] disabled:opacity-30 disabled:cursor-not-allowed text-[13px] transition-colors"
      >
        ›
      </button>
    </div>
  );
}

export default function MyHistoryPage() {
  const { user, hydrated } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orders, setOrders] = useState<MyOrder[]>([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [banner, setBanner] = useState<string | null>(null);

  useEffect(() => {
    if (hydrated && !user) { router.push("/login"); }
  }, [hydrated, user, router]);

  useEffect(() => {
    if (searchParams.get("emailSent") === "1") {
      setBanner("Email sent successfully.");
    }
  }, [searchParams]);

  async function load(page: number) {
    if (!user?.token) return;
    setLoading(true);
    setError(null);
    const data = await fetchMyOrders(user.token, page);
    if (!data) {
      setError("Failed to load orders. Please try again.");
    } else {
      setOrders(data.orders);
      setPagination({ page: data.pagination.page, totalPages: data.pagination.totalPages, total: data.pagination.total });
    }
    setLoading(false);
  }

  useEffect(() => {
    if (user?.token) load(1);
  }, [user?.token]);

  if (!hydrated || !user) return null;

  return (
    <main className="min-h-screen bg-[#faf9f7] py-10 px-4">
      <div className="max-w-275 mx-auto">
        <h1 className="text-[20px] font-bold text-[#292560] mb-6">Quote / Order History</h1>

        {banner && (
          <div className="flex items-center justify-between gap-3 mb-5 px-4 py-3 bg-[#f0faf5] border border-[#c8e6d4] rounded-lg text-[13px] text-[#1a6638] font-medium">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7.25" stroke="#3d9e5f" strokeWidth="1.5" />
                <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#3d9e5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {banner}
            </div>
            <button
              onClick={() => setBanner(null)}
              aria-label="Dismiss"
              className="text-[#3d9e5f] hover:text-[#2d7a4a] transition-colors leading-none text-[16px]"
            >
              ×
            </button>
          </div>
        )}

        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-[120px_130px_160px_1fr_160px] border-b border-gray-200 bg-gray-50 rounded-t-lg">
            {["Ref#", "Date", "Dispatch", "Details", ""].map((h) => (
              <div key={h} className="px-5 py-3 text-[13px] font-semibold text-[#292560]">{h}</div>
            ))}
          </div>

          {loading ? (
            <div className="py-16 text-center text-[14px] text-gray-400">Loading orders…</div>
          ) : error ? (
            <div className="py-16 text-center text-[14px] text-red-500">{error}</div>
          ) : orders.length === 0 ? (
            <div className="py-16 text-center text-[14px] text-gray-400">No orders found.</div>
          ) : (
            orders.map((order, i) => (
              <div
                key={order.id}
                className={`grid grid-cols-1 md:grid-cols-[120px_130px_160px_1fr_160px] items-center gap-y-1 px-5 py-4 border-b border-gray-100 last:border-b-0 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                {/* Ref# */}
                <div className="text-[13px] font-semibold text-[#292560]">
                  <span className="md:hidden text-gray-400 mr-1">Ref#</span>
                  {order.id}
                </div>

                {/* Date */}
                <div className="text-[13px] text-gray-600">
                  <span className="md:hidden text-gray-400 mr-1">Date:</span>
                  {formatDate(order.created)}
                </div>

                {/* Dispatch / status */}
                <div className={`text-[13px] font-medium ${statusClass(order.status)}`}>
                  <span className="md:hidden text-gray-400 mr-1">Dispatch:</span>
                  {order.status}
                </div>

                {/* Details */}
                <div className="text-[13px] text-gray-700 md:pr-4">
                  <span className="md:hidden text-gray-400 mr-1">Details:</span>
                  {order.details}
                </div>

                {/* Action */}
                <div className="flex justify-start md:justify-end">
                  <ActionDropdown
                    orderId={order.id}
                    productType={order.productType}
                    paymentStatus={order.paymentStatus}
                    token={user.token}
                    onReQuoteSuccess={(msg) => {
                      setBanner(msg);
                      load(pagination.page);
                    }}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        <Pagination
          page={pagination.page}
          totalPages={pagination.totalPages}
          onPage={(p) => load(p)}
        />
      </div>
    </main>
  );
}
