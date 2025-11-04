// components/ProductCard.jsx
import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    
    // Create a cart item with quantity information
    const cartItem = {
      ...product,
      cartQuantity: quantity, // Add quantity to the product
      totalPrice: product.price * quantity,
      totalWeight: `${quantity}kg`
    };
    
    // Simulate async operation for better UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    addToCart(cartItem);
    setQuantity(1);
    setIsAdding(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const getCategoryColor = (category) => {
    const colors = {
      freshwater: "from-green-500 to-emerald-600",
      river: "from-blue-500 to-cyan-600", 
      marine: "from-purple-500 to-indigo-600",
      seafood: "from-orange-500 to-red-500",
      ornamental: "from-pink-500 to-rose-500"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200/50 hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
        )}
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-cyan-50">
            <div className="text-center text-gray-400">
              <div className="text-5xl mb-3 opacity-60">🐟</div>
              <p className="text-sm font-medium">Image not available</p>
            </div>
          </div>
        ) : (
          <>
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              } group-hover:scale-105`}
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
          </>
        )}
        
        {/* Category Badge */}
        <div className={`absolute top-3 left-3 bg-gradient-to-r ${getCategoryColor(product.category)} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </div>
        
        {/* Weight Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-lg text-xs font-semibold shadow-sm">
          {product.weight}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-bold text-gray-800 text-lg mb-1 line-clamp-1 group-hover:text-green-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-500 text-sm">Fresh from local waters</p>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#47466D] to-[#3D84A7]">
  ${product.price}
</span>
            <span className="text-gray-500 text-sm ml-1">per {product.weight}</span>
          </div>
          <div className="text-amber-500 flex items-center gap-1">
            <span>⭐</span>
            <span className="text-sm font-semibold">4.8</span>
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
          <span className="text-sm font-medium text-gray-700">Quantity (kg):</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              disabled={quantity === 1}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg text-gray-600 hover:bg-white hover:border-green-400 transition-all disabled:opacity-40 disabled:cursor-not-allowed font-bold"
            >
              -
            </button>
            <span className="w-8 text-center font-bold text-gray-800">{quantity}</span>
            <button
              onClick={() => setQuantity(prev => prev + 1)}
              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg text-gray-600 hover:bg-white hover:border-green-400 transition-all font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button - Updated to Green Color Scheme */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-white ${
            isAdding 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-[#46CDCF] to-[#3D84A7] hover:from-[#3D84A7] hover:to-[#47466D] shadow-lg hover:shadow-[#46CDCF]/25 transform hover:scale-[1.02]'
          }`}
          >
          {isAdding ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Adding...</span>
            </>
          ) : (
            <>
              <span>🛒</span>
              <span>Add to Cart</span>
              {quantity > 1 && <span className="text-white/80">({quantity}kg)</span>}
            </>
          )}
          </button>
      </div>
    </div>
  );
};

export default ProductCard;