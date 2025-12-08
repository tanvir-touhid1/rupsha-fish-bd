// components/SearchAndFilter.jsx
import React from "react";

const SearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}) => {
  return (
    <div className="w-full mb-8">
      
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search fish (e.g., ইলিশ, বোয়াল, চিংড়ি)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 mx-auto block rounded-full border border-gray-300 px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3D84A7]"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide px-2 py-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                  whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-[#3D84A7] text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                  }
                `}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
