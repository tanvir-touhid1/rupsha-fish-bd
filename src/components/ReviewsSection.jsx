// components/ReviewsSection.jsx
import React, { useState } from "react";

const ReviewsSection = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: "Rahim Ahmed",
      rating: 5,
      comment: "Fresh fish delivered right to my door! The Hilsha was excellent quality and the delivery was super fast.",
      date: "2025-01-15",
      product: "Hilsha"
    },
    {
      id: 2,
      name: "Fatima Begum",
      rating: 4,
      comment: "Great service! The Pabda fish was fresh and tasty. Will definitely order again.",
      date: "2025-01-12",
      product: "Pabda Fish"
    },
    {
      id: 3,
      name: "Sohel Rana",
      rating: 5,
      comment: "Best fish market online! The Deshi Magur was perfect for my special recipe. Thank you!",
      date: "2025-01-10",
      product: "Deshi Magur"
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      rating: 5,
      comment: "Amazing quality and customer service. The prawns were so fresh and delivery was on time.",
      date: "2025-01-08",
      product: "Prawn"
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
    product: ""
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    alert("Thank you for your review! It will be posted after approval.");
    setNewReview({
      name: "",
      rating: 5,
      comment: "",
      product: ""
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Customer Reviews</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          See what our customers are saying about our fresh fish and service quality
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-lg">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{review.comment}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Product: {review.product}</span>
                <span>{new Date(review.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Share Your Experience</h3>
          <form onSubmit={handleSubmitReview} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product You Ordered
                </label>
                <select
                  value={newReview.product}
                  onChange={(e) => setNewReview({...newReview, product: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                >
                  <option value="">Select a product</option>
                  <option value="Hilsha">Hilsha</option>
                  <option value="Deshi Magur">Deshi Magur</option>
                  <option value="Pabda Fish">Pabda Fish</option>
                  <option value="River Boal">River Boal</option>
                  <option value="Prawn">Prawn</option>
                  <option value="Koi Fish">Koi Fish</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Rating
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({...newReview, rating: star})}
                    className="focus:outline-none"
                  >
                    <svg
                      className={`w-8 h-8 ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Review
              </label>
              <textarea
                required
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Share your experience with our product and service..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;