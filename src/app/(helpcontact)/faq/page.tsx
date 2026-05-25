import FaqPage from "@/src/components/pages/FaqItem";
import { pageMetadata } from "@/src/constants/seoMeta";

export const metadata = pageMetadata("faq");

const page = () => {
  return (
    <>
      <FaqPage />
    </>
  );
};

export default page;
