import React from 'react';

const dresses = [
  {
    id: 1,
    name: "Red Anarkali Dress",
    img: "https://cdn.shopify.com/s/files/1/0821/3381/1487/files/6_1_bb4b0cca-8302-4bf5-8ca6-43216c1547d6.jpg?v=1738433333",
  },
  // {
  //   id: 2,
  //   name: "Blue Kurta",
  //   img: "https://lh3.googleusercontent.com/spp/AGWwKCcaD6G-fkQRCejeYVTHGZ2dyZaq_cJ_GxcMg-Pg8RL3u3pg6FzCGzQ7D5bcHEG183abI2877bpKwOUdXjkdpAbBURH_jwvzS-C7WZVmRdSdmBr7Trnwm2QYvg4TkB4iV-HVf_kGOF_ZKbWZ64hTE96GvvOUF0azpKkvmZvN-_Ov3NQSGDs40qqa4fz8TA12Empz7A5COBI=s512-rw-pd-pc0x00ffffff",
  // },
  {
    id: 3,
    name: "Yellow Lehenga",
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/d/fd34111ZC303_1.jpg",
  },
  {
    id: 4,
    name: "Green Saree",
    img: "https://fabanza.com/media/catalog/product/cache/c26a0736877cb8c5e2d45478f82a04d0/l/i/light-olive-green-viscose-tissue-premium-designer-saree-fabsa22479.jpg",
  },
  {
    id: 5,
    name: "White Sharara",
    img: "https://images.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dw13de7323/images/aw23/skdgldmur9144aw23owht_1.jpg?sw=502&sh=753",
  },
];

const DressSlider = () => {
  return (
    <section className="relative">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">Dresses Collection</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dresses.map((dress) => (
          <div
            key={dress.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={dress.img}
              alt={dress.name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-3 font-semibold text-center text-gray-700">
              {dress.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DressSlider;
