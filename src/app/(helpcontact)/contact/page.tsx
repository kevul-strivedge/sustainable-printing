import ContactUs from "@/src/components/pages/ContactUs";
import { pageMetadata } from "@/src/constants/seoMeta";

export const metadata = pageMetadata("contact");

const page = () => {
  return (
    <>
      <ContactUs />
    </>
  );
};

export default page;
