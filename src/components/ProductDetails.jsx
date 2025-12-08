// components/ProductDetails.jsx
import React, { useState } from "react";

const ProductDetails = ({ product, onClose, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return null;

  // ✅ Use real product images (supports multiple photos)
  const images =
    product.images && product.images.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : ["/images/fallback-fish.jpg"];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // ✅ Arrow navigation
  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="
        fixed inset-0 z-50 bg-black/50 
        flex justify-center items-start sm:items-center 
        overflow-y-auto
        p-4
      "
    >
      {/* ✅ max-h + internal scroll so it doesn't get cropped on laptop */}
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex flex-col md:flex-row">
          {/* Product Images */}
          <div className="md:w-1/2 p-6 rounded-b-lg md:rounded-tr-lg md:rounded-br-lg">
            <div className="relative mb-4">
              {/* main image, no cropping */}
              <div className="w-full h-64 md:h-80 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* ✅ Left / Right arrows */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="
                      absolute left-2 top-1/2 -translate-y-1/2 
                      h-9 w-9 rounded-full bg-white/90 
                      flex items-center justify-center shadow 
                      hover:bg-white transition
                    "
                  >
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="
                      absolute right-2 top-1/2 -translate-y-1/2 
                      h-9 w-9 rounded-full bg-white/90 
                      flex items-center justify-center shadow 
                      hover:bg-white transition
                    "
                  >
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`
                      w-16 h-16 border-2 rounded-lg overflow-hidden 
                      ${
                        selectedImage === index
                          ? "border-[#3D84A7]"
                          : "border-gray-300"
                      }
                    `}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-contain bg-gray-100"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 p-6 rounded-b-lg md:rounded-tr-lg md:rounded-br-lg">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {product.nameBn || product.name}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium capitalize">
                {product.category}
              </span>
            </div>

            <p className="text-3xl font-bold text-gray-800 mb-6">
              Tk {product.price}
            </p>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Description
              </h3>
              <p className="text-gray-600">
                Fresh {product.nameEn || product.name} sourced carefully.
                Premium quality, cleaned and prepared for home cooking.
                Delivered fresh to your doorstep.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">
                Details
              </h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Weight: {product.weight || product.unit}</li>
                <li>• Category: {product.category}</li>
                <li>• Freshness: Guaranteed fresh</li>
                <li>• Delivery: Inside Dhaka (slots depend on schedule)</li>
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold text-gray-800">
                Quantity:
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="w-12 text-center text-xl font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#3D84A7] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#46CDCF] transition duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add to Cart
              </button>

              <a
                href={`https://wa.me/+8801521493443?text=${encodeURIComponent(
                  `Hello! I'd like to order ${quantity} ${product.nameEn || product.name} (${product.weight || product.unit}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#1ebe5b] transition duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.495 3.09" />
                </svg>
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
