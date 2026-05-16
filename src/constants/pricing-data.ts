export interface PricingPlan {
  halfYear: string;
  yearly: string;
  biyearly: string;
}

export interface PricingData {
  [key: number]: PricingPlan;
}

export const PRICING_DATA: PricingData = {
  1: { halfYear: "42,99", yearly: "69,99", biyearly: "118,00" },
  2: { halfYear: "77,39", yearly: "125,98", biyearly: "212,40" },
  3: { halfYear: "108,34", yearly: "176,38", biyearly: "297,36" },
  4: { halfYear: "171,95", yearly: "279,95", biyearly: "472,00" },
};
