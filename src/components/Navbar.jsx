// import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Make sure to install react-icons
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#A6C3DB] text-#003F53">
      <div className="flex items-center ml-5">
        <div className="text-2xl font-bold">Table & Beyond</div>
        <div className='mr-5 ml-5 w-12 h-10'>
            <img src={logo} alt="logo" />
        </div>
        <div className="text-2xl font-bold ">shop</div>
      </div>
      <div className="flex items-center mr-5">
        <div className="relative flex mr-3">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1 rounded border border-[#9C9687] box-decoration-none bg-[#A6C3DB]"
          />
          <div className="h-[34px] w-[31px] bg-[#9C9687] mr-2">
          <FaSearch className=" absolute mr-2 right-1 top-1/2 cursor-pointer   transform -translate-y-1/2 -translate-x-1 text-white bg-[#9C9687]" />
          </div>
        </div>
        <div className="flex">
          <span className=" cursor-pointer text-black">Login</span>
          <span className='mr-2 ml-2 text-black'>/</span>
          <span className="cursor-pointer text-black">Register</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
