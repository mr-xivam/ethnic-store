import React from 'react';
import DressCategories from './DressCategories';
import DressSlider from './DressSlider';

const Riwaz = () => {
  return (
    <main className="max-w-4xl mx-auto p-6 sm:p-12 space-y-6">
      <h2 className="text-3xl font-bold mb-4">Sapna's Riwaz</h2>
      <p>
        Sapna's Riwaz is our exclusive collection inspired by traditional Indian rituals, festive wear, and cultural heritage.
        Our range celebrates the timeless elegance of ethnic wear, combining craftsmanship with modern fashion sensibility.
      </p>
      <p>
        Explore our collection for exquisite sarees, lehengas, and accessories specially curated to accompany your most cherished moments.
      </p>
      <div className="rounded bg-indigo-100 p-6 text-indigo-900 font-semibold">
        Experience the beauty of cultural tradition blended with contemporary trends, only at Sapna’s Riwaz.
      </div>
      <DressSlider/>
      <DressCategories/>
    </main>
  );
};

export default Riwaz;
