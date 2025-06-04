import React from 'react';

const HeroSection = () => {
  return (
    <main className="max-w-7xl mx-auto p-6 sm:p-12 min-h-[80vh] flex flex-col justify-start bg-gradient-to-r from-indigo-100 to-purple-200 rounded-lg shadow-lg">
      
      {/* 🔥 SALE BANNER Section */}
     

      {/* 🎯 Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-pink-900 mb-4 leading-tight">
          It's time to hit refresh
        </h1>
        <p className="text-lg sm:text-xl text-pink-800 max-w-xl mb-6 leading-relaxed">
          New Arrivals<br />
          Latest Women’s Fresh New Styles & Old School Originals
        </p>
        <div className="inline-block bg-indigo-100 border-4 border-indigo-700 rounded-lg py-4 px-6 mb-12 shadow-lg">
          <span className="font-bold text-pink-900 uppercase text-2xl tracking-widest">
            SEASON ENDING SALE
          </span>
        </div>
        <section className="w-full mb-12">
        <img
          src="https://www.aachho.com/cdn/shop/files/Carnival-Sale-1B.jpg?v=1747981430" // Replace with your banner
          alt="Season Sale Banner"
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </section>
        <button
          className="bg-pink-700 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-md shadow-md transition"
          onClick={() => alert("Discover more clicked!")}
        >
          DISCOVER MORE
        </button>
      </section>
    </main>
  );
};

export default HeroSection;
