// types/blog.types.ts

export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
      boldWords?: { word: string; href?: string }[];
    }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "accordion";
      items: {
        title: string;
        content: string;
        boldWords?: { word: string; href?: string }[];
      }[];
    }
  | {
      type: "richList";
      items: {
        label: string;
        linkText: string;
        href: string;
        boldLabel?: boolean;
        description?: string;
        boldLink?: boolean;

        paragraphs?: {
          text: string;

          boldWords?: {
            word: string;
            href?: string;
          }[];
        }[];
      }[];
      ordered?: boolean;
    }
  | { type: "link"; text: string; href: string };

export interface BlogPost {
  slug: string;
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  content: BlogContentBlock[];
}
