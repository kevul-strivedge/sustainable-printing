import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/layout/Footer";


export const metadata: Metadata = {
  title: {
    default: "Sustainable Printing Co.",
    template: "%s | Sustainable Printing Co.",
  },
  description: "Modern sustainable printing platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >

      <body className="min-h-screen flex flex-col">
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
