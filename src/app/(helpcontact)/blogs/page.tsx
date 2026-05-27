import Blog from "@/src/components/pages/Blog";
import { pageMetadata } from "@/src/constants/seoMeta";

export const metadata = pageMetadata('blogs');

const page = () => {
  return (
    <>
      <Blog />
    </>
  );
};

export default page;
