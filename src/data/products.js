// data/products.js
// Rupsha Fish – all products collected from river & sea

// --------- CATEGORY DEFINITIONS ----------
console.log("✅ LOADED src/data/products.js — VERSION:", "2025-12-24_v99");

export const PRODUCTS_VERSION = "2025-12-24_v1";

export const categories = [
  { id: "all",          name: "সব পণ্য" },
  { id: "river_large",  name: "Deshi River Fish (Large)" },
  { id: "river_small",  name: "Small Deshi River Fish" },
  { id: "shrimp_prawn", name: "Shrimp & Prawn" },
  { id: "sea_fish",     name: "Sea Fish" },
  { id: "premium_sea",  name: "Premium & Seasonal Sea Fish" },
];

export const CATEGORY_MAP = {
  RIVER_LARGE: "river_large",
  RIVER_SMALL: "river_small",
  SHRIMP_PRAWN: "shrimp_prawn",
  SEA_FISH: "sea_fish",
  PREMIUM_SEA: "premium_sea",
};

// =========================
// GLOBAL SERVICES (applies to all fish)
// =========================
export const GLOBAL_SERVICES = {
  readyToCook: {
    enabled: true,
    label: {
      bn: "রেডি টু কুক",
      en: "Ready to cook",
    },
    note: {
      bn:
        "কাটা/পরিষ্কার করে দেওয়া হবে। তবে দাম নির্ধারিত হবে মাছের কাঁচা (আনকাট) ওজন অনুযায়ী—কাটার পর ওজন কিছুটা কমে যাবে।",
      en:
        "We will clean and cut it. Price is based on raw (uncut) weight—after cutting, net weight will reduce.",
    },
    // future-proof
    extraFeePerKg: 0,
  },
};

// =========================
// GLOBAL NOTICE (agent workflow)
// =========================
export const GLOBAL_FINAL_PRICE_NOTICE = {
  bn: "চূড়ান্ত দাম আমাদের এজেন্ট ফোনে/WhatsApp-এ কনফার্ম করবে।",
  en: "Our agent will confirm the final price by phone/WhatsApp.",
};


