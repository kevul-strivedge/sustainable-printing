import Image from "next/image";
import PageHeader from "../ui/PageHeader";
import greenPowerLogo from "@/public/images/green-power-logo.png";

export default function GreenEnergy() {
  return (
    <>
      <PageHeader title="Benefits of using Green Power" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 sm:py-16 py-10 space-y-6">
        {/* GreenPower Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src={greenPowerLogo}
            alt="GreenPower Accredited Renewable Energy"
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-[#292560] text-base leading-6">
            To power our factory and printing presses, we utilise The
            GreenPower. This enables our business to displace our electricity
            usage with certified renewable energy, which is then added to the
            grid on our behalf.
          </p>
          <p className="text-[#292560] text-base leading-6">
            Our usage of GreenPower contributes to the decrease in greenhouse
            gas emissions that are associated with traditional electricity
            generation. Our commitment to using GreenPower contributes to the
            investment in accredited, renewable energy generators which generate
            electricity from sources like wind, solar, water and bioenergy.
          </p>
          <p className="text-[#292560] text-base leading-6">
            We believe this helps contribute to supporting renewable energy
            initiatives in Australia.
          </p>
          <p className="text-[#292560] text-base leading-6 pb-5">
            Because we utilise GreenPower, Sustainable Printing Co reduces our
            impact on the environment as the energy we purchase has no net
            greenhouse gas emissions.
          </p>
        </div>
      </div>
    </>
  );
}
