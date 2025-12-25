import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";

const CONTENT = {
  bn: {
    back: "← হোমে ফিরে যান",
    title: "রিফান্ড নীতি",
    updated: "আপডেট",
    intro:
      "Rupsha Fish গ্রাহকের সন্তুষ্টি এবং পণ্যের গুণগত মানকে সর্বোচ্চ গুরুত্ব দেয়। যেহেতু মাছ একটি দ্রুত নষ্ট হওয়া (perishable) পণ্য, তাই রিফান্ড শুধুমাত্র নির্দিষ্ট ও যাচাইযোগ্য ক্ষেত্রে প্রযোজ্য।",

    s1: "১) কোন ক্ষেত্রে রিফান্ড প্রযোজ্য",
    s1List: [
      "ভুল মাছ / ভুল গ্রেড / ভুল পরিমাণ ডেলিভারি হলে",
      "ডেলিভারির সময় মাছ নষ্ট, দুর্গন্ধযুক্ত বা উল্লেখযোগ্যভাবে ক্ষতিগ্রস্ত থাকলে (প্রমাণসহ)",
      "অর্ডার কনফার্ম হওয়ার পর Rupsha Fish-এর কারণে ডেলিভারি ব্যর্থ/বাতিল হলে",
    ],

    s2: "২) অভিযোগ জানানোর সময়সীমা",
    s2Text:
      "ডেলিভারির পর সর্বোচ্চ ২ ঘণ্টার মধ্যে সমস্যা জানাতে হবে। এই সময়ের পর অভিযোগ যাচাই করা কঠিন হয়ে যায়, তাই সাধারণত রিফান্ড প্রযোজ্য থাকে না।",

    s3: "৩) কীভাবে রিফান্ড রিকোয়েস্ট করবেন",
    s3List: [
      "WhatsApp/Phone-এ যোগাযোগ করুন",
      "অর্ডার নম্বর/ফোন নম্বর দিন",
      "সমস্যার স্পষ্ট ছবি/ভিডিও শেয়ার করুন",
      "আমাদের টিম যাচাই করে উপযুক্ত সমাধান জানাবে (রিপ্লেসমেন্ট/পার্শিয়াল রিফান্ড/ফুল রিফান্ড)",
    ],

    s4: "৪) রিফান্ড মেথড ও সময়",
    s4Text:
      "অনুমোদিত রিফান্ড সাধারণত bKash/Nagad/Bank transfer এর মাধ্যমে প্রদান করা হয়। যাচাই ও অনুমোদন সম্পন্ন হওয়ার পর সাধারণত ৩–৭ কার্যদিবসের মধ্যে রিফান্ড সম্পন্ন হয়।",

    s5: "৫) কোন ক্ষেত্রে রিফান্ড প্রযোজ্য নয়",
    s5List: [
      "গ্রাহক দেরিতে গ্রহণ করলে এবং এর ফলে মান নষ্ট হলে",
      "ডেলিভারির ২ ঘণ্টা পরে জানানো অভিযোগ",
      "ব্যক্তিগত পছন্দ/রান্নার ধরনজনিত কারণে অপছন্দ হওয়া",
    ],

    note:
      "নোট: মাছ একটি perishable item—তাই ডেলিভারির সময়ই দ্রুত যাচাই করুন এবং সমস্যার ক্ষেত্রে দ্রুত জানান।",
  },

  en: {
    back: "← Back to Home",
    title: "Refund Policy",
    updated: "Updated",
    intro:
      "Rupsha Fish values customer satisfaction and product quality. Since fish is a perishable item, refunds are provided only under specific and verifiable circumstances.",

    s1: "1) When a Refund Is Applicable",
    s1List: [
      "Wrong fish item, grade, or quantity delivered",
      "Fish found spoiled, foul-smelling, or significantly damaged at delivery (with proof)",
      "Delivery cancelled/failed from Rupsha Fish’s side after order confirmation",
    ],

    s2: "2) Reporting Time Limit",
    s2Text:
      "Please report refund-related issues within 2 hours of delivery. Late reports are often difficult to verify and may not be eligible for a refund.",

    s3: "3) How to Request a Refund",
    s3List: [
      "Contact us via Phone/WhatsApp",
      "Share your order number / phone number",
      "Provide clear photo/video evidence",
      "Our team will review and confirm the best resolution (replacement/partial refund/full refund)",
    ],

    s4: "4) Refund Method & Processing Time",
    s4Text:
      "Approved refunds are issued via bKash, Nagad, or bank transfer. Refunds are usually processed within 3–7 working days after verification and approval.",

    s5: "5) Non-Refundable Cases",
    s5List: [
      "Customer delays receiving delivery causing quality loss",
      "Complaints raised after the 2-hour reporting window",
      "Personal preference issues (taste, cooking style, etc.)",
    ],

    note:
      "Note: Fish is highly perishable. Prompt inspection and immediate reporting help ensure a fast and fair resolution.",
  },
};

export default function RefundPolicy() {
  const { lang } = useLang(); // "bn" | "en"
  const t = CONTENT[lang] || CONTENT.bn;

  const updatedText = new Date().toLocaleDateString(
    lang === "bn" ? "bn-BD" : "en-US"
  );

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-10">
          <Link to="/" className="text-sm text-gray-500 hover:text-[#3D84A7]">
            {t.back}
          </Link>

          <h1 className="mt-3 text-2xl md:text-3xl font-extrabold text-gray-900">
            {lang === "bn" ? `${t.title} (Refund Policy)` : t.title}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {t.updated}: {updatedText}
          </p>

          <div className="mt-6 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>{t.intro}</p>

            <h2 className="text-base md:text-lg font-bold text-gray-900 pt-2">
              {t.s1}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {t.s1List.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>

            <h2 className="text-base md:text-lg font-bold text-gray-900 pt-2">
              {t.s2}
            </h2>
            <p>{t.s2Text}</p>

            <h2 className="text-base md:text-lg font-bold text-gray-900 pt-2">
              {t.s3}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {t.s3List.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>

            <h2 className="text-base md:text-lg font-bold text-gray-900 pt-2">
              {t.s4}
            </h2>
            <p>{t.s4Text}</p>

            <h2 className="text-base md:text-lg font-bold text-gray-900 pt-2">
              {t.s5}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {t.s5List.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-700">
                <b>{lang === "bn" ? "নোট:" : "Note:"}</b> {t.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
