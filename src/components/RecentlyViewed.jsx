// components/RecentlyViewed.jsx
import React from "react";
import { Link } from "react-router-dom";

const RecentlyViewed = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex items-start md:items-center justify-between gap-3 mb-4">
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
              item.priceMin != null &&
              item.priceMax != null &&
              item.priceMin !== item.priceMax;

            const unit = item.unit || "kg";
            let priceText = "দাম জানতে কল করুন";

            if (hasRange) {
              priceText = `৳${item.priceMin}–${item.priceMax}/${unit}`;
            } else if (item.priceMin != null || item.price != null) {
              const base = item.priceMin ?? item.price;
              priceText = `৳${base}/${unit}`;
            }

            const cardInner = (
              <>
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
              </>
            );

            const className =
              "min-w-[180px] max-w-[200px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 " +
              "hover:shadow-md hover:-translate-y-0.5 transition-all";

            // If slug exists, make it clickable
            if (item.slug) {
              return (
                <Link
                  key={item.id}
                  to={`/product/${item.slug}`}
                  className={className}
                >
                  {cardInner}
                </Link>
              );
            }

            // Fallback: non-clickable (safe)
            return (
              <div key={item.id} className={className}>
                {cardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
