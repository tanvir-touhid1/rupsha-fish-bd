// components/ContactInfo.jsx
import React from "react";

const ContactInfo = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            {/* Left: text */}
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Need Help Placing an Order?
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-4 max-w-xl">
                যদি আপনি প্রথমবার অর্ডার করতে চান অথবা কোন প্রশ্ন থাকে – নির্দ্বিধায় ফোন বা
                WhatsApp করুন। Rupsha Fish টিম আপনাকে গাইড করবে।
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-[#3D84A7]/10 flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      Order / WhatsApp
                    </div>
                    <a
                      href="tel:+8801521493443"
                      className="block text-base font-semibold text-gray-900 hover:text-[#3D84A7]"
                    >
                      +8801521493443
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    ☎️
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      Hotline
                    </div>
                    <a
                      href="tel:09642922922"
                      className="block text-base font-semibold text-gray-900 hover:text-[#3D84A7]"
                    >
                      09642-922922
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-amber-500/10 flex items-center justify-center">
                    ⏰
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      Service Hours
                    </div>
                    <p className="text-sm text-gray-700">
                      Every day: 9:00 AM – 9:00 PM <br />
                      (Delivery slots depend on daily schedule)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-full bg-slate-500/10 flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-gray-500">
                      Based in
                    </div>
                    <p className="text-sm text-gray-700">
                      Dhaka, Bangladesh <br />
                      Delivery mainly inside Dhaka city.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: WhatsApp CTA */}
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-sm text-gray-600 text-center">
                You can also send your fish list on WhatsApp – আমাদের টিম ওজন, সাইজ ও দাম
                কনফার্ম করে রিপ্লাই দেবে।
              </p>
              <a
                href="https://wa.me/8801521493443"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ebe5b] shadow-lg hover:shadow-[#25D366]/30 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0012 0a11.94 11.94 0 00-10.3 17.94L0 24l6.3-1.65A12 12 0 1012 0a11.79 11.79 0 008.52 3.48zM12 21.5a9.53 9.53 0 01-4.86-1.32l-.35-.21-3.73.98.99-3.64-.23-.36A9.55 9.55 0 1121.5 12a9.52 9.52 0 01-9.5 9.5zm5.47-7.12c-.3-.15-1.75-.86-2.04-.97-.28-.1-.48-.15-.68.14s-.8 1-1 1.22-.37.26-.64.13-1.26-.47-2.4-1.49a9.54 9.54 0 01-1.76-2.08c-.2-.33-.02-.5.13-.67s.3-.37.45-.55.28-.32.41-.51a.55.55 0 00.07-.57c-.08-.15-.68-1.62-.94-2.22s-.5-.49-.69-.5h-.58a1.18 1.18 0 00-.85.39A3.69 3.69 0 006.5 9.1a6.44 6.44 0 001.31 3.54c.16.22 2.18 3.39 5.32 4.72a8.89 8.89 0 002.37.73 3.9 3.9 0 001.79-.11 2.46 2.46 0 001.62-1.29 2.1 2.1 0 00.14-1.24c-.06-.12-.25-.21-.58-.37z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
