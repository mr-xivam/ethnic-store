import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, cartTotal }) => {
  return (
    <nav className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-extrabold cursor-pointer text-indigo-600 select-none">
              Sapna's Riwaz
            </div>
            <ul className="hidden md:flex space-x-4 uppercase font-semibold text-sm tracking-wide">
              {['Home', 'Shop', 'About Us', 'Blog', 'Contact Us', 'FAQs', "Sapna's Riwaz"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="py-2 px-3 rounded-md hover:bg-indigo-100 transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input type="text" placeholder="Search for: Enter Keyword" className="border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="relative flex items-center space-x-1 text-stone-700 hover:text-indigo-600">
              <span>₹{cartTotal.toFixed(2)}</span>
              <span className="rounded-full bg-indigo-600 text-white text-xs font-bold ml-1 px-2">{cartCount}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