// --------- PRODUCT LIST ----------
export const products = [
  // ========== Large River Fish ==========
  {
  id: 1,
  slug: "pangas",
  category: CATEGORY_MAP.RIVER_LARGE,
  source: "river",

  // Names
  title: {
    bn: "পাঙ্গাস",
    en: "Pangas",
  },
  subtitle: {
    bn: "হালকা চর্বিযুক্ত, হৃদয়বান্ধব নদীর মাছ",
    en: "Lean, heart-friendly river fish",
  },

  // Pricing (LEGACY-SAFE — keep these)
  price: 200,          // legacy-safe
  priceMin: 900,
  priceMax: 1250,
  unit: "kg",
  weight: "1kg",

  

  // Media
  image: "/images/fish/pangas/p-1.webp",
  images: [
    "/images/fish/pangas/p-1.webp",
    "/images/fish/pangas/p-2.webp",
    "/images/fish/pangas/p-3.webp",
    "/images/fish/pangas/p-4.webp",
  ],




  // Badges
  badges: ["Budget friendly", "River fish", "Heart friendly", "Everyday fish"],

  // Price note
  priceNote: {
    bn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
    en: "Price varies based on size.",
  },

  // Short description
  shortDescription: {
    bn:
      "নদীর পাঙ্গাস একটি হালকা চর্বিযুক্ত ও সহজপাচ্য মাছ—পরিষ্কার করে কাটা, প্রতিদিনের রান্নার জন্য উপযোগী।",
    en:
      "River pangas is a lean, easy-to-digest fish—cleaned and cut, ideal for everyday cooking.",
  },

  // Overview
  overview: {
    bn:
      "পাঙ্গাস বাংলাদেশের অন্যতম জনপ্রিয় নদীর মাছ, বিশেষ করে যারা নিয়মিত মাছ খেতে চান তাদের জন্য। এতে চর্বি তুলনামূলক কম এবং প্রোটিন ভালো মানের হওয়ায় এটি হৃদয়বান্ধব হিসেবে পরিচিত। বেশি তেলে ভাজা না করে ঝোল, হালকা ভুনা বা স্টিম করলে এর পুষ্টিগুণ সবচেয়ে ভালোভাবে বজায় থাকে। শিশু, বয়স্ক ও স্বাস্থ্যসচেতন মানুষের দৈনন্দিন খাদ্যতালিকায় পাঙ্গাস একটি নিরাপদ ও বাজেট-বান্ধব অপশন।",
    en:
      "Pangas is one of the most commonly consumed river fish in Bangladesh, especially suitable for regular diets. It contains relatively low fat and provides good-quality protein, making it a heart-friendly choice when cooked lightly. Curries, light bhuna, or steaming help preserve its nutritional value. It is a safe, affordable option for children, elderly people, and health-conscious individuals.",
  },

  // Health benefits (expanded, heart-focused)
  "healthBenefits": {
    "bn": [
      "হার্টের জন্য ভালো: কম স্যাচুরেটেড ফ্যাট ও ওমেগা-৩ থাকায় কোলেস্টেরল নিয়ন্ত্রণে থাকে ও হৃদরোগের ঝুঁকি কমায়।",
      "দেশি খাদ্যে পুষ্টির চমক: কম ক্যালোরি ও চর্বি, কিন্তু উচ্চ মানের প্রোটিনে ভরপুর—মাংসপেশি মজবুত করে ও ওজন নিয়ন্ত্রণে রাখে।",
      "মস্তিষ্ক ও হাড়ের বন্ধু: ওমেগা-৩ মস্তিষ্কের কার্যক্ষমতা বাড়ায়, আর ক্যালসিয়াম ও ভিটামিন ডি হাড় ও দাঁত মজবুত রাখে।",
      "শরীরের প্রাকৃতিক সুরক্ষা: ভিটামিন বি১২, বি৬ ও সেলেনিয়াম শরীরের রোগপ্রতিরোধ ক্ষমতা বাড়ায় ও শক্তির উৎস হিসেবে কাজ করে।",
      "সবার জন্য উপকারী: শিশু থেকে বয়োজ্যেষ্ঠ—সবার বৃদ্ধি, বিকাশ ও স্বাস্থ্য লক্ষ্যমাত্রা পূরণের জন্য একটি আদর্শ পুষ্টির উৎস।"
    ],
    "en": [
      "A Nutritional Powerhouse for Desi Meals: Low in calories and fat yet rich in high-quality protein—ideal for building muscle strength and supporting weight management goals.",
      "A Friend to Your Heart: Contains low saturated fat and Omega-3 fatty acids to help manage cholesterol levels and promote long-term heart health.",
      "For Your Brain and Bones: Omega-3 supports brain function and sleep quality, while calcium and Vitamin D work together to build and maintain strong bones and teeth.",
      "Boosts Natural Immunity: Enriched with Vitamins B12, B6, and essential minerals like selenium to strengthen immunity and enhance daily energy levels.",
      "Wholesome Nutrition for All Ages: From growing children to health-conscious adults—a complete, balanced source of nutrition that supports development and wellness for the entire family."
    ]
  },

  // Cooking tips (health-aware)
  cookingTips: {
    bn: [
      "স্বাস্থ্যসম্মত রান্নার জন্য কম তেলে ঝোল বা হালকা ভুনা করুন।",
      "ডিপ ফ্রাই এড়িয়ে চললে পুষ্টিগুণ ভালো থাকে।",
      "রান্নার আগে লবণ, হলুদ ও সামান্য আদা-রসুন ব্যবহার করুন।",
      "বেশি সময় রান্না করলে মাছ শক্ত হয়ে যেতে পারে—মাঝারি আঁচে রান্না করুন।",
    ],
    en: [
      "For heart-friendly meals, cook in light curry or shallow bhuna with minimal oil.",
      "Avoid deep frying to retain nutritional value.",
      "Season lightly with salt, turmeric, and a small amount of ginger-garlic.",
      "Cook on medium heat to prevent the flesh from becoming tough.",
    ],
  },

  // Nutrition
  nutrition: {
  per100g: {
    Calories: "প্রায় ৮০ কিলোক্যালরি",
    Protein: "প্রায় ১৬ গ্রাম",
    Fat: "প্রায় ২.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৭ গ্রাম",
    Cholesterol: "প্রায় ৬৫ মি.গ্রা.",
    Omega3: "প্রায় ০.২ গ্রাম",
    Sodium: "প্রায় ৬৫ মি.গ্রা.",
    Potassium: "প্রায় ৩০০ মি.গ্রা.",
    VitaminD: "প্রায় ২.২ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ১.৮ মাইক্রোগ্রাম",
    Note: "প্রতি ১০০ গ্রাম কাঁচা মাছের গড় পুষ্টিগুণ। প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },
  enPer100g: {
    Calories: "Approx. 80 kcal",
    Protein: "Approx. 16 g",
    Fat: "Approx. 2.5 g",
    SaturatedFat: "Approx. 0.7 g",
    Cholesterol: "Approx. 65 mg",
    Omega3: "Approx. 0.2 g",
    Sodium: "Approx. 65 mg",
    Potassium: "Approx. 300 mg",
    VitaminD: "Approx. 2.2 µg",
    VitaminB12: "Approx. 1.8 µg",
    Note: "Average nutrition per 100 g raw fish. Natural variation may occur.",
  },
},

// =========================
// Size-based pricing (NEW, flexible)
// =========================

pricingModel: "WHOLE_BY_SIZE_COUNT",

sellBy: "count", // Pangash sold by kg (river fish, not farm)

qtyDefaults: {
  default: 1,   // cart starts from 1kg
  min: 1,
  step: 1       // kg-wise increment (clean UX)
},

// NEW: Homepage-friendly summary
startsFrom: {
  pricePerKg: 1200,
  unit: "kg",
},

sizePricing: [
  {
    sizeKey: "4-6kg",
    label: {
      bn: "৪–৬ কেজি",
      en: "4–6 kg",
    },
    pricePerKg: 1200,
    approxWholeFishWeightKg: {
      min: 4,
      max: 6,
    },
  },
  {
    sizeKey: "6-8kg",
    label: {
      bn: "৬–৮ কেজি",
      en: "6–8 kg",
    },
    pricePerKg: 1250,
    approxWholeFishWeightKg: {
      min: 6,
      max: 8,
    },
  },
  {
    sizeKey: "8-10kg",
    label: {
      bn: "৮–১০ কেজি",
      en: "8–10 kg",
    },
    pricePerKg: 1300,
    approxWholeFishWeightKg: {
      min: 8,
      max: 10,
    },
  },
  {
    sizeKey: "10-12kg",
    label: {
      bn: "১০–১২ কেজি",
      en: "10–12 kg",
    },
    pricePerKg: 1350,
    approxWholeFishWeightKg: {
      min: 10,
      max: 12,
    },
  },
],
},
  {
  id: 2,
  slug: "boal",
  category: CATEGORY_MAP.RIVER_LARGE,
  source: "river",

  // Names
  title: {
    bn: "বোয়াল",
    en: "Boal",
  },
  subtitle: {
    bn: "মাংসল, স্বাদে সমৃদ্ধ—স্বাস্থ্যসম্মত দেশি নদীর মাছ",
    en: "Meaty and flavorful—healthy local river fish",
  },

  // Pricing
  price: 800,          // legacy-safe
  priceMin: 800,
  priceMax: 1000,
  unit: "kg",
  weight: "1kg",

  // Media
  image: "/images/fish/boal/boal-1.webp",
  images: ["/images/fish/boal/boal-1.webp"],


  // Badges
  badges: ["River fish", "Popular choice", "Shasthoshommoto"],

  // Price note
  priceNote: {
    bn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
    en: "Price varies based on size.",
  },

  // Short description
  shortDescription: {
    bn: "দেশি নদীর বোয়াল—ফ্রাই, ঝোল ও ভুনার জন্য অত্যন্ত জনপ্রিয়।",
    en: "Local river boal—popular for frying, curries, and bhuna.",
  },

  // Overview
  overview: {
    bn:
      "বোয়াল মাছ তার মাংসল টেক্সচার ও গভীর স্বাদের জন্য বাঙালি রান্নায় খুবই জনপ্রিয়। ঝোল, ভুনা বা হালকা ফ্রাই—সব ধরনের রান্নায় বোয়াল ভালো মানায়। স্বাস্থ্যসম্মতভাবে রান্না করতে চাইলে কম তেলে ভুনা বা ঝোল করুন এবং অতিরিক্ত তেল-ঝাল কম রাখুন। মাঝারি আঁচে ধীরে রান্না করলে মাছের মাংস নরম থাকে এবং স্বাদও ভালো হয়।",
    en:
      "Boal is loved in Bengali cuisine for its meaty texture and rich taste. It works well in curries, bhuna, and light frying. For healthier meals, cook with minimal oil and avoid over-spicing. Gentle cooking on medium heat helps retain a tender texture and better flavor.",
  },

  // Health benefits (detailed but safe)
  healthBenefits: {
    "bn": [
      "শক্তির প্রকৃত উৎসঃ উচ্চ মানের প্রোটিনে ভরপুর, যা মাংসপেশি গঠন, দৈনন্দিন শক্তি ও শরীরের ক্ষয় পূরণের জন্য অত্যন্ত কার্যকর।",
      "মস্তিষ্ক ও স্নায়ুর পুষ্টিঃ ওমেগা-৩ ও লেসিথিন মস্তিষ্কের কার্যক্ষমতা বাড়ায়, স্মৃতিশক্তি ঠিক রাখে এবং স্নায়ুতন্ত্রকে সুস্থ রাখে।",
      "হৃদযন্ত্রের সুরক্ষাকারীঃ উপকারী ফ্যাট ও ওমেগা-৩ থাকায় রক্তের ক্ষতিকর চর্বি কমায় ও হৃদরোগের ঝুঁকি হ্রাস করে।",
      "হাড় ও রক্তের গঠনঃ ক্যালসিয়াম, ফসফরাস ও আয়রন হাড় মজবুত করে এবং রক্তশূন্যতা প্রতিরোধে সাহায্য করে।",
      "প্রাকৃতিক পাচক সহায়কঃ প্রাকৃতিক লেসিথিন চর্বি হজমে সাহায্য করে এবং শরীরে পুষ্টি শোষণ বাড়ায়, যা বদহজমের সমস্যা কমাতে উপকারী।"
    ],
    "en": [
      "A Prime Source of Strength: Packed with high-quality protein essential for muscle growth, daily energy, and overall bodily repair and maintenance.",
      "Nourishment for Mind & Nerves: Rich in Omega-3s and natural lecithin, which support brain function, enhance memory, and promote a healthy nervous system.",
      "Guardian of Heart Health: Contains beneficial fats and Omega-3 fatty acids that help manage cholesterol and reduce the risk of cardiovascular diseases.",
      "Builder of Blood & Bone: A natural source of Iron, Calcium, and Phosphorus that strengthens bones and teeth while helping prevent anemia.",
      "A Natural Digestive Aid: Its lecithin content aids in the emulsification and digestion of fats, improving nutrient absorption and supporting comfortable digestion."
    ]
  },

  // Cooking tips (health-first)
  cookingTips: {
    bn: [
      "ঝোলের জন্য: পেঁয়াজ-রসুন কম দিয়ে, হলুদ + কাঁচামরিচে হালকা ঝোল করুন।",
      "ফ্রাই করলে: ডিপ ফ্রাই না করে কম তেলে শ্যালো ফ্রাই করুন।",
      "ভুনায়: মাঝারি আঁচে ধীরে কষালে মাংস নরম থাকে।",
      "লবণ পরিমিত রাখুন—স্বাস্থ্যসম্মত খাবারের জন্য গুরুত্বপূর্ণ।",
    ],
    en: [
      "For curry: keep it light with turmeric and green chili, avoid heavy oil.",
      "If frying: prefer shallow frying instead of deep frying.",
      "For bhuna: slow cooking on medium heat keeps the flesh tender.",
      "Use salt moderately for a healthier meal.",
    ],
  },

  // Nutrition (approximate, conservative)
  nutrition: {
  per100g: {
    Calories: "প্রায় ১২০ কিলোক্যালরি",
    Protein: "প্রায় ২০ গ্রাম",
    Fat: "প্রায় ৪.৫ গ্রাম",
    SaturatedFat: "প্রায় ১.২ গ্রাম",
    Cholesterol: "প্রায় ৭৫ মি.গ্রা.",
    Omega3: "প্রায় ০.৩ গ্রাম",
    Sodium: "প্রায় ৭০ মি.গ্রা.",
    Potassium: "প্রায় ৩৫০ মি.গ্রা.",
    VitaminD: "প্রায় ৩.০ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.৫ মাইক্রোগ্রাম",
    Note: "প্রতি ১০০ গ্রাম কাঁচা মাছের গড় পুষ্টিগুণ। প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },
  enPer100g: {
    Calories: "Approx. 120 kcal",
    Protein: "Approx. 20 g",
    Fat: "Approx. 4.5 g",
    SaturatedFat: "Approx. 1.2 g",
    Cholesterol: "Approx. 75 mg",
    Omega3: "Approx. 0.3 g",
    Sodium: "Approx. 70 mg",
    Potassium: "Approx. 350 mg",
    VitaminD: "Approx. 3.0 µg",
    VitaminB12: "Approx. 2.5 µg",
    Note: "Average nutrition per 100 g raw fish. Natural variation may occur.",
  },
},

  // =========================
  // Size-based pricing (NEW)
  // =========================

  // Big fish: customers buy by fish count (not by cut-kg)

  pricingModel: "WHOLE_BY_SIZE_COUNT", 

  sellBy: "count", // UI/cart uses count

  // Default count behaviour in cart/product page
  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },

  // Optional: override the "starts from" logic cleanly for homepage
  // (so homepage can show "Starts from ৳1050/kg")
  startsFrom: {
    pricePerKg: 1050,
    unit: "kg",
  },

  // Each option: per-kg price + approximate whole fish weight range.
  // You can show avg weight in UI, and compute estimated total:
  // estimatedTotal = pricePerKg * avgWholeFishWeightKg * count
  sizePricing: [
    {
      sizeKey: "1.5-2kg",
      label: {
        bn: "১.৫–২ কেজি সাইজ",
        en: "1.5–2 kg size",
      },
      pricePerKg: 1050,
      approxWholeFishWeightKg: { min: 1.5, max: 2.0 },
      avgWholeFishWeightKg: 1.75,
    },
    {
      sizeKey: "2-3kg",
      label: {
        bn: "২–৩ কেজি সাইজ",
        en: "2–3 kg size",
      },
      pricePerKg: 1250,
      approxWholeFishWeightKg: { min: 2.0, max: 3.0 },
      avgWholeFishWeightKg: 2.5,
    },
    {
      sizeKey: "3-4kg",
      label: {
        bn: "৩–৪ কেজি সাইজ",
        en: "3–4 kg size",
      },
      pricePerKg: 1400,
      approxWholeFishWeightKg: { min: 3.0, max: 4.0 },
      avgWholeFishWeightKg: 3.5,
    },
    {
      sizeKey: "5-6kg",
      label: {
        bn: "৫–৬ কেজি সাইজ",
        en: "5–6 kg size",
      },
      pricePerKg: 1600,
      approxWholeFishWeightKg: { min: 5.0, max: 6.0 },
      avgWholeFishWeightKg: 5.5,
    },
  ],
},
  {
  id: 4,
  slug: "ayr",
  category: CATEGORY_MAP.RIVER_LARGE,
  source: "river",

  // Names
  title: {
    bn: "আইড়",
    en: "Ayr",
  },
  subtitle: {
    bn: "মাংসল ও শক্ত টেক্সচারের দেশি নদীর মাছ",
    en: "Firm-textured, meaty local river fish",
  },

  // Pricing (LEGACY-SAFE — keep these)
  // Updated to match sizePricing min/max per-kg
  price: 950,          // legacy-safe (keep)
  priceMin: 1000,      // ✅ starts from 1000/kg
  priceMax: 2250,      // ✅ max is 2250/kg
  unit: "kg",
  weight: "1kg",


  // Media
  image: "/images/fish/ayer/ayr-1.webp",
  images: [
    "/images/fish/ayer/ayr-1.webp",
    "/images/fish/ayer/ayr-2.webp",
    "/images/fish/ayer/ayr-3.webp",
    "/images/fish/ayer/ayr-4.webp",
  ],


  // Badges
  badges: ["River fish", "High protein", "Shasthoshommoto"],

  // Price note
  priceNote: {
    bn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
    en: "Price varies depending on size.",
  },

  // Short description
  shortDescription: {
    bn: "দেশি আইড় মাছ—ভুনা ও ঝোলের জন্য বিখ্যাত, মাংস শক্ত ও স্বাদে সমৃদ্ধ।",
    en: "Local ayr fish—known for bhuna and curry, with firm and flavorful meat.",
  },

  // Overview
  overview: {
    bn:
      "আইড় একটি শক্ত ও মাংসল দেশি নদীর মাছ, যা সাধারণত ভুনা ও ঘন ঝোলের জন্য ব্যবহৃত হয়। এর মাংস সহজে ভেঙে যায় না, ফলে দীর্ঘ সময় রান্না করলেও টেক্সচার বজায় থাকে। উচ্চ প্রোটিনের কারণে এটি শারীরিক শক্তি ও পুনরুদ্ধারে সহায়ক হিসেবে বিবেচিত হয়। স্বাস্থ্যসম্মত রান্নার জন্য অতিরিক্ত তেল এড়িয়ে মাঝারি আঁচে ধীরে রান্না করা উত্তম।",
    en:
      "Ayr is a firm, meaty river fish commonly used in bhuna and thick curries. Its flesh holds well during longer cooking, maintaining texture. Due to its high protein content, it is often considered supportive for strength and recovery. For healthy preparation, cook slowly on medium heat with minimal oil.",
  },

  // Health benefits (researched, realistic)
  healthBenefits: {
    bn: [
      "উচ্চ প্রোটিনসমৃদ্ধ—পেশি গঠন ও শরীরের শক্তি বৃদ্ধিতে সহায়ক।",
      "দীর্ঘ সময় তৃপ্তি দেয়—ভারী কাজ বা পরিশ্রমের পর উপযোগী খাবার।",
      "ঝোল বা কম তেলে রান্না করলে স্বাস্থ্যসম্মত ডায়েটে মানানসই।",
      "মাংস শক্ত হওয়ায় অতিরিক্ত ভাজার প্রয়োজন পড়ে না।",
    ],
    en: [
      "High in protein, supporting muscle strength and recovery.",
      "Keeps you fuller for longer, suitable after physical exertion.",
      "Fits well into a healthy diet when cooked as curry or with low oil.",
      "Firm flesh reduces the need for deep frying.",
    ],
  },

  // Cooking tips (Ayr-specific)
  cookingTips: {
    bn: [
      "ভুনার জন্য: মাঝারি আঁচে ধীরে কষান—মাংস নরম থাকবে।",
      "ঝোলে রান্না করলে অতিরিক্ত পানি দেবেন না।",
      "মশলা কম রেখে রান্না করলে মাছের স্বাদ ভালো বোঝা যায়।",
      "ডিপ ফ্রাই এড়িয়ে চলাই ভালো।",
    ],
    en: [
      "For bhuna: slow cooking on medium heat keeps the flesh tender.",
      "Avoid excess water when making curry.",
      "Use moderate spices to highlight the natural flavor.",
      "Avoid deep frying for better texture and health.",
    ],
  },

  // Nutrition (approximate, conservative)
  nutrition: {
  per100g: {
    Calories: "প্রায় ১৩০ কিলোক্যালরি",
    Protein: "প্রায় ২২ গ্রাম",
    Fat: "প্রায় ৪.০ গ্রাম",
    SaturatedFat: "প্রায় ১.১ গ্রাম",
    Cholesterol: "প্রায় ৬২ মি.গ্রা.",
    Omega3: "প্রায় ০.৩ গ্রাম",
    Sodium: "প্রায় ৭০ মি.গ্রা.",
    Potassium: "প্রায় ৩৬০ মি.গ্রা.",
    VitaminD: "প্রায় ২.৮ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.৬ মাইক্রোগ্রাম",
    Note: "প্রতি ১০০ গ্রাম কাঁচা মাছের গড় পুষ্টিগুণ। প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 130 kcal",
    Protein: "Approx. 22 g",
    Fat: "Approx. 4.0 g",
    SaturatedFat: "Approx. 1.1 g",
    Cholesterol: "Approx. 62 mg",
    Omega3: "Approx. 0.3 g",
    Sodium: "Approx. 70 mg",
    Potassium: "Approx. 360 mg",
    VitaminD: "Approx. 2.8 µg",
    VitaminB12: "Approx. 2.6 µg",
    Note: "Average nutrition per 100 g raw fish. Natural variation may occur.",
  },
},

  // =========================
  // Size-based pricing (NEW, flexible)
  // Ayr is SOLD BY COUNT (big fish)
  // =========================

  pricingModel: "WHOLE_BY_SIZE_COUNT",

  sellBy: "count",

  qtyDefaults: {
    default: 1,  // 1 fish
    min: 1,
    step: 1
  },

   // NEW: Homepage-friendly summary
  startsFrom: {
    pricePerKg: 1000,
    unit: "kg",
  },

  // NOTE: totals in your screenshot match: (range.max * pricePerKg)
  sizePricing: [
  {
    sizeKey: "0.4-0.5kg",
    label: {
      bn: "৪০০–৫০০ গ্রাম সাইজ",
      en: "400–500 g size",
    },
    pricePerKg: 1850,
    approxWholeFishWeightKg: { min: 0.4, max: 0.5 },
    nominalWeightKg: 0.5,
  },
  {
    sizeKey: "0.7-0.8kg",
    label: {
      bn: "৭০০–৮০০ গ্রাম সাইজ",
      en: "700–800 g size",
    },
    pricePerKg: 2200,
    approxWholeFishWeightKg: { min: 0.7, max: 0.8 },
    nominalWeightKg: 0.8,
  },
  {
    sizeKey: "0.8-0.9kg",
    label: {
      bn: "৮০০–৯০০ গ্রাম সাইজ",
      en: "800–900 g size",
    },
    pricePerKg: 2300,
    approxWholeFishWeightKg: { min: 0.8, max: 0.9 },
    nominalWeightKg: 0.9,
  },
  {
    sizeKey: "1kg-cut",
    label: {
      bn: "১ কেজি+ (কেটেড)",
      en: "1 kg+ (cut)",
    },
    pricePerKg: 1350,
    approxWholeFishWeightKg: { min: 0.9, max: 1.0 },
    nominalWeightKg: 1.0,
  },
  {
    sizeKey: "1.0-1.1kg",
    label: {
      bn: "১০০০–১১০০ গ্রাম সাইজ",
      en: "1000–1100 g size",
    },
    pricePerKg: 3600,
    approxWholeFishWeightKg: { min: 1.0, max: 1.1 },
    nominalWeightKg: 1.1,
  },
  {
    sizeKey: "1.2-1.3kg",
    label: {
      bn: "১২০০–১৩০০ গ্রাম সাইজ",
      en: "1200–1300 g size",
    },
    pricePerKg: 3800,
    approxWholeFishWeightKg: { min: 1.2, max: 1.3 },
    nominalWeightKg: 1.3,
  },
  {
    sizeKey: "1.4-1.5kg",
    label: {
      bn: "১৪০০–১৫০০ গ্রাম সাইজ",
      en: "1400–1500 g size",
    },
    pricePerKg: 4300,
    approxWholeFishWeightKg: { min: 1.4, max: 1.5 },
    nominalWeightKg: 1.5,
  },
],
},
  {
  id: 5,
  slug: "koi",
  category: CATEGORY_MAP.RIVER_LARGE,
  source: "river",

  // Names
  title: {
    bn: "কৈ",
    en: "Koi",
  },
  subtitle: {
    bn: "পুষ্টিকর ও স্বাস্থ্যসম্মত দেশি নদীর মাছ",
    en: "Nutritious and healthy local river fish",
  },

  // Pricing (LEGACY-SAFE — keep these)
  // ✅ Koi size doesn't vary much, so price is treated as single fixed per-kg price.
  price: 900,          // legacy-safe
  priceMin: 900,       // keep for old UI/filters if any
  priceMax: 1400,      // keep for legacy compatibility (can later align to 900 if you want)
  unit: "kg",
  weight: "1kg",

  // =========================
  // Pricing model (NEW)
  // =========================
  pricingModel: "KG_SIMPLE",


  sellBy: "kg", // sold by kg

  // Home page can show: "Starts from ৳900/kg"
  startsFrom: {
    pricePerKg: 900,
    unit: "kg",
  },

  // Cart qty defaults (you decided: starts from 1 kg now)
  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },

  // ✅ No size tiers for koi
  sizePricing: null,

  // Media
  image: "/images/fish/desi_koi/desi_koi.png",
  images: [
    "/images/fish/desi_koi/20260116_063405.jpg",
    "/images/fish/desi_koi/20260116_063410.jpg",
    "/images/fish/desi_koi/20260116_063418.jpg",
    "/images/fish/desi_koi/20260116_063422.jpg",
    "/images/fish/desi_koi/desi_koi.png"
  ],

  // Badges
  badges: ["River fish", "Shasthoshommoto", "Nutritious"],

  // Price note (✅ updated: not size-based)
  priceNote: {
    bn: "দেশি কৈ সাধারণত নির্দিষ্ট সাইজের হয়—দাম কেজি অনুযায়ী।",
    en: "Deshi koi is usually a consistent size—priced per kg.",
  },

  // Short description
  shortDescription: {
    bn: "দেশি নদীর কৈ মাছ—ঝাল ঝোল ও হালকা রান্নার জন্য খুবই জনপ্রিয়।",
    en: "Local river koi fish—popular for spicy curry and light cooking.",
  },

  // Overview
  overview: {
    bn:
      "কৈ মাছ বাংলাদেশে পুষ্টিকর ও স্বাস্থ্যসম্মত খাবার হিসেবে পরিচিত। এর মাংস নরম, সহজপাচ্য এবং প্রোটিনে সমৃদ্ধ। ঝাল ঝোল, হালকা ভুনা কিংবা সেদ্ধ—সব ধরনের রান্নায় কৈ ভালো মানায়। সাধারণত দুর্বলতা কাটাতে বা নিয়মিত পুষ্টিকর খাবার হিসেবে কৈ মাছ খাওয়ার চল রয়েছে। স্বাস্থ্যসম্মত রান্নার জন্য অতিরিক্ত তেল এড়িয়ে চলাই উত্তম।",
    en:
      "Koi fish is widely regarded in Bangladesh as a nutritious and healthy food. It has soft flesh, is easy to digest, and provides good-quality protein. Koi works well in spicy curries, light bhuna, or boiled preparations. It is often chosen as a nourishing option for regular meals or recovery diets when cooked with minimal oil.",
  },

  // Health benefits (specific & realistic)
  healthBenefits: {
    bn: [
      "ভালো মানের প্রোটিনের উৎস—শরীরের শক্তি ও পুনরুদ্ধারে সহায়ক।",
      "সহজপাচ্য হওয়ায় দুর্বলতা বা অসুস্থতার পর খাওয়ার উপযোগী।",
      "অতিরিক্ত চর্বি কম—নিয়মিত ডায়েটে অন্তর্ভুক্ত করা যায়।",
      "পুষ্টিকর হলেও ভারী লাগে না।",
    ],
    en: [
      "Good source of quality protein for strength and recovery.",
      "Easy to digest, suitable after illness or weakness.",
      "Low to moderate fat, appropriate for regular diets.",
      "Nutritious without feeling heavy.",
    ],
  },

  // Cooking tips (health-first, koi-specific)
  cookingTips: {
    bn: [
      "ঝাল ঝোলের জন্য কম তেলে রান্না করুন।",
      "হালকা ভুনা বা সেদ্ধ করলে পুষ্টিগুণ ভালো থাকে।",
      "ডিপ ফ্রাই এড়িয়ে চললে স্বাস্থ্যসম্মত থাকে।",
      "মাঝারি আঁচে রান্না করলে মাছ নরম থাকে।",
    ],
    en: [
      "Cook spicy curry using minimal oil.",
      "Light bhuna or boiled preparation preserves nutrition.",
      "Avoid deep frying for healthier meals.",
      "Medium heat keeps the flesh soft and tender.",
    ],
  },

  // Nutrition (researched, customer-clear, quantified)
  nutrition: {
  per100g: {
    Calories: "প্রায় ১১০ কিলোক্যালরি",
    Protein: "প্রায় ১৯ গ্রাম",
    Fat: "প্রায় ৩.০ গ্রাম",
    SaturatedFat: "প্রায় ০.৮ গ্রাম",
    Cholesterol: "প্রায় ৫৮ মি.গ্রা.",
    Omega3: "প্রায় ০.২৫ গ্রাম",
    Sodium: "প্রায় ৬৫ মি.গ্রা.",
    Potassium: "প্রায় ৩২০ মি.গ্রা.",
    VitaminD: "প্রায় ২.৫ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.০ মাইক্রোগ্রাম",
    Note: "প্রতি ১০০ গ্রাম কাঁচা মাছের গড় পুষ্টিগুণ। প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 110 kcal",
    Protein: "Approx. 19 g",
    Fat: "Approx. 3.0 g",
    SaturatedFat: "Approx. 0.8 g",
    Cholesterol: "Approx. 58 mg",
    Omega3: "Approx. 0.25 g",
    Sodium: "Approx. 65 mg",
    Potassium: "Approx. 320 mg",
    VitaminD: "Approx. 2.5 µg",
    VitaminB12: "Approx. 2.0 µg",
    Note: "Average nutrition per 100 g raw fish. Natural variation may occur.",
  },
},
},
  {
  id: 6,
  slug: "shing",
  category: CATEGORY_MAP.RIVER_LARGE,
  source: "river",

  // Names
  title: {
    bn: "শিং",
    en: "Shing",
  },
  subtitle: {
    bn: "সহজপাচ্য ও শক্তিবর্ধক দেশি নদীর মাছ",
    en: "Easy-to-digest, strength-supporting local river fish",
  },

  // =========================
  // Pricing (LEGACY-SAFE)
  // =========================
  price: 900,          // legacy-safe (do NOT remove)
  priceMin: 900,       // legacy-safe
  priceMax: 1400,      // legacy-safe
  unit: "kg",
  weight: "1kg",

  // =========================
  // Pricing model (NEW)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Home page display
  startsFrom: {
    pricePerKg: 950,
    unit: "kg",
  },

  // Cart behavior
  qtyDefaults: {
    default: 1,   // starts from 1kg
    min: 1,
    step: 1,
  },

  // Shing has size variation, but NOT tier-based pricing
  sizePricing: null,

  // Media
  image: "/images/fish/Shing/shing-1.webp",
  images: [
    "/images/fish/Shing/shing-1.webp",
    "/images/fish/Shing/shing-2.webp",
    "/images/fish/Shing/shing-3.webp",
  ],


  // Badges
  badges: ["River fish", "Shasthoshommoto", "Easy to digest"],

  // Price note (UPDATED – not tier-based)
  priceNote: {
    bn: "দেশি শিং সাধারণত কেজি অনুযায়ী বিক্রি হয়—সাইজ ভেদে সামান্য পার্থক্য হতে পারে।",
    en: "Deshi shing is sold per kg—minor variation may occur based on size.",
  },

  // Short description
  shortDescription: {
    bn: "দেশি শিং মাছ—ঝোল ও হালকা ভুনার জন্য পরিচিত ও জনপ্রিয়।",
    en: "Local shing fish—popular for light curry and bhuna.",
  },

  // Overview
  overview: {
    bn:
      "শিং মাছ বাংলাদেশে সহজপাচ্য ও শক্তিবর্ধক খাবার হিসেবে দীর্ঘদিন ধরে পরিচিত। এর মাংস নরম এবং তুলনামূলকভাবে কম চর্বিযুক্ত হওয়ায় অসুস্থতার পর বা দুর্বলতার সময় শিং মাছ খাওয়ার প্রচলন রয়েছে। ঝোল বা হালকা ভুনা হিসেবে রান্না করলে এর পুষ্টিগুণ সবচেয়ে ভালোভাবে পাওয়া যায়। অতিরিক্ত তেল ও ঝাল এড়িয়ে চললে এটি একটি স্বাস্থ্যসম্মত খাবার হিসেবে উপযোগী।",
    en:
      "Shing fish has long been regarded in Bangladesh as an easy-to-digest and strength-supporting food. Its soft flesh and relatively low fat content make it suitable during recovery or periods of weakness. Cooking it as a light curry or bhuna helps retain nutritional value. Avoiding excess oil and spices keeps it a healthy meal option.",
  },

  // Health benefits
  healthBenefits: {
    bn: [
      "ভালো মানের প্রোটিনের উৎস—শরীরের শক্তি ও পুনরুদ্ধারে সহায়ক।",
      "সহজপাচ্য হওয়ায় অসুস্থতার পর খাওয়ার জন্য উপযোগী।",
      "অতিরিক্ত চর্বি কম—নিয়মিত ও নিয়ন্ত্রিত ডায়েটে মানানসই।",
      "হালকা ঝোল হিসেবে খেলে ভারী লাগে না।",
    ],
    en: [
      "Good source of quality protein for strength and recovery.",
      "Easy to digest, suitable after illness or weakness.",
      "Low to moderate fat, appropriate for controlled diets.",
      "Light curry preparation feels gentle on digestion.",
    ],
  },

  // Cooking tips
  cookingTips: {
    bn: [
      "ঝোল হিসেবে রান্না করলে কম তেল ও হালকা মশলা ব্যবহার করুন।",
      "ডিপ ফй ফ্রাই এড়িয়ে চলুন—পুষ্টিগুণ নষ্ট হয়।",
      "মাঝারি আঁচে ধীরে রান্না করলে মাছ নরম থাকে।",
      "অতিরিক্ত ঝাল না দিয়ে রান্না করাই স্বাস্থ্যসম্মত।",
    ],
    en: [
      "Cook as a light curry using minimal oil and spices.",
      "Avoid deep frying to preserve nutrition.",
      "Slow cooking on medium heat keeps the flesh tender.",
      "Limit spicy ingredients for better digestion.",
    ],
  },

  // Nutrition
  nutrition: {
  per100g: {
    Calories: "প্রায় ১০৫ কিলোক্যালরি",
    Protein: "প্রায় ২০ গ্রাম",
    Fat: "প্রায় ৩.০ গ্রাম",
    SaturatedFat: "প্রায় ০.৯ গ্রাম",
    Cholesterol: "প্রায় ৫৮ মি.গ্রা.",
    Omega3: "প্রায় ০.২৫ গ্রাম",
    Sodium: "প্রায় ৬৫ মি.গ্রা.",
    Potassium: "প্রায় ৩৩০ মি.গ্রা.",
    VitaminD: "প্রায় ২.৬ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.৩ মাইক্রোগ্রাম",
    Note: "প্রতি ১০০ গ্রাম কাঁচা মাছের গড় পুষ্টিগুণ। প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 105 kcal",
    Protein: "Approx. 20 g",
    Fat: "Approx. 3.0 g",
    SaturatedFat: "Approx. 0.9 g",
    Cholesterol: "Approx. 58 mg",
    Omega3: "Approx. 0.25 g",
    Sodium: "Approx. 65 mg",
    Potassium: "Approx. 330 mg",
    VitaminD: "Approx. 2.6 µg",
    VitaminB12: "Approx. 2.3 µg",
    Note: "Average nutrition per 100 g raw fish. Natural variation may occur.",
  },
},
},
  {
  id: 7,
  slug: "baim",
  category: CATEGORY_MAP.RIVER_LARGE,
  source: "river",

  // Names
  title: {
    bn: "তারা বাইম",
    en: "Tara Baim",
  },
  subtitle: {
    bn: "শক্ত ও চিকন মাংসের স্বাদে অনন্য দেশি মাছ",
    en: "Firm, slender fish with distinctive taste",
  },

  // =========================
  // Pricing (LEGACY-SAFE)
  // =========================
  price: 900,          // legacy-safe (do NOT remove)
  priceMin: 900,
  priceMax: 1000,
  unit: "kg",
  weight: "1kg",

  // =========================
  // Pricing model (NEW)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Home page display
  startsFrom: {
    pricePerKg: 1400,
    unit: "kg",
  },

  // Cart behavior
  qtyDefaults: {
    default: 1,   // starts from 1kg
    min: 1,
    step: 1,
  },

  // Baim has size variation but NO tier-based pricing
  sizePricing: null,

  // Media
  image: "/images/fish/Tara%20Baim/tb-1.webp",
  images: [
    "/images/fish/Tara%20Baim/tb-1.webp",
    "/images/fish/Tara%20Baim/tb-2.webp",
    "/images/fish/Tara%20Baim/tb-3.webp",
    "/images/fish/Tara%20Baim/tb-4.webp",
  ],

  // Badges
  badges: ["River fish", "Lean meat", "Shasthoshommoto"],

  // Price note (UPDATED – no size slabs)
  priceNote: {
    bn: "দেশি বাইম সাধারণত কেজি অনুযায়ী বিক্রি হয়—সাইজ ভেদে সামান্য পার্থক্য হতে পারে।",
    en: "Deshi baim is sold per kg—minor variation may occur based on size.",
  },

  // Short description
  shortDescription: {
    bn: "বাইম মাছ—ভুনা ও হালকা ফ্রাইয়ের জন্য পরিচিত, মাংস শক্ত ও সুস্বাদু।",
    en: "Baim fish—known for bhuna and light frying, with firm and tasty flesh.",
  },

  // Overview
  overview: {
    bn:
      "বাইম একটি চিকন ও শক্ত মাংসের দেশি নদীর মাছ, যা মূলত ভুনা ও হালকা ফ্রাইয়ের জন্য জনপ্রিয়। এর মাংস তুলনামূলকভাবে কম চর্বিযুক্ত এবং রান্নার সময় সহজে ভেঙে যায় না। স্বাস্থ্যসম্মতভাবে রান্না করতে চাইলে কম তেলে ভুনা বা শ্যালো ফ্রাই করা উত্তম। অতিরিক্ত ঝাল বা তেল এড়িয়ে চললে বাইম মাছ স্বাদ ও পুষ্টির ভারসাম্য বজায় রাখে।",
    en:
      "Baim is a slender river fish with firm flesh, popular for bhuna and light frying. It is relatively low in fat and holds its shape well during cooking. For healthier preparation, use minimal oil and avoid heavy spices to maintain both taste and nutritional balance.",
  },

  // Health benefits
  healthBenefits: {
    bn: [
      "ভালো মানের প্রোটিনের উৎস—দৈনন্দিন শক্তি ও পেশি রক্ষণাবেক্ষণে সহায়ক।",
      "কম চর্বিযুক্ত হওয়ায় ভারী লাগে না।",
      "শ্যালো ফ্রাই বা ভুনা করলে স্বাস্থ্যসম্মত ডায়েটে মানানসই।",
      "মাংস শক্ত হওয়ায় অতিরিক্ত ভাজার প্রয়োজন পড়ে না।",
    ],
    en: [
      "Good source of quality protein for daily strength and muscle maintenance.",
      "Low fat content makes it lighter on digestion.",
      "Fits well into a healthy diet when shallow-fried or lightly cooked.",
      "Firm flesh reduces the need for deep frying.",
    ],
  },

  // Cooking tips
  cookingTips: {
    bn: [
      "ভুনার জন্য মাঝারি আঁচে ধীরে রান্না করুন।",
      "ফ্রাই করলে শ্যালো ফ্রাই বেছে নিন—ডিপ ফ্রাই নয়।",
      "মশলা কম রাখলে মাছের নিজস্ব স্বাদ ভালো বোঝা যায়।",
      "রান্নার আগে ভালোভাবে পরিষ্কার করা জরুরি।",
    ],
    en: [
      "For bhuna, cook slowly on medium heat.",
      "Choose shallow frying instead of deep frying.",
      "Use fewer spices to highlight the natural flavor.",
      "Clean thoroughly before cooking.",
    ],
  },

  // Nutrition
  nutrition: {
  per100g: {
    Calories: "প্রায় ১০০ কিলোক্যালরি",
    Protein: "প্রায় ২১ গ্রাম",
    Fat: "প্রায় ২.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৭ গ্রাম",
    Cholesterol: "প্রায় ৫২ মি.গ্রা.",
    Omega3: "প্রায় ০.২৫ গ্রাম",
    Sodium: "প্রায় ৬০ মি.গ্রা.",
    Potassium: "প্রায় ৩১০ মি.গ্রা.",
    VitaminD: "প্রায় ২.৪ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.২ মাইক্রোগ্রাম",
    Note: "প্রতি ১০০ গ্রাম কাঁচা মাছের গড় পুষ্টিগুণ। প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 100 kcal",
    Protein: "Approx. 21 g",
    Fat: "Approx. 2.5 g",
    SaturatedFat: "Approx. 0.7 g",
    Cholesterol: "Approx. 52 mg",
    Omega3: "Approx. 0.25 g",
    Sodium: "Approx. 60 mg",
    Potassium: "Approx. 310 mg",
    VitaminD: "Approx. 2.4 µg",
    VitaminB12: "Approx. 2.2 µg",
    Note: "Average nutrition per 100 g raw fish. Natural variation may occur.",
  },
},
},

{
  id: 8,
  slug: "poa-mach",
  category: CATEGORY_MAP.SEA, // ✅ moved from SEA_FISH to SEA
  source: "sea",

  // Legacy-safe names
  name: "পোয়া মাছ",
  nameBn: "পোয়া মাছ",
  nameEn: "Poa Fish (Croaker)",

  // New schema names
  title: {
    bn: "পোয়া মাছ",          // ✅ cleaned
    en: "Poa Fish",          // ✅ cleaned
  },
  subtitle: {
    bn: "নরম-ঝুরঝুরে সাদা মাংস—ঝোল, ভুনা ও ফ্রাইয়ের জন্য দারুণ জনপ্রিয়",
    en: "Soft, flaky white meat—great for curry, bhuna, and frying",
  },

  // Pricing (LEGACY-SAFE)
  // Homepage will show: "Starts from ৳650/kg"
  price: 0,                  // ✅ avoid conflicting random legacy price
  priceMin: 650,
  priceMax: 650,
  unit: "kg",
  weight: "1kg",

  // Media
  image: "/images/fish/poa/poa-1.webp",
  images: [
    "/images/fish/poa/poa-1.webp",
    "/images/fish/poa/poa-2.webp",
    "/images/fish/poa/poa-3.webp",
    "/images/fish/poa/poa-4.webp",
  ],

  // Badges
  badges: ["Sea fish", "White meat", "High protein", "Great for curry"],

  // Price note (single source of truth)
  priceNote: {
    bn: "সাইজ ও মৌসুম অনুযায়ী দাম পরিবর্তিত হতে পারে।",
    en: "Price may vary by size and season.",
  },

  // Short description
  shortDescription: {
    bn: "পোয়া মাছ—নরম সাদা মাংস, হালকা গন্ধ, ঝোল-ভুনা-ফ্রাই সব রান্নায় মানানসই।",
    en: "Poa fish—soft white flesh, mild aroma, perfect for curry, bhuna, or frying.",
  },

  // Overview
  overview: {
    bn:
      "পোয়া মাছ (Croaker) উপকূলীয়/সামুদ্রিক অঞ্চলে জনপ্রিয় একটি মাছ। এর মাংস সাদা ও ঝুরঝুরে—ঝোল, ভুনা, ফ্রাই, কিংবা টক ঝালে খুব ভালো লাগে। মাঝারি পরিমাণ কাঁটা থাকতে পারে, তাই বাচ্চা/বয়স্কদের জন্য রান্নার সময় কাঁটা সাবধানে দেখে নেওয়া ভালো। তাজা পোয়া মাছের গন্ধ হালকা, চোখ স্বচ্ছ ও ফুলে থাকা, আর গিলস লালচে থাকে—এসব দেখে কিনলে ভালো পাওয়া যায়।",
    en:
      "Poa (Croaker) is a popular coastal/sea fish known for its white, flaky flesh and mild aroma. It works well in curry, bhuna, frying, and tangy spicy preparations. It may have moderate pin bones, so careful deboning is recommended—especially for kids and seniors. For freshness, look for clear bulging eyes and reddish gills with a clean, mild smell.",
  },

  // Health benefits
  healthBenefits: {
    bn: [
      "উচ্চ প্রোটিন—মাংসপেশি রক্ষণাবেক্ষণ ও দৈনন্দিন শক্তিতে সহায়ক।",
      "তুলনামূলক কম ফ্যাট—হালকা, স্বাস্থ্যসম্মত খাবার হিসেবে ভালো।",
      "ওমেগা-৩ (পরিমাণ ভিন্ন হতে পারে)—হার্ট ও মস্তিষ্কের জন্য উপকারী ফ্যাটি অ্যাসিড সরবরাহ করে।",
      "ভিটামিন B12 ও মিনারেলস—রক্ত ও স্নায়ুর স্বাস্থ্যে ভূমিকা রাখে।",
    ],
    en: [
      "High protein—supports muscle maintenance and daily energy.",
      "Relatively low fat—fits well in lighter, healthier meals.",
      "Omega-3 (amount can vary)—supports heart and brain health.",
      "Vitamin B12 and minerals—support blood and nerve health.",
    ],
  },

  // Cooking tips
  cookingTips: {
    bn: [
      "ভালোভাবে স্কেল/আঁশ পরিষ্কার করে ধুয়ে পানি ঝরিয়ে নিন।",
      "ঝোলের জন্য: হালকা ভাজা করে নিলে মাছ ভাঙবে কম এবং স্বাদ বাড়বে।",
      "ফ্রাই করলে মাঝারি আঁচে করুন—অতিরিক্ত কড়া করলে মাংস শুকিয়ে যেতে পারে।",
      "কাঁটা থাকার কারণে পরিবেশনের আগে টুকরো করে/বোন-চেক করে নিলে খাওয়া সহজ হয়।",
    ],
    en: [
      "Descale properly, rinse, and drain well before cooking.",
      "For curry: light shallow-frying helps prevent breaking and boosts flavor.",
      "For frying, use medium heat—over-frying can dry out the flesh.",
      "Check for pin bones before serving, especially for easy eating.",
    ],
  },

  // Nutrition
  nutrition: {
    per100g: {
      Calories: "প্রায় ৯৫–১১০ কিলোক্যালরি",
      Protein: "প্রায় ১৯–২২ গ্রাম",
      Fat: "প্রায় ১.৫–৩ গ্রাম",
      SaturatedFat: "প্রায় ০.৪–০.৭ গ্রাম",
      Cholesterol: "প্রায় ৫৫–৮৫ মি.গ্রা.",
      Omega3: "প্রায় ০.২–০.৬ গ্রাম",
      Sodium: "প্রায় ৬০–৯০ মি.গ্রা.",
      Potassium: "প্রায় ৩০০–৪২০ মি.গ্রা.",
      Calcium: "প্রায় ২০–৪০ মি.গ্রা.",
      Iron: "প্রায় ০.৬–১.২ মি.গ্রা.",
      VitaminD: "প্রায় ০.৫–২.০ মাইক্রোগ্রাম",
      VitaminB12: "প্রায় ১.০–২.৫ মাইক্রোগ্রাম",
      Note:
        "এগুলো আনুমানিক মান। মাছের প্রজাতি/উৎস, টাটকা অবস্থা ও রান্নার ধরন অনুযায়ী মান পরিবর্তিত হতে পারে।",
    },

    enPer100g: {
      Calories: "Approx. 95–110 kcal",
      Protein: "Approx. 19–22 g",
      Fat: "Approx. 1.5–3 g",
      SaturatedFat: "Approx. 0.4–0.7 g",
      Cholesterol: "Approx. 55–85 mg",
      Omega3: "Approx. 0.2–0.6 g",
      Sodium: "Approx. 60–90 mg",
      Potassium: "Approx. 300–420 mg",
      Calcium: "Approx. 20–40 mg",
      Iron: "Approx. 0.6–1.2 mg",
      VitaminD: "Approx. 0.5–2.0 µg",
      VitaminB12: "Approx. 1.0–2.5 µg",
      Note:
        "Values are approximate. Natural variation occurs by species/source, freshness, and cooking method.",
    },
  },

  // =========================
  // New schema (simple kg-based pricing)
  // =========================
  pricingModel: "KG_SIMPLE",
  sellBy: "kg",

  // Homepage card text: "Starts from ৳650/kg"
  startsFrom: {
    pricePerKg: 650, // ✅ consistent with your other objects
    unit: "kg",
  },

  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },
},
  {
  id: 9,
  slug: "faisa",
  category: CATEGORY_MAP.RIVER_LARGE,
  source: "river",

  // Names
  title: {
    bn: "ফাইসা",
    en: "Faisa",
  },
  subtitle: {
    bn: "নরম মাংসের হালকা ও স্বাস্থ্যসম্মত নদীর মাছ",
    en: "Soft-fleshed, light and healthy river fish",
  },

  // =========================
  // Pricing (LEGACY-SAFE)
  // =========================
  price: 800,          // legacy-safe (do NOT remove)
  priceMin: 800,
  priceMax: 1300,
  unit: "kg",
  weight: "1kg",

  // =========================
  // Pricing model (NEW)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Home page display
  startsFrom: {
    pricePerKg: 1000,
    unit: "kg",
  },

  // Cart behavior
  qtyDefaults: {
    default: 1,   // cart starts from 1kg
    min: 1,
    step: 1,
  },

  // Faisa does NOT have tier-based size pricing
  sizePricing: null,

  // Media
  image: "/images/fish/faisha/faisha-1.webp",
  images: [
    "/images/fish/faisha/faisha-1.webp",
    "/images/fish/faisha/faisha-2.webp",
    "/images/fish/faisha/faisha-3.webp",
    "/images/fish/faisha/faisha-4.webp",
  ],

  // Badges
  badges: ["River fish", "Shasthoshommoto", "Everyday fish"],

  // Price note (UPDATED – no slabs)
  priceNote: {
    bn: "দেশি ফাইসা সাধারণত কেজি অনুযায়ী বিক্রি হয়—সাইজ ভেদে সামান্য পার্থক্য হতে পারে।",
    en: "Deshi faisa is sold per kg—minor variation may occur based on size.",
  },

  // Short description
  shortDescription: {
    bn: "ফাইসা মাছ—ভাজি ও হালকা ঝোলের জন্য উপযোগী, মাংস নরম ও সুস্বাদু।",
    en: "Faisa fish—ideal for light frying and curry, with soft and tasty flesh.",
  },

  // Overview
  overview: {
    bn:
      "ফাইসা একটি নরম মাংসের দেশি নদীর মাছ, যা ভাজি ও হালকা ঝোলের জন্য বিশেষভাবে জনপ্রিয়। এর চর্বির পরিমাণ তুলনামূলক কম এবং সঠিকভাবে রান্না করলে সহজপাচ্য হয়। অতিরিক্ত তেল ও ঝাল ব্যবহার না করে রান্না করলে এটি দৈনন্দিন খাবারের জন্য একটি স্বাস্থ্যসম্মত অপশন হিসেবে বিবেচিত হয়।",
    en:
      "Faisa is a soft-fleshed local river fish, especially popular for light frying and curry. It contains relatively low fat and is easy to digest when cooked properly. Avoiding excess oil and spices makes it a healthy choice for everyday meals.",
  },

  // Health benefits
  healthBenefits: {
    bn: [
      "ভালো মানের প্রোটিনের উৎস—দৈনন্দিন শক্তি বজায় রাখতে সহায়ক।",
      "কম চর্বিযুক্ত হওয়ায় ভারী লাগে না।",
      "সঠিকভাবে রান্না করলে সহজপাচ্য।",
      "নিয়মিত ডায়েটে অন্তর্ভুক্ত করার জন্য উপযোগী।",
    ],
    en: [
      "Provides good-quality protein for daily energy.",
      "Low fat content makes it light on digestion.",
      "Easy to digest when cooked properly.",
      "Suitable for regular inclusion in everyday diets.",
    ],
  },

  // Cooking tips
  cookingTips: {
    bn: [
      "ভাজির জন্য কম তেলে শ্যালো ফ্রাই করুন।",
      "ঝোল হালকা রাখলে মাছের নরম টেক্সচার বজায় থাকে।",
      "বেশি সময় রান্না করবেন না—মাংস ভেঙে যেতে পারে।",
      "মশলা পরিমিত রাখুন।",
    ],
    en: [
      "Shallow fry using minimal oil.",
      "Keep curries light to preserve the soft texture.",
      "Avoid overcooking as the flesh can break easily.",
      "Use spices moderately.",
    ],
  },

  // Nutrition
  nutrition: {
  per100g: {
    Calories: "প্রায় ১১০ কিলোক্যালরি",
    Protein: "প্রায় ২০ গ্রাম",
    Fat: "প্রায় ৩.০ গ্রাম",
    SaturatedFat: "প্রায় ০.৯ গ্রাম",
    Cholesterol: "প্রায় ৫৮ মি.গ্রা.",
    Omega3: "প্রায় ০.২৫ গ্রাম",
    Sodium: "প্রায় ৬৫ মি.গ্রা.",
    Potassium: "প্রায় ৩২০ মি.গ্রা.",
    VitaminD: "প্রায় ২.৫ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.২ মাইক্রোগ্রাম",
    Note: "প্রতি ১০০ গ্রাম কাঁচা মাছের গড় পুষ্টিগুণ। প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 110 kcal",
    Protein: "Approx. 20 g",
    Fat: "Approx. 3.0 g",
    SaturatedFat: "Approx. 0.9 g",
    Cholesterol: "Approx. 58 mg",
    Omega3: "Approx. 0.25 g",
    Sodium: "Approx. 65 mg",
    Potassium: "Approx. 320 mg",
    VitaminD: "Approx. 2.5 µg",
    VitaminB12: "Approx. 2.2 µg",
    Note: "Average nutrition per 100 g raw fish. Natural variation may occur.",
  },
},
},

  // ========== Small Deshi River Fish ==========
  {
  id: 10,
  slug: "kajoli",
  category: CATEGORY_MAP.RIVER_SMALL,
  source: "river",

  // Names
  title: {
    bn: "কাজলি",
    en: "Kajoli",
  },
  subtitle: {
    bn: "কাঁটাসহ খাওয়া যায়—ক্যালসিয়ামসমৃদ্ধ ছোট মাছ",
    en: "Small river fish rich in calcium, eaten with bones",
  },

  // =========================
  // Pricing (LEGACY-SAFE)
  // =========================
  price: 300,            // legacy-safe
  priceMin: 1030,
  priceMax: 1100,
  unit: "kg",
  weight: "1kg",

  // =========================
  // Pricing model (NEW)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Home page display
  startsFrom: {
    pricePerKg: 1400,
    unit: "kg",
  },

  // Cart behavior
  qtyDefaults: {
    default: 1,   // cart starts from 1kg
    min: 1,
    step: 1,
  },

  // Kajoli does NOT have tier-based size pricing
  sizePricing: null,

  // Media
  image: "/images/fish/kajoli/kajoli-1.webp",
  images: [
    "/images/fish/kajoli/kajoli-1.webp",
    "/images/fish/kajoli/kajoli-2.webp",
  ],


  // Badges
  badges: ["Small fish", "River fish", "Shasthoshommoto"],

  // Price note (updated: not slab-based)
  priceNote: {
    bn: "দেশি কাজলি সাধারণত কেজি অনুযায়ী বিক্রি হয়—বাজারদর অনুযায়ী দাম সামান্য পরিবর্তিত হতে পারে।",
    en: "Deshi kajoli is sold per kg—price may vary slightly based on market rate.",
  },

  // Short description
  shortDescription: {
    bn: "কাজলি ছোট মাছ—ভাজি ও ভুনার জন্য উপযোগী, কাঁটাসহ খাওয়া যায়।",
    en: "Kajoli is a small river fish ideal for frying and bhuna, eaten with bones.",
  },

  // Overview
  overview: {
    bn:
      "কাজলি একটি পুষ্টিগুণসমৃদ্ধ ছোট নদীর মাছ, যা সাধারণত কাঁটাসহ খাওয়া হয়। ছোট মাছ হওয়ায় এতে প্রাকৃতিকভাবে ক্যালসিয়াম ও খনিজ উপাদান বেশি পাওয়া যায়। হালকা ভাজি বা ভুনা হিসেবে রান্না করলে এটি সহজপাচ্য হয় এবং দৈনন্দিন খাদ্যতালিকায় অন্তর্ভুক্ত করার জন্য অত্যন্ত উপযোগী।",
    en:
      "Kajoli is a nutritious small river fish commonly eaten with bones, making it naturally rich in calcium and minerals. Light frying or bhuna preserves its digestibility, making it an excellent choice for regular meals.",
  },

  // Health benefits
  healthBenefits: {
    bn: [
      "কাঁটাসহ খাওয়া যায়—প্রাকৃতিক ক্যালসিয়ামের ভালো উৎস।",
      "ভালো মানের প্রোটিন সরবরাহ করে।",
      "চর্বির পরিমাণ কম—হালকা ও সহজপাচ্য।",
      "শিশু ও বয়স্কদের খাদ্যতালিকার জন্য উপযোগী।",
    ],
    en: [
      "Rich in natural calcium due to edible bones.",
      "Provides good-quality protein.",
      "Low fat content makes it light and easy to digest.",
      "Suitable for children and elderly diets.",
    ],
  },

  // Cooking tips
  cookingTips: {
    bn: [
      "ভাজার আগে ভালোভাবে ধুয়ে পানি ঝরিয়ে নিন।",
      "মাঝারি আঁচে ভাজলে কাঁটা নরম থাকে।",
      "ভুনায় রান্না করলে অল্প মশলা ব্যবহার করুন।",
      "অতিরিক্ত তেল ব্যবহার না করাই ভালো।",
    ],
    en: [
      "Wash thoroughly and drain well before cooking.",
      "Fry on medium heat to keep bones soft.",
      "Use mild spices for bhuna preparation.",
      "Avoid excessive oil for best results.",
    ],
  },

  // Nutrition (clear & specific)
  nutrition: {
  per100g: {
    Calories: "প্রায় ১১০ কিলোক্যালরি",
    Protein: "প্রায় ১৮.৫ গ্রাম",
    Fat: "প্রায় ২.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৭ গ্রাম",
    Cholesterol: "প্রায় ৫২ মি.গ্রা.",
    Omega3: "প্রায় ০.২৫ গ্রাম",
    Calcium: "প্রায় ১৮০ মি.গ্রা.",
    Sodium: "প্রায় ৬৫ মি.গ্রা.",
    Potassium: "প্রায় ৩১০ মি.গ্রা.",
    VitaminD: "প্রায় ২.৩ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.১ মাইক্রোগ্রাম",
    Note: "কাঁটাসহ খাওয়ার কারণে ক্যালসিয়াম তুলনামূলক বেশি। প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 110 kcal",
    Protein: "Approx. 18.5 g",
    Fat: "Approx. 2.5 g",
    SaturatedFat: "Approx. 0.7 g",
    Cholesterol: "Approx. 52 mg",
    Omega3: "Approx. 0.25 g",
    Calcium: "Approx. 180 mg",
    Sodium: "Approx. 65 mg",
    Potassium: "Approx. 310 mg",
    VitaminD: "Approx. 2.3 µg",
    VitaminB12: "Approx. 2.1 µg",
    Note: "Calcium is higher due to edible soft bones. Natural variation may occur.",
  },
},
},
  {
  id: 11,
  slug: "tengra",
  category: CATEGORY_MAP.RIVER_SMALL,
  source: "river",

  // =========================
  // Legacy-safe names (KEEP)
  // =========================
  name: "টেংরা (Tengra)",
  nameBn: "টেংরা",
  nameEn: "Tengra",

  // =========================
  // New schema names
  // =========================
  title: {
    bn: "টেংরা",
    en: "Tengra",
  },
  subtitle: {
    bn: "ঝোলের জন্য আদর্শ—প্রোটিন ও খনিজসমৃদ্ধ ছোট নদীর মাছ",
    en: "Perfect for curry—small river fish rich in protein & minerals",
  },

  // =========================
  // Pricing (LEGACY-SAFE)
  // =========================
  price: 700,
  priceMin: 700,
  priceMax: 1000,
  unit: "kg",
  weight: "1kg",

  // =========================
  // Pricing model (NEW)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Home page display
  startsFrom: {
    pricePerKg: 900,
    unit: "kg",
  },

  // Cart behavior
  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },

  // Tengra does NOT have size slabs
  sizePricing: null,

  // =========================
  // Media
  image: "/images/fish/tengra/tengra-1.webp",
  images: [
    "/images/fish/Tengra/Tengra-1.webp",
    "/images/fish/Tengra/Tengra-2.webp",
    "/images/fish/Tengra/Tengra-3.webp",
    "/images/fish/Tengra/Tengra-4.webp",
  ],


  // =========================
  // Badges
  // =========================
  badges: ["Small fish", "River fish", "Shasthoshommoto", "Curry favorite"],

  // =========================
  // Price note (updated, slab-free)
  // =========================
  priceNote: {
    bn: "দেশি টেংরা সাধারণত কেজি অনুযায়ী বিক্রি হয়—বাজারদর অনুযায়ী দামে সামান্য পরিবর্তন হতে পারে।",
    en: "Deshi tengra is sold per kg—price may vary slightly depending on market availability.",
  },

  // =========================
  // Short description
  // =========================
  shortDescription: {
    bn: "টেংরা ছোট মাছ—ঝোল ও হালকা ভুনার জন্য জনপ্রিয়, স্বাদে দারুণ।",
    en: "Tengra is a small fish popular for light curry and bhuna, great in taste.",
  },

  // =========================
  // Overview
  // =========================
  overview: {
    bn:
      "টেংরা বাংলাদেশের জনপ্রিয় ছোট নদীর মাছ—বিশেষ করে ঝোল রান্নায় এর স্বাদ ও ঘ্রাণ অনেকের পছন্দ। ছোট মাছ হওয়ায় এটি সাধারণত হাড়সহ খাওয়া যায়, ফলে ক্যালসিয়াম ও খনিজ উপাদান তুলনামূলকভাবে ভালো পাওয়া যায়। স্বাস্থ্যসম্মত রাখতে কম তেল, মাঝারি মশলা এবং ঝোলভিত্তিক রান্না সবচেয়ে উপযোগী। ডিপ ফ্রাই এড়িয়ে চললে এটি দৈনন্দিন ডায়েটের জন্য ভালো থাকে।",
    en:
      "Tengra is a popular small river fish in Bangladesh, especially loved in curries for its flavor and aroma. As a small fish, it’s often eaten with bones, providing relatively better calcium and minerals. For a healthier meal, cook as a light curry with minimal oil and moderate spices, and avoid deep frying.",
  },

  // =========================
  // Health benefits
  // =========================
  healthBenefits: {
    bn: [
      "ভালো মানের প্রোটিনের উৎস—দৈনন্দিন শক্তি ও পেশি রক্ষণাবেক্ষণে সহায়ক।",
      "ছোট মাছ হওয়ায় ক্যালসিয়াম ও আয়রনের মতো খনিজ উপাদান তুলনামূলক ভালো পাওয়া যেতে পারে।",
      "ঝোল হিসেবে রান্না করলে সাধারণত সহজপাচ্য হয়।",
      "কম তেলে রান্না করলে স্বাস্থ্যসম্মত ডায়েটে মানানসই।",
    ],
    en: [
      "Good source of quality protein for daily strength and muscle maintenance.",
      "Small fish may provide relatively better minerals such as calcium and iron.",
      "Often easy to digest when cooked as a light curry.",
      "Fits well into a healthy diet when prepared with minimal oil.",
    ],
  },

  // =========================
  // Cooking tips
  // =========================
  cookingTips: {
    bn: [
      "ঝোলের জন্য কম তেল ও মাঝারি মশলা ব্যবহার করুন—স্বাদ ভালো থাকে।",
      "বেশি সময় রান্না করবেন না—ছোট মাছ ভেঙে যেতে পারে।",
      "টক (তেঁতুল/টমেটো) বা কাঁচামরিচ দিলে ঝোলের স্বাদ আরও বাড়ে।",
      "ডিপ ফ্রাই এড়িয়ে ঝোল বা হালকা ভুনা বেছে নিন।",
    ],
    en: [
      "Use minimal oil and moderate spices for best curry flavor.",
      "Avoid overcooking—small fish can break easily.",
      "A little sourness (tamarind or tomato) or green chili enhances the curry.",
      "Prefer curry or light bhuna over deep frying for better health.",
    ],
  },

  // =========================
  // Nutrition (clear & realistic)
  // =========================
  nutrition: {
  per100g: {
    Calories: "প্রায় ১১৫ কিলোক্যালরি",
    Protein: "প্রায় ১৬.৫ গ্রাম",
    Fat: "প্রায় ৪.০ গ্রাম",
    SaturatedFat: "প্রায় ১.১ গ্রাম",
    Cholesterol: "প্রায় ৬০ মি.গ্রা.",
    Omega3: "প্রায় ০.৪ গ্রাম",
    Calcium: "প্রায় ২২০ মি.গ্রা.",
    Iron: "প্রায় ৩.০ মি.গ্রা.",
    Sodium: "প্রায় ৭০ মি.গ্রা.",
    Potassium: "প্রায় ৩৩০ মি.গ্রা.",
    VitaminD: "প্রায় ২.৪ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.০ মাইক্রোগ্রাম",
    Note: "টেংরা বিভিন্ন প্রজাতির হতে পারে—প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 115 kcal",
    Protein: "Approx. 16.5 g",
    Fat: "Approx. 4.0 g",
    SaturatedFat: "Approx. 1.1 g",
    Cholesterol: "Approx. 60 mg",
    Omega3: "Approx. 0.4 g",
    Calcium: "Approx. 220 mg",
    Iron: "Approx. 3.0 mg",
    Sodium: "Approx. 70 mg",
    Potassium: "Approx. 330 mg",
    VitaminD: "Approx. 2.4 µg",
    VitaminB12: "Approx. 2.0 µg",
    Note: "Tengra includes multiple species; natural variation may occur.",
  },
},
},
  {
  id: 12,
  slug: "kachki",
  category: CATEGORY_MAP.RIVER_SMALL,
  source: "river",

  // =========================
  // Legacy-safe names (KEEP)
  // =========================
  name: "কাচকি (Kachki)",
  nameBn: "কাচকি",
  nameEn: "Kachki",

  // =========================
  // New schema names
  // =========================
  title: {
    bn: "কাচকি",
    en: "Kachki",
  },
  subtitle: {
    bn: "হাড়সহ খাওয়া যায়—ক্যালসিয়াম ও প্রোটিনসমৃদ্ধ ছোট নদীর মাছ",
    en: "Small river fish eaten with bones—rich in calcium & protein",
  },

  // =========================
  // Pricing (LEGACY-SAFE)
  // =========================
  price: 390,
  priceMin: 800,
  priceMax: 900,
  unit: "kg",
  weight: "1kg",

  // =========================
  // Pricing model (NEW)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Home page display
  startsFrom: {
    pricePerKg: 800,
    unit: "kg",
  },

  // Cart behavior
  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },

  // Kachki has no size slabs
  sizePricing: null,

  // =========================
  // Media
  image: "/images/fish/kachki/k-1.webp",
  images: [
    "/images/fish/kachki/k-1.webp",
    "/images/fish/kachki/k-2.webp",
  ],


  // =========================
  // Badges
  // =========================
  badges: ["Small fish", "River fish", "Calcium rich", "Low fat"],

  // =========================
  // Price note (clear & honest)
  // =========================
  priceNote: {
    bn: "কাচকি সাধারণত কেজি অনুযায়ী বিক্রি হয়—বাজারদর ও প্রাপ্যতার ওপর ভিত্তি করে দামে পরিবর্তন হতে পারে।",
    en: "Kachki is sold per kg—price may vary depending on market availability.",
  },

  // =========================
  // Short description
  // =========================
  shortDescription: {
    bn: "কাচকি ছোট মাছ—ভাজি, ভর্তা ও শুকনা রান্নার জন্য খুবই জনপ্রিয়।",
    en: "Kachki is a small fish popular for fry, bhorta, and dry-style cooking.",
  },

  // =========================
  // Overview
  // =========================
  overview: {
    bn:
      "কাচকি বাংলাদেশের বহুল ব্যবহৃত ছোট নদীর মাছ। এটি সাধারণত হাড়সহ খাওয়া হয়, ফলে ক্যালসিয়াম ও খনিজ উপাদান তুলনামূলকভাবে বেশি পাওয়া যায়। কাচকি ভাজি, কাচকি ভর্তা কিংবা শুকনা রান্না—সবভাবেই স্বাদে ও পুষ্টিতে সমৃদ্ধ। কম ফ্যাট ও কম ক্যালরির কারণে এটি স্বাস্থ্যসম্মত দৈনন্দিন ডায়েটের জন্য উপযোগী।",
    en:
      "Kachki is a widely consumed small river fish in Bangladesh. It is typically eaten with bones, making it a good source of calcium and minerals. Popular in fries, bhorta, and dry preparations, kachki is low in fat and calories, making it suitable for a healthy daily diet.",
  },

  // =========================
  // Health benefits
  // =========================
  healthBenefits: {
    bn: [
      "হাড়সহ খাওয়া যায়—ক্যালসিয়াম ও ফসফরাসের ভালো উৎস।",
      "কম ফ্যাট ও কম ক্যালরি—ওজন নিয়ন্ত্রণে সহায়ক।",
      "ভালো মানের প্রোটিন—শরীরের শক্তি ও রক্ষণাবেক্ষণে উপকারী।",
      "পরিমিত তেলে রান্না করলে দৈনন্দিন ডায়েটে মানানসই।",
    ],
    en: [
      "Eaten with bones—good source of calcium and phosphorus.",
      "Low in fat and calories—supports weight control.",
      "Provides quality protein for daily nutrition.",
      "Fits well into regular diets when cooked with controlled oil.",
    ],
  },

  // =========================
  // Cooking tips
  // =========================
  cookingTips: {
    bn: [
      "ভাজার আগে ভালোভাবে ধুয়ে পানি ঝরিয়ে নিন—তেল কম লাগে।",
      "মাঝারি আঁচে ভাজুন—অতিরিক্ত কড়া হলে স্বাদ নষ্ট হয়।",
      "ভর্তার জন্য হালকা ভেজে পেঁয়াজ, মরিচ ও সরিষার তেল ব্যবহার করুন।",
      "স্বাস্থ্যসম্মত রাখতে অতিরিক্ত তেল এড়িয়ে চলুন।",
    ],
    en: [
      "Wash and drain well before frying to reduce oil absorption.",
      "Fry on medium heat for better taste.",
      "For bhorta, lightly fry and mix with onion, chili, and mustard oil.",
      "Avoid excess oil for a healthier dish.",
    ],
  },

  // =========================
  // Nutrition (clear & realistic)
  // =========================
  nutrition: {
  per100g: {
    Calories: "প্রায় ৯০ কিলোক্যালরি",
    Protein: "প্রায় ১৭ গ্রাম",
    Fat: "প্রায় ২.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৬ গ্রাম",
    Cholesterol: "প্রায় ৫২ মি.গ্রা.",
    Omega3: "প্রায় ০.৩ গ্রাম",
    Calcium: "প্রায় ৪০০ মি.গ্রা.",
    Phosphorus: "প্রায় ২২৫ মি.গ্রা.",
    Iron: "প্রায় ২.৫ মি.গ্রা.",
    Sodium: "প্রায় ৬০ মি.গ্রা.",
    Potassium: "প্রায় ৩০০ মি.গ্রা.",
    VitaminD: "প্রায় ২.২ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.০ মাইক্রোগ্রাম",
    Note: "ছোট আকার ও কাঁটাসহ খাওয়ার কারণে ক্যালসিয়াম তুলনামূলকভাবে বেশি। প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 90 kcal",
    Protein: "Approx. 17 g",
    Fat: "Approx. 2.5 g",
    SaturatedFat: "Approx. 0.6 g",
    Cholesterol: "Approx. 52 mg",
    Omega3: "Approx. 0.3 g",
    Calcium: "Approx. 400 mg",
    Phosphorus: "Approx. 225 mg",
    Iron: "Approx. 2.5 mg",
    Sodium: "Approx. 60 mg",
    Potassium: "Approx. 300 mg",
    VitaminD: "Approx. 2.2 µg",
    VitaminB12: "Approx. 2.0 µg",
    Note: "Calcium is high due to edible bones. Natural variation may occur.",
  },
},
},
  {
  id: 13,
  slug: "mola",
  category: CATEGORY_MAP.RIVER_SMALL,
  source: "river",

  // =========================
  // Legacy-safe names (KEEP)
  // =========================
  name: "মলা (Mola)",
  nameBn: "মলা",
  nameEn: "Mola",

  // =========================
  // New schema names
  // =========================
  title: {
    bn: "মলা",
    en: "Mola ",
  },
  subtitle: {
    bn: "ভিটামিন A ও ক্যালসিয়ামসমৃদ্ধ ছোট দেশি মাছ—হাড়সহ খাওয়া যায়",
    en: "Vitamin A & calcium-rich small fish—often eaten whole with bones",
  },

  // =========================
  // Pricing (LEGACY-SAFE)
  // =========================
  price: 700,
  priceMin: 700,
  priceMax: 700,
  unit: "kg",
  weight: "1kg",

  // =========================
  // Pricing model (NEW)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Home page display
  startsFrom: {
    pricePerKg: 700,
    unit: "kg",
  },

  // Cart behavior
  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },

  // Mola has no size slabs
  sizePricing: null,

  // =========================
  // Media
  image: "/images/fish/mola/mola-1.webp",
  images: [
    "/images/fish/mola/mola-1.webp",
    "/images/fish/mola/mola-2.webp",
  ],


  // =========================
  // Badges
  // =========================
  badges: ["Small fish", "River fish", "Vitamin A rich", "Calcium rich"],

  // =========================
  // Price note
  // =========================
  priceNote: {
    bn: "দাম বাজারদর ও প্রাপ্যতার ওপর ভিত্তি করে পরিবর্তিত হতে পারে।",
    en: "Price may vary depending on market availability.",
  },

  // =========================
  // Short description
  // =========================
  shortDescription: {
    bn: "মলা মাছ—ঘরোয়া ঝোল, ভুনা বা হালকা ভাজিতে দারুণ। পুষ্টিগুণে সমৃদ্ধ।",
    en: "Mola is excellent for light curries and home-style dishes—nutrient-dense and flavorful.",
  },

  // =========================
  // Overview
  // =========================
  overview: {
    bn:
      "মলা (Amblypharyngodon mola) বাংলাদেশের বহুল পরিচিত ছোট দেশি মাছ। এটি অনেক সময় হাড়সহ খাওয়া হয়—ফলে ক্যালসিয়ামসহ খনিজ উপাদান বেশি পাওয়া যায়। গবেষণায় মলা মাছকে ভিটামিন A-সমৃদ্ধ ছোট মাছ হিসেবে উল্লেখ করা হয়েছে, যা দৈনন্দিন খাদ্যতালিকায় পুষ্টিগুণ যোগ করতে সাহায্য করে।",
    en:
      "Mola (Amblypharyngodon mola) is a popular small indigenous fish in Bangladesh. It’s often eaten whole (including bones), which increases mineral intake such as calcium. Studies highlight mola as a vitamin A-rich small fish that can meaningfully contribute to diet quality.",
  },

  // =========================
  // Health benefits
  // =========================
  healthBenefits: {
    bn: [
      "ভিটামিন A-সমৃদ্ধ—চোখের স্বাস্থ্যে ও ইমিউন ফাংশনে সহায়ক পুষ্টি যোগায়।",
      "হাড়সহ খাওয়ার কারণে ক্যালসিয়ামের ভালো উৎস—হাড়ের স্বাস্থ্যে সহায়ক।",
      "আয়রনসহ গুরুত্বপূর্ণ খনিজ উপাদান দেয়—দৈনন্দিন পুষ্টিতে সহায়ক।",
      "বাচ্চা/কিশোর-কিশোরী ও পরিবারের জন্য পুষ্টি-বান্ধব ছোট মাছ হিসেবে পরিচিত।",
    ],
    en: [
      "Rich in vitamin A—supports vision and immune function.",
      "Good source of calcium due to edible bones—supports bone health.",
      "Provides minerals including iron—supports everyday nutrition.",
      "Often promoted as a nutrient-dense small fish for family diets.",
    ],
  },

  // =========================
  // Cooking tips
  // =========================
  cookingTips: {
    bn: [
      "হালকা করে ধুয়ে পানি ঝরিয়ে নিন—বেশি ঘষাঘষি করলে মাছ নরম হয়ে যেতে পারে।",
      "ঝোলে রান্না করলে মাঝারি আঁচে ধীরে রান্না করুন—স্বাদ ভালো থাকে।",
      "স্বাস্থ্যসম্মত রাখতে তেল কম দিন; পেঁয়াজ-রসুন-হলুদ-লবণ বেসে দারুণ হয়।",
      "ভাজা হলে মাঝারি আঁচে হালকা ক্রিস্প করে নিন—অতিরিক্ত কড়া করবেন না।",
    ],
    en: [
      "Rinse gently and drain well—avoid over-handling.",
      "For curry, cook slowly on medium heat for best flavor.",
      "Use less oil for a healthier dish—works well with turmeric, salt, onion/garlic base.",
      "If frying, crisp lightly on medium heat—avoid over-browning.",
    ],
  },

  // =========================
  // Nutrition
  // =========================
  nutrition: {
  per100g: {
    Calories: "প্রায় ৯৫ কিলোক্যালরি",
    Protein: "প্রায় ১৯ গ্রাম",
    Fat: "প্রায় ২.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৬ গ্রাম",
    Cholesterol: "প্রায় ৫০ মি.গ্রা.",
    Omega3: "প্রায় ০.৩ গ্রাম",
    VitaminA: "প্রায় ১,৯৬০ মাইক্রোগ্রাম",
    Calcium: "প্রায় ১,০৭০ মি.গ্রা.",
    Iron: "প্রায় ৭.০ মি.গ্রা.",
    Phosphorus: "প্রায় ২৩০ মি.গ্রা.",
    Sodium: "প্রায় ৬০ মি.গ্রা.",
    Potassium: "প্রায় ৩০০ মি.গ্রা.",
    VitaminD: "প্রায় ২.৫ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.২ মাইক্রোগ্রাম",
    Note: "মলা মাছ সাধারণত কাঁটাসহ খাওয়া হয়—তাই ক্যালসিয়াম ও ভিটামিন A অত্যন্ত বেশি। প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 95 kcal",
    Protein: "Approx. 19 g",
    Fat: "Approx. 2.5 g",
    SaturatedFat: "Approx. 0.6 g",
    Cholesterol: "Approx. 50 mg",
    Omega3: "Approx. 0.3 g",
    VitaminA: "Approx. 1,960 µg",
    Calcium: "Approx. 1,070 mg",
    Iron: "Approx. 7.0 mg",
    Phosphorus: "Approx. 230 mg",
    Sodium: "Approx. 60 mg",
    Potassium: "Approx. 300 mg",
    VitaminD: "Approx. 2.5 µg",
    VitaminB12: "Approx. 2.2 µg",
    Note: "Mola is usually eaten whole, making it exceptionally rich in calcium and vitamin A. Natural variation may occur.",
  },
},
},

  // ========== Shrimp & Prawn ==========
  {
  id: 14,
  slug: "chingri-golda",
  category: CATEGORY_MAP.SHRIMP_PRAWN,
  source: "sea_river",

  // Legacy-safe names
  name: "চিংড়ি (গলদা)",
  nameBn: "চিংড়ি (গলদা)",
  nameEn: "Prawn (Golda)",

  // New schema names
  title: {
    bn: "গলদা চিংড়ি",
    en: "Golda Prawn",
  },
  subtitle: {
    bn: "প্রিমিয়াম স্বাদ—প্রোটিনসমৃদ্ধ, কোরমা/কারি/বিরিয়ানিতে পারফেক্ট",
    en: "Premium taste—protein-rich, perfect for curry, korma & biryani",
  },

  // Pricing (LEGACY-SAFE — keep these)
  price: 840,
  priceMin: 1350, // ✅ starts from (min per-kg) based on grade
  priceMax: 1900, // ✅ max per-kg based on grade
  unit: "kg",
  weight: "1kg",

  // Media
  image: "/images/fish/golda/golda-1.webp",
  images: [
    "/images/fish/golda/golda-1.webp",
    "/images/fish/golda/golda-2.webp",
    "/images/fish/golda/golda-3.webp",
    "/images/fish/golda/golda-4.webp",
    "/images/fish/golda/golda-5.webp",
  ],


  // Badges
  badges: ["Shrimp & prawn", "Premium", "High protein", "Low saturated fat"],

  // Notes / descriptions
  priceNoteBn: "সাইজ/গ্রেড (কেজিতে কয়টা) অনুযায়ী দাম নির্ধারিত হয়।",
  priceNote: {
    bn: "সাইজ/গ্রেড (কেজিতে কয়টা) অনুযায়ী দাম নির্ধারিত হয়।",
    en: "Price varies depending on grade (pieces per kg).",
  },

  shortDescription: {
    bn: "গলদা চিংড়ি—বিরিয়ানি, কোরমা ও ঝাল-ঝোলে রান্নার জন্য দারুণ প্রিমিয়াম অপশন।",
    en: "Golda prawn—an excellent premium choice for biryani, korma, and spicy curries.",
  },

  overview: {
    bn:
      "গলদা চিংড়ি বাংলাদেশের সবচেয়ে জনপ্রিয় প্রিমিয়াম চিংড়িগুলোর একটি। এর মাংস নরম কিন্তু ফার্ম টেক্সচারের, স্বাদে মিষ্টি ঘ্রাণযুক্ত—কোরমা, মালাই কারি, ভুনা বা বিরিয়ানিতে দারুণ মানায়। স্বাস্থ্যসম্মত রান্নার জন্য বেশি তেল/বাটার না দিয়ে, ঝোল/কোরমা টাইপ রান্না বেছে নিন।",
    en:
      "Golda prawn is one of Bangladesh’s most loved premium prawns. It has a tender yet firm texture with a naturally sweet flavor—great for korma, malai curry, bhuna, and biryani. For a healthier meal, avoid heavy butter/oil and choose curry-style cooking instead of deep frying.",
  },

  healthBenefits: {
    bn: [
      "প্রোটিনসমৃদ্ধ—দৈনন্দিন শক্তি ও মাংসপেশি রক্ষণাবেক্ষণে সহায়ক।",
      "স্যাচুরেটেড ফ্যাট তুলনামূলক কম—রান্নায় তেল নিয়ন্ত্রণ করলে স্বাস্থ্যসম্মত থাকে।",
      "সেলেনিয়াম/ভিটামিন B12 জাতীয় মাইক্রোনিউট্রিয়েন্ট পাওয়ার সম্ভাবনা থাকে (সীফুডে সাধারণত থাকে)।",
      "খাদ্যতালিকায় বৈচিত্র্য আনে—পরিমিত পরিমাণে ভালো অপশন।",
    ],
    en: [
      "High in protein—supports daily strength and muscle maintenance.",
      "Relatively low in saturated fat—healthier when cooked with minimal oil.",
      "Seafood often provides micronutrients like selenium and vitamin B12.",
      "A satisfying premium option when eaten in moderation.",
    ],
  },

  cookingTips: {
    bn: [
      "ভালোভাবে পরিষ্কার করে ধুয়ে পানি ঝরিয়ে নিন—অতিরিক্ত পানি থাকলে ঝোলে স্বাদ কমে যায়।",
      "বেশি সময় রান্না করবেন না—চিংড়ি শক্ত হয়ে যেতে পারে (overcook করলে rubbery হয়)।",
      "মালাই/কোরমা হলে মাঝারি আঁচে রান্না করুন—গ্রেভি সুন্দর হবে।",
      "স্বাস্থ্যসম্মত রাখতে ডিপ ফ্রাই এড়িয়ে চলুন; ঝোল/গ্রিল/স্টিম টাইপ রান্না বেছে নিন।",
    ],
    en: [
      "Clean well and drain—extra water dilutes flavor.",
      "Don’t overcook—prawns can turn rubbery.",
      "For malai/korma, cook on medium heat for a smooth gravy.",
      "Avoid deep frying; choose curry/grill/steam for a healthier option.",
    ],
  },

  nutrition: {
  per100g: {
    Calories: "প্রায় ৯৮ কিলোক্যালরি",
    Protein: "প্রায় ২১ গ্রাম",
    Fat: "প্রায় ১.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৩ গ্রাম",
    Cholesterol: "প্রায় ১৭০ মি.গ্রা.",
    Omega3: "প্রায় ০.৩ গ্রাম",
    Sodium: "প্রায় ১৫০ মি.গ্রা.",
    Potassium: "প্রায় ২৬০ মি.গ্রা.",
    Calcium: "প্রায় ৭০ মি.গ্রা.",
    Iron: "প্রায় ১.৮ মি.গ্রা.",
    VitaminD: "প্রায় ১.৫ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ১.৯ মাইক্রোগ্রাম",
    Note: "কোলেস্টেরল তুলনামূলক বেশি; উৎস, সাইজ ও রান্নার ধরন অনুযায়ী কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 98 kcal",
    Protein: "Approx. 21 g",
    Fat: "Approx. 1.5 g",
    SaturatedFat: "Approx. 0.3 g",
    Cholesterol: "Approx. 170 mg",
    Omega3: "Approx. 0.3 g",
    Sodium: "Approx. 150 mg",
    Potassium: "Approx. 260 mg",
    Calcium: "Approx. 70 mg",
    Iron: "Approx. 1.8 mg",
    VitaminD: "Approx. 1.5 µg",
    VitaminB12: "Approx. 1.9 µg",
    Note: "Cholesterol is relatively high. Natural variation may occur by source and size.",
  },
},

  // =========================
  // New pricing schema (grade-based, still sold by kg)
  // =========================
  pricingModel: "KG_BY_GRADE",
  sellBy: "kg", // ✅ sold by weight

  // Homepage listing can say: "Starts from ৳1350/kg"
  startsFrom: {
    amount: 1350,
    unit: "kg",
  },

  qtyDefaults: {
    default: 1, // cart starts from 1kg
    min: 1,
    step: 1,
  },

  // Grade options: “kilo-te koyta” based slabs
  sizePricing: [
    {
      sizeKey: "4-5pcs",
      label: { bn: "৪–৫ পিস/কেজি", en: "4–5 pcs/kg" },
      countPerKg: { min: 4, max: 5 },
      pricePerKg: 1900,
    },
    {
      sizeKey: "6-8pcs",
      label: { bn: "৬–৮ পিস/কেজি", en: "6–8 pcs/kg" },
      countPerKg: { min: 6, max: 8 },
      pricePerKg: 1700,
    },
    {
      sizeKey: "10-14pcs",
      label: { bn: "১০–১৪ পিস/কেজি", en: "10–14 pcs/kg" },
      countPerKg: { min: 10, max: 14 },
      pricePerKg: 1500,
    },
    {
      sizeKey: "18-20pcs",
      label: { bn: "১৮–২০ পিস/কেজি", en: "18–20 pcs/kg" },
      countPerKg: { min: 18, max: 20 },
      pricePerKg: 1350,
    },
  ],
},
  {
  id: 15,
  slug: "chingri-bagda",
  category: CATEGORY_MAP.SHRIMP_PRAWN,
  source: "sea",

  // Legacy-safe names
  name: "চিংড়ি (বাগদা)",
  nameBn: "চিংড়ি (বাগদা)",
  nameEn: "Prawn (Bagda)",

  // New schema names
  title: {
    bn: "বাগদা চিংড়ি",
    en: "Bagda Prawn",
  },
  subtitle: {
    bn: "বড় সাইজের সমুদ্রের চিংড়ি—উচ্চ প্রোটিন, ঝোল ও ফ্রাইয়ের জন্য জনপ্রিয়",
    en: "Large sea prawn—high protein, popular for curry and frying",
  },

  // Pricing (LEGACY-SAFE)
  price: 840,
  priceMin: 1250, // ✅ starts from 1250/kg
  priceMax: 1250, // ✅ if you don’t want range yet, keep equal; update later if needed
  unit: "kg",
  weight: "1kg",

  // Media
  image: "/images/fish/bagda/bagda-1.webp",
  images: [
    "/images/fish/bagda/bagda-1.webp",
    "/images/fish/bagda/bagda-2.webp",
    "/images/fish/bagda/bagda-3.webp",
    "/images/fish/bagda/bagda-4.webp",
  ],


  // Badges
  badges: ["Shrimp & prawn", "Sea fish", "High protein", "Large size"],

  // Notes
  priceNoteBn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
  priceNote: {
    bn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
    en: "Price varies depending on size.",
  },

  shortDescription: {
    bn: "বাগদা চিংড়ি—বড় সাইজের সমুদ্রের চিংড়ি, ফ্রাই ও ঝোলের জন্য খুবই জনপ্রিয়।",
    en: "Bagda prawn—large sea prawn, widely popular for frying and curries.",
  },

  overview: {
    bn:
      "বাগদা চিংড়ি (Black Tiger Prawn) সমুদ্রের বড় সাইজের চিংড়ি হিসেবে পরিচিত। এর মাংস শক্ত কিন্তু রসালো, তাই ফ্রাই, ঝোল, ভুনা বা গ্রিল—সব ধরনের রান্নায় ভালো ফল দেয়। প্রোটিন বেশি হলেও এতে কোলেস্টেরল তুলনামূলক বেশি থাকতে পারে, তাই স্বাস্থ্যসম্মত রান্না ও পরিমিত পরিমাণে খাওয়া গুরুত্বপূর্ণ।",
    en:
      "Bagda (Black Tiger Prawn) is a large sea prawn known for its firm yet juicy texture. It performs well in frying, curries, bhuna, and grilling. While it is high in protein, it can contain relatively higher cholesterol, so healthy cooking methods and portion control are important.",
  },

  healthBenefits: {
    bn: [
      "উচ্চ প্রোটিন—মাংসপেশি রক্ষণাবেক্ষণ ও শক্তি জোগাতে সহায়ক।",
      "স্যাচুরেটেড ফ্যাট কম—তেল কম ব্যবহার করলে স্বাস্থ্যসম্মত থাকে।",
      "সামুদ্রিক খাবারে সাধারণত সেলেনিয়াম ও ভিটামিন B12 পাওয়া যায়।",
      "তবে কোলেস্টেরল তুলনামূলক বেশি—পরিমিত পরিমাণে খাওয়া উত্তম।",
    ],
    en: [
      "High in protein—supports muscle maintenance and daily energy.",
      "Low in saturated fat—healthier when cooked with minimal oil.",
      "Seafood often provides selenium and vitamin B12.",
      "Contains relatively higher cholesterol—best consumed in moderation.",
    ],
  },

  cookingTips: {
    bn: [
      "রান্নার আগে ভালোভাবে পরিষ্কার করে ধুয়ে পানি ঝরিয়ে নিন।",
      "ফ্রাই করলে মাঝারি আঁচে করুন—অতিরিক্ত কড়া করলে শক্ত হয়ে যেতে পারে।",
      "ঝোলে বা ভুনায় রান্না করলে তেল কম দিন—স্বাদ ও স্বাস্থ্য দুটোই বজায় থাকবে।",
      "কোলেস্টেরল নিয়ন্ত্রণে রাখতে ডিপ ফ্রাই নিয়মিত না করাই ভালো।",
    ],
    en: [
      "Clean thoroughly and drain well before cooking.",
      "For frying, use medium heat—over-frying makes it tough.",
      "Use less oil in curries or bhuna for better health balance.",
      "Avoid frequent deep frying if managing cholesterol.",
    ],
  },

  nutrition: {
  per100g: {
    Calories: "প্রায় ১০০ কিলোক্যালরি",
    Protein: "প্রায় ২০ গ্রাম",
    Fat: "প্রায় ১.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৩ গ্রাম",
    Cholesterol: "প্রায় ১৭৫ মি.গ্রা.",
    Omega3: "প্রায় ০.৩ গ্রাম",
    Sodium: "প্রায় ১৬০ মি.গ্রা.",
    Potassium: "প্রায় ২৫০ মি.গ্রা.",
    Calcium: "প্রায় ৮০ মি.গ্রা.",
    Iron: "প্রায় ১.৭ মি.গ্রা.",
    VitaminD: "প্রায় ১.৪ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ১.৮ মাইক্রোগ্রাম",
    Note: "কোলেস্টেরল তুলনামূলক বেশি; উৎস, সাইজ ও রান্নার ধরন অনুযায়ী কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 100 kcal",
    Protein: "Approx. 20 g",
    Fat: "Approx. 1.5 g",
    SaturatedFat: "Approx. 0.3 g",
    Cholesterol: "Approx. 175 mg",
    Omega3: "Approx. 0.3 g",
    Sodium: "Approx. 160 mg",
    Potassium: "Approx. 250 mg",
    Calcium: "Approx. 80 mg",
    Iron: "Approx. 1.7 mg",
    VitaminD: "Approx. 1.4 µg",
    VitaminB12: "Approx. 1.8 µg",
    Note: "Cholesterol is relatively high. Natural variation may occur by source and size.",
  },
},

  // =========================
  // New schema (simple kg-based pricing)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Homepage card text: "Starts from ৳1250/kg"
  startsFrom: {
    amount: 1250,
    unit: "kg",
  },

  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },
},
  {
  id: 16,
  slug: "chingri-chaka",
  category: CATEGORY_MAP.SHRIMP_PRAWN,
  source: "sea",

  // Legacy-safe names
  name: "চিংড়ি (চাকা)",
  nameBn: "চিংড়ি (চাকা)",
  nameEn: "Prawn (Chaka)",

  // New schema names
  title: {
    bn: "চাকা চিংড়ি",
    en: "Chaka Prawn",
  },
  subtitle: {
    bn: "ছোট সাইজের সামুদ্রিক চিংড়ি—ঝাল ও ভুনার জন্য আদর্শ",
    en: "Small-sized sea prawn—ideal for spicy curries and bhuna",
  },

  // Pricing (LEGACY-SAFE)
  price: 840,
  priceMin: 850, // ✅ starts from 850/kg
  priceMax: 1000,
  unit: "kg",
  weight: "1kg",

  // Media
  image: "/images/fish/chaka/c-1.webp",
  images: ["/images/fish/chaka/c-1.webp"],


  // Badges
  badges: ["Shrimp & prawn", "Sea fish", "High protein", "Small size"],

  // Notes
  priceNoteBn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
  priceNote: {
    bn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
    en: "Price varies depending on size.",
  },

  shortDescription: {
    bn: "চাকা চিংড়ি—ছোট সাইজের সামুদ্রিক চিংড়ি, ঝাল ঝোল ও ভুনার জন্য খুব উপযোগী।",
    en: "Chaka prawn—small sea prawn, excellent for spicy curries and bhuna.",
  },

  overview: {
    bn:
      "চাকা চিংড়ি ছোট সাইজের হলেও স্বাদে তীব্র ও ঘন। ঝাল ঝোল, ভুনা বা মসলা-ভিত্তিক রান্নায় এটি বিশেষভাবে জনপ্রিয়। প্রোটিন বেশি হলেও এতে কোলেস্টেরল মাঝারি থেকে তুলনামূলক বেশি থাকতে পারে, তাই স্বাস্থ্যসম্মত রান্না ও পরিমিত পরিমাণে খাওয়াই ভালো।",
    en:
      "Chaka prawn is small in size but rich in flavor. It is especially popular in spicy curries and bhuna-style dishes. While high in protein, it can contain moderate to relatively high cholesterol, so mindful cooking and portion control are recommended.",
  },

  healthBenefits: {
    bn: [
      "উচ্চ প্রোটিন—শক্তি ও মাংসপেশি রক্ষণাবেক্ষণে সহায়ক।",
      "ফ্যাট কম—তেল কম ব্যবহার করলে তুলনামূলক স্বাস্থ্যসম্মত।",
      "সামুদ্রিক খাবার হিসেবে সেলেনিয়াম ও ভিটামিন B12 পাওয়ার সম্ভাবনা থাকে।",
      "কোলেস্টেরল মাঝারি–উচ্চ—নিয়মিত বেশি পরিমাণে না খাওয়াই ভালো।",
    ],
    en: [
      "High protein—supports muscle maintenance and daily energy.",
      "Low fat—healthier when cooked with minimal oil.",
      "Seafood often provides selenium and vitamin B12.",
      "Moderate to high cholesterol—best eaten in moderation.",
    ],
  },

  cookingTips: {
    bn: [
      "রান্নার আগে ভালোভাবে পরিষ্কার করে ধুয়ে পানি ঝরিয়ে নিন।",
      "ঝাল বা ভুনায় রান্না করলে মাঝারি আঁচে ধীরে রান্না করুন—স্বাদ ভালো আসে।",
      "অতিরিক্ত তেল ব্যবহার না করাই স্বাস্থ্যসম্মত।",
      "ডিপ ফ্রাই নিয়মিত না করে ঝোল/ভুনা বেছে নিন।",
    ],
    en: [
      "Clean thoroughly and drain well before cooking.",
      "Cook slowly on medium heat for spicy or bhuna dishes.",
      "Avoid excessive oil for a healthier result.",
      "Prefer curry or bhuna over frequent deep frying.",
    ],
  },

  nutrition: {
  per100g: {
    Calories: "প্রায় ৯৫ কিলোক্যালরি",
    Protein: "প্রায় ২১ গ্রাম",
    Fat: "প্রায় ১.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৩ গ্রাম",
    Cholesterol: "প্রায় ১৬০ মি.গ্রা.",
    Omega3: "প্রায় ০.৩ গ্রাম",
    Sodium: "প্রায় ১৫৫ মি.গ্রা.",
    Potassium: "প্রায় ২৫৫ মি.গ্রা.",
    Calcium: "প্রায় ৭৫ মি.গ্রা.",
    Iron: "প্রায় ১.৬ মি.গ্রা.",
    VitaminD: "প্রায় ১.৪ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ১.৭ মাইক্রোগ্রাম",
    Note: "কোলেস্টেরল তুলনামূলক বেশি; উৎস, সাইজ ও রান্নার ধরন অনুযায়ী কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 95 kcal",
    Protein: "Approx. 21 g",
    Fat: "Approx. 1.5 g",
    SaturatedFat: "Approx. 0.3 g",
    Cholesterol: "Approx. 160 mg",
    Omega3: "Approx. 0.3 g",
    Sodium: "Approx. 155 mg",
    Potassium: "Approx. 255 mg",
    Calcium: "Approx. 75 mg",
    Iron: "Approx. 1.6 mg",
    VitaminD: "Approx. 1.4 µg",
    VitaminB12: "Approx. 1.7 µg",
    Note: "Cholesterol is relatively high. Natural variation may occur by source and size.",
  },
},

  // =========================
  // New schema (simple kg-based pricing)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Homepage card text: "Starts from ৳850/kg"
  startsFrom: {
    amount: 850,
    unit: "kg",
  },

  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },
},
  {
  id: 17,
  slug: "chingri-kathaly",
  category: CATEGORY_MAP.SHRIMP_PRAWN,
  source: "sea",

  // Legacy-safe names
  name: "চিংড়ি (কাঠালি)",
  nameBn: "চিংড়ি (কাঠালি)",
  nameEn: "Prawn (Kathaly)",

  // New schema names
  title: {
    bn: "কাঠালি চিংড়ি",
    en: "Kathaly Prawn",
  },
  subtitle: {
    bn: "বাজেট-ফ্রেন্ডলি সামুদ্রিক চিংড়ি—দৈনন্দিন রান্নার জন্য উপযোগী",
    en: "Budget-friendly sea prawn—suitable for everyday cooking",
  },

  // Pricing (LEGACY-SAFE)
  price: 650,
  priceMin: 1150, // ✅ starts from 1150/kg
  priceMax: 1400,
  unit: "kg",
  weight: "1kg",

  // Media
  image: "/images/fish/kathaly/kathaly-1.webp",
  images: [
    "/images/fish/kathaly/kathaly-1.webp",
    "/images/fish/kathaly/kathaly-2.webp",
  ],


  // Badges
  badges: [
    "Shrimp & prawn",
    "Sea fish",
    "Budget friendly",
    "High protein",
  ],

  // Notes
  priceNoteBn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
  priceNote: {
    bn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
    en: "Price varies depending on size.",
  },

  shortDescription: {
    bn: "কাঠালি চিংড়ি—দাম তুলনামূলক কম হলেও স্বাদে ভালো, ঝোল ও ভুনার জন্য উপযোগী।",
    en: "Kathaly prawn—affordable yet tasty, suitable for curries and bhuna.",
  },

  overview: {
    bn:
      "কাঠালি চিংড়ি ছোট–মাঝারি সাইজের সামুদ্রিক চিংড়ি, যা বাজেটের মধ্যে ভালো স্বাদ দেয়। দৈনন্দিন ঝোল, ভুনা বা হালকা মসলাদার রান্নার জন্য এটি জনপ্রিয়। প্রোটিন বেশি হলেও এতে কোলেস্টেরল মাঝারি থেকে তুলনামূলক বেশি থাকতে পারে—তাই তেল কম দিয়ে রান্না ও পরিমিত পরিমাণে খাওয়া ভালো।",
    en:
      "Kathaly prawn is a small-to-medium sized sea prawn that offers good flavor at an affordable price. It works well in everyday curries and bhuna-style dishes. While high in protein, it may contain moderate to relatively high cholesterol, so healthier cooking methods and portion control are advised.",
  },

  healthBenefits: {
    bn: [
      "প্রোটিনসমৃদ্ধ—দৈনন্দিন শক্তি ও মাংসপেশি রক্ষণাবেক্ষণে সহায়ক।",
      "ফ্যাট কম—অতিরিক্ত তেল ব্যবহার না করলে তুলনামূলক স্বাস্থ্যসম্মত।",
      "সামুদ্রিক খাবার হিসেবে ভিটামিন B12 ও সেলেনিয়াম পাওয়ার সম্ভাবনা থাকে।",
      "কোলেস্টেরল মাঝারি–উচ্চ—নিয়মিত বেশি পরিমাণে না খাওয়াই ভালো।",
    ],
    en: [
      "High protein—supports muscle maintenance and daily energy.",
      "Low fat—healthier when cooked with minimal oil.",
      "Seafood often provides vitamin B12 and selenium.",
      "Moderate to high cholesterol—best consumed in moderation.",
    ],
  },

  cookingTips: {
    bn: [
      "রান্নার আগে পরিষ্কার করে ধুয়ে পানি ঝরিয়ে নিন।",
      "ঝোল বা ভুনায় রান্না করলে মাঝারি আঁচে রান্না করুন।",
      "ডিপ ফ্রাই না করে ঝোল/ভুনা/স্টির-ফ্রাই বেছে নিন।",
      "স্বাস্থ্যসম্মত রাখতে তেল ও লবণ পরিমিত রাখুন।",
    ],
    en: [
      "Clean well and drain before cooking.",
      "Cook on medium heat for curries or bhuna.",
      "Avoid deep frying; prefer curry or stir-fry.",
      "Use moderate oil and salt for better health balance.",
    ],
  },

  nutrition: {
  per100g: {
    Calories: "প্রায় ৯৫ কিলোক্যালরি",
    Protein: "প্রায় ২০ গ্রাম",
    Fat: "প্রায় ১.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৩ গ্রাম",
    Cholesterol: "প্রায় ১৬০ মি.গ্রা.",
    Omega3: "প্রায় ০.৩ গ্রাম",
    Sodium: "প্রায় ১৫০ মি.গ্রা.",
    Potassium: "প্রায় ২৫০ মি.গ্রা.",
    Calcium: "প্রায় ৭৫ মি.গ্রা.",
    Iron: "প্রায় ১.৬ মি.গ্রা.",
    VitaminD: "প্রায় ১.৪ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ১.৭ মাইক্রোগ্রাম",
    Note: "কোলেস্টেরল তুলনামূলক বেশি; উৎস, সাইজ ও রান্নার ধরন অনুযায়ী কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 95 kcal",
    Protein: "Approx. 20 g",
    Fat: "Approx. 1.5 g",
    SaturatedFat: "Approx. 0.3 g",
    Cholesterol: "Approx. 160 mg",
    Omega3: "Approx. 0.3 g",
    Sodium: "Approx. 150 mg",
    Potassium: "Approx. 250 mg",
    Calcium: "Approx. 75 mg",
    Iron: "Approx. 1.6 mg",
    VitaminD: "Approx. 1.4 µg",
    VitaminB12: "Approx. 1.7 µg",
    Note: "Cholesterol is relatively high. Natural variation may occur by source and size.",
  },
},

  // =========================
  // New schema (kg-based selling)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Homepage card text
  startsFrom: {
    amount: 1150,
    unit: "kg",
  },

  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },
},
  {
  id: 18,
  slug: "chingri-icha",
  category: CATEGORY_MAP.SHRIMP_PRAWN,
  source: "sea",

  // Legacy-safe names
  name: "চিংড়ি (ইঁছা)",
  nameBn: "চিংড়ি (ইঁছা)",
  nameEn: "Prawn (Icha)",

  // New schema names
  title: {
    bn: "ইঁছা চিংড়ি",
    en: "Icha Prawn",
  },
  subtitle: {
    bn: "ছোট সাইজের চিংড়ি—ঝোল, ভর্তা ও ঝাল রান্নায় দারুণ",
    en: "Small prawns—great for curry, bhorta, and spicy dishes",
  },

  // Pricing (LEGACY-SAFE)
  price: 700,
  priceMin: 1000, // ✅ starts from 1000/kg
  priceMax: 1300,
  unit: "kg",
  weight: "1kg",

  // Media
  image: "/images/fish/Icha/icha-1.webp",
  images: [
    "/images/fish/Icha/icha-1.webp",
    "/images/fish/Icha/icha-2.webp",
    "/images/fish/Icha/icha-3.webp",
  ],


  // Badges
  badges: ["Shrimp & prawn", "Small", "High protein", "Quick cook"],

  // Notes
  priceNoteBn: "দাম বাজারদর অনুযায়ী পরিবর্তিত হতে পারে।",
  priceNote: {
    bn: "দাম বাজারদর অনুযায়ী পরিবর্তিত হতে পারে।",
    en: "Price may vary depending on market availability.",
  },

  shortDescription: {
    bn: "ইঁছা চিংড়ি—ছোট সাইজের চিংড়ি, ঝোল ও ভর্তার জন্য খুবই উপযোগী।",
    en: "Icha prawn—small prawns, ideal for curries and bhorta.",
  },

  overview: {
    bn:
      "ইঁছা চিংড়ি ছোট সাইজের হওয়ায় দ্রুত রান্না হয় এবং মসলার স্বাদ সহজে ধরে। ঝোল, ভর্তা, ঝাল ভুনা কিংবা শুকনা রান্নায় এটি খুব ভালো ফল দেয়। প্রোটিন বেশি হলেও চিংড়িতে কোলেস্টেরল মাঝারি–উচ্চ থাকতে পারে, তাই নিয়মিত বেশি পরিমাণে না খেয়ে পরিমিত পরিমাণে খাওয়া স্বাস্থ্যসম্মত।",
    en:
      "Icha prawn is small in size, cooks quickly, and absorbs spices well. It works great in curries, bhorta, spicy bhuna, and dry preparations. While high in protein, prawns can have moderate to high cholesterol, so it’s best enjoyed in sensible portions.",
  },

  healthBenefits: {
    bn: [
      "প্রোটিনসমৃদ্ধ—দৈনন্দিন পুষ্টিতে সহায়ক।",
      "ফ্যাট কম—তেল কম ব্যবহার করলে স্বাস্থ্যসম্মত থাকে।",
      "সামুদ্রিক খাবার হিসেবে ভিটামিন B12/সেলেনিয়াম জাতীয় উপাদান পাওয়ার সম্ভাবনা থাকে।",
      "কোলেস্টেরল মাঝারি–উচ্চ—পরিমিত পরিমাণে খাওয়াই ভালো।",
    ],
    en: [
      "High protein—supports everyday nutrition.",
      "Low fat—healthier when cooked with minimal oil.",
      "Seafood often provides nutrients like vitamin B12 and selenium.",
      "Moderate to high cholesterol—best eaten in moderation.",
    ],
  },

  cookingTips: {
    bn: [
      "ছোট চিংড়ি দ্রুত সেদ্ধ হয়ে যায়—বেশি সময় রান্না করবেন না।",
      "ঝোলের জন্য পেঁয়াজ-রসুন-হলুদ বেসে হালকা আঁচে রান্না করুন।",
      "ভর্তার জন্য হালকা ভেজে পেঁয়াজ, কাঁচামরিচ, সামান্য সরিষার তেল দিলে স্বাদ বাড়ে।",
      "স্বাস্থ্যসম্মত রাখতে ডিপ ফ্রাই এড়িয়ে চলুন।",
    ],
    en: [
      "Small prawns cook fast—avoid overcooking.",
      "For curry, cook gently on low-medium heat with onion-garlic-turmeric base.",
      "For bhorta, lightly fry and mix with onion, green chili, and a touch of mustard oil.",
      "Avoid deep frying for a healthier option.",
    ],
  },

  nutrition: {
  per100g: {
    Calories: "প্রায় ৯৫ কিলোক্যালরি",
    Protein: "প্রায় ২১ গ্রাম",
    Fat: "প্রায় ১.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৩ গ্রাম",
    Cholesterol: "প্রায় ১৬০ মি.গ্রা.",
    Omega3: "প্রায় ০.৩ গ্রাম",
    Sodium: "প্রায় ১৫০ মি.গ্রা.",
    Potassium: "প্রায় ২৫০ মি.গ্রা.",
    Calcium: "প্রায় ৭৫ মি.গ্রা.",
    Iron: "প্রায় ১.৬ মি.গ্রা.",
    VitaminD: "প্রায় ১.৪ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ১.৭ মাইক্রোগ্রাম",
    Note: "কোলেস্টেরল তুলনামূলক বেশি; উৎস, সাইজ ও রান্নার ধরন অনুযায়ী কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 95 kcal",
    Protein: "Approx. 21 g",
    Fat: "Approx. 1.5 g",
    SaturatedFat: "Approx. 0.3 g",
    Cholesterol: "Approx. 160 mg",
    Omega3: "Approx. 0.3 g",
    Sodium: "Approx. 150 mg",
    Potassium: "Approx. 250 mg",
    Calcium: "Approx. 75 mg",
    Iron: "Approx. 1.6 mg",
    VitaminD: "Approx. 1.4 µg",
    VitaminB12: "Approx. 1.7 µg",
    Note: "Cholesterol is relatively high. Natural variation may occur by source and size.",
  },
},

  // =========================
  // New schema (kg-based selling)
  // =========================
  pricingModel: "KG_SIMPLE",

  sellBy: "kg",

  // Homepage card text
  startsFrom: {
    amount: 1000,
    unit: "kg",
  },

  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },
},

  // ========== Premium & Seasonal Sea Fish ==========
  {
  id: 3,
  slug: "coral",
  category: CATEGORY_MAP.PREMIUM_SEA,
  source: "sea",

  // Legacy-safe names
  name: "কোরাল (Coral)",
  nameBn: "কোরাল",
  nameEn: "Coral",

  // New schema names
  title: {
    bn: "কোরাল মাছ",
    en: "Coral Fish",
  },
  subtitle: {
    bn: "প্রিমিয়াম সামুদ্রিক সাদা মাছ—গ্রিল ও ফ্রাইয়ের জন্য আদর্শ",
    en: "Premium sea white fish—ideal for grilling and frying",
  },

  // Pricing (LEGACY-SAFE — keep these)
  price: 850, // legacy-safe
  priceMin: 1100, // updated to match sizePricing min (homepage: starts from)
  priceMax: 1700, // updated to match sizePricing max
  unit: "kg",
  weight: "1kg",

  // Homepage display helper (NEW)
  startsFrom: {
    pricePerKg: 1100,
    unit: "kg",
  },

  // Media
  image: "/images/fish/koral/koral-1.webp",
  images: [
    "/images/fish/koral/koral-1.webp",
    "/images/fish/koral/koral-2.webp",
    "/images/fish/koral/koral-3.webp",
    "/images/fish/koral/koral-4.webp",
  ],


  // Badges
  badges: ["Sea fish", "Premium", "Lean protein", "Low fat"],

  // Notes
  priceNoteBn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
  priceNote: {
    bn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়।",
    en: "Price varies depending on size.",
  },

  shortDescription: {
    bn: "কোরাল মাছ—প্রিমিয়াম সাদা সামুদ্রিক মাছ, গ্রিল ও ফ্রাইয়ের জন্য খুব জনপ্রিয়।",
    en: "Coral fish—a premium white sea fish, popular for grilling and frying.",
  },

  overview: {
    bn:
      "কোরাল মাছ একটি প্রিমিয়াম সাদা সামুদ্রিক মাছ, যার মাংস শক্ত কিন্তু নরম ও ফ্লেকি। এতে প্রাকৃতিক তেল কম থাকায় গ্রিল, প্যান-ফ্রাই বা হালকা ঝোলের রান্নায় ভালো ফল দেয়। প্রোটিন ভালো হলেও ফ্যাট ও কোলেস্টেরল তুলনামূলক কম, তাই স্বাস্থ্যসম্মত খাদ্যতালিকায় এটি উপযোগী।",
    en:
      "Coral fish is a premium white sea fish with a firm yet flaky texture. Because it is naturally low in fat, it performs well in grilling, pan-frying, and light curries. It provides good protein with relatively low fat and cholesterol, making it suitable for a balanced diet.",
  },

  healthBenefits: {
    bn: [
      "ভালো মানের লিন প্রোটিন—দৈনন্দিন শক্তি ও মাংসপেশি রক্ষণাবেক্ষণে সহায়ক।",
      "ফ্যাট কম—ওজন ও হৃদস্বাস্থ্যের জন্য উপযোগী।",
      "স্যাচুরেটেড ফ্যাট কম—স্বাস্থ্যসম্মত রান্নায় ভালো অপশন।",
      "সামুদ্রিক মাছ হিসেবে ভিটামিন B12 ও মিনারেল পাওয়ার সম্ভাবনা থাকে।",
    ],
    en: [
      "Good source of lean protein—supports muscle maintenance.",
      "Low fat—suitable for weight-conscious and heart-friendly diets.",
      "Low in saturated fat—healthier choice when cooked properly.",
      "Sea fish may provide nutrients like vitamin B12 and minerals.",
    ],
  },

  cookingTips: {
    bn: [
      "গ্রিল বা প্যান-ফ্রাইয়ের আগে হালকা লবণ ও লেবু মাখিয়ে নিলে স্বাদ ভালো আসে।",
      "মাঝারি আঁচে রান্না করুন—বেশি আঁচে মাছ শুকিয়ে যেতে পারে।",
      "স্বাস্থ্যসম্মত রাখতে ডিপ ফ্রাইয়ের বদলে গ্রিল বা প্যান-ফ্রাই বেছে নিন।",
      "হালকা ঝোলেও ভালো হয়—তেল কম ব্যবহার করুন।",
    ],
    en: [
      "Marinate lightly with salt and lemon before grilling or pan-frying.",
      "Cook on medium heat to prevent drying.",
      "Prefer grilling or pan-frying over deep frying.",
      "Works well in light curries with minimal oil.",
    ],
  },

  nutrition: {
  per100g: {
    Calories: "প্রায় ১০০ কিলোক্যালরি",
    Protein: "প্রায় ২০ গ্রাম",
    Fat: "প্রায় ২.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৬ গ্রাম",
    Cholesterol: "প্রায় ৬০ মি.গ্রা.",
    Omega3: "প্রায় ০.৪ গ্রাম",
    Sodium: "প্রায় ৭৫ মি.গ্রা.",
    Potassium: "প্রায় ৩৫০ মি.গ্রা.",
    Calcium: "প্রায় ১৫ মি.গ্রা.",
    Iron: "প্রায় ০.৮ মি.গ্রা.",
    VitaminD: "প্রায় ২.৮ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.৪ মাইক্রোগ্রাম",
    Note: "ফ্যাট কম ও প্রোটিন বেশি; উৎস, সাইজ ও রান্নার ধরন অনুযায়ী কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 100 kcal",
    Protein: "Approx. 20 g",
    Fat: "Approx. 2.5 g",
    SaturatedFat: "Approx. 0.6 g",
    Cholesterol: "Approx. 60 mg",
    Omega3: "Approx. 0.4 g",
    Sodium: "Approx. 75 mg",
    Potassium: "Approx. 350 mg",
    Calcium: "Approx. 15 mg",
    Iron: "Approx. 0.8 mg",
    VitaminD: "Approx. 2.8 µg",
    VitaminB12: "Approx. 2.4 µg",
    Note: "Lean, high-protein fish. Natural variation may occur by source and size.",
  },
},

  // =========================
  // Count-based selling (NEW)
  // =========================
  pricingModel: "WHOLE_BY_SIZE_COUNT",
  sellBy: "count", // user adds number of fish; price shown per kg by size-grade
  countUnit: { bn: "টি", en: "fish" },

  qtyDefaults: {
    default: 1, // 1 fish by default
    min: 1,
    step: 1, // fish count-wise increment
  },

  // Size options from your screenshot (per-kg price varies by grade)
  sizePricing: [
    {
      sizeKey: "1-1.5kg",
      label: { bn: "১–১.৫ কেজি সাইজ", en: "1–1.5 kg size" },
      pricePerKg: 1100,
      approxWholeFishWeightKg: { min: 1, max: 1.5 },
    },
    {
      sizeKey: "2-3kg",
      label: { bn: "২–৩ কেজি সাইজ", en: "2–3 kg size" },
      pricePerKg: 1100,
      approxWholeFishWeightKg: { min: 2, max: 3 },
    },
    {
      sizeKey: "3-4kg",
      label: { bn: "৩–৪ কেজি সাইজ", en: "3–4 kg size" },
      pricePerKg: 1150,
      approxWholeFishWeightKg: { min: 3, max: 4 },
    },
    {
      sizeKey: "5-6kg",
      label: { bn: "৫–৬ কেজি সাইজ", en: "5–6 kg size" },
      pricePerKg: 1250,
      approxWholeFishWeightKg: { min: 5, max: 6 },
    },
    {
      sizeKey: "7-8kg",
      label: { bn: "৭–৮ কেজি সাইজ", en: "7–8 kg size" },
      pricePerKg: 1450,
      approxWholeFishWeightKg: { min: 7, max: 8 },
    },
    {
      sizeKey: "8-10kg",
      label: { bn: "৮–১০ কেজি সাইজ", en: "8–10 kg size" },
      pricePerKg: 1550,
      approxWholeFishWeightKg: { min: 8, max: 10 },
    },
    {
      sizeKey: "10-14kg",
      label: { bn: "১০–১৪ কেজি সাইজ", en: "10–14 kg size" },
      pricePerKg: 1700,
      approxWholeFishWeightKg: { min: 10, max: 14 },
    },
  ],

  // Final price confirmation message (agent workflow)
  finalPriceNotice: {
    bn: "চূড়ান্ত দাম আমাদের এজেন্ট ফোনে/WhatsApp-এ কনফার্ম করবে।",
    en: "Our agent will confirm the final price by phone/WhatsApp.",
  },
},
{
  id: 19,
  slug: "chitol",
  category: CATEGORY_MAP.RIVER_LARGE,
  source: "river",

  // Names
  title: {
    bn: "চিতল",
    en: "Chitol",
  },
  subtitle: {
    bn: "দারুণ স্বাদ ও শক্ত-নরম টেক্সচার—মুইট্টা/কোফতা, ভাজা ও ঝোলে অনন্য",
    en: "Signature taste and firm-tender texture—perfect for kofta, fry, and curry",
  },

  // Pricing (LEGACY-SAFE — keep these)
  price: 420,          // legacy-safe
  priceMin: 1400,
  priceMax: 2200,
  unit: "kg",
  weight: "1kg",

  // Media (use the latest reference exactly)
  image: "/images/fish/chitol/c-1.webp",
  images: [
    "/images/fish/chitol/c-1.webp",
  ],

  // Badges
  badges: ["Premium", "River fish", "Great for kofta", "Firm white meat"],

  // Price note
  priceNote: {
    bn: "সাইজ অনুযায়ী দাম নির্ধারিত হয়—সাইজ যত বড়, প্রতি কেজির দাম তত বেশি।",
    en: "Price varies based on size—bigger size means higher price per kg.",
  },

  // Short description
  shortDescription: {
    bn:
      "চিতল মাছ—ঘন সাদা মাংস ও অনন্য স্বাদের জন্য বিখ্যাত। মুইট্টা/কোফতা, পেটি ভাজা বা ঝোলে রান্নায় অসাধারণ লাগে।",
    en:
      "Chitol—famous for dense white flesh and unique flavor. Excellent for kofta/mince, belly fry, and curries.",
  },

  // Overview
  overview: {
    bn:
      "চিতল (Featherback/Knife fish) বাংলাদেশের নদী-খাল-বিলে পাওয়া প্রিমিয়াম স্বাদের একটি মাছ। এর মাংস ঘন ও সাদা, রান্নায় ভাঙে কম—তাই পেটি ভাজা, ঝোল, দই-চিতল এবং বিশেষ করে মুইট্টা/কোফতা তৈরিতে এটি সবচেয়ে জনপ্রিয়। চিতলে সূক্ষ্ম কাঁটা (pin-bones) থাকতে পারে, তাই কিমা/কোফতার জন্য কাঁটা ছাড়ানো কিমা বা ফিলে কাট নিলে খাওয়া বেশি সুবিধাজনক। সাইজ যত বড় হয়, সাধারণত কাটিং/মাংসের ইয়েল্ড বেশি হয় এবং বাজারদরও প্রতি কেজিতে বেশি হয়।",
    en:
      "Chitol (a featherback/knife fish) is a premium river fish in Bangladesh, loved for its dense white flesh that holds shape well in cooking. That makes it ideal for belly fry, curries, doi-chitol, and especially kofta/minced preparations. It may contain fine pin bones, so boneless mince or fillet cuts are often more convenient. Typically, larger size provides better yield and commands a higher price per kg in the market.",
  },

  // Health benefits
  healthBenefits: {
    bn: [
      "উচ্চ মানের প্রোটিন: দৈনন্দিন শক্তি, মাংসপেশি রক্ষণাবেক্ষণ ও রিকভারি সাপোর্ট করে।",
      "কম-চর্বিযুক্ত খাবার হিসেবে ভালো: ঝোল/স্টিম/হালকা ভুনায় রান্না করলে স্বাস্থ্যসম্মত থাকে।",
      "ওমেগা-৩ ফ্যাটি অ্যাসিড (পরিমাণ ভিন্ন হতে পারে): হার্ট ও মস্তিষ্কের স্বাস্থ্যে সহায়ক।",
      "ভিটামিন B12 ও প্রয়োজনীয় মিনারেল: স্নায়ু ও রক্ত তৈরিতে সহায়তা করে, ক্লান্তি কমাতে সাহায্য করতে পারে।",
      "শিশু ও বয়স্কদের জন্য সতর্কতা: সূক্ষ্ম কাঁটা থাকতে পারে—কাঁটা ছাড়ানো কাট/কিমা বেছে নিলে খাওয়া নিরাপদ ও সহজ।",
    ],
    en: [
      "High-quality protein: supports daily energy, muscle maintenance, and recovery.",
      "Great as a low-fat meal: healthier when cooked in light curry, steamed, or low-oil bhuna.",
      "Omega-3 (amount can vary): supports heart and brain health.",
      "Vitamin B12 and key minerals: support nerve health and red blood cell formation.",
      "Kid/senior-friendly with care: may have fine pin bones—boneless cuts or deboned mince is safer and easier.",
    ],
  },

  // Cooking tips
  cookingTips: {
    bn: [
      "মুইট্টা/কোফতার জন্য কাঁটা ছাড়ানো কিমা নিলে সবচেয়ে ভালো ফল পাবেন।",
      "পেটি ভাজা করলে মাঝারি আঁচে শ্যালো ফ্রাই করুন—অতিরিক্ত কড়া করলে শক্ত হতে পারে।",
      "ঝোলে রান্না করলে হালকা ভেজে নিলে মাছ ভাঙবে কম।",
      "দই/গ্রেভিতে অতিরিক্ত সময় ফুটাবেন না—টেক্সচার শক্ত হয়ে যেতে পারে।",
      "পরিবেশনের আগে সূক্ষ্ম কাঁটা চেক করুন—বিশেষ করে বাচ্চাদের ক্ষেত্রে।",
    ],
    en: [
      "For kofta/mince dishes, choose properly deboned mince for best results.",
      "For belly fry, shallow-fry on medium heat—over-frying can toughen the flesh.",
      "For curry, light frying first helps the fish hold shape.",
      "Avoid over-boiling in yogurt/gravy—texture can turn firm.",
      "Check for pin bones before serving, especially for kids.",
    ],
  },

  // Nutrition
  nutrition: {
    per100g: {
      Calories: "প্রায় ৯০–১১০ কিলোক্যালরি",
      Protein: "প্রায় ১৮–২২ গ্রাম",
      Fat: "প্রায় ২–৪ গ্রাম",
      SaturatedFat: "প্রায় ০.৬–১.০ গ্রাম",
      Cholesterol: "প্রায় ৬০–৯৫ মি.গ্রা.",
      Omega3: "প্রায় ০.২–০.৬ গ্রাম",
      Sodium: "প্রায় ৬০–৯০ মি.গ্রা.",
      Potassium: "প্রায় ৩০০–৪৫০ মি.গ্রা.",
      VitaminD: "প্রায় ১.০–২.৫ মাইক্রোগ্রাম",
      VitaminB12: "প্রায় ১.২–২.৮ মাইক্রোগ্রাম",
      Note:
        "প্রতি ১০০ গ্রাম কাঁচা মাছের গড় পুষ্টিগুণ। প্রজাতি, উৎস, সাইজ ও মৌসুম অনুযায়ী প্রাকৃতিকভাবে কিছুটা তারতম্য হতে পারে।",
    },
    enPer100g: {
      Calories: "Approx. 90–110 kcal",
      Protein: "Approx. 18–22 g",
      Fat: "Approx. 2–4 g",
      SaturatedFat: "Approx. 0.6–1.0 g",
      Cholesterol: "Approx. 60–95 mg",
      Omega3: "Approx. 0.2–0.6 g",
      Sodium: "Approx. 60–90 mg",
      Potassium: "Approx. 300–450 mg",
      VitaminD: "Approx. 1.0–2.5 µg",
      VitaminB12: "Approx. 1.2–2.8 µg",
      Note:
        "Average nutrition per 100 g raw fish. Natural variation may occur by species, source, size, and season.",
    },
  },

  // =========================
  // Size-based pricing (NEW, follows Pangas pattern)
  // =========================

  pricingModel: "WHOLE_BY_SIZE_COUNT",

  sellBy: "count",

  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },

  // NEW: Homepage-friendly summary
  startsFrom: {
    pricePerKg: 1400,
    unit: "kg",
  },

  sizePricing: [
    {
      sizeKey: "1-2kg",
      label: {
        bn: "১–২ কেজি",
        en: "1–2 kg",
      },
      pricePerKg: 1400,
      approxWholeFishWeightKg: {
        min: 1,
        max: 2,
      },
    },
    {
      sizeKey: "2-3kg",
      label: {
        bn: "২–৩ কেজি",
        en: "2–3 kg",
      },
      pricePerKg: 1600,
      approxWholeFishWeightKg: {
        min: 2,
        max: 3,
      },
    },
    {
      sizeKey: "3-4kg",
      label: {
        bn: "৩–৪ কেজি",
        en: "3–4 kg",
      },
      pricePerKg: 1900,
      approxWholeFishWeightKg: {
        min: 3,
        max: 4,
      },
    },
    {
      sizeKey: "4-6kg",
      label: {
        bn: "৪–৬ কেজি",
        en: "4–6 kg",
      },
      pricePerKg: 2200,
      approxWholeFishWeightKg: {
        min: 4,
        max: 6,
      },
    },
  ],
},
  {
  id: 22,
  slug: "lobster",
  category: CATEGORY_MAP.PREMIUM_SEA,
  source: "sea",

  // Legacy-safe names
  name: "চিংড়ি (লবস্টার)",
  nameBn: "চিংড়ি (লবস্টার)",
  nameEn: "Lobster",

  // New schema names
  title: {
    bn: "লবস্টার",
    en: "Lobster",
  },
  subtitle: {
    bn: "প্রিমিয়াম সামুদ্রিক ডেলিকেসি—বিশেষ উপলক্ষের জন্য",
    en: "Premium seafood delicacy—ideal for special occasions",
  },

  // Pricing (LEGACY-SAFE — keep these)
  price: 0, // legacy-safe (unknown / call for price)
  priceMin: null,
  priceMax: null,
  unit: "kg",
  weight: "1kg",

  // Homepage display helper (NEW)
  // (Since price is special-order, show “Call for price” instead of starts-from amount)
  startsFrom: {
    pricePerKg: 2500,
    unit: "kg",
  },

  // Media
  image: "/images/fish/lobster/lobster-1.webp",
  images: ["/images/fish/lobster/lobster-1.webp"],


  // Badges
  badges: ["Premium", "Special order", "High protein", "Luxury seafood"],

  // Notes
  priceNoteBn: "দাম জানতে কল করুন। সাইজ অনুযায়ী নির্ধারিত হবে।",
  priceNote: {
    bn: "দাম জানতে কল করুন। সাইজ অনুযায়ী নির্ধারিত হবে।",
    en: "Call for price. Final price depends on size.",
  },

  shortDescription: {
    bn: "লবস্টার—বিশেষ অর্ডারের ভিত্তিতে সরবরাহ করা হয়। প্রিমিয়াম স্বাদ ও টেক্সচারের জন্য পরিচিত।",
    en: "Lobster—available on special order. Known for its premium taste and texture.",
  },

  overview: {
    bn:
      "লবস্টার বিশ্বজুড়ে একটি বিলাসবহুল সামুদ্রিক খাবার হিসেবে পরিচিত। এর মাংস নরম কিন্তু ফার্ম, স্বাদে হালকা মিষ্টতা রয়েছে। সাধারণত গ্রিল, স্টিম বা বাটার-পোচড করে পরিবেশন করা হয়। প্রোটিন বেশি হলেও এতে কোলেস্টেরল মাঝারি–উচ্চ থাকতে পারে, তাই নিয়মিত নয়—বিশেষ উপলক্ষে পরিমিত পরিমাণে খাওয়াই উত্তম।",
    en:
      "Lobster is globally recognized as a luxury seafood. Its meat is tender yet firm with a subtle sweetness. Common preparations include grilling, steaming, or butter-poaching. While high in protein, lobster can contain moderate to relatively high cholesterol, so it’s best enjoyed occasionally in controlled portions.",
  },

  healthBenefits: {
    bn: [
      "উচ্চ প্রোটিন—মাংসপেশি রক্ষণাবেক্ষণ ও শক্তি জোগাতে সহায়ক।",
      "ফ্যাট তুলনামূলক কম—ভারী বাটার/সস এড়িয়ে রান্না করলে স্বাস্থ্যসম্মত থাকে।",
      "সামুদ্রিক খাবারে সাধারণত সেলেনিয়াম ও ভিটামিন B12-এর মতো মাইক্রোনিউট্রিয়েন্ট থাকে।",
      "কোলেস্টেরল মাঝারি–উচ্চ—নিয়মিত খাদ্য হিসেবে না খাওয়াই ভালো।",
    ],
    en: [
      "High protein—supports muscle maintenance and energy.",
      "Relatively low fat—healthier when not cooked with heavy butter or sauces.",
      "Seafood often provides micronutrients such as selenium and vitamin B12.",
      "Moderate to high cholesterol—best consumed occasionally.",
    ],
  },

  cookingTips: {
    bn: [
      "অতিরিক্ত রান্না করবেন না—লবস্টার শক্ত হয়ে যেতে পারে।",
      "গ্রিল/স্টিম করলে স্বাভাবিক স্বাদ ভালো থাকে।",
      "বাটার ব্যবহার করলে পরিমাণ কম রাখুন—স্বাস্থ্যসম্মত রাখতে।",
      "লেবু, হার্বস ও হালকা সস লবস্টারের স্বাদ বাড়ায়।",
    ],
    en: [
      "Avoid overcooking—lobster can turn tough.",
      "Grilling or steaming preserves its natural flavor.",
      "Use butter sparingly for a healthier preparation.",
      "Lemon, herbs, and light sauces complement the taste well.",
    ],
  },

  nutrition: {
  per100g: {
    Calories: "প্রায় ৯৫ কিলোক্যালরি",
    Protein: "প্রায় ২০ গ্রাম",
    Fat: "প্রায় ১.৫ গ্রাম",
    SaturatedFat: "প্রায় ০.৩ গ্রাম",
    Cholesterol: "প্রায় ১৩৮ মি.গ্রা.",
    Omega3: "প্রায় ০.৩ গ্রাম",
    Sodium: "প্রায় ১৪০ মি.গ্রা.",
    Potassium: "প্রায় ২৭০ মি.গ্রা.",
    Calcium: "প্রায় ৯০ মি.গ্রা.",
    Iron: "প্রায় ১.৯ মি.গ্রা.",
    VitaminD: "প্রায় ১.৮ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ২.৩ মাইক্রোগ্রাম",
    Note: "কোলেস্টেরল তুলনামূলক বেশি; সাইজ, উৎস ও রান্নার ধরন অনুযায়ী কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 95 kcal",
    Protein: "Approx. 20 g",
    Fat: "Approx. 1.5 g",
    SaturatedFat: "Approx. 0.3 g",
    Cholesterol: "Approx. 138 mg",
    Omega3: "Approx. 0.3 g",
    Sodium: "Approx. 140 mg",
    Potassium: "Approx. 270 mg",
    Calcium: "Approx. 90 mg",
    Iron: "Approx. 1.9 mg",
    VitaminD: "Approx. 1.8 µg",
    VitaminB12: "Approx. 2.3 µg",
    Note: "Cholesterol is relatively high. Natural variation may occur by size and source.",
  },
},

  // =========================
  // Selling rules (NEW)
  // =========================
  pricingModel: "KG_BY_GRADE",
  sellBy: "kg", // lobster is typically priced by kg, but supplied as special order
  pricingMode: "call", // special order / call for price (keeps UI logic clean)

  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1, // kg-wise
  },

  // Size-based pricing (optional, unknown right now)
  // Keep empty until you have actual grades (e.g., 500–700g, 700–900g etc.)
  sizePricing: [
  {
    sizeKey: "1-2pcs",
    label: { bn: "১–২ পিস/কেজি", en: "1–2 pcs/kg" },
    countPerKg: { min: 1, max: 2 },
    pricePerKg: 3500,
  },
  {
    sizeKey: "2-3pcs",
    label: { bn: "২–৩ পিস/কেজি", en: "2–3 pcs/kg" },
    countPerKg: { min: 2, max: 3 },
    pricePerKg: 3300,
  },
  {
    sizeKey: "3-4pcs",
    label: { bn: "৩–৪ পিস/কেজি", en: "3–4 pcs/kg" },
    countPerKg: { min: 3, max: 4 },
    pricePerKg: 2700,
  },
  {
    sizeKey: "4-5pcs",
    label: { bn: "৪–৫ পিস/কেজি", en: "4–5 pcs/kg" },
    countPerKg: { min: 4, max: 5 },
    pricePerKg: 2500,
  },
  {
    sizeKey: "6pcs-plus",
    label: { bn: "৬ পিস বা বেশি/কেজি", en: "6+ pcs/kg" },
    countPerKg: { min: 6, max: null },
    pricePerKg: 2100,
  },
]
,

  // Final price confirmation message (agent workflow)
  finalPriceNotice: {
    bn: "লবস্টার বিশেষ অর্ডার—স্টক/সাইজ অনুযায়ী দাম আমাদের এজেন্ট ফোনে/WhatsApp-এ কনফার্ম করবে।",
    en: "Lobster is special order—our agent will confirm size/availability and final price by phone/WhatsApp.",
  },
},
  {
  id: 20,
  slug: "ilish",
  category: CATEGORY_MAP.PREMIUM_SEA,
  source: "river_sea",

  // Names
  title: {
    bn: "ইলিশ",
    en: "Hilsa"
  },
  subtitle: {
    bn: "প্রিমিয়াম স্বাদের ঐতিহ্যবাহী মাছ",
    en: "A premium classic"
  },

  // Pricing (LEGACY-SAFE — not used in new UI)
  price: 0,
  priceMin: null,
  priceMax: null,
  unit: "kg",
  weight: "1kg",

  // Media
  image: "/images/fish/hilsha/h-2.webp",
  images: [
    "/images/fish/hilsha/h-2.webp",
    "/images/fish/hilsha/h-1.webp", 
    "/images/fish/hilsha/h-3.webp",
    "/images/fish/hilsha/h-4.webp",
  ],


  // Badges
  badges: ["Premium", "Seasonal"],

  // Price note
  priceNote: {
    bn: "মৌসুম ও সাইজ অনুযায়ী দাম পরিবর্তিত হয়।",
    en: "Price varies by season and size."
  },

  // Short description
  shortDescription: {
    bn: "প্রাকৃতিক তেলসমৃদ্ধ, নরম ফ্লেকি টেক্সচার আর অনন্য ঘ্রাণ—শোর্ষে ইলিশ, ভাপা বা হালকা ঝোলে দারুণ।",
    en: "Fresh Hilsa with rich natural oil, delicate flakes, and that iconic aroma—perfect for traditional Bengali dishes."
  },

  // Overview
  overview: {
    bn: "ইলিশ বাঙালির ঐতিহ্য ও স্বাদের অন্যতম প্রতীক। এর প্রাকৃতিক তেল, নরম ফ্লেক আর সুবাস একে আলাদা করে। রান্নায় বেশি ঝাঁঝালো তাপ না দিয়ে ধীরে রান্না করলে স্বাদ ও টেক্সচার সবচেয়ে ভালো থাকে। শোর্ষে ইলিশ, ভাপা, হালকা ঝোল—ঘরোয়া খাবারে ইলিশ সবসময়ই বিশেষ।",
    en: "Hilsa is prized for its unique taste and natural oil. Cook gently to preserve the soft flakes. Ideal for mustard hilsa, steamed hilsa, and light curries."
  },

  // Health benefits
  healthBenefits: {
    bn: [
      "ভালো মানের প্রোটিনের উৎস—শরীরের শক্তি ও রিকভারিতে সহায়ক।",
      "স্বাস্থ্যকর ফ্যাট সমৃদ্ধ—হৃদয় ও মস্তিষ্কের স্বাস্থ্যে সহায়ক হিসেবে পরিচিত।",
      "পুষ্টিগুণে সমৃদ্ধ—দৈনন্দিন ডায়েটকে ভারসাম্যপূর্ণ রাখতে সহায়তা করে।",
      "কমফোর্ট ফুড হলেও পুষ্টিকর—পরিমিত পরিমাণে দারুণ একটি অপশন।"
    ],
    en: [
      "Good source of high-quality protein.",
      "Contains healthy fats commonly associated with omega-3s.",
      "Nutrient-dense option for a balanced diet.",
      "Filling and satisfying when eaten in moderation."
    ]
  },

  // Cooking tips
  cookingTips: {
    bn: [
      "অল্প করে ধুয়ে পানি ঝরিয়ে নিন—বেশি ঘষাঘষি করবেন না।",
      "মাঝারি আঁচে রান্না করুন—বেশি আঁচে ফ্লেক ভেঙে যেতে পারে।",
      "শোর্ষে ইলিশে সরিষা বাটা + কাঁচামরিচ + শেষে সামান্য সরিষার তেল দিলে ঘ্রাণ বেড়ে যায়।",
      "ভাপা হলে পানি কমিয়ে ধীরে স্টিম দিন—ঝোল শুকিয়ে গেলে স্বাদ কমে যায়।",
      "ভাজা হলে কম উল্টেপাল্টে, হালকা ক্রাস্ট করে নিন।"
    ],
    en: [
      "Rinse gently and pat dry—avoid over-handling.",
      "Cook on low to medium heat to keep flakes intact.",
      "For mustard hilsa, balance mustard paste with green chili and finish with mustard oil aroma.",
      "For steaming, keep some gravy—don’t let it dry out.",
      "If frying, flip minimally and rest after frying."
    ]
  },

  // Nutrition
  nutrition: {
  per100g: {
    Calories: "প্রায় ২৩০ কিলোক্যালরি",
    Protein: "প্রায় ২০ গ্রাম",
    Fat: "প্রায় ১৬ গ্রাম",
    SaturatedFat: "প্রায় ৪.০ গ্রাম",
    Cholesterol: "প্রায় ৬৫ মি.গ্রা.",
    Omega3: "প্রায় ২.০ গ্রাম",
    Sodium: "প্রায় ৭৫ মি.গ্রা.",
    Potassium: "প্রায় ৩৬০ মি.গ্রা.",
    Calcium: "প্রায় ২৫ মি.গ্রা.",
    Iron: "প্রায় ১.৫ মি.গ্রা.",
    VitaminD: "প্রায় ৫.৫ মাইক্রোগ্রাম",
    VitaminB12: "প্রায় ৩.৫ মাইক্রোগ্রাম",
    Note: "চর্বি ও ক্যালরি তুলনামূলক বেশি; সাইজ ও মৌসুম অনুযায়ী কিছুটা তারতম্য হতে পারে।",
  },

  enPer100g: {
    Calories: "Approx. 230 kcal",
    Protein: "Approx. 20 g",
    Fat: "Approx. 16 g",
    SaturatedFat: "Approx. 4.0 g",
    Cholesterol: "Approx. 65 mg",
    Omega3: "Approx. 2.0 g",
    Sodium: "Approx. 75 mg",
    Potassium: "Approx. 360 mg",
    Calcium: "Approx. 25 mg",
    Iron: "Approx. 1.5 mg",
    VitaminD: "Approx. 5.5 µg",
    VitaminB12: "Approx. 3.5 µg",
    Note: "Higher fat and calories; natural variation may occur by size, cut, and season.",
  },
},

  // =========================
  // Size-based pricing (NEW)
  // =========================
  pricingModel: "WHOLE_BY_SIZE_COUNT",
  sellBy: "kg", // Hilsa is sold by kg (since whole fish weight can be large)

  qtyDefaults: {
    default: 1,    // start from 1kg
    min: 0.5,      // allow half kg for premium cuts
    step: 0.5      // increment by 0.5kg
  },

  // Homepage-friendly summary
  startsFrom: {
    pricePerKg: 3500,
    unit: "kg",
  },

  // Size pricing tiers (typical for Hilsa)
  sizePricing: [
    {
      sizeKey: "small",
      label: {
        bn: "ছোট (৪০০–৫০০ গ্রাম)",
        en: "Small (500–700g)"
      },
      pricePerKg: 1850,
      approxWholeFishWeightKg: {
        min: 0.4,
        max: 0.5
      }
    },
    {
      sizeKey: "medium",
      label: {
        bn: "মাঝারি (৭০০–৮০০ গ্রাম)",
        en: "Medium (700g–800g)"
      },
      pricePerKg: 2700,
      approxWholeFishWeightKg: {
        min: 0.7,
        max: 0.8
      }
    },
    {
      sizeKey: "large",
      label: {
        bn: "বড় (১–১.৫ কেজি)",
        en: "Large (1–1.5 kg)"
      },
      pricePerKg: 4000,
      approxWholeFishWeightKg: {
        min: 1.0,
        max: 1.5
      }
    },
    {
      sizeKey: "xlarge",
      label: {
        bn: "অতিবড় (১.৫–২.৫ কেজি)",
        en: "Extra Large (1.5–2.5 kg)"
      },
      pricePerKg: 4500,
      approxWholeFishWeightKg: {
        min: 1.5,
        max: 2.5
      }
    }
  ]
},
  {
  id: 21,
  slug: "rupchanda",
  category: CATEGORY_MAP.PREMIUM_SEA,
  source: "sea",

  // Names
  title: {
    bn: "রুপচাঁদা",
    en: "Rupchanda",
  },
  subtitle: {
    bn: "মাংসল ও নরম স্বাদের প্রিমিয়াম সামুদ্রিক মাছ",
    en: "A premium meaty sea fish",
  },

  // Pricing (LEGACY-SAFE — keep these)
  // Homepage will show: "Starts from ৳1300/kg"
  price: 0,
  priceMin: 1300,
  priceMax: 1450,
  unit: "kg",
  weight: "1kg",

  // Media (folder exists: rupchada)
  image: "/images/fish/rupchada/rup-1.webp",
  images: [
    "/images/fish/rupchada/rup-1.webp",
    "/images/fish/rupchada/rup-2.webp",
    "/images/fish/rupchada/rup-3.webp",
    "/images/fish/rupchada/rup-4.webp",
  ],


  // Badges
  badges: ["Sea fish", "Premium"],

  // Price note
  priceNote: {
    bn: "দাম মাছের সাইজ (প্রতি কেজিতে কয়টা মাছ) ও বাজারদর অনুযায়ী নির্ধারিত হবে।",
    en: "Price depends on size (fish count per kg) and current market rate.",
  },

  // Short description
  shortDescription: {
    bn: "রুপচাঁদা একটি জনপ্রিয় সামুদ্রিক মাছ, ভুনা ও ফ্রাইয়ের জন্য বিশেষভাবে পরিচিত।",
    en: "Rupchanda is a popular sea fish, well known for frying and rich curries.",
  },

  // Overview
  overview: {
    bn:
      "রুপচাঁদা তার মাংসল টেক্সচার ও হালকা স্বাদের জন্য অত্যন্ত জনপ্রিয়। ফ্রাই, ভুনা এবং ঝোল—সব ধরনের রান্নায় এটি ভালো মানায়। মাঝারি আঁচে রান্না করলে এর নরম মাংস ও স্বাদ সবচেয়ে ভালো থাকে।",
    en:
      "Rupchanda is valued for its firm, meaty texture and mild flavor. It works well in frying, curries, and light gravies. Cooking on medium heat helps preserve its texture and taste.",
  },

  // Health benefits
  healthBenefits: {
    bn: [
      "ভালো মানের প্রোটিনের উৎস—শরীরের পেশি ও শক্তি বৃদ্ধিতে সহায়ক।",
      "কম চর্বিযুক্ত হওয়ায় স্বাস্থ্যসচেতনদের জন্য উপযোগী।",
      "সহজে হজমযোগ্য—হালকা খাবার হিসেবে জনপ্রিয়।",
    ],
    en: [
      "Good source of high-quality protein.",
      "Relatively low in fat compared to oily fish.",
      "Easy to digest and suitable for light meals.",
    ],
  },

  // Cooking tips
  cookingTips: {
    bn: [
      "ফ্রাই করার আগে হালকা লবণ ও হলুদ মাখিয়ে নিন।",
      "মাঝারি আঁচে ভাজুন—বেশি আঁচে মাছ শক্ত হয়ে যেতে পারে।",
      "ভুনা বা ঝোলে রান্নার সময় অতিরিক্ত নেড়ে নাড়বেন না।",
    ],
    en: [
      "Season lightly with salt and turmeric before frying.",
      "Fry on medium heat to avoid toughening the flesh.",
      "When cooking in curry, avoid excessive stirring.",
    ],
  },

  // Nutrition
  nutrition: {
    per100g: {
      Calories: "প্রায় ১২০ কিলোক্যালরি",
      Protein: "প্রায় ২১ গ্রাম",
      Fat: "প্রায় ৩.০ গ্রাম",
      SaturatedFat: "প্রায় ০.৮ গ্রাম",
      Cholesterol: "প্রায় ৬০ মি.গ্রা.",
      Omega3: "প্রায় ০.৫ গ্রাম",
      Sodium: "প্রায় ৭০ মি.গ্রা.",
      Potassium: "প্রায় ৩৫০ মি.গ্রা.",
      Calcium: "প্রায় ২০ মি.গ্রা.",
      Iron: "প্রায় ১.০ মি.গ্রা.",
      VitaminD: "প্রায় ২.৫ মাইক্রোগ্রাম",
      VitaminB12: "প্রায় ২.৮ মাইক্রোগ্রাম",
      Note: "ফ্যাট কম ও প্রোটিন বেশি; সাইজ ও উৎস অনুযায়ী কিছুটা তারতম্য হতে পারে।",
    },

    enPer100g: {
      Calories: "Approx. 120 kcal",
      Protein: "Approx. 21 g",
      Fat: "Approx. 3.0 g",
      SaturatedFat: "Approx. 0.8 g",
      Cholesterol: "Approx. 60 mg",
      Omega3: "Approx. 0.5 g",
      Sodium: "Approx. 70 mg",
      Potassium: "Approx. 350 mg",
      Calcium: "Approx. 20 mg",
      Iron: "Approx. 1.0 mg",
      VitaminD: "Approx. 2.5 µg",
      VitaminB12: "Approx. 2.8 µg",
      Note: "Lean, high-protein marine fish. Natural variation may occur by size and source.",
    },
  },

  // =========================
  // Size-based pricing (pcs per kg)
  // =========================
  pricingModel: "KG_BY_GRADE",
  sellBy: "kg",

  // Homepage helper: show “Starts from ৳1300/kg”
  startsFrom: {
    pricePerKg: 1300,
    unit: "kg",
  },

  qtyDefaults: {
    default: 1,
    min: 1,
    step: 1,
  },

  sizePricing: [
    {
      sizeKey: "3-4pcs",
      label: { bn: "৩–৪টা মাছ/কেজি", en: "3–4 fish/kg" },
      countPerKg: { min: 3, max: 4 },
      pricePerKg: 1450,
    },
    {
      sizeKey: "6-7pcs",
      label: { bn: "৬–৭টা মাছ/কেজি", en: "6–7 fish/kg" },
      countPerKg: { min: 6, max: 7 },
      pricePerKg: 1300,
    },
  ],
},
];
