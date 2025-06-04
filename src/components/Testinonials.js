import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "Fashion Blogger",
    feedback:
      "Sapna's Riwaz offers the most authentic ethnic wear with outstanding quality. I’m obsessed with their latest collection!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Rajiv Kumar",
    designation: "Entrepreneur",
    feedback:
      "Excellent customer service and beautiful traditional clothes. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Anita Desai",
    designation: "Teacher",
    feedback:
      "I love the variety and craftsmanship here. The sarees and kurtis are fabulous!",
    avatar: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-900">What Our Customers Say</h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map(({ id, name, designation, feedback, avatar }) => (
          <div key={id} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition">
            <img
              src={avatar}
              alt={`${name} avatar`}
              className="w-20 h-20 rounded-full mb-4 object-cover"
              loading="lazy"
            />
            <p className="text-gray-700 italic mb-4">"{feedback}"</p>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-indigo-600">{designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
