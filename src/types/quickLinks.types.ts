// types/quickLinks.types.ts

export interface QuickLinkItemType {
  label: string;
  href: string;
}

export interface QuickLinkCategoryType {
  category: string;
  links: QuickLinkItemType[];
}

export interface QuickLinksProps {
  items?: QuickLinkCategoryType[];
  className?: string;
   title?: string;
}