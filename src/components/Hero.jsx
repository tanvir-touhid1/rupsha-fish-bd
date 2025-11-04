// components/Hero.jsx
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Start animation when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Mark animation as complete after it finishes
      const completeTimer = setTimeout(() => {
        setAnimationComplete(true);
      }, 1500);
      
      return () => clearTimeout(completeTimer);
    }, 500); // Small delay before starting

    return () => clearTimeout(timer);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#47466D] via-[#3D84A7] to-[#46CDCF] text-white overflow-hidden min-h-screen flex items-center">
      
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#47466D]/30 to-[#46CDCF]/20"></div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Fresh Catch Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="w-2 h-2 bg-[#ABEDD8] rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">🎯 FRESH CATCH • READY FOR DELIVERY</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              <span className="block text-white">RUPSHA</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ABEDD8] to-[#46CDCF] mt-2">
                FISH
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-[#ABEDD8] max-w-2xl mx-auto leading-relaxed min-h-[72px] flex items-center justify-center">
              <span className={`
                font-semibold
                transition-all duration-1000 ease-out
                ${isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
                }
                ${animationComplete ? 'text-shadow-lg' : ''}
              `}>
                Premium fresh fish delivered from{" "}
                <span className="text-[#46CDCF] font-bold">Rupsha River to your table</span>
              </span>
            </div>
          </div>

          {/* Freshness Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className={`text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '200ms' }}>
              <div className="text-3xl mb-4">🌊</div>
              <h3 className="font-bold text-lg text-[#ABEDD8] mb-2">River Fresh</h3>
              <p className="text-sm text-[#ABEDD8]/80">Sourced daily from Rupsha River</p>
            </div>
            <div className={`text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-bold text-lg text-[#ABEDD8] mb-2">2-Hour Delivery</h3>
              <p className="text-sm text-[#ABEDD8]/80">Freshness guaranteed</p>
            </div>
            <div className={`text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="font-bold text-lg text-[#ABEDD8] mb-2">Premium Quality</h3>
              <p className="text-sm text-[#ABEDD8]/80">Hand-selected by experts</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <button 
                onClick={scrollToProducts}
                className={`bg-gradient-to-r from-[#46CDCF] to-[#3D84A7] hover:from-[#3D84A7] hover:to-[#47466D] text-white px-16 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#46CDCF]/25 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                ORDER FRESH FISH NOW
              </button>
              <p className={`text-[#ABEDD8] text-lg transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`} style={{ transitionDelay: '1000ms' }}>
                📞 Call: <span className="font-bold">+8801521493443</span>
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className={`flex flex-wrap justify-center gap-4 text-sm text-[#ABEDD8] px-4 transition-all duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ transitionDelay: '1200ms' }}>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-[#46CDCF]">✓</span>
                <span className="whitespace-nowrap">100% Fresh Guarantee</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-[#46CDCF]">✓</span>
                <span className="whitespace-nowrap">Free Delivery Over ৳1000</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-[#46CDCF]">✓</span>
                <span className="whitespace-nowrap">4.9/5 Customer Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;