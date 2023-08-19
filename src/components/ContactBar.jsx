// import React from 'react';
import { FaBus } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import delivery from '../assets/delivery.png';
import phone from '../assets/phone.png';

const ContactBar = () => {
    return (
        <nav className="flex justify-between items-center justify-content-center py-2 bg-[#F3F4F4] text-[#00000]">
            <div className="flex items-center w-1/3  text-center items-center justify-center gap-3">
                <img src={delivery} className='h-[20px]' alt="logo" />
                <p>Free delivery on orders over AED500</p>
            </div>
            <span>|</span>
            <div className="flex items-center w-1/3  text-center items-center justify-center gap-3">
                <FaEnvelope style={{height:"20px"}}/>
                <p>Subscribe to our newsletter for special discounts</p>
            </div>
            <span>|</span>
            <div className="flex items-center w-1/3  text-center items-center justify-center gap-3">
                <img src={phone} alt="" className='h-[20px]' />
                <p>Contact us for any special requirement</p>
            </div>
        </nav>
    );
};

export default ContactBar;
