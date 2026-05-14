// components/ui/PageHeader.tsx

import React from "react";

interface PageHeaderProps {
  title: string;
  className?: string;
  titleClassName?: string;
}

const PageHeader = ({ title, className, titleClassName }: PageHeaderProps) => {
  return (
    <section
      className={`w-full sm:py-20 py-12 flex items-center justify-center bg-cover bg-center ${className || ""}`}
      style={{ backgroundImage: "url('/images/page-header-img.png')" }}
    >
      <h1
        className={`text-white font-bold text-center px-4 sm:text-5xl text-[32px] leading-tight ${titleClassName || ""}`}
      >
        {title}
      </h1>
    </section>
  );
};

export default PageHeader;
