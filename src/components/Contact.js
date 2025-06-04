import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been received.`);
    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);
  }

  return (
    <main className="max-w-md mx-auto p-6 sm:p-12 space-y-6">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-semibold mb-1 block">Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded border border-stone-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold mb-1 block">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded border border-stone-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold mb-1 block">Message</span>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full rounded border border-stone-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
        <button type="submit" className="bg-indigo-600 text-white w-full py-2 rounded font-semibold hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>
      {submitted && (
        <p className="text-green-600 font-semibold mt-4">Your message has been sent successfully.</p>
      )}
    </main>
  );
};

export default Contact;
