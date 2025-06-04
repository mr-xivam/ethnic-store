import React from 'react';

const FAQs = () => {
  const faqs = [
    { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, net banking, and UPI payments." },
    { q: "What is your return policy?", a: "Returns can be made within 15 days of delivery if items are unused and in original packaging." },
    { q: "Do you ship internationally?", a: "Currently, we only ship within India." },
    { q: "How can I track my order?", a: "Once your order ships, you will receive a tracking ID via email and SMS." },
  ];
  return (
    <main className="max-w-3xl mx-auto p-6 sm:p-12">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <dl className="space-y-4">
        {faqs.map(({ q, a }, i) => (
          <div key={i} className="border rounded-md p-4 bg-white shadow-sm">
            <dt className="font-semibold">{q}</dt>
            <dd className="mt-1 text-stone-700">{a}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
};

export default FAQs;
