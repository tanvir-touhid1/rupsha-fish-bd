// components/ProductCard.jsx
import React, { useState } from "react";

const ProductCard = ({ product, addToCart, onViewProduct }) => {
  const [quantity, setQuantity] = useState(1.0);
  const [imageError, setImageError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [animateAdd, setAnimateAdd] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [swipeStartY, setSwipeStartY] = useState(null);
  const [swipeOffset, setSwipeOffset] = useState(0);

  // Pick primary image (supports multiple photos)
  const mainImage =
    product.images?.[0] || product.image || "/images/fallback-fish.jpg";

  // Modal gallery: use all images, fallback to single
  const galleryImages =
    product.images?.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : ["/images/fallback-fish.jpg"];

  const [selectedImage, setSelectedImage] = useState(0);

  const formatQty = (q) => (Number.isInteger(q) ? q : q.toFixed(1));

  const hasRange =
    product.priceMin &&
    product.priceMax &&
    product.priceMin !== product.priceMax;

  const basePrice =
    product.priceMin ?? product.price ?? product.totalPrice ?? 0;

  const unit = product.unit || product.weight || "kg";

  let priceText = "";
  if (hasRange) {
    priceText = `৳${product.priceMin}–${product.priceMax}/${unit}`;
  } else if (basePrice > 0) {
    priceText = `৳${basePrice}/${unit}`;
  } else {
    priceText = "দাম জানতে কল করুন";
  }

  const handleAddToCart = () => {
    setAnimateAdd(true);
    setTimeout(() => setAnimateAdd(false), 250);

    const totalPrice = basePrice * quantity;

    addToCart({
      id: product.id,
      name: product.name,
      nameBn: product.nameBn,
      image: mainImage,
      price: product.price,
      priceMin: product.priceMin,
      weight: product.weight || product.unit,
      cartQuantity: quantity,
      totalPrice,
    });

    setQuantity(1.0);
    closeDetails();
  };

  // Modal Controls
  const openDetails = () => {
    if (onViewProduct) onViewProduct(product);
    setShowModal(true);
    setTimeout(() => setModalVisible(true), 20);
  };

  const closeDetails = () => {
    setModalVisible(false);
    setSwipeOffset(0);
    setSwipeStartY(null);
    setTimeout(() => setShowModal(false), 180);
  };

  // Swipe close
  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    setSwipeStartY(e.touches[0].clientY);
    setSwipeOffset(0);
  };

  const handleTouchMove = (e) => {
    if (swipeStartY == null) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - swipeStartY;

    if (diff > 0) {
      const limited = Math.min(diff, 120);
      setSwipeOffset(limited);
    }
  };

  const handleTouchEnd = () => {
    if (swipeOffset > 80) closeDetails();
    else setSwipeOffset(0);
    setSwipeStartY(null);
  };

  // Quantity step
  const decrementQty = () => {
    setQuantity((prev) => Math.max(0.5, Number((prev - 0.5).toFixed(1))));
  };

  const incrementQty = () => {
    setQuantity((prev) => Number((prev + 0.5).toFixed(1)));
  };

  // Arrow navigation
  const handlePrevImage = () => {
    setSelectedImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* MAIN PRODUCT CARD */}
      <div
        id={`product-${product.id}`}
        className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
      >
        {/* Product Image */}
        <div
          className="relative w-full h-48 rounded-t-2xl bg-gray-100 overflow-hidden cursor-pointer flex items-center justify-center"
          onClick={openDetails}
        >
          <img
            src={imageError ? "/images/fallback-fish.jpg" : mainImage}
            alt={product.name}
            loading="lazy"
            onError={() => setImageError(true)}
            className="max-h-full max-w-full object-contain rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>


        {/* PRODUCT CONTENT */}
        <div className="p-4">
          <h3
            className="text-lg font-semibold text-gray-800 mb-1 leading-tight cursor-pointer hover:text-[#3D84A7] transition-colors"
            onClick={openDetails}
          >
            {product.nameBn || product.name}
          </h3>

          <p className="text-xs text-gray-500 mb-2">
            {product.nameEn || product.name}
          </p>

          {/* Price */}
          <p className="text-base font-bold text-[#3D84A7]">{priceText}</p>

          {product.priceNoteBn && (
            <p className="text-[11px] text-gray-500 mt-1">{product.priceNoteBn}</p>
          )}

          {/* Badges */}
          {product.badges && (
            <div className="flex flex-wrap gap-2 mt-3">
              {product.badges.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-[2px] text-[11px] bg-gray-100 text-gray-600 rounded-full border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Qty + Actions */}
          <div className="mt-4 flex items-center justify-between">
            {/* Quantity */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
              <button onClick={decrementQty} className="text-gray-600 font-bold text-lg">
                −
              </button>
              <span className="font-medium text-gray-800 text-sm">
                {formatQty(quantity)}kg
              </span>
              <button onClick={incrementQty} className="text-gray-600 font-bold text-lg">
                +
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={openDetails}
                className="text-xs text-gray-500 hover:text-[#3D84A7] underline"
              >
                Details
              </button>

              <button
                onClick={handleAddToCart}
                className={`text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  animateAdd
                    ? "bg-emerald-500 scale-110 shadow-md"
                    : "bg-[#3D84A7] hover:bg-[#46CDCF]"
                }`}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          {/* wrapper to center + allow scroll on small screens */}
          <div
            className="flex min-h-full items-center justify-center px-3 py-6"
            onClick={closeDetails} // backdrop click closes modal
          >
            <div
              className="bg-white rounded-2xl max-w-md w-full shadow-2xl transform transition-all duration-300 max-h-[90vh] overflow-y-auto"
              style={{
                transform: `translateY(${swipeOffset}px) scale(${
                  modalVisible ? 1 : 0.9
                })`,
                opacity: modalVisible ? 1 : 0,
              }}
              onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.nameBn || product.name}
                </h2>
                <button
                  onClick={closeDetails}
                  className="text-gray-400 hover:text-gray-600 text-xl"
                >
                  ×
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5">
                {/* ==== IMAGE GALLERY ==== */}
                <div className="relative w-full h-56 rounded-xl bg-gray-100 overflow-hidden mb-4">
                  {/* Sliding track */}
                  <div
                    className="flex h-full transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${selectedImage * 100}%)` }}
                  >
                    {galleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="min-w-full h-full flex items-center justify-center"
                      >
                        <img
                          src={img}
                          alt={`${product.name} ${idx + 1}`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Arrows */}
                  {galleryImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevImage}
                        className="
                          absolute left-3 top-1/2 -translate-y-1/2 z-10
                          h-9 w-9 rounded-full bg-white shadow border border-gray-200
                          flex items-center justify-center
                          hover:bg-[#3D84A7] hover:text-white transition
                        "
                      >
                        <svg
                          className="w-4 h-4"
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
                          absolute right-3 top-1/2 -translate-y-1/2 z-10
                          h-9 w-9 rounded-full bg-white shadow border border-gray-200
                          flex items-center justify-center
                          hover:bg-[#3D84A7] hover:text-white transition
                        "
                      >
                        <svg
                          className="w-4 h-4"
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
                {galleryImages.length > 1 && (
                  <div className="flex gap-2 mb-4">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`w-16 h-16 rounded-lg overflow-hidden border ${
                          selectedImage === idx
                            ? "border-[#3D84A7]"
                            : "border-gray-300"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`img-${idx}`}
                          className="w-full h-full object-contain bg-gray-100"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* English name */}
                <p className="text-sm font-medium text-gray-800">
                  {product.nameEn || product.name}
                </p>

                {/* Price */}
                <p className="text-xl font-bold text-[#3D84A7] mt-2">
                  {priceText}
                </p>

                {product.priceNoteBn && (
                  <p className="text-xs text-gray-500 mt-1">
                    {product.priceNoteBn}
                  </p>
                )}

                {/* Description */}
                {product.shortDescription && (
                  <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                    {product.shortDescription}
                  </p>
                )}

                {/* Badges */}
                {product.badges && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {product.badges.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-[2px] text-[11px] bg-gray-100 text-gray-600 rounded-full border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Note */}
                <p className="text-[11px] text-gray-500 mt-4">
                  চূড়ান্ত দাম মাছের সাইজ ও ওজন অনুযায়ী নির্ধারিত হবে।
                </p>

                {/* Qty + Add */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                    <button
                      onClick={decrementQty}
                      className="text-gray-600 font-bold text-lg"
                    >
                      −
                    </button>
                    <span className="font-medium text-gray-800 text-sm">
                      {formatQty(quantity)}kg
                    </span>
                    <button
                      onClick={incrementQty}
                      className="text-gray-600 font-bold text-lg"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="bg-[#3D84A7] hover:bg-[#46CDCF] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
