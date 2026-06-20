export const exchangeRates = {
  GHS: 14.9,
  NGN: 1900,
  KES: 165,
};

export const recipientCurrencies = [
  { code: "GHS", label: "Ghana Cedi" },
  { code: "NGN", label: "Nigerian Naira" },
  { code: "KES", label: "Kenyan Shilling" },
] as const;

export const competitors = [
  { name: "Cush Payments", fee: 0.018 },
  { name: "Wise", fee: 0.025 },
  { name: "Remitly", fee: 0.04 },
  { name: "Western Union", fee: 0.075 },
];