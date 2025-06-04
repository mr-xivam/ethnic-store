import React from 'react';

const categories = [
  {
    state: 'Punjab',
    dress: 'Phulkari Suit',
  img:'https://www.phulkariforever.com/cdn/shop/files/PhulkariSuitPureOrganzaMajesticMajenta7_jpg.jpg?v=1723637305&width=713'  },
  {
    state: 'Rajasthan',
    dress: 'Bandhani Saree',
 img:' https://khatrijamnadas.com/cdn/shop/files/C1527-1_540x.jpg?v=1747143154'  },
  {
    state: 'West Bengal',
    dress: 'Tant Saree',
    img: 'https://www.aevum.in/cdn/shop/files/18662-2_42be78c1-d7f1-4c30-8e46-52c7d1ff9ca5.jpg?v=1744807046&width=400'  },
  {
    state: 'Tamil Nadu',
    dress: 'Kanjivaram Saree',
 img: 'https://www.aevum.in/cdn/shop/files/5874-4.jpg?v=1744809207&width=400'  },
  {
    state: 'Kerala',
    dress: 'Mundum Neriyathum',
 img: 'https://static.wixstatic.com/media/2dd79f_35d4d9bad14d4a828a35c96d8797c76b~mv2.jpg/v1/fill/w_440,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2dd79f_35d4d9bad14d4a828a35c96d8797c76b~mv2.jpg    '  },
  {
    state: 'Gujarat',
    dress: 'Patola Saree',
 img: 'https://www.karagiri.com/cdn/shop/products/RANGEENPATOLA-1002_3.jpg?v=1669881402'  },
];

const DressCategories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold mb-6 text-indigo-900 text-center">
        Popular Traditional Dresses by Indian States
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map(({ state, dress, img }) => (
          <div key={state} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
            <img
              src={img}
              alt={`${dress} from ${state}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-indigo-700">{state}</h3>
              <p className="mt-1 text-stone-700">{dress}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DressCategories;
