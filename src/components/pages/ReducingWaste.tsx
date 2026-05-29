import PageHeader from "../ui/PageHeader";

export default function ReducingWaste() {
  return (
    <>
      <PageHeader title="Reducing Environmental Waste" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 sm:py-16 py-8 space-y-12">
        <div className="space-y-4 pt-3">
          <p className="text-[#292560] text-base leading-6">
            At Sustainable Printing Co, we operate under what we call a
            &apos;Lean-Green Manufacturing&apos; processes. This has involved us
            investing into modern, state of the art printing presses and
            finishing equipment that minimises waste and maximises efficiency.
          </p>

          {/* Bullet list */}
          <ul className="list-disc list-outside space-y-2 text-[#000000] text-base leading-6 px-10">
            {" "}
            <li>100% of all paper waste is recycled on a weekly basis</li>
            <li>100% of all printing plates are recycled</li>
            <li>
              We use 100% recycled papers, some of which are manufactured carbon
              neutral
            </li>
            <li>
              Digitally imaged printing plates are developed in our chemical
              free processor which uses only non-toxic processing fluids
            </li>
            <li>
              Computerised press controls deliver accurate colour fast,
              minimising make ready waste and allowing us to tightly monitor
              quality and consistency throughout print runs
            </li>
            <li>
              We invested in a new Heidelberg Anicolour printing press that saw
              a reduction in set-up paper wastage by 90%!
            </li>
            <li>
              Dry toner digital print capabilities for short-run jobs allow us
              to print only the quantity needed
            </li>
            <li>
              Computerised bindery equipment reduces waste and minimizes errors
            </li>
          </ul>

          <h4 className="text-[#292560] text-xl leading-6 font-medium pt-4">
            We take genuine interest and care in reducing our printing&apos;s
            environmental footprint.
          </h4>
          <h4 className="text-[#292560] text-xl leading-6 font-medium pb-4">
            We do all this while also working hard to offer cost effective
            printing.
          </h4>
        </div>
      </div>
    </>
  );
}
