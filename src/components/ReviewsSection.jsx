// components/ReviewsSection.jsx
import React from "react";

const reviews = [
  {
    name: "Farhana A.",
    location: "Mirpur, Dhaka",
    comment:
      "I ordered ilish and boal from Rupsha Fish. Cleaning and packing was very neat, family loved the taste.",
    product: "Ilish & Boal",
  },
  {
    name: "Tanvir R.",
    location: "Dhanmondi, Dhaka",
    comment:
      "On-time delivery and very responsive on WhatsApp. Felt like buying from a trusted local fishmonger.",
    product: "Mixed river fish",
  },
  {
    name: "Mahmud U.",
    location: "Banani, Dhaka",
    comment:
      "Good size, fresh smell and no farm taste. Will definitely reorder for family get-togethers.",
    product: "Rui & Katla",
  },
];

const ReviewsSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            What Customers Say
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            কিছু কথা যাঁরা ইতিমধ্যে Rupsha Fish থেকে অর্ডার করেছেন তাদের কাছ থেকে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-full bg-[#3D84A7]/10 flex items-center justify-center text-lg">
                  ⭐
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {r.name}
                  </div>
                  <div className="text-xs text-gray-500">{r.location}</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                “{r.comment}”
              </p>
              <div className="mt-auto text-xs text-gray-500">
                Product: <span className="font-medium">{r.product}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          * We will gradually add verified Google / Facebook reviews here as we grow.
        </p>
      </div>
    </section>
  );
};

export default ReviewsSection;
