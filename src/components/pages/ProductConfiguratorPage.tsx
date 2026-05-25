"use client";

import { useState, useEffect } from "react";
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
import CardVariantSelector from "@/src/components/configurator/form/CardVariantSelector";
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
import { Spinner } from "@/src/components/ui/Spinner";
import PostcodeModal from "@/src/components/ui/PostcodeModal";

interface Props {
  config: ProductConfiguratorData;
  initialStep?: number;
  initialDelivery?: InitialDelivery;
  initialArtwork?: InitialArtwork;
  initialOrder?: InitialOrder;
  initialVariantId?: string;
}

// Extract bullet-list items from the pt_portfolio.description2 HTML and strip tags.
// Source data sometimes contains the same <li> twice (e.g. A4 Self Cover Booklets
// has "100% post-consumer recycled paper" duplicated) — dedupe so React keys stay unique.
function extractFeatures(html: string | null | undefined): string[] {
  if (!html) return [];
  const items: string[] = [];
  const seen = new Set<string>();
  const re = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const text = m[1].replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
    if (text && !seen.has(text)) {
      seen.add(text);
      items.push(text);
    }
  }
  return items;
}

// Strip surrounding <p>/<a> tags but keep the inner text so the description
// renders cleanly in our themed component.
function stripHtmlToText(html: string | null | undefined): string {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

// Mirror PHP ucwords() — title-case every word. Laravel's banner template wraps
// the portfolio title with this (so "Save the Date Cards" → "Save The Date Cards").
function ucwords(s: string): string {
  return s.replace(/\b[a-z]/g, (c) => c.toUpperCase());
}

export default function ProductConfiguratorPage({ config, initialStep, initialDelivery, initialArtwork, initialOrder, initialVariantId }: Props) {
  const { state, dispatch, priceBreakdown, splitBreakdowns } = useConfigurator(config, initialStep, initialDelivery, initialArtwork, initialOrder, initialVariantId);
  const { user } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [quoteId, setQuoteId] = useState<number | null>(null);
  const [showPostcodeModal, setShowPostcodeModal] = useState(false);
  // When true, confirming the postcode modal also advances from step 1 → step 2
  const [advanceAfterPostcode, setAdvanceAfterPostcode] = useState(false);

  // Active card variant (sibling DB product the user picked via "Choose your card").
  // Falls back to the productId attached to the selected paper for products without
  // an explicit variant list (single-product slugs).
  const activeVariantPid = state.cardVariantId
    ? Number(state.cardVariantId)
    : config.papers.find((p) => p.id === state.paperId)?.productId;
  const selectedPortfolio = activeVariantPid
    ? config.portfolios?.find((p) => p.productId === activeVariantPid)
    : undefined;
  const portfolioFeatures = extractFeatures(selectedPortfolio?.description2);
  // Two separate description strings to match the Laravel layout exactly:
  //   - bannerDescription = pt_portfolio.description (short pitch, shown under the H1)
  //   - cardDescription   = pt_portfolio.description1 (long marketing paragraph, shown
  //                          inside the white description card below the form)
  // See live HTML on /uncoated-business-cards — these are two different fields.
  const activePortfolio = {
    title:             ucwords(selectedPortfolio?.title || config.descriptionTitle || `Premium ${config.title}`),
    bannerDescription: stripHtmlToText(selectedPortfolio?.description)  || config.subtitle,
    cardDescription:   stripHtmlToText(selectedPortfolio?.description1) || config.description,
    features:          portfolioFeatures.length > 0 ? portfolioFeatures : config.features,
  };

  // Papers belonging to the active variant — what "Choose your paper" lists.
  const papersForVariant = activeVariantPid
    ? config.papers.filter((p) => p.productId === activeVariantPid)
    : config.papers;
  const hasMultipleVariants = (config.cardVariants?.length ?? 0) > 1;

  // Sizes that actually have pricing rows for the active (variant, paper) combo.
  // Laravel only shows sizes valid for the chosen paper — without this filter we
  // were showing the union across all sibling products (e.g. 8 sizes for circle
  // stickers when product 26 + Matt Uncoated only has 3).
  const validFormatIds = new Set(
    config.pricingTable
      .filter((r) =>
        (activeVariantPid === undefined || r.productId === undefined || r.productId === activeVariantPid) &&
        (state.paperId === "" || r.stockId === state.paperId)
      )
      .map((r) => r.formatId)
  );
  const sizesForCombo = validFormatIds.size > 0
    ? config.sizes.filter((s) => validFormatIds.has(s.id))
    : config.sizes;

  // If the currently selected size isn't valid for the new variant+paper, reset it
  // to the first valid size so the price/preview reflect a real combination.
  useEffect(() => {
    if (sizesForCombo.length === 0) return;
    if (!sizesForCombo.find((s) => s.id === state.sizeId)) {
      dispatch({ type: "SET_SIZE", id: sizesForCombo[0].id });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.cardVariantId, state.paperId, sizesForCombo.length]);

  // Switching the variant must also reset the paper to a valid one for that variant,
  // otherwise the price/portfolio lookups will fall back to whatever pricing row
  // matches loosely and the UI drifts out of sync.
  function handleVariantChange(newVariantId: string) {
    dispatch({ type: "SET_CARD_VARIANT", id: newVariantId });
    const newPid = Number(newVariantId);
    const firstPaperForVariant = config.papers.find((p) => p.productId === newPid);
    if (firstPaperForVariant) {
      dispatch({ type: "SET_PAPER", id: firstPaperForVariant.id });
    }
  }

  // On mount: read saved postcode from localStorage; show modal if none saved
  useEffect(() => {
    const saved = localStorage.getItem("spc_postcode");
    if (saved && /^\d{4}$/.test(saved)) {
      dispatch({ type: "SET_DELIVERY_FIELD", field: "deliveryPostcode", value: saved });
    } else {
      setShowPostcodeModal(true);
    }
  }, []);

  function handlePostcodeConfirm(postcode: string) {
    localStorage.setItem("spc_postcode", postcode);
    dispatch({ type: "SET_DELIVERY_FIELD", field: "deliveryPostcode", value: postcode });
    setShowPostcodeModal(false);
    if (advanceAfterPostcode) {
      dispatch({ type: "NEXT_STEP" });
      setAdvanceAfterPostcode(false);
    }
  }

  function handlePostcodeSkip() {
    setShowPostcodeModal(false);
    setAdvanceAfterPostcode(false);
  }

  // Gate: pressing "Continue to Artwork" from step 1 requires a saved postcode.
  // If missing, open the modal first and advance only after confirm.
  function handleStep1Next() {
    const saved = typeof window !== "undefined" ? localStorage.getItem("spc_postcode") : null;
    const hasValidPostcode =
      /^\d{4}$/.test(state.deliveryPostcode) || (saved !== null && /^\d{4}$/.test(saved));
    if (hasValidPostcode) {
      dispatch({ type: "NEXT_STEP" });
    } else {
      setAdvanceAfterPostcode(true);
      setShowPostcodeModal(true);
    }
  }

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
      {showPostcodeModal && (
        <PostcodeModal
          onConfirm={handlePostcodeConfirm}
          onSkip={handlePostcodeSkip}
        />
      )}
      {submitting && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-3 bg-white/70 backdrop-blur-sm">
          <Spinner size={40} />
          <p className="text-[13px] text-gray-500 font-medium">Placing your order…</p>
        </div>
      )}
      <div className="max-w-275 mx-auto px-6 py-5">
        {/* Header */}
        <ProductPageHeader title={activePortfolio.title} subtitle={activePortfolio.bannerDescription} />

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

                {hasMultipleVariants && (
                  <CardVariantSelector
                    state={state}
                    dispatch={dispatch}
                    variants={config.cardVariants ?? []}
                    onVariantChange={handleVariantChange}
                    label={config.variantSelectorLabel}
                  />
                )}

                {papersForVariant.length > 0 && (
                  <PaperSelector state={state} dispatch={dispatch} papers={papersForVariant} />
                )}

                {sizesForCombo.length > 0 && (
                  <SizeSelector state={state} dispatch={dispatch} sizes={sizesForCombo} />
                )}

                {config.printingTypes.length > 0 && (
                  <PrintingTypeSelector
                    state={state}
                    dispatch={dispatch}
                    printingTypes={config.printingTypes}
                  />
                )}

                <ExtrasSelector state={state} dispatch={dispatch} extras={config.extras} />

                <StepFooter priceBreakdown={priceBreakdown} state={state} dispatch={dispatch} onNext={handleStep1Next} />
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
              title={activePortfolio.title}
              description={activePortfolio.cardDescription}
              features={activePortfolio.features}
              aboutParagraphs={selectedPortfolio ? undefined : config.aboutParagraphs}
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
