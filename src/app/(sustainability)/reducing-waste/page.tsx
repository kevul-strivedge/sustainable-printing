import ReducingWaste from "@/src/components/pages/ReducingWaste"
import { pageMetadata } from "@/src/constants/seoMeta";

export const metadata = pageMetadata("reducing-waste");

const page = () => {
  return (
   <>
    <ReducingWaste />
   </>
  )
}

export default page
