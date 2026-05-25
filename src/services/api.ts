const BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api/v1';

export interface ApiPaperType {
  stockId: number;
  paperName: string;
  formatId: number;
  productId?: number;
}

export interface ApiPortfolio {
  productId: number;
  title: string | null;
  title2: string | null;
  description: string | null;
  description1: string | null;
  description2: string | null;
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
  /** pt_finish_prices.id — keeps insertion order for Laravel's first-appearance
      tier lookup (later rows overwrite earlier ones). */
  id?: number;
}

export interface ApiConfigPricingTableRow {
  kind: number;
  quantity: number;
  formatId: number;
  stockId: number;
  productId?: number;
  price: number;
  estimatedWeight?: number;
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
  pricing_table: ApiConfigPricingTableRow[];
  portfolios?: ApiPortfolio[];
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
  splits?: { numDesigns: number; qty: number; price: number }[];
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

export async function submitQuote(payload: QuoteSubmitPayload, token?: string): Promise<{ success: boolean; quoteId: number }> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${BASE}/quotes/submit`, {
    method: 'POST',
    headers,
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

// ─── Orders ──────────────────────────────────────────────────────────────────

export interface OrderDetail {
  id: number;
  quantity: number;
  kind: number;
  format: string;
  stock: string;
  ink: string;
  finish: string;
  printingPrice: number;
  deliveryPrice: number;
  paymentAmount: number;
  paymentMethod: string;
  paymentStatus: string;
  created: string;
  artworkUrl: string | null;
  deliveryDetails?: string | null;
  summary?: string | null;
  member: {
    firstName: string;
    lastName: string;
    email: string;
    businessname: string;
    address: string;
    suburb: string;
    state: string;
    postcode: string;
    phone: string;
  } | null;
}

export async function fetchOrderById(quoteId: number): Promise<OrderDetail | null> {
  try {
    const res = await fetch(`${BASE}/quotes/${quoteId}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data as OrderDetail ?? null;
  } catch {
    return null;
  }
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

// ─── Products ────────────────────────────────────────────────────────────────

export function getProductConfig(productId: number, siblingDbIds?: number[]) {
  const qs = siblingDbIds && siblingDbIds.length > 0
    ? `?siblings=${siblingDbIds.join(',')}`
    : '';
  return apiFetch<ApiConfiguratorConfig>(`/configurator/${productId}/config${qs}`);
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

export async function sendQuoteEmail(
  quoteId: number,
  payload: { subject: string; message: string },
  token: string
): Promise<void> {
  const res = await fetch(`${BASE}/quotes/${quoteId}/send-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.message ?? 'Failed to send email.');
}

export async function processPayment(
  quoteId: number,
  card: { cardNumber: string; cardType: string; cvv: string; expiryMonth: string; expiryYear: string; cardOwner: string },
  token?: string
): Promise<void> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(`${BASE}/payments/${quoteId}/pay`, {
    method: 'POST',
    headers,
    body: JSON.stringify(card),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message ?? 'Payment declined. Please check your card details and try again.');
  }
}

export async function reQuoteOrder(quoteId: number, token: string): Promise<{ quoteId: number }> {
  const res = await fetch(`${BASE}/quotes/${quoteId}/requote`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.message ?? 'Failed to re-quote order.');
  return json.data as { quoteId: number };
}

export async function attachArtworkToQuote(
  quoteId: number,
  payload: { artworkFileUrl: string; artworkFileName: string },
  token: string
): Promise<void> {
  const res = await fetch(`${BASE}/quotes/${quoteId}/artwork`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.message ?? 'Failed to attach artwork.');
}

// ─── Delivery ────────────────────────────────────────────────────────────────

export async function fetchDeliveryPrice(postcode: string, weight: number): Promise<number> {
  const res = await fetch(
    `${BASE}/delivery/price?postcode=${encodeURIComponent(postcode)}&weight=${encodeURIComponent(weight)}`,
    { cache: 'no-store' }
  );
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.message ?? 'Postcode not found');
  return json.data.deliveryPrice as number;
}

// ─── My Orders ───────────────────────────────────────────────────────────────

export interface MyOrder {
  id: number;
  created: string;
  status: string;
  quantity: number;
  details: string;
  productType: number | null;
  paymentAmount: number;
  paymentStatus: string;
}

export interface MyOrdersResponse {
  orders: MyOrder[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
}

// ─── Sample Pack ─────────────────────────────────────────────────────────────

export interface SamplePackPayload {
  businessName?: string;
  firstName: string;
  surname: string;
  email: string;
  address: string;
  phone: string;
  townCity: string;
  state: string;
  postcode: string;
  sampleOf?: string;
}

export async function submitSamplePack(payload: SamplePackPayload): Promise<void> {
  const res = await fetch(`${BASE}/sample-pack`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message ?? 'Failed to send your request. Please try again.');
  }
}

// ─── Custom Quote ─────────────────────────────────────────────────────────────

export async function submitCustomQuote(formData: FormData): Promise<void> {
  const res = await fetch(`${BASE}/custom-quotes`, {
    method: 'POST',
    body: formData,
  });
  const json = await res.json();
  if (!res.ok || !json.success) {
    throw new Error(json.message ?? 'Failed to send your request. Please try again.');
  }
}

// ─── Profile ──────────────────────────────────────────────────────────────────

export interface LookupOption {
  id: number;
  name: string;
}

export interface ProfileData {
  id: number;
  firstName: string;
  lastName: string;
  businessname: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  email: string;
  website: string;
  phone: string;
  mobile: string;
  businessTypeId: number | null;
  heardFromId: number | null;
  businessTypes: LookupOption[];
  heardFromList: LookupOption[];
}

export interface ProfileUpdatePayload {
  firstName: string;
  lastName: string;
  businessname: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  website: string;
  phone: string;
  mobile: string;
  businessTypeId: number | null;
  heardFromId: number | null;
}

export async function fetchProfile(token: string): Promise<ProfileData> {
  const res = await fetch(`${BASE}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.message ?? 'Failed to fetch profile');
  return json.data as ProfileData;
}

export async function updateProfile(payload: ProfileUpdatePayload, token: string): Promise<void> {
  const res = await fetch(`${BASE}/auth/me`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  if (!res.ok || !json.success) throw new Error(json.message ?? 'Failed to update profile');
}

export async function fetchMyOrders(token: string, page = 1): Promise<MyOrdersResponse | null> {
  try {
    const res = await fetch(`${BASE}/quotes/my-orders?page=${page}&limit=5`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const json = await res.json();
    return (json.data as MyOrdersResponse) ?? null;
  } catch {
    return null;
  }
}
