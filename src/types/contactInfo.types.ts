// types/contactInfo.types.ts

import { LucideIcon } from "lucide-react";

export interface ContactInfoItemType {
  icon: LucideIcon;
  label: string;
  value: string | string[];
  href?: string;
}

export interface ContactInfoStripProps {
  items?: ContactInfoItemType[];
  className?: string;
}
