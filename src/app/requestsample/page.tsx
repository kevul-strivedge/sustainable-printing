import FreeSamplePack from "@/src/components/pages/FreeSamplePack"
import { pageMetadata } from "@/src/constants/seoMeta";

export const metadata = pageMetadata("requestsample");

const page = () => {
  return (
    <>
      <FreeSamplePack />
    </>
  )
}

export default page