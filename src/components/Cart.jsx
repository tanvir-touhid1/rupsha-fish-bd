// components/Cart.jsx
import React, { useState } from "react";
import OrderFormModal from "./OrderFormModal.jsx";

const FREE_DELIVERY_THRESHOLD = 1000; // Tk
const BASE_DELIVERY_FEE = 60; // Tk (change if needed)

const Cart = ({
  cartItems,
  removeFromCart,
  clearCart,
  subtotal,
  onUpdateQuantity,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const toggleCart = () => setIsOpen(!isOpen);

  // helper: format quantity nicely (1 or 1.5)
  const formatQty = (q) => (Number.isInteger(q) ? q : q.toFixed(1));

  // Total items in cart (kg-based)
  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.cartQuantity || 1),
    0
  );

  // Estimated subtotal
  const estimatedSubtotal =
    typeof subtotal === "number"
      ? subtotal
      : cartItems.reduce((sum, item) => {
          const qty = item.cartQuantity || 1;
          const basePrice = item.priceMin ?? item.price ?? 0;
          return sum + basePrice * qty;
        }, 0);

  const deliveryFee =
    estimatedSubtotal === 0 || estimatedSubtotal >= FREE_DELIVERY_THRESHOLD
      ? 0
      : BASE_DELIVERY_FEE;

  const estimatedTotal = estimatedSubtotal + deliveryFee;

  // Quantity change helpers (0.5 kg step, min 0.5kg)
  const handleDecrease = (index) => {
    if (!onUpdateQuantity) return;
    const current = cartItems[index]?.cartQuantity || 1;
    const next = Math.max(0.5, current - 0.5);
    onUpdateQuantity(index, Number(next.toFixed(1)));
  };

  const handleIncrease = (index) => {
    if (!onUpdateQuantity) return;
    const current = cartItems[index]?.cartQuantity || 1;
    const next = current + 0.5;
    onUpdateQuantity(index, Number(next.toFixed(1)));
  };

  // WhatsApp summary
  const whatsappMessage = (() => {
    if (!cartItems.length) {
      return `I would like to place an order from Rupsha Fish. Please share available items and prices.`;
    }

    const lines = cartItems.map((item) => {
      const qty = item.cartQuantity || 1;
      const basePrice = item.priceMin ?? item.price ?? 0;
      const approx =
        basePrice > 0 ? `~৳${(basePrice * qty).toFixed(0)}` : "price to confirm";

      return `• ${item.nameBn || item.name} – ${formatQty(qty)}kg (${approx})`;
    });

    const deliveryText =
      deliveryFee === 0
        ? `Free (over ৳${FREE_DELIVERY_THRESHOLD})`
        : `~৳${deliveryFee} inside Dhaka`;

    return (
      `*Rupsha Fish Order (Estimate)*\n\n` +
      `${lines.join("\n")}\n\n` +
      `Estimated subtotal: ৳${estimatedSubtotal.toFixed(0)}\n` +
      `Delivery: ${deliveryText}\n` +
      `Estimated total: ৳${estimatedTotal.toFixed(0)}\n\n` +
      `*Note:* Final price confirmed after weighing the fish.\n\n` +
      `Please provide:\n` +
      `• Name\n• Mobile number\n• Delivery address\n• Preferred time (morning/evening)`
    );
  })();

  const whatsappUrl = `https://wa.me/8801521493443?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleOrderSuccess = (msg) => {
    clearCart();
    alert(msg || "Order submitted successfully!");
  };

  const handleOrderError = (msg) => {
    alert(msg || "Failed to submit order. Please try WhatsApp.");
  };

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
        {/* HEADER (Collapsible Button) */}
        <button
          onClick={toggleCart}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200"
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            🛒 My Cart ({formatQty(totalItems)} kg)
          </h2>
          <span className="text-xl text-gray-600">{isOpen ? "−" : "+"}</span>
        </button>

        {/* COLLAPSIBLE BODY */}
        {isOpen && (
          <div className="p-4">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Cart Items */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">
                    Shopping Cart ({formatQty(totalItems)} kg)
                  </h2>

                  {cartItems.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="text-sm text-gray-500 hover:text-red-500 flex items-center gap-1"
                    >
                      🗑 Clear Cart
                    </button>
                  )}
                </div>

                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-sm">
                    Your cart is empty. Add some fresh river &amp; sea fish.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item, index) => {
                      const qty = item.cartQuantity || 1;
                      const basePrice = item.priceMin ?? item.price ?? 0;
                      const linePrice =
                        basePrice > 0 ? basePrice * qty : undefined;

                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-14 h-14 rounded-md object-cover"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-800">
                                {item.nameBn || item.name}
                              </h3>

                              {/* Quantity control + approx price */}
                              <div className="mt-1 flex items-center gap-2">
                                <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-200">
                                  <button
                                    onClick={() => handleDecrease(index)}
                                    className="text-gray-600 font-bold text-lg"
                                  >
                                    −
                                  </button>
                                  <span className="text-xs font-medium text-gray-800">
                                    {formatQty(qty)}kg
                                  </span>
                                  <button
                                    onClick={() => handleIncrease(index)}
                                    className="text-gray-600 font-bold text-lg"
                                  >
                                    +
                                  </button>
                                </div>

                                {linePrice && (
                                  <span className="text-[11px] text-gray-500">
                                    Approx: ৳{linePrice.toFixed(0)}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => removeFromCart(index)}
                            className="text-xs px-3 py-1 rounded-full border border-red-300 text-red-600 hover:bg-red-50 transition"
                          >
                            Remove
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Summary + Checkout Options */}
              <div className="w-full lg:w-80">
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    Estimated Summary
                  </h3>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Subtotal (estimate)
                      </span>
                      <span className="font-semibold">
                        ৳{estimatedSubtotal.toFixed(0)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Delivery inside Dhaka
                        <span className="block text-[11px] text-gray-400">
                          Free over ৳{FREE_DELIVERY_THRESHOLD}
                        </span>
                      </span>

                      <span className="font-semibold">
                        {deliveryFee === 0 ? "Free" : `~৳${deliveryFee}`}
                      </span>
                    </div>

                    <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                      <span className="font-semibold text-gray-800">
                        Total (estimate)
                      </span>
                      <span className="font-bold text-[#3D84A7]">
                        ৳{estimatedTotal.toFixed(0)}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-500 mb-3">
                    Final price depends on weight/size. Our team will confirm
                    before delivery.
                  </p>

                  {/* OPTION 1 */}
                  <div className="mb-2">
                    <p className="text-[11px] font-medium text-gray-600 mb-1">
                      Option 1 – Order with form (recommended)
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        if (!cartItems.length) return;
                        setIsOrderModalOpen(true);
                      }}
                      className={`block w-full text-center py-3 rounded-full text-sm font-semibold ${
                        cartItems.length === 0
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-green-600 text-white hover:bg-green-700 transition"
                      }`}
                      disabled={cartItems.length === 0}
                    >
                      📝 Order with Form (Cash on Delivery)
                    </button>
                  </div>

                  {/* OR DIVIDER */}
                  <div className="flex items-center my-2">
                    <div className="flex-1 h-px bg-gray-300" />
                    <span className="px-2 text-[10px] uppercase tracking-wide text-gray-400 font-semibold">
                      or
                    </span>
                    <div className="flex-1 h-px bg-gray-300" />
                  </div>

                  {/* OPTION 2 */}
                  <div className="mt-2">
                    <p className="text-[11px] font-medium text-gray-600 mb-1">
                      Option 2 – Checkout via WhatsApp
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`block w-full text-center py-3 rounded-full text-sm font-semibold ${
                        cartItems.length === 0
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-[#25D366] text-white hover:bg-[#1ebe5b] transition"
                      }`}
                      onClick={(e) => {
                        if (!cartItems.length) e.preventDefault();
                      }}
                    >
                      💬 Checkout via WhatsApp
                    </a>
                  </div>

                  <p className="mt-3 text-center text-[10px] text-gray-500">
                    Choose <span className="font-semibold">any one</span> option
                    above to confirm your order.
                  </p>

                  <div className="mt-2 text-center text-xs text-gray-500">
                    🗓 Same-day delivery (Morning &amp; Evening slots)
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Order Form Modal */}
      <OrderFormModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        cartItems={cartItems}
        estimatedSubtotal={estimatedSubtotal}
        deliveryFee={deliveryFee}
        onOrderSuccess={handleOrderSuccess}
        onOrderError={handleOrderError}
      />
    </>
  );
};

export default Cart;
