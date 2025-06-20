
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'NEW ARRIVALS', to: '/new-arrivals' },
  
  { name: 'SAREES', to: '/sarees' }, // optional if you want separate link besides dropdown
  { name: 'LEHENGAS', to: '/lehenga' }, // optional as above

  {
    name: 'COLLECTIONS',
    dropdown: [
      { name: 'SAREES', to: '/collections/sarees' },
      { name: 'LEHENGAS', to: '/collections/lehenga' },
      { name: 'SALWAR KAMEEZ', to: '/collections/salwar-kameez' },
      // Add more collection items here if needed
    ],
  },
  {
    name: 'WEDDING VIBES',
    dropdown: [
      { name: 'BRIDAL LEHENGAS', to: '/wedding-vibes/bridal-lehengas' },
      { name: 'GROOM WEAR', to: '/wedding-vibes/groom-wear' },
      { name: 'ACCESSORIES', to: '/wedding-vibes/accessories' },
      // Add other wedding vibes items here
    ],
  },
];

const Navbar = ({ cartCount = 0, cartTotal = 0 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeout = useRef();

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown')) {
        setOpenDropdown(null);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  // Prevent dropdown flicker on mouse leave with delay
  const handleDropdownMouseEnter = (index) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(index);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50" role="navigation" aria-label="Primary Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <img 
 src="https://sapnasriwaz.com/wp-content/uploads/2025/02/xBlack-and-Yellow-Classy-and-Refined-Curved-Text-Logo-e1740750170897.jpg.pagespeed.ic.34onyJhVtI.webp" // or use an external URL
  alt="Company Logo" 
className="h-12 w-fit object-contain"></img>


          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 font-semibold uppercase text-sm tracking-wide text-stone-700">
            {/* Menu Items */}
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="relative dropdown"
                onMouseEnter={() => item.dropdown && handleDropdownMouseEnter(i)}
                onMouseLeave={handleDropdownMouseLeave}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="px-3 py-2 rounded-md hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 inline-flex items-center"
                      aria-expanded={openDropdown === i ? "true" : "false"}
                    >
                      {item.name}
                      <svg
                        className="ml-1 w-4 h-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.516 7.548a.75.75 0 011.06 0L10 10.972l3.424-3.424a.75.75 0 111.06 1.06l-4.002 4.003a.75.75 0 01-1.06 0L5.516 8.608a.75.75 0 010-1.06z" />
                      </svg>
                    </button>
                    {openDropdown === i && (
                      <div
                        className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="py-1">
                          {item.dropdown.map((ddItem, ddIdx) => (
                            <Link
                              key={ddIdx}
                              to={ddItem.to}
                              className="block px-4 py-2 text-sm text-stone-700 hover:bg-indigo-100 hover:text-indigo-900"
                              role="menuitem"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {ddItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className="px-3 py-2 rounded-md hover:text-indigo-600 hover:bg-indigo-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Search + Cart desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Search for: ${searchTerm}`);
                setSearchTerm('');
              }}
              className="relative"
            >
              <label htmlFor="search" className="sr-only">Search for:</label>
              <input
                id="search"
                type="search"
                placeholder="Enter Keyword"
                className="border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                autoComplete="off"
              />
            </form>

            <Link to="/cart" aria-label="Cart" className="relative flex items-center space-x-1 text-stone-700 hover:text-indigo-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 px-2 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9M16 21a2 2 0 11-4 0" />
              </svg>
              <span>₹{cartTotal.toFixed(2)}</span>
              <span className="rounded-full bg-indigo-600 text-white text-xs font-bold ml-1 px-2">{cartCount}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
              className="p-2 rounded-md text-stone-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-stone-200">
          <nav className="px-2 pt-2 pb-4 space-y-1 uppercase font-semibold text-sm tracking-wide bg-white">
            {menuItems.map((item, i) => (
              <div key={i} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                      className="flex justify-between w-full px-3 py-2 text-stone-700 hover:bg-indigo-100 rounded"
                      aria-expanded={openDropdown === i}
                      aria-controls={`mobile-dropdown-${i}`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${openDropdown === i ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    {openDropdown === i && (
                      <div id={`mobile-dropdown-${i}`} className="pl-4">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            to={dropdownItem.to}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                            className="block px-3 py-2 text-stone-700 hover:bg-indigo-100 rounded"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded hover:bg-indigo-100 text-stone-700"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Search for: ${searchTerm}`);
                setSearchTerm('');
                setMobileMenuOpen(false);
              }}
              className="mt-4 px-3"
            >
              <label htmlFor="mobile-search" className="sr-only">Search for:</label>
              <input
                id="mobile-search"
                type="search"
                placeholder="Enter Keyword"
                className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                autoComplete="off"
              />
            </form>
            <Link
              to="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center px-3 py-2 mt-4 rounded text-stone-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9M16 21a2 2 0 11-4 0" />
              </svg>
              <span>₹{cartTotal.toFixed(2)} | {cartCount} Items</span>
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const NAV_LINKS = [
//   { name: "Home", to: "/" },
//   { name: "Shop", to: "/shop" },
//   { name: "About Us", to: "/about-us" },
//   { name: "Blog", to: "/blog" },
//   { name: "Contact Us", to: "/contact-us" },
//   { name: "FAQs", to: "/faqs" },
//   { name: "Sapna's Riwaz", to: "/sapnas-riwaz" },
// ];

// const Navbar = ({ cartCount, cartTotal }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   return (
//     <nav className="bg-white shadow sticky top-0 z-40" role="navigation" aria-label="Primary Navigation">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//         <img 
//   src="https://sapnasriwaz.com/wp-content/uploads/2025/02/xBlack-and-Yellow-Classy-and-Refined-Curved-Text-Logo-e1740750170897.jpg.pagespeed.ic.34onyJhVtI.webp" // or use an external URL
//   alt="Company Logo" 
//   className="h-12 w-fit object-contain"
// />

//           <div className="flex items-center flex-shrink-0 cursor-pointer select-none text-indigo-600 font-extrabold text-2xl">
//             {/* <Link to="/">Sapna's Riwaz</Link> */}

            
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex md:items-center md:space-x-6 uppercase font-semibold text-sm tracking-wide text-stone-700">
//             {NAV_LINKS.map(({ name, to }) => (
//               <Link
//                 key={name}
//                 to={to}
//                 className="hover:text-indigo-600 transition-colors py-2 px-3 rounded-md"
//               >
//                 {name}
//               </Link>
//             ))}
//           </div>

//           {/* Search + Cart desktop */}
//           <div className="hidden md:flex md:items-center md:space-x-6">
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 alert(`Search for: ${searchTerm}`);
//                 setSearchTerm("");
//               }}
//               className="relative"
//             >
//               <label htmlFor="search" className="sr-only">Search for:</label>
//               <input
//                 id="search"
//                 type="search"
//                 placeholder="Search Your item"
//                 className="border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//                 autoComplete="off"
//               />
//             </form>

//             <Link to="/cart" aria-label="Cart" className="relative flex items-center space-x-1 text-stone-700 hover:text-indigo-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 px-2 py-1">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9M16 21a2 2 0 11-4 0" />
//               </svg>
//               <span>₹{cartTotal.toFixed(2)}</span>
//               <span className="rounded-full bg-indigo-600 text-white text-xs font-bold ml-1 px-2">{cartCount}</span>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-controls="mobile-menu"
//               aria-expanded={mobileMenuOpen}
//               aria-label="Toggle menu"
//               className="p-2 rounded-md text-stone-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               {mobileMenuOpen ? (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <div id="mobile-menu" className="md:hidden border-t border-stone-200">
//           <nav className="px-2 pt-2 pb-4 space-y-1 uppercase font-semibold text-sm tracking-wide bg-white">
//             {NAV_LINKS.map(({ name, to }) => (
//               <Link
//                 key={name}
//                 to={to}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="block px-3 py-2 rounded hover:bg-indigo-100 text-stone-700"
//               >
//                 {name}
//               </Link>
//             ))}
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 alert(`Search for: ${searchTerm}`);
//                 setSearchTerm("");
//                 setMobileMenuOpen(false);
//               }}
//               className="mt-4 px-3"
//             >
//               <label htmlFor="mobile-search" className="sr-only">Search for:</label>
//               <input
//                 id="mobile-search"
//                 type="search"
//                 placeholder="Enter Keyword"
//                 className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//                 autoComplete="off"
//               />
//             </form>
//             <Link to="/cart" onClick={() => setMobileMenuOpen(false)} className="flex items-center px-3 py-2 mt-4 rounded text-stone-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9M16 21a2 2 0 11-4 0" />
//               </svg>
//               <span>₹{cartTotal.toFixed(2)} | {cartCount} Items</span>
//             </Link>
//           </nav>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
