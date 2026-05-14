export interface trustedBy {
  name: string;
  src: string;
  /** Tailwind max-width class applied to the <img> wrapper */
  maxW?: string;
  /** Override height (px) so every logo reads at the right optical size */
  height?: number;
}