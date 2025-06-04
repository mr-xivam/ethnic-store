import React from 'react';

const Shop = () => {
  const products = [
    { id: 1, name: "Elegant Ethnic Saree", price: 2999.00 },
    { id: 2, name: "Designer Lehengas", price: 4999.00 },
    { id: 3, name: "Handcrafted Jewellery", price: 899.00 },
    { id: 4, name: "Traditional Kurtis", price: 1299.00 },
    { id: 5, name: "Decorative Home Items", price: 799.00 },
  ];

  return (
    <main className="max-w-7xl mx-auto p-6 sm:p-12">
      <h2 className="text-3xl font-bold mb-6">Shop Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <div className="h-40 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-500 font-semibold text-xl">
              {product.name}
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="font-semibold text-lg">₹{product.price.toFixed(2)}</span>
              <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Shop;
