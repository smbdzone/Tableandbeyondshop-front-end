// import React from 'react';
import LandingImage from '../assets/Landing.png';
import "./Landing.css";
const Landing = () => {
  return (
    <div className="relative h-screen">
      <img
        src={LandingImage}
        alt="Home Page Background"
        className="object-cover w-full z-30 "
      />
      <div className="absolute inset-0 flex flex-col mt-[250px] items-center text-white">
        <h1 className="text-[60px] font-bold  ">
        Experience the Art of Hospitality
        </h1>
        <button className="bg-[#003F53] text-white px-12 py-5 w-[190px] mt-[50px] ml-[29px] landingbtn">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Landing;
