// components/DeliveryInfo.jsx
import React from "react";

const DeliveryInfo = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Delivery &amp; Packaging
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We try to keep delivery simple, transparent and reliable for every order.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Area & timing */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-[#3D84A7]/10 flex items-center justify-center">
                🚚
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                Coverage &amp; Timing
              </h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Delivery mainly inside Dhaka city (পর্যায়ক্রমে আরও এলাকা যুক্ত হবে)</li>
              <li>• Same-day delivery for confirmed orders placed before 2 PM</li>
              <li>• Delivery slots: সকাল &amp; বিকাল – আপনি পছন্দ করতে পারবেন</li>
            </ul>
          </div>

          {/* Packaging & handling */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                🧊
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                Cleaning &amp; Packaging
              </h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Fish is washed, cleaned and trimmed as per standard practice</li>
              <li>• Packed in food-grade poly / box to reduce dripping &amp; smell</li>
              <li>• For long distance, we use extra ice / cooling support if needed</li>
            </ul>
          </div>

          {/* Charges & policy */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                💳
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                Delivery Charge &amp; Payment
              </h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Inside Dhaka: usually ৳60 (exact amount confirmed over phone)</li>
              <li>• Free delivery on orders above ৳1000 (within selected areas)</li>
              <li>• Cash on delivery, bKash or bank transfer – as convenient for you</li>
            </ul>
          </div>
        </div>

        <p className="text-[11px] md:text-xs text-gray-500 text-center mt-6">
          * Final timing, charge and fish size/weight are confirmed by Rupsha Fish team
          over phone / WhatsApp before delivery.
        </p>
      </div>
    </section>
  );
};

export default DeliveryInfo;
