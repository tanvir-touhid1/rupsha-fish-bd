// components/Header.jsx
import React, { useState, useEffect } from "react";

const Header = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);
  const [prevCartCount, setPrevCartCount] = useState(0);

  // Trigger animation when cartCount changes
  useEffect(() => {
    if (cartCount > prevCartCount) {
      setAnimateCart(true);
      const timer = setTimeout(() => setAnimateCart(false), 600);
      return () => clearTimeout(timer);
    }
    setPrevCartCount(cartCount);
  }, [cartCount, prevCartCount]);

  // Counter badge animation styles
  const getCounterAnimation = () => {
    if (!animateCart) return '';
    
    return `
      animate-bounce 
      scale-125 
      rotate-12 
      shadow-lg 
      shadow-red-500/50
      border-2 
      border-white
    `;
  };

  const getPulseAnimation = () => {
    if (!animateCart) return '';
    return 'animate-ping absolute -top-1 -right-1';
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-[#47466D] to-[#3D84A7] text-white py-2 px-4">
        <div className="container mx-auto">
          {/* Desktop Layout */}
          <div className="hidden sm:flex flex-row justify-center items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z"/>
              </svg>
              <span className="whitespace-nowrap">আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp:</span>
              <a href="tel:+8801521493443" className="font-bold hover:text-[#ABEDD8] transition-colors whitespace-nowrap">
                +8801521493443
              </a>
            </div>
            
            <div className="text-white/60">|</div>
            
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.05 21q-.45 0-.75-.3t-.3-.75V15.9q0-.35.225-.613t.575-.362l3.45-.7q.35-.05.713.063t.587.337L10.9 17q.8-.775 1.625-1.438T14.1 14.35q.775-.775 1.438-1.6T17 10.9l-2.35-2.35q-.225-.225-.338-.588t-.062-.712l.7-3.45q.1-.35.363-.575T15.9 3h4.05q.45 0 .75.3t.3.75q0 3.1-1.363 6.15t-3.862 5.55q-2.5 2.5-5.55 3.863T4.05 21Z"/>
              </svg>
              <span className="whitespace-nowrap">হট লাইন:</span>
              <a href="tel:09642922922" className="font-bold hover:text-[#ABEDD8] transition-colors whitespace-nowrap">
                09642-922922
              </a>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="sm:hidden flex flex-col items-center gap-2 text-xs">
            {/* First Line - WhatsApp */}
            <div className="flex items-center gap-2 justify-center w-full">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z"/>
              </svg>
              <span className="whitespace-nowrap">অর্ডার করতে কল বা WhatsApp:</span>
            </div>
            <a href="tel:+8801521493443" className="font-bold hover:text-[#ABEDD8] transition-colors text-sm whitespace-nowrap">
              +8801521493443
            </a>

            {/* Second Line - Hotline */}
            <div className="flex items-center gap-2 justify-center w-full mt-1">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.05 21q-.45 0-.75-.3t-.3-.75V15.9q0-.35.225-.613t.575-.362l3.45-.7q.35-.05.713.063t.587.337L10.9 17q.8-.775 1.625-1.438T14.1 14.35q.775-.775 1.438-1.6T17 10.9l-2.35-2.35q-.225-.225-.338-.588t-.062-.712l.7-3.45q.1-.35.363-.575T15.9 3h4.05q.45 0 .75.3t.3.75q0 3.1-1.363 6.15t-3.862 5.55q-2.5 2.5-5.55 3.863T4.05 21Z"/>
              </svg>
              <span className="whitespace-nowrap">হট লাইন:</span>
            </div>
            <a href="tel:09642922922" className="font-bold hover:text-[#ABEDD8] transition-colors text-sm whitespace-nowrap">
              09642-922922
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/75 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png"
                alt="Rupsha Fish" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-[#47466D]">Rupsha Fish</h1>
                <p className="text-xs text-gray-500 -mt-1">Fresh Fish Delivery</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-[#3D84A7] font-medium transition-colors duration-200 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D84A7] transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#products-section" className="text-gray-700 hover:text-[#3D84A7] font-medium transition-colors duration-200 relative group">
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D84A7] transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#cart-section" className="text-gray-700 hover:text-[#3D84A7] font-medium transition-colors duration-200 relative group flex items-center gap-2">
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className={`
                    bg-gradient-to-br from-red-500 to-red-600 
                    text-white text-xs rounded-full px-2 py-1 
                    min-w-[20px] h-5 flex items-center justify-center 
                    font-bold shadow-lg transition-all duration-300
                    ${getCounterAnimation()}
                  `}>
                    {cartCount}
                  </span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3D84A7] transition-all duration-200 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Cart Counter & WhatsApp Button - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              {/* Cart Counter Badge */}
              {cartCount > 0 && (
                <div className="relative">
                  <a 
                    href="#cart-section"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
                    </svg>
                    
                    {/* Animated Counter */}
                    <div className="relative">
                      <span className={`
                        bg-gradient-to-br from-red-500 to-red-600 
                        text-white text-xs rounded-full px-2 py-1 
                        min-w-[20px] h-5 flex items-center justify-center 
                        font-bold shadow-lg transition-all duration-300
                        ${getCounterAnimation()}
                      `}>
                        {cartCount}
                      </span>
                      
                      {/* Pulsing effect */}
                      {animateCart && (
                        <>
                          <div className={getPulseAnimation()}>
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          </div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                        </>
                      )}
                    </div>
                    
                    <span className="text-sm text-gray-600">items</span>
                  </a>
                </div>
              )}
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+8801321208940"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#46CDCF] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#3D84A7] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-[#46CDCF]/25"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
                </svg>
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button with Cart Badge */}
            <div className="flex items-center gap-4 md:hidden">
              {/* Mobile Cart Badge */}
              {cartCount > 0 && (
                <a 
                  href="#cart-section"
                  className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-all duration-300 group"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
                  </svg>
                  
                  {/* Animated Mobile Counter */}
                  <span className={`
                    absolute -top-1 -right-1 
                    bg-gradient-to-br from-red-500 to-red-600 
                    text-white text-xs rounded-full px-1.5 py-0.5 
                    min-w-[18px] h-4.5 flex items-center justify-center 
                    font-bold shadow-lg border border-white transition-all duration-300
                    ${animateCart ? `
                      animate-bounce 
                      scale-150 
                      rotate-12 
                      shadow-xl 
                      shadow-red-500/50
                    ` : 'scale-100 rotate-0'}
                  `}>
                    {cartCount}
                  </span>
                  
                  {/* Mobile Pulsing Effect */}
                  {animateCart && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
                    </div>
                  )}
                </a>
              )}
              
              <button 
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 animate-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-[#3D84A7] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#products-section" 
                className="text-gray-700 hover:text-[#3D84A7] font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#cart-section" 
                className="text-gray-700 hover:text-[#3D84A7] font-medium py-2 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart 
                {cartCount > 0 && (
                  <span className={`
                    bg-gradient-to-br from-red-500 to-red-600 
                    text-white text-xs rounded-full px-2 py-1 
                    min-w-[20px] h-5 flex items-center justify-center 
                    font-bold shadow-lg transition-all duration-300
                    ${animateCart ? `
                      animate-bounce 
                      scale-125 
                      rotate-12 
                      shadow-xl 
                      shadow-red-500/50
                    ` : 'scale-100 rotate-0'}
                  `}>
                    {cartCount}
                  </span>
                )}
              </a>
              <a
                href="https://wa.me/+8801321208940"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#46CDCF] text-white py-3 rounded-lg font-semibold text-center hover:bg-[#3D84A7] transition-colors shadow-lg hover:shadow-[#46CDCF]/25"
                onClick={() => setIsMenuOpen(false)}
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;