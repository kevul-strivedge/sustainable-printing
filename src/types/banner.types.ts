export interface BannerButton {
  label: string;
  href?: string;
  variant?: "primary" | "outline";
}

export interface BannerProps {
  image: string;
  heading: string;
  headingColor?: string;
  buttons?: BannerButton[];
  className?: string;
  contentClassName?: string;
  headingFont?:string;
}
