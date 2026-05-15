"use client";

import { ProductConfiguratorData } from "@/src/types/configurator.types";
import { useConfigurator } from "@/src/hooks/useConfigurator";

import ProductPageHeader from "@/src/components/configurator/ProductPageHeader";
import StepProgressBar from "@/src/components/configurator/StepProgressBar";
import OrderSummary from "@/src/components/configurator/summary/OrderSummary";
import PaperSelector from "@/src/components/configurator/form/PaperSelector";
import SizeSelector from "@/src/components/configurator/form/SizeSelector";
import PrintingTypeSelector from "@/src/components/configurator/form/PrintingTypeSelector";
import ExtrasSelector from "@/src/components/configurator/form/ExtrasSelector";
import StepFooter from "@/src/components/configurator/form/StepFooter";
import ArtworkStep from "@/src/components/configurator/artwork/ArtworkStep";
import DeliveryStep from "@/src/components/configurator/delivery/DeliveryStep";
import PaymentStep from "@/src/components/configurator/payment/PaymentStep";
import ProductDescription from "@/src/components/configurator/ProductDescription";
import FAQAccordion from "@/src/components/configurator/FAQAccordion";
import RelatedProductsSection from "@/src/components/configurator/RelatedProductsSection";
import BannerComponent from "@/src/components/pages/BannerComponent";
import QuantitySelector from "../configurator/form/QuantitySelector";

interface Props {
  config: ProductConfiguratorData;
}

export default function ProductConfiguratorPage({ config }: Props) {
  const { state, dispatch, priceBreakdown } = useConfigurator(config);

  return (
    <>
      <div className="max-w-[1100px] mx-auto px-6 py-10">
        {/* Header */}
        <ProductPageHeader title={config.title} subtitle={config.subtitle} />

        {/* Step progress bar */}
        <StepProgressBar currentStep={state.currentStep} />

        {/* Two-column configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">

          {/* LEFT — step-dependent form + description */}
          <div className="flex flex-col gap-0">
            {state.currentStep === 1 && (
              <div className="border border-gray-200 rounded bg-white p-6 flex flex-col gap-7">
                <QuantitySelector
                  state={state}
                  dispatch={dispatch}
                  designOptions={config.designOptions}
                  quantityOptions={config.quantityOptions}
                />

                <PaperSelector state={state} dispatch={dispatch} papers={config.papers} />

                <SizeSelector state={state} dispatch={dispatch} sizes={config.sizes} />

                <PrintingTypeSelector
                  state={state}
                  dispatch={dispatch}
                  printingTypes={config.printingTypes}
                />

                <ExtrasSelector state={state} dispatch={dispatch} extras={config.extras} />

                <StepFooter priceBreakdown={priceBreakdown} state={state} dispatch={dispatch} />
              </div>
            )}

            {state.currentStep === 2 && (
              <div className="border border-gray-200 rounded bg-white p-6">
                <ArtworkStep state={state} dispatch={dispatch} config={config} />
              </div>
            )}

            {state.currentStep === 3 && (
              <div className="border border-gray-200 rounded bg-white p-6">
                <DeliveryStep state={state} dispatch={dispatch} config={config} />
              </div>
            )}

            {state.currentStep === 4 && (
              <div className="border border-gray-200 rounded bg-white p-6">
                <PaymentStep state={state} dispatch={dispatch} config={config} priceBreakdown={priceBreakdown} />

              </div>
            )}

            <ProductDescription
              title={config.descriptionTitle ?? `Premium ${config.title}`}
              description={config.description}
              features={config.features}
              aboutParagraphs={config.aboutParagraphs}
            />
          </div>

          {/* RIGHT — Order summary */}
          <OrderSummary
            state={state}
            dispatch={dispatch}
            priceBreakdown={priceBreakdown}
            config={config}
          />
        </div>

        <FAQAccordion faqs={config.faqs} />

        <RelatedProductsSection relatedSlugs={config.relatedProductSlugs} />
      </div>

      {/* Bottom CTA banner */}
      <BannerComponent
        image="/images/bannerImage2.png"
        heading="Want to see your options?"
        className="h-[300px]"
        buttons={[{ label: "Order a Sample Pack", href: "/sample-pack", variant: "primary" }]}
      />
    </>
  );
}
