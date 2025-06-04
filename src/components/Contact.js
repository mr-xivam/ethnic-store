
import React from 'react';

import Address from './Address';

const Contact = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <Address 
        title="Sapna's Riwaz Store"
        lines={[
          "123 Ethnic Ave",
          "Heritage City",
          "Culture State - 123456",
          "India"
        ]}
        email="contact@sapnasriwaz.com"
        phone="+91 98765 43210"
      />
    </div>
  );
};

export default Contact;
