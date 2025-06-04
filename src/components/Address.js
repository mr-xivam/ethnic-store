import React from 'react';

const Address = ({ title = "Our Address", lines = [], email, phone }) => {
  return (
    <address className="not-italic bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-3 text-indigo-700">{title}</h3>
      <div className="space-y-1 text-stone-700">
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>

      {(email || phone) && (
        <div className="mt-4 space-y-1 text-stone-700">
          {email && (
            <div>
              Email: <a href={`mailto:${email}`} className="text-indigo-600 hover:underline">{email}</a>
            </div>
          )}
          {phone && (
            <div>
              Phone: <a href={`tel:${phone}`} className="text-indigo-600 hover:underline">{phone}</a>
            </div>
          )}
        </div>
      )}
    </address>
  );
};

export default Address;

