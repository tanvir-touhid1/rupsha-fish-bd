// App.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SearchAndFilter from "./components/SearchAndFilter.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";
import Toast from "./components/Toast.jsx";
import { products, categories } from "./data/products.js";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [toast, setToast] = useState(null);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("fishmart-cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("fishmart-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productWithQuantity) => {
    setCartItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(item => 
        item.id === productWithQuantity.id
      );

      if (existingItemIndex !== -1) {
        // Update existing item quantity
        const updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        
        updatedItems[existingItemIndex] = {
          ...existingItem,
          cartQuantity: existingItem.cartQuantity + productWithQuantity.cartQuantity,
          totalPrice: existingItem.totalPrice + productWithQuantity.totalPrice,
          totalWeight: `${existingItem.cartQuantity + productWithQuantity.cartQuantity}kg`
        };
        
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, productWithQuantity];
      }
    });
    
    // Show toast notification
    setToast({ 
      message: `${productWithQuantity.cartQuantity}kg ${productWithQuantity.name} added to cart!`, 
      type: 'success' 
    });
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.totalPrice || item.price), 0);
  const itemCount = cartItems.reduce((sum, item) => sum + (item.cartQuantity || 1), 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header cartCount={itemCount} />
      
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Featured Products */}
        <section id="products-section" className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
              Featured Products
            </h2>
            
            {/* Search and Filter */}
            <SearchAndFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🐟</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Cart Section */}
        <div id="cart-section" className="container mx-auto px-4 py-8">
          <Cart 
            cartItems={cartItems} 
            removeFromCart={removeFromCart} 
            clearCart={clearCart} 
            subtotal={subtotal}
          />
        </div>
      </main>

      <Footer />

      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;