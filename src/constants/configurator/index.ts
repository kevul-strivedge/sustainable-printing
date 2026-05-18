import { ProductConfiguratorData } from "@/src/types/configurator.types";
import { businessCardsConfig } from "./business-cards";

// Registry: slug → configurator config
// Add new product configs here as they are built.
// Future: replace static import with API fetch in the page server component.
const configuratorRegistry: Record<string, ProductConfiguratorData> = {
  "business-cards": businessCardsConfig,
};

export function getConfiguratorConfig(slug: string): ProductConfiguratorData | null {
  return configuratorRegistry[slug] ?? null;
}
