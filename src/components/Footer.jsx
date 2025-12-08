// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-10">
      <div className="container mx-auto px-4 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand / About */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/images/logo.svg"
                alt="Rupsha Fish"
                className="h-9 w-auto"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Rupsha Fish
                </h3>
                <p className="text-[11px] text-gray-400">
                  Fresh river &amp; sea fish • No farm fish
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              Rupsha Fish collects premium wild-caught fish directly from rivers
              and the sea. Each order is cleaned, hygienically packed, and
              delivered with care to your doorstep inside Dhaka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#46CDCF] transition-colors"
                >
                  🏠 Home
                </a>
              </li>
              <li>
                <a
                  href="#products-section"
                  className="hover:text-[#46CDCF] transition-colors"
                >
                  🐟 Browse Fish
                </a>
              </li>
              <li>
                <a
                  href="#cart-section"
                  className="hover:text-[#46CDCF] transition-colors"
                >
                  🛒 My Cart
                </a>
              </li>
              <li>
                <a
                  href="#contact-section"
                  className="hover:text-[#46CDCF] transition-colors"
                >
                  📞 Contact &amp; Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Order &amp; Support
            </h4>

            <div className="space-y-2 text-sm mb-4">
              <p>
                <span className="text-gray-400">অর্ডার / WhatsApp:&nbsp;</span>
                <a
                  href="tel:+8801521493443"
                  className="font-semibold hover:text-[#46CDCF] transition-colors"
                >
                  +8801521493443
                </a>
              </p>
              <p>
                <span className="text-gray-400">হট লাইন:&nbsp;</span>
                <a
                  href="tel:09642922922"
                  className="font-semibold hover:text-[#46CDCF] transition-colors"
                >
                  09642-922922
                </a>
              </p>
              <p className="text-xs text-gray-400">
                Delivery inside Dhaka • Slots: Morning &amp; Evening
              </p>
            </div>

            <a
              href="https://wa.me/8801521493443"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center 
                px-4 py-2 rounded-full text-xs font-semibold 
                bg-[#25D366] text-white 
                hover:bg-[#1ebe5b] 
                transition-colors shadow-md hover:shadow-lg 
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0012 0a11.94 11.94 0 00-10.3 17.94L0 24l6.3-1.65A12 12 0 1012 0a11.79 11.79 0 008.52 3.48zM12 21.5a9.53 9.53 0 01-4.86-1.32l-.35-.21-3.73.98.99-3.64-.23-.36A9.55 9.55 0 1121.5 12a9.52 9.52 0 01-9.5 9.5zm5.47-7.12c-.3-.15-1.75-.86-2.04-.97-.28-.1-.48-.15-.68.14s-.8 1-1 1.22-.37.26-.64.13-1.26-.47-2.4-1.49a9.54 9.54 0 01-1.76-2.08c-.2-.33-.02-.5.13-.67s.3-.37.45-.55.28-.32.41-.51a.55.55 0 00.07-.57c-.08-.15-.68-1.62-.94-2.22s-.5-.49-.69-.5h-.58a1.18 1.18 0 00-.85.39A3.69 3.69 0 006.5 9.1a6.44 6.44 0 001.31 3.54c.16.22 2.18 3.39 5.32 4.72a8.89 8.89 0 002.37.73 3.9 3.9 0 001.79-.11 2.46 2.46 0 001.62-1.29 2.1 2.1 0 00.14-1.24c-.06-.12-.25-.21-.58-.37z" />
              </svg>

              Order on WhatsApp
            </a>


            <div>
              <p className="text-xs text-gray-400 mb-2">
                Follow Rupsha Fish on social:
              </p>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61581693006812"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-[#1877F2] transition-colors"
                  aria-label="Rupsha Fish on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-white"
                  >
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.414c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>

                {/* Placeholder for future socials */}
                {/* 
                <a ...>Instagram</a>
                <a ...>YouTube</a>
                */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Rupsha Fish. All rights reserved. Fresh
            river &amp; sea fish delivery in Dhaka.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
