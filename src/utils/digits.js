// src/utils/digits.js
const BN_TO_EN = {
  "০": "0",
  "১": "1",
  "২": "2",
  "৩": "3",
  "৪": "4",
  "৫": "5",
  "৬": "6",
  "৭": "7",
  "৮": "8",
  "৯": "9",
};

export function bnToEnDigits(value) {
  if (value == null) return "";
  return String(value).replace(/[০-৯]/g, (d) => BN_TO_EN[d] || d);
}
