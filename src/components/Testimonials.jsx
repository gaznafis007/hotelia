import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Hotelia made finding the perfect hotel for our family vacation a breeze. The accommodations were
                exactly as described, and we had an amazing time!"
              </p>
              <p className="font-semibold text-slate-800">- Sarah Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "I've been using Hotelia for all my business trips, and I'm always impressed with the quality of hotels
                they offer. Highly recommended!"
              </p>
              <p className="font-semibold text-slate-800">- Michael Chen</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Thanks to Hotelia, we discovered a hidden gem for our honeymoon. The customer service was outstanding,
                and the hotel exceeded our expectations."
              </p>
              <p className="font-semibold text-slate-800">- Emily and David Thompson</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Testimonials;