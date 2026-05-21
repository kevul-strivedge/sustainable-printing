import { PageLoader } from "@/src/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PageLoader label="Loading product…" />
    </div>
  );
}
