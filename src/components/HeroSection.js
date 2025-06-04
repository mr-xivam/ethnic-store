import React, { useState } from 'react';

const HeroSection = () => {
  const images = [
    'https://www.karagiri.com/cdn/shop/products/lehenga-choli-cream-lehenga-choli-silk-saree-online-32139804213441.jpg?v=1651233916',
    'https://www.karagiri.com/cdn/shop/products/lehenga-choli-lily-yellow-lehenga-choli-silk-saree-online-32139802083521.jpg?v=1651234273',
    'https://www.karagiri.com/cdn/shop/products/lehenga-choli-turkish-blue-lehenga-choli-silk-saree-online-32148943732929.jpg?v=1651404197',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <main className="max-w-7xl mx-auto p-4 sm:p-10 bg-gradient-to-r from-indigo-100 to-purple-200 rounded-lg shadow-lg min-h-[60vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* 🔲 Left: Square Image */}
        <div
          className="w-50 h-60 mx-auto md:mx-0 rounded-lg overflow-hidden shadow-md border-4 border-white cursor-pointer"
          onClick={handleImageClick}
        >
          <img
            src={images[currentIndex]}
            alt={`Dress ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ✨ Right: Text and Buttons */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-pink-900 mb-3 leading-tight">
            It's time to hit refresh
          </h1>
          <p className="text-base sm:text-lg text-pink-800 mb-4">
            New Arrivals<br />
            Latest Women’s Fresh New Styles & Old School Originals
          </p>

          {/* 🔘 Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-indigo-100 border-2 border-indigo-700 text-pink-900 font-bold px-5 py-2 rounded-md shadow-md uppercase tracking-wide text-sm hover:bg-indigo-200 transition">
              Season Ending Sale
            </button>
            <button
              className="bg-pink-700 hover:bg-indigo-800 text-white font-semibold px-5 py-2 rounded-md shadow-md transition text-sm"
              onClick={() => alert("Discover more clicked!")}
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
 