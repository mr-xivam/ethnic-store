import React from 'react';

const Cart = () => {
  return (
    <main className="max-w-md mx-auto p-6 sm:p-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      <p className="text-stone-700 mb-6">Your cart is currently empty.</p>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
        Start Shopping
      </button>
    </main>
  );
};

export default Cart;
