// components/WhyRupsha.jsx
import React from "react";

const points = [
  {
    title: "Pure River & Sea Fish Only",
    desc: "From Padma to Rupsha — we bring you wild, natural fish caught fresh from our rivers and sea. No farm fish, no shortcuts… just the taste you grew up with.",
    icon: "🌊",
  },
  {
    title: "Handled With Love & Hygiene",
    desc: "Every fish is cleaned with care, washed properly, and packed the way we would do for our own family — fresh, safe, and kitchen-ready.",
    icon: "🧼",
  },
  {
    title: "Your Family, Our Responsibility",
    desc: "We know fish is more than food — it’s tradition. That’s why families trust us for quality they can rely on, every single order.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Cuts Just the Way You Like",
    desc: "Thin cut, medium, curry-cut, whole — we try to prepare your fish the way you prefer, matching size and cut depending on the day’s best catch.",
    icon: "🔪",
  },
];


const WhyRupsha = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Choose Rupsha Fish?
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Rupsha Fish is for those who miss the real taste of Bangladesh — river freshness, sea richness, and the warmth of family meals.  
            আমরা চেষ্টা করি যেন আপনি ঘরে বসেই পান ভরসাযোগ্য, নিরাপদ ও আসল স্বাদের মাছ।
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-[#46CDCF]/10 flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRupsha;
