// components/TrustBar.jsx
import React from "react";

const items = [
  {
    icon: "🐟",
    title: "Fresh wild-caught fish",
    desc: "River & sea fish only – no farm fish.",
  },
  {
    icon: "🧼",
    title: "Hygienic cleaning",
    desc: "Cleaned and handled with care.",
  },
  {
    icon: "🚚",
    title: "Same-day delivery",
    desc: "Inside Dhaka, subject to schedule.",
  },
  {
    icon: "💳",
    title: "Easy payment",
    desc: "Cash on delivery or bKash.",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-slate-50 border-t border-slate-200/60">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-xs md:text-sm">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                flex items-start gap-2 
                text-gray-700
              "
            >
              <div className="text-lg md:text-xl leading-none">
                {item.icon}
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-[11px] md:text-sm">
                  {item.title}
                </div>
                <div className="text-[11px] text-gray-500">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
