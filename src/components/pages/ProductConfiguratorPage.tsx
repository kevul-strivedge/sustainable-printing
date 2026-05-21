"use client";

import { useState } from "react";
import { ProductConfiguratorData } from "@/src/types/configurator.types";
import { useConfigurator } from "@/src/hooks/useConfigurator";
import { submitQuote, processPayment } from "@/src/services/api";
import type { CardDetails } from "@/src/components/configurator/payment/PaymentCardForm";
import { useAuth } from "@/src/context/AuthContext";
import type { InitialDelivery, InitialArtwork, InitialOrder } from "@/src/types/configurator.types";

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
import OrderConfirmationPage from "@/src/components/pages/OrderConfirmationPage";

interface Props {
  config: ProductConfiguratorData;
  initialStep?: number;
  initialDelivery?: InitialDelivery;
  initialArtwork?: InitialArtwork;
  initialOrder?: InitialOrder;
}

export default function ProductConfiguratorPage({ config, initialStep, initialDelivery, initialArtwork, initialOrder }: Props) {
  const { state, dispatch, priceBreakdown, splitBreakdowns } = useConfigurator(config, initialStep, initialDelivery, initialArtwork, initialOrder);
  const { user } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [quoteId, setQuoteId] = useState<number | null>(null);

  async function handleSubmit(cardDetails?: CardDetails) {
    setSubmitting(true);
    setSubmitError("");
    try {
      const sizeLabel = config.sizes.find((s) => s.id === state.sizeId)?.label ?? state.sizeId;
      const paperLabel = config.papers.find((p) => p.id === state.paperId)?.label ?? state.paperId;

      // Extras section shows "Trim straight edges" as the synthetic default (no extra stored).
      // If the section is visible but nothing was toggled, explicitly record the default.
      const hasExtrasSection = config.extras.some(
        (e) => !e.label.toLowerCase().includes("straight")
      );
      const extrasLabel =
        state.selectedExtras.length > 0
          ? state.selectedExtras
              .map((id) => config.extras.find((e) => e.id === id)?.label ?? id)
              .join(", ")
          : hasExtrasSection
          ? "Trim straight edges"
          : "";

      console.log('[Submit] qty:', state.quantityPerDesign, '| numDesigns:', state.numDesigns, '| paperId:', state.paperId, '| sizeId:', state.sizeId);
      console.log('[Submit] subtotal:', priceBreakdown.subtotal, '| delivery:', priceBreakdown.delivery, '| total:', priceBreakdown.total);

      const result = await submitQuote({
        productDbId: config.dbId,
        kind: state.numDesigns,
        quantity: state.quantityPerDesign,
        splits: splitBreakdowns.map((s) => ({ numDesigns: s.numDesigns, qty: s.qty, price: s.subtotal })),
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
      }, user?.token);

      // Process credit card payment if card details were provided
      if (cardDetails) {
        const [expiryMonth, expiryYear] = cardDetails.expiry.split('/');
        await processPayment(result.quoteId, {
          cardNumber: cardDetails.cardNumber.replace(/\s/g, ''),
          cardType:   cardDetails.cardType,
          cvv:        cardDetails.cvv,
          expiryMonth: expiryMonth ?? '',
          expiryYear:  expiryYear  ? `20${expiryYear}` : '',
          cardOwner:  cardDetails.cardOwner,
        }, user?.token);
      }

      setQuoteId(result.quoteId);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to submit order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (quoteId) {
    return (
      <OrderConfirmationPage
        quoteId={quoteId}
        state={state}
        config={config}
        priceBreakdown={priceBreakdown}
      />
    );
  }

  return (
    <>
      <div className="max-w-275 mx-auto px-6 py-5">
        {/* Header */}
        <ProductPageHeader title={config.title} subtitle={config.subtitle} />

        {/* Step progress bar */}
        <StepProgressBar currentStep={state.currentStep} />

        {/* Two-column configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5 items-start">

          {/* LEFT — step-dependent form + description */}
          <div className="flex flex-col gap-0">
            {state.currentStep === 1 && (
              <div className="border border-gray-200 rounded-lg shadow-md bg-white p-4 flex flex-col gap-4">
                <QuantitySelector
                  state={state}
                  dispatch={dispatch}
                  designOptions={config.designOptions}
                  quantityOptions={config.quantityOptions}
                  pricingTable={config.pricingTable}
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
              <div className="border border-gray-200 rounded-lg shadow-sm bg-white p-4">
                <ArtworkStep state={state} dispatch={dispatch} config={config} />
              </div>
            )}

            {state.currentStep === 3 && (
              <div className="border border-gray-200 rounded-lg shadow-sm bg-white p-4">
                <DeliveryStep state={state} dispatch={dispatch} config={config} />
              </div>
            )}

            {state.currentStep === 4 && (
              <div className="border border-gray-200 rounded-lg shadow-sm bg-white p-4">
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
        className="h-75"
        buttons={[{ label: "Order a Sample Pack", href: "/requestsample", variant: "primary" }]}
      />
    </>
  );
}
