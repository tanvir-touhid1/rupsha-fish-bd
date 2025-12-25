// src/pages/ReturnPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";

export default function ReturnPolicy() {
  const { lang } = useLang();

  const isBn = lang === "bn";

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-4">
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-[#3D84A7] font-medium"
          >
            ← {isBn ? "হোমে ফিরে যান" : "Back to Home"}
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            {isBn ? "রিটার্ন পলিসি" : "Return Policy"}
          </h1>

          <p className="mt-3 text-gray-700 leading-relaxed">
            {isBn ? (
              <>
                <b>Rupsha Fish BD</b>-এ আমরা গ্রাহকের সন্তুষ্টি ও খাদ্য নিরাপত্তাকে
                সর্বোচ্চ গুরুত্ব দিই। যেহেতু আমরা <b>তাজা ও পচনশীল মাছ/সামুদ্রিক খাবার</b>{" "}
                সরবরাহ করি, তাই স্বাস্থ্যবিধি ও নিরাপত্তার কারণে রিটার্ন নীতিমালা কিছুটা
                সীমিত।
              </>
            ) : (
              <>
                At <b>Rupsha Fish BD</b>, customer satisfaction and food safety are our
                top priorities. Because we sell <b>fresh and perishable seafood</b>,
                returns are limited due to hygiene and safety reasons.
              </>
            )}
          </p>

          <div className="mt-8 space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {isBn ? "১) কোন ক্ষেত্রে রিটার্ন গ্রহণযোগ্য" : "1) Eligible Return Cases"}
              </h2>
              <p className="text-sm text-gray-700 mb-3">
                {isBn
                  ? "নিম্নোক্ত ক্ষেত্রে আমরা রিটার্ন/রিপ্লেসমেন্ট অনুরোধ গ্রহণ করি:"
                  : "We accept return/replacement requests only if:"}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>
                  {isBn
                    ? "আপনি ভুল আইটেম পেয়েছেন (অর্ডারের মাছ/কাটের সাথে মিল নেই)"
                    : "You received the wrong item (fish/cut doesn’t match the order)."}
                </li>
                <li>
                  {isBn
                    ? "ডেলিভারির সময় মাছ স্পষ্টভাবে নষ্ট/দুর্গন্ধযুক্ত/ক্ষতিগ্রস্ত ছিল"
                    : "The fish was clearly spoiled/damaged at the time of delivery."}
                </li>
                <li>
                  {isBn
                    ? "পরিমাণ/ওজন যাচাইয়ের পর উল্লেখযোগ্য কম পাওয়া গেছে"
                    : "You received a significantly lower quantity after verification."}
                </li>
              </ul>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">
                    {isBn ? "সময়সীমা:" : "Time limit:"}
                  </span>{" "}
                  {isBn
                    ? "ডেলিভারির পর সর্বোচ্চ ২ ঘন্টার মধ্যে আমাদের জানাতে হবে (ছবি/ভিডিওসহ)।"
                    : "You must notify us within 2 hours of delivery with photo/video proof."}
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {isBn ? "২) কোন ক্ষেত্রে রিটার্ন প্রযোজ্য নয়" : "2) Non-Returnable Cases"}
              </h2>
              <p className="text-sm text-gray-700 mb-3">
                {isBn
                  ? "স্বাস্থ্যবিধি ও নিরাপত্তার কারণে নিচের ক্ষেত্রে রিটার্ন/রিফান্ড প্রযোজ্য নয়:"
                  : "For hygiene and safety reasons, returns/refunds are not applicable if:"}
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>
                  {isBn
                    ? "ডেলিভারির পর মাছ ধোয়া/কাটা/রান্না/ফ্রিজ করা হয়েছে"
                    : "The fish was washed, cut, cooked, or frozen after delivery."}
                </li>
                <li>
                  {isBn
                    ? "ডেলিভারির ২ ঘন্টার পরে অভিযোগ করা হয়েছে"
                    : "The complaint is raised after 2 hours of delivery."}
                </li>
                <li>
                  {isBn
                    ? "স্বাদ/পছন্দ না হওয়া বা ব্যক্তিগত মতামত"
                    : "Taste preference or personal dislike."}
                </li>
                <li>
                  {isBn
                    ? "প্রাকৃতিকভাবে সাইজ/আকৃতির সামান্য পার্থক্য (ওয়াইল্ড মাছের ক্ষেত্রে স্বাভাবিক)"
                    : "Minor natural variation in size/shape (common for wild-caught fish)."}
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {isBn ? "৩) কিভাবে রিটার্ন অনুরোধ করবেন" : "3) How to Request a Return"}
              </h2>
              <p className="text-sm text-gray-700">
                {isBn ? (
                  <>
                    অনুগ্রহ করে দ্রুত আমাদের সাথে যোগাযোগ করুন এবং সমস্যা সম্পর্কিত{" "}
                    <b>ছবি/ভিডিও</b> পাঠান:
                  </>
                ) : (
                  <>
                    Please contact us immediately and share <b>photo/video proof</b>:
                  </>
                )}
              </p>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-sm text-gray-700 space-y-2">
                  <div>
                    <span className="font-semibold">WhatsApp / Phone:</span>{" "}
                    <span className="tabular-nums">+8801521493443</span>
                  </div>
                  <div className="text-[12px] text-gray-500">
                    {isBn
                      ? "আমাদের টিম যাচাই করে দ্রুত রিপ্লেসমেন্ট/সমাধান জানিয়ে দেবে।"
                      : "Our team will verify and respond quickly with a replacement/solution."}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {isBn ? "৪) নীতিমালা পরিবর্তন" : "4) Policy Updates"}
              </h2>
              <p className="text-sm text-gray-700">
                {isBn
                  ? "প্রয়োজনে আমরা এই নীতিমালা আপডেট করতে পারি। সর্বশেষ সংস্করণ এই পেজেই পাওয়া যাবে।"
                  : "We may update this policy when necessary. The latest version will always be available on this page."}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
