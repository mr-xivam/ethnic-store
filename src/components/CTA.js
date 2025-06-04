import React from 'react';

const CTA = ({ title, description, buttonText, buttonAction }) => {
  return (
    <section className="bg-indigo-700 text-white py-12 px-6 rounded-lg max-w-7xl mx-auto my-12 text-center shadow-lg">
      <h2 className="text-3xl font-extrabold mb-4">{title}</h2>
      <p className="mb-6 text-lg max-w-2xl mx-auto">{description}</p>
      <button
        onClick={buttonAction}
        className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
      >
        {buttonText}
      </button>
    </section>
  );
};

export default CTA;
