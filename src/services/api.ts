const BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api/v1';

export interface ApiPaperType {
  stockId: number;
  paperName: string;
  formatId: number;
}

export interface ApiPaperSize {
  kind: number;
  formatId: number;
  formatName: string;
  stockId: number;
  frontInkId: number;
  backInkId: number;
}

export interface ApiFinishing {
  id: number;
  productId: number;
  finishId: number;
  ordering: number;
  finishName: string;
  group: string;
  icon: string | null;
}

export interface ApiInk {
  frontInkId?: number;
  backInkId?: number;
  inkName: string;
  formatId: number;
  stockId: number;
}

export interface ApiFinishPrice {
  finishId: number;
  quantity: number;
  price: number;
}

export interface ApiPricingRow {
  kind: number;
  quantity: number;
  formatId: number;
  stockId: number;
  price: number;
}

export interface ApiConfiguratorConfig {
  paper_type: ApiPaperType[];
  paper_size: ApiPaperSize[];
  front: ApiInk[];
  back: ApiInk[];
  finishing: ApiFinishing[];
  finish_prices: ApiFinishPrice[];
  quantity: { kind: number; formatId: number; stockId: number; frontInkId: number; backInkId: number }[];
  design_options: { kind: number }[];
  quantity_options: { quantity: number }[];
  pricing_table: ApiPricingRow[];
}

export interface ApiPricingRow {
  id: number;
  productId: number;
  kind: number;
  quantity: number;
  isUpdate: number;
  formatId: number;
  stockId: number;
  frontInkId: number;
  backInkId: number;
  estimatedWeight: number;
  printtogetherPrice: number;
  printerPrice: number;
  designBasicPrice: number;
  designFaceliftPrice: number;
  designCreativePrice: number;
  printingType: string;
  finis_price: number;
  weight_price: number;
}

export interface ArtworkUploadResult {
  success: boolean;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  message?: string;
}

async function apiFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${BASE}${path}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const json = await res.json();
    return (json.data as T) ?? null;
  } catch {
    return null;
  }
}

export interface QuoteSubmitPayload {
  productDbId?: number;
  kind: number;
  quantity: number;
  formatLabel: string;
  stockLabel: string;
  printingType: string;
  extrasLabel: string;
  printingPrice: number;
  deliveryPrice: number;
  paymentAmount: number;
  artworkMethod: string;
  artworkFileUrl: string;
  artworkFileName: string;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  phone: string;
  email: string;
  paymentMethod: string;
}

export async function submitQuote(payload: QuoteSubmitPayload): Promise<{ success: boolean; quoteId: number }> {
  const res = await fetch(`${BASE}/quotes/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message ?? 'Failed to submit order. Please try again.');
  }
  return json;
}

export async function uploadArtwork(file: File): Promise<ArtworkUploadResult> {
  const form = new FormData();
  form.append('file', file);
  const res = await fetch(`${BASE}/artwork/upload`, { method: 'POST', body: form });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message ?? 'Upload failed. Please try again.');
  }
  return json as ArtworkUploadResult;
}

// ─── Auth ────────────────────────────────────────────────────────────────────

export interface AuthUser {
  token: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
}

export async function loginUser(payload: { email: string; password: string }): Promise<AuthUser> {
  const res = await fetch(`${BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.message ?? 'Login failed. Please try again.');
  return json.data as AuthUser;
}

export async function registerUser(payload: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}): Promise<void> {
  const res = await fetch(`${BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.message ?? 'Registration failed. Please try again.');
}

// ─── Products ────────────────────────────────────────────────────────────────

export function getProductConfig(productId: number) {
  return apiFetch<ApiConfiguratorConfig>(`/configurator/${productId}/config`);
}

export function getProductPrice(
  productId: number,
  params: { format_id: number; stock_id: number; front_ink_id: number; back_ink_id: number; kind?: number }
) {
  const qs = new URLSearchParams(
    Object.entries(params).map(([k, v]) => [k, String(v)])
  ).toString();
  return apiFetch<ApiPricingRow[]>(`/configurator/${productId}/price?${qs}`);
}
