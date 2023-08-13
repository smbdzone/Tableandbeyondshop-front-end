// import React from 'react';
import LandingImage from '../assets/Landing.png';

const Landing = () => {
  return (
    <div className="relative h-screen">
      <img
        src={LandingImage}
        alt="Home Page Background"
        className="object-cover w-full z-30 "
      />
      <div className="absolute inset-0 flex flex-col mt-52 items-center text-white">
        <h1 className="text-[50px] font-bold mb-4 ">
        Bringing to you the Art of Hospitality
        </h1>
        <button className="bg-[#003F53] text-white px-12 py-3">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Landing;
