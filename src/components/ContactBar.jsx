// import React from 'react';
import { FaBus } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const ContactBar = () => {
    return (
        <nav className="flex justify-between items-center p-2 bg-[#F3F4F4] text-[#00000]">
            <div className="flex items-center space-x-4 ml-10">
                {/* <span role="img" aria-label="Bus">
          🚌
        </span> */}
                <FaBus />
                <p>Free delivery on orders over AED500</p>
            </div>
            <span>|</span>
            <div className="flex items-center space-x-4">
                {/* <span role="img" aria-label="Mail">
          ✉️
        </span> */}
                <FaEnvelope />
                <p>Subscribe to our newsletter for special discounts</p>
            </div>
            <span>|</span>
            <div className="flex items-center space-x-4 mr-10">
                {/* <span role="img" aria-label="Telephone">
          ☎️
        </span> */}
                <FaPhone />
                <p>Contact us for any special requirement</p>
            </div>
        </nav>
    );
};

export default ContactBar;
