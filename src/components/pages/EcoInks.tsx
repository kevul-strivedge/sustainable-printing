import PageHeader from "../ui/PageHeader";

export default function EcoInks() {
  return (
    <>
      <PageHeader
        title="Environmentally friendly inks and toner - Eco Friendly Printing"
        titleClassName="text-3xl max-w-6xl"
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 sm:py-16 py-8 space-y-12">
        {/* Vegetable Based Inks */}
        <div className="space-y-4 pt-6">
          <h2 className="text-[#292560] text-2xl font-semibold">
            Vegetable Based Inks
          </h2>
          <p className="text-[#292560] text-base leading-6">
            Vegetable based inks are used in our offset printing and are the
            eco-friendlier alternative to petroleum based inks. Our soy and
            vegetable products are used in our inks for their oils, which act as
            the vehicle for the ink pigments.
          </p>
          <p className="text-[#292560] text-base leading-6">
            Made from the extracts of corn, walnut, coconut, linseed, canola and
            soy bean, the oils and extracts are often blended in order to
            utilise the key characteristics of each oil for best printing
            results.
          </p>
          <p className="text-[#292560] text-base leading-6">
            Vegetable based inks are a renewable resource and do not require
            harmful solvents/chemicals for cleaning the printing presses.
            Vegetable based inks are easier to de-ink as opposed to
            petroleum-based inks in the recycling process.
          </p>
          <p className="text-[#292560] text-base leading-6">
            Soy and vegetable-based inks are widely recognized as the
            environmentally friendly choice. At Sustainable Printing Co, we also
            implement a recycle and reuse program in our factory that see&apos;s
            100% of all paper offcuts and printing plate either reused or
            recycled. This is another initiative our print staff drive to steer
            materials away from landfill and promote a circular business/economy
            where waste is reused and recycled. We also reuse unused inks for
            future jobs.
          </p>
          <p className="text-[#292560] text-xl leading-6 font-bold">
            Sustainable Printing Co uses vegetable based inks for its offset
            printing.
          </p>
        </div>

        {/* Digital Printing Toner */}
        <div className="space-y-4 py-6">
          <h2 className="text-[#292560] text-2xl font-semibold">
            Digital Printing Toner
          </h2>
          <p className="text-[#292560] text-base leading-6">
            Digital printing differs from traditional offset printing because
            digital printing machines do not require printing plates. Our
            digital printing is regarded as environmentally friendly and use dry
            toner which is non-toxic and can easily be de-inked in recycling
            processes.
          </p>
          <p className="text-[#292560] text-base leading-6">
            The dry toner we use is supplied in cartridges which are collected
            from our supplier on a weekly basis once used and then recycled.
          </p>
          <p className="text-[#292560] text-base leading-6">
            Digital production print technology is evolving quickly, and digital
            printing output quality is improving continuously. These
            advancements are delivering print quality that mimics offset.
            Digital printing enables additional advantages, including:
          </p>

          {/* Bullet list */}
          <ul className="list-disc list-inside space-y-2 text-black text-base leading-6 pl-4">
            <li>
              Personalised, variable data printing (Think individual names on
              invitations)
            </li>
            <li>Print-on-demand</li>
            <li>Cost-effective short runs</li>
            <li>Fast turnarounds</li>
          </ul>
        </div>
      </div>
    </>
  );
}
