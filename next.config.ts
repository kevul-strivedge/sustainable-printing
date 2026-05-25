import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sustainableprintingco.com.au",
        pathname: "/images/**",
      },
    ],
  },
  output: 'standalone',

  // ── URL parity with the old Laravel site ──────────────────────────────────────
  // Each Laravel URL (e.g. /uncoated-business-cards) is preserved in the URL bar
  // while internally routed to our existing /[slug] page with the right variant
  // pre-selected. SEO metadata is resolved per Laravel URL in [slug]/generateMetadata
  // via either the `?variant=` (variant URLs) or `?seo=` (category URLs) param.
  async rewrites() {
    return [
      // Variant deep-links — Laravel "one product = one URL" pattern → our slug + ?variant=
      { source: '/uncoated-business-cards',       destination: '/business-cards?variant=15' },
      { source: '/brown-kraft-business-cards',    destination: '/business-cards?variant=17' },
      { source: '/premium-postcards',             destination: '/postcards?variant=18' },
      { source: '/kraft-postcards',               destination: '/postcards?variant=19' },
      { source: '/standard-a6-gift-cards',        destination: '/greeting-cards?variant=20' },
      { source: '/square-gift-cards',             destination: '/greeting-cards?variant=22' },
      { source: '/premium-swing-tags',            destination: '/swing-tags?variant=23' },
      { source: '/kraft-swing-tags',              destination: '/swing-tags?variant=24' },
      { source: '/folded-a6-christmas-cards',     destination: '/christmas-cards?variant=43' },
      { source: '/folded-square-christmas-cards', destination: '/christmas-cards?variant=44' },
      { source: '/a4-self-cover-booklets',        destination: '/books?variant=29' },
      { source: '/a4-plus-cover-booklets',        destination: '/books?variant=30' },
      { source: '/a5-self-cover-booklets',        destination: '/books?variant=31' },
      { source: '/a5-plus-cover-booklets',        destination: '/books?variant=33' },

      // Slug aliases — same product, different URL on Laravel. The `?seo=<laravel-slug>`
      // tells generateMetadata which Laravel meta entry to emit, so e.g. /brochures and
      // /brochures-printing get DIFFERENT title/description even though both hit /brochures.
      { source: '/circle-adhesive-labels',        destination: '/circle-stickers?seo=circle-adhesive-labels' },
      { source: '/a2-wrapping-paper',             destination: '/wrapping-paper?seo=a2-wrapping-paper' },
      { source: '/flyers-printing',               destination: '/flyers?seo=flyers-printing' },
      { source: '/posters-printing',              destination: '/posters?seo=posters-printing' },
      { source: '/letterhead-printing',           destination: '/letterhead?seo=letterhead-printing' },
      { source: '/brochures-printing',            destination: '/brochures?seo=brochures-printing' },
      { source: '/bookmarks-printing',            destination: '/bookmarks?seo=bookmarks-printing' },
      { source: '/thank-you-card-printing',       destination: '/thank-you-cards?seo=thank-you-card-printing' },
      { source: '/calenders',                     destination: '/calendars?seo=calenders' },

      // Category landing URLs (Laravel) → our equivalent product page, with the
      // category's own SEO meta (not the destination's).
      { source: '/gift-cards',                    destination: '/greeting-cards?seo=gift-cards' },
      { source: '/label-stickers',                destination: '/circle-stickers?seo=label-stickers' },
      { source: '/booklet-report',                destination: '/books?seo=booklet-report' },
      { source: '/flyer-poster',                  destination: '/flyers?seo=flyer-poster' },
      { source: '/stationary',                    destination: '/letterhead?seo=stationary' },
    ];
  },
};

export default nextConfig;
