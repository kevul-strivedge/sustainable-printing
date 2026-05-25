import type { Metadata } from "next";
import ProductPage, { generateMetadata as productGenerateMetadata } from "../[slug]/page";
import BooksLandingPage from "@/src/components/pages/BooksLandingPage";
import { pageMetadata } from "@/src/constants/seoMeta";

// /books is DUAL-PURPOSE:
//
// 1. Plain visits (`/books`) → render the books CATEGORY LANDING page
//    (mirrors https://www.sustainableprintingco.com.au/books). All five
//    "Books" navbar items (Books, Booklets, Reports, Calendars, Annual Reports)
//    deep-link here.
//
// 2. Query-param requests (`/books?variant=29`, `/books?quoteId=…&startStep=4`)
//    → render the existing books CONFIGURATOR. Required because:
//      a. The next.config rewrites map /a4-self-cover-booklets etc. to
//         /books?variant=NN — those URLs must still load a configurator.
//      b. "Order Now" / "Pay Now" from /my-history pushes /books?startStep=4&quoteId=…
//         for resumption of an existing book order.

type Props = {
  params: Promise<Record<string, string>>;
  searchParams: Promise<{ startStep?: string; quoteId?: string; variant?: string; seo?: string }>;
};

function isConfiguratorRequest(sp: Awaited<Props["searchParams"]>) {
  // variant / quoteId / startStep ⇒ configurator. `?seo=` alone is a Laravel
  // category-URL rewrite (e.g. /booklet-report) — still landing page, just with
  // a different meta entry.
  return Boolean(sp.variant || sp.quoteId || sp.startStep);
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const sp = await searchParams;
  if (isConfiguratorRequest(sp)) {
    return productGenerateMetadata({
      params: Promise.resolve({ slug: "books" }),
      searchParams: Promise.resolve(sp),
    });
  }
  // Landing page — use the seo param if a Laravel category URL was rewritten
  // here (e.g. /booklet-report → /books?seo=booklet-report); otherwise the
  // /books entry from meta.xlsx.
  return pageMetadata(sp.seo || "books");
}

export default async function BooksPage({ searchParams }: Props) {
  const sp = await searchParams;
  if (isConfiguratorRequest(sp)) {
    return (
      <ProductPage
        params={Promise.resolve({ slug: "books" })}
        searchParams={Promise.resolve(sp)}
      />
    );
  }
  return <BooksLandingPage />;
}
