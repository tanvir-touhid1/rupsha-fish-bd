// components/RecentlyViewed.jsx
import React from "react";

const RecentlyViewed = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">
            Recently Viewed
          </h2>
          <p className="text-xs text-gray-500">
            আপনি যেসব মাছ একটু আগে দেখেছেন, সেগুলো দ্রুত ফিরে পেতে পারেন।
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
          {items.map((item) => {
            const hasRange =
              item.priceMin &&
              item.priceMax &&
              item.priceMin !== item.priceMax;
            const unit = item.unit || "kg";
            let priceText = "দাম জানতে কল করুন";

            if (hasRange) {
              priceText = `৳${item.priceMin}–${item.priceMax}/${unit}`;
            } else if (item.priceMin || item.price) {
              const base = item.priceMin ?? item.price;
              priceText = `৳${base}/${unit}`;
            }

            return (
              <div
                key={item.id}
                className="min-w-[180px] max-w-[200px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-shrink-0"
              >
                <div className="h-28 w-full bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {item.nameBn || item.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 truncate">
                    {item.nameEn || item.name}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#3D84A7]">
                    {priceText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
