import React from 'react';
import { FaLocationArrow, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4 lg:px-0">
        {/* Addresses Column */}
        <div className="bg-[#292929] p-6 rounded-lg shadow-md flex flex-col justify-between mt-auto"  style={{  height: '585px' }}>
          <div>
            <h2 className="text-lg font-bold mb-4">
              <span className="border-l-4 border-yellow-500 pl-2">Addresses</span>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white flex items-center pt-10">
                  <FaLocationArrow className="mr-2 text-yellow-500" />
                  Head Office
                </h3>
                <p className="text-gray-300 pt-3">
                  First Floor, Marina Heights, 109-E,<br/> Blue Area, Jinnah Avenue, <br /> Islamabad.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white flex items-center mt-10">
                  <FaLocationArrow className="mr-2 text-yellow-500" />
                  Branch Office
                </h3>
                <p className="text-gray-300">
                  Office B-1, First Floor, Box Park  <br />Commercial, Bahria Town Phase 7, <br /> Rawalpindi.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white flex items-center pt-10">
                  <FaLocationArrow className="mr-2 text-yellow-500" />
                  Branch Office
                </h3>
                <p className="text-gray-300">
                  Office 115, First Floor, Doha <br /> Emporium FMC, Sector B-17 (Multi <br /> Garden), Islamabad.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Make a Call Column */}
        <div className="bg-[#292929] p-6 rounded-lg shadow-md flex flex-col justify-between ">
          <div>
            <h2 className="text-lg font-bold mb-4">
              <span className="border-l-4 border-yellow-500 pl-2 font-extrabold">Make a Call</span>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white flex items-center mt-auto pt-10">
                  <FaPhoneAlt className="mr-2 text-yellow-500" />
                  +923 111 000 183
                </h3>
                <p className="text-gray-300">Mon - Sat: 09am - 08pm</p>
              </div>
              <div>
                <h3 className="font-bold text-white flex items-center pt-10">
                  <FaPhoneAlt className="mr-2 text-yellow-500" />
                  +92 51 270 7410
                </h3>
                <p className="text-gray-300">Mon - Sat: 09am - 08pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Send a Mail Column */}
        <div className="bg-[#292929] p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-bold mb-4 ">
              <span className="border-l-4 border-yellow-500 pl-2 ">Send a Mail</span>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white  flex items-center pt-10">
                  <FaEnvelope className="mr-2 text-yellow-500" />
                  info@floretcommodities.com
                </h3>
                <p className="text-gray-300">For any information or query</p>
              </div>
              <div>
                <h3 className="font-bold text-white flex items-center pt-10">
                  <FaEnvelope className="mr-2 text-yellow-500" />
                  compliance@floretcommodities.com
                </h3>
                <p className="text-gray-300">For any complaints</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
