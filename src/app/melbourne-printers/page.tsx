import MelbournePrinters from "@/src/components/pages/MelbournePrinters";
import { pageMetadata } from "@/src/constants/seoMeta";
import React from "react";

export const metadata = pageMetadata('melbourne-printers');
const page = () => {
  return (
    <>
      <MelbournePrinters />
    </>
  );
};

export default page;
