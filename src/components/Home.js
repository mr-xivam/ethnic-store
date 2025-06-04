import React from 'react';

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto p-6 sm:p-12 min-h-[80vh] flex flex-col justify-center bg-gradient-to-r from-indigo-100 to-purple-200 rounded-lg shadow-lg">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-indigo-900 mb-4">It's time to hit refresh</h1>
      <p className="text-lg sm:text-xl text-indigo-800 mb-8 max-w-xl">
        New Arrivals<br />
        Latest Women’s Fresh New Styles & Old School Originals<br />
        <span className="font-bold text-indigo-900 uppercase text-2xl block mt-6 tracking-widest">SEASON ENDING SALE</span>
      </p>
      <button className="self-start bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
        DISCOVER MORE
      </button>
    </main>
  );
};

export default Home;
