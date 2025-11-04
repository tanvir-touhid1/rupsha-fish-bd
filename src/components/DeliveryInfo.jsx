// components/DeliveryInfo.jsx
import React from "react";

const DeliveryInfo = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Delivery Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fresh Guarantee</h3>
            <p className="text-gray-600">All fish are sourced daily and delivered within 24 hours to ensure maximum freshness.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600">Free delivery within city limits. Same-day delivery available for orders before 2 PM.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Promise</h3>
            <p className="text-gray-600">100% satisfaction guarantee. If you're not happy with your order, we'll make it right.</p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Delivery Areas & Times</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3">🏙️ City Areas</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Dhaka City - Free delivery</li>
                <li>• Chittagong City - Free delivery</li>
                <li>• Sylhet City - Free delivery</li>
                <li>• Other cities - Contact for rates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">⏰ Delivery Times</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Same-day: Order before 2 PM</li>
                <li>• Next-day: Order after 2 PM</li>
                <li>• Delivery: 9 AM - 8 PM</li>
                <li>• Emergency: Contact directly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;