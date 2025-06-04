import React from 'react';
import DressSlider from './DressSlider';
import About from './About';

import FAQs from './FAQs';
import Contact from './Contact';
import Blog from './Blog';
import HeroSection from './HeroSection';
import DressCategories from './DressCategories';
import Testimonials from './Testinonials';





const Home = () => {
  return (
    <main className="max-w-7xl mx-auto p-6 sm:p-12 min-h-[80vh] flex flex-col justify-start bg-gradient-to-r from-indigo-100 to-purple-200 rounded-lg shadow-lg">
      <HeroSection/>
      {/* <section className="mb-12">
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
        <button
          className="bg-pink-700 hover:bg-indigo-800 text-white font-semibold px-8 py-3 rounded-md shadow-md transition"
          onClick={() => alert("Discover more clicked!")}
        >
          DISCOVER MORE
        </button>
      </section> */}
      

      {/* Dresses Collection and Slider */}
      <DressSlider />
<DressCategories/>  
<Testimonials/>
         <Blog/>
         <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
  {/* About Section */}
  <div className="flex-1">
    <About />
  </div>

  {/* Contact Section */}
  <div className="w-full lg:w-1/3">
    <Contact />
  </div>
</div>
        
        <FAQs />
      
    </main>
  );
};

export default Home;
