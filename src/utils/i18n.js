export const getText = (val, lang = "bn") => {
  // val can be string OR {bn, en}
  if (val == null) return "";
  if (typeof val === "string") return val;
  if (typeof val === "object") return val[lang] || val.bn || val.en || "";
  return "";
};

export const getNameBn = (p) =>
  p?.title?.bn || p?.nameBn || (p?.name ? String(p.name).split("(")[0].trim() : "");

export const getNameEn = (p) =>
  p?.title?.en || p?.nameEn || (p?.name ? (p.name.includes("(") ? p.name.split("(")[1]?.replace(")", "").trim() : "") : "");

export const getDisplayName = (p, lang = "bn") => (lang === "en" ? (getNameEn(p) || getNameBn(p)) : (getNameBn(p) || getNameEn(p)));

export const getPriceNote = (p, lang = "bn") =>
  getText(p?.priceNote, lang) || (lang === "bn" ? (p?.priceNoteBn || "") : (p?.priceNoteEn || ""));

export const getShortDescription = (p, lang = "bn") =>
  getText(p?.shortDescription, lang);

export const getOverview = (p, lang = "bn") =>
  getText(p?.overview, lang) || p?.longOverview || "";

export const getHealthBenefits = (p, lang = "bn") => {
  // allow: array OR {bn:[...], en:[...]}
  const v = p?.healthBenefits;
  if (Array.isArray(v)) return v;
  if (v && typeof v === "object") return v[lang] || v.bn || v.en || [];
  return [];
};

export const getCookingTips = (p, lang = "bn") => {
  const v = p?.cookingTips;
  if (Array.isArray(v)) return v;
  if (v && typeof v === "object") return v[lang] || v.bn || v.en || [];
  return [];
};

// nutrition: allow flat object OR {per100g/enPer100g} OR {bn/en}
export const getNutritionTable = (p, lang = "bn") => {
  const n = p?.nutrition;
  if (!n) return null;

  // case: your new structure
  if (n?.per100g || n?.enPer100g) {
    return lang === "en" ? (n.enPer100g || n.per100g) : (n.per100g || n.enPer100g);
  }

  // case: already localized {bn, en}
  if (n?.bn || n?.en) {
    return lang === "en" ? (n.en || n.bn) : (n.bn || n.en);
  }

  // case: flat object
  if (typeof n === "object") return n;

  return null;
};
