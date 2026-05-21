interface Props {
  title: string;
  subtitle: string;
}

export default function ProductPageHeader({ title, subtitle }: Props) {
  return (
    <div className="mb-4">
      <h1 className="text-[28px] sm:text-[32px] font-bold text-[#292560] leading-tight mb-1">{title}</h1>
      <p className="text-[14px] text-[#676C80] font-semibold">{subtitle}</p>
    </div>
  );
}
