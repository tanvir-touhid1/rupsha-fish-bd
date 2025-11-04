// components/Cart.jsx
import React from "react";

const Cart = ({ cartItems, removeFromCart, clearCart, subtotal }) => {
  const deliveryFee = subtotal > 50 ? 0 : 5; // Free delivery over $50
  const finalTotal = subtotal + deliveryFee;
  
  // Calculate total items count
  const totalItems = cartItems.reduce((sum, item) => sum + (item.cartQuantity || 1), 0);

  // WhatsApp message with proper quantities
  const whatsappMessage = `*Rupsha Fish Order Summary*\n\n${cartItems.map(item => 
    `• ${item.name} (${item.cartQuantity || 1}kg) - $${item.totalPrice || item.price}`
  ).join('\n')}\n\n*Subtotal:* $${subtotal}\n*Delivery:* ${deliveryFee === 0 ? 'FREE' : `$${deliveryFee}`}\n*Total:* $${finalTotal}\n\nPlease confirm this order and provide delivery details.`;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
      {/* Cart Header */}
      <div className="bg-gradient-to-r from-[#47466D] to-[#3D84A7] px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
            </svg>
            Shopping Cart ({totalItems} items)
          </h2>
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Clear Cart
            </button>
          )}
        </div>
      </div>

      {/* Cart Content */}
      <div className="p-6">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Add some fresh fish to get started!</p>
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Browse Products
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Cart Items */}
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200/50">
                  {/* Product Image */}
                  <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500 text-sm">
                      {item.cartQuantity || 1}kg • ${item.price}/kg
                    </p>
                  </div>
                  
                  {/* Price and Actions */}
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-800">
                      ${item.totalPrice || item.price}
                    </span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2 rounded-lg hover:bg-red-50"
                      title="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="border-t pt-6 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({totalItems} items)</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className={deliveryFee === 0 ? "text-green-600 font-semibold" : "font-semibold"}>
                  {deliveryFee === 0 ? "FREE" : `$${deliveryFee}`}
                </span>
              </div>
              {deliveryFee === 0 && (
                <div className="text-sm text-green-600 bg-green-50 p-2 rounded-lg">
                  🎉 You qualify for free delivery!
                </div>
              )}
              <div className="flex justify-between text-xl font-bold border-t pt-3">
                <span>Total</span>
                <span className="text-cyan-600">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <a
              href={`https://wa.me/+8801521493443?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-[#46CDCF] to-[#3D84A7] hover:from-[#3D84A7] hover:to-[#47466D] text-white py-4 rounded-xl font-bold text-center hover:shadow-lg hover:shadow-[#46CDCF]/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418"/>
              </svg>
              Checkout on WhatsApp
            </a>

            {/* Delivery Info */}
            <div className="text-center text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
              <p>🗓️ Delivery within 2 hours | 📍 Dhaka area only</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;