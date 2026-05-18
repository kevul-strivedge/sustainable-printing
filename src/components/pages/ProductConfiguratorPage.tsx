"use client";

import { useState } from "react";
import { ProductConfiguratorData } from "@/src/types/configurator.types";
import { useConfigurator } from "@/src/hooks/useConfigurator";
import { submitQuote } from "@/src/services/api";

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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [quoteId, setQuoteId] = useState<number | null>(null);

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError("");
    try {
      const sizeLabel = config.sizes.find((s) => s.id === state.sizeId)?.label ?? state.sizeId;
      const paperLabel = config.papers.find((p) => p.id === state.paperId)?.label ?? state.paperId;
      const extrasLabel = state.selectedExtras
        .map((id) => config.extras.find((e) => e.id === id)?.label ?? id)
        .join(", ");

      const result = await submitQuote({
        productDbId: config.dbId,
        kind: state.numDesigns,
        quantity: state.quantityPerDesign,
        formatLabel: sizeLabel,
        stockLabel: paperLabel,
        printingType: state.printingTypeId,
        extrasLabel,
        printingPrice: priceBreakdown.subtotal,
        deliveryPrice: priceBreakdown.delivery,
        paymentAmount: priceBreakdown.total,
        artworkMethod: state.artworkMethod,
        artworkFileUrl: state.artworkFileUrl,
        artworkFileName: state.artworkFileName,
        firstName: state.deliveryFirstName,
        lastName: state.deliveryLastName,
        company: state.deliveryCompany,
        address: state.deliveryStreet,
        suburb: state.deliverySuburb,
        state: state.deliveryState,
        postcode: state.deliveryPostcode,
        phone: state.deliveryPhone,
        email: state.deliveryEmail,
        paymentMethod: state.paymentMethodId,
      });
      setQuoteId(result.quoteId);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to submit order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (quoteId) {
    return (
      <div className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M6 16l7 7L26 9" stroke="#3d9e5f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-[26px] font-bold text-[#292560] mb-3">Order Placed!</h1>
        <p className="text-[15px] text-gray-600 mb-2">
          Your order reference is <span className="font-bold text-[#292560]">#{quoteId}</span>.
        </p>
        <p className="text-[14px] text-gray-500 mb-8">
          We&apos;ll send a confirmation to <span className="font-semibold">{state.deliveryEmail}</span>. Our team will be in touch once your artwork is reviewed.
        </p>
        <a
          href="/products"
          className="inline-block px-8 py-3 bg-[#004E24] text-white text-[14px] font-semibold rounded-lg hover:bg-[#003a1b] transition-colors"
        >
          Back to Products
        </a>
      </div>
    );
  }

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

                {config.papers.length > 0 && (
                  <PaperSelector state={state} dispatch={dispatch} papers={config.papers} />
                )}

                {config.sizes.length > 0 && (
                  <SizeSelector state={state} dispatch={dispatch} sizes={config.sizes} />
                )}

                {config.printingTypes.length > 0 && (
                  <PrintingTypeSelector
                    state={state}
                    dispatch={dispatch}
                    printingTypes={config.printingTypes}
                  />
                )}

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
                <PaymentStep
                  state={state}
                  dispatch={dispatch}
                  config={config}
                  priceBreakdown={priceBreakdown}
                  onSubmit={handleSubmit}
                  submitting={submitting}
                  submitError={submitError}
                />
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
