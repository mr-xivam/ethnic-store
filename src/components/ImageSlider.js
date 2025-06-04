import React, { useState } from 'react';

const ImageSlider = () => {
  const images = [
    'https://images.unsplash.com/photo-1602810318383-f9b9ebd7f7d0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1611003222456-d998dcf3efb0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1633410201935-b8d57d6a3708?auto=format&fit=crop&w=800&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg mb-6 cursor-pointer" onClick={handleImageClick}>
      <img
        src={images[currentIndex]}
        alt={`Slider ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />
    </div>
  );
};

export default ImageSlider;
