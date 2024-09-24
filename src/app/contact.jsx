import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl"> {/* Responsive grid for 1 column on mobile, 3 on desktop */}
        
        {/* Addresses Column */}
        <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-yellow-500" /> {/* Icon for Address */}
            Addresses
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-yellow-500">Head Office</h3>
              <p className="text-gray-300">
                First Floor, Marina Heights, 109-E, Blue Area, Jinnah Avenue, Islamabad.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-yellow-500">Branch Office</h3>
              <p className="text-gray-300">
                Office B-1, First Floor, Box Park Commercial, Bahria Town Phase 7, Rawalpindi
              </p>
            </div>
            <div>
              <h3 className="font-bold text-yellow-500">Branch Office</h3>
              <p className="text-gray-300">
                Office 115, First Floor, Doha Emporium FMC, Sector B-17 (Multi Garden), Islamabad
              </p>
            </div>
          </div>
        </div>

        {/* Make a Call Column */}
        <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 flex items-center">
            <FaPhoneAlt className="mr-2 text-yellow-500" /> {/* Icon for Phone */}
            Make a Call
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-yellow-500">+923 111 000 183</h3>
              <p className="text-gray-300">Mon - Sat: 09am - 08pm</p>
            </div>
            <div>
              <h3 className="font-bold text-yellow-500">+92 51 270 7410</h3>
              <p className="text-gray-300">Mon - Sat: 09am - 08pm</p>
            </div>
          </div>
        </div>

        {/* Send a Mail Column */}
        <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4 border-b border-gray-600 pb-2 flex items-center">
            <FaEnvelope className="mr-2 text-yellow-500" /> {/* Icon for Email */}
            Send a Mail
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-yellow-500">info@floretcommodities.com</h3>
              <p className="text-gray-300">For any information or query</p>
            </div>
            <div>
              <h3 className="font-bold text-yellow-500">compliance@floretcommodities.com</h3>
              <p className="text-gray-300">For any complaints</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
