import CustomQuote from "@/src/components/pages/CustomQuote"
import { pageMetadata } from "@/src/constants/seoMeta";

export const metadata = pageMetadata("custom-quote");

const page = () => {
  return (
    <>
      <CustomQuote />
    </>
  )
}

export default page