import React from 'react';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/sapnasriwaz',
    svgPath: 'M18 2h-3a6 6 0 00-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z',
    bgColor: 'bg-blue-600',
    hoverBgColor: 'hover:bg-blue-700',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/sapnasriwaz',
    svgPath: 'M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zM12 17a5 5 0 110-10 5 5 0 010 10zm6.5-10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    bgColor: 'bg-pink-500',
    hoverBgColor: 'hover:bg-pink-600',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/sapnasriwaz',
    svgPath: 'M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.4a10.79 10.79 0 01-3.44 1.3A4.52 4.52 0 0016.15 0c-2.48 0-4.5 1.98-4.5 4.41 0 .34.04.67.11.98-3.74-.19-7.06-2.01-9.28-4.77a4.41 4.41 0 00-.61 2.22 4.42 4.42 0 001.99 3.65A4.52 4.52 0 014.46 7v.05c0 2.2 1.52 4.04 3.54 4.46a4.49 4.49 0 01-2.05.08 4.51 4.51 0 004.2 3.08A9.05 9.05 0 010 19.54a12.84 12.84 0 006.92 2.02c8.3 0 12.85-7.08 12.85-13.22 0-.2 0-.41-.02-.61A9.22 9.22 0 0023 3z',
    bgColor: 'bg-sky-500',
    hoverBgColor: 'hover:bg-sky-600',
  },
];

const Footer = () => (
  <footer className="bg-white shadow-inner p-6 text-center text-stone-600 text-sm mt-12">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <div>
        &copy; {new Date().getFullYear()} Sapna's Riwaz. All rights reserved.
      </div>
      <p text-color black> Sapna Mangwani is a visionary fashion designer, costume stylist, and entrepreneur. With expertise in fashion and film, she has styled movies like Haunted Hills and Gotakhor. As CEO of StylingStars and Director of Purple Truffle, she blends innovation with elegance, redefining style in every project she undertakes.</p>
      <div className="flex space-x-4">
        {socialLinks.map(({ name, href, svgPath, bgColor, hoverBgColor }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`p-2 rounded-full ${bgColor} ${hoverBgColor} text-white inline-flex items-center justify-center transition`}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d={svgPath} />
            </svg>
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
