// import React from 'react';
// import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import four from '../assets/4.png';
import five from '../assets/5.png';
import six from '../assets/6.png';
import seven from '../assets/7.png';
import eight from '../assets/8.png';
import nine from '../assets/9.png';
import ten from '../assets/10.png';
import eleven from '../assets/11.png';
import twelve from '../assets/12.png';
import logo2 from '../assets/logo2.png';
import cig from '../assets/cig.png';
import './Display.css';


const Display = () => {
    return (
        <div className='flex mt-[100px] gap-[300px] items-center bg-[#F2F2F1] py-10 w-screen' >
            <div className=''>
                <img src={logo2} alt="logo" className="" />
            </div>
            <div className='flex gap-20 mr-[150px]'>
                <div className='flex flex-col gap-24 '>
                    <div className='flex flex-col items-center w-fit gap-4 '>
                        <img src={three} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Drinking Accessories</p>
                    </div>
                    <div className='flex flex-col items-center w-fit gap-4' >
                        <img src={six} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Kitchen</p>
                    </div>
                </div>
                <div className='flex flex-col gap-24'>
                    <div className='flex flex-col items-center w-fit gap-4'>
                        <img src={cig} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Cigar Room</p>
                    </div>
                    <div className='flex flex-col items-center w-fit gap-4'>
                        <img src={eleven} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Party Necessities</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[93px] mt-[-6px]'>
                    <div className='flex flex-col items-center w-fit gap-4'>
                        <img src={two} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Cheese Room</p>
                    </div>
                    <div className='flex flex-col items-center w-fit gap-4 mt-[-3px]'>
                        <img src={seven} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>On-the-Go</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[99px]'>
                    <div className='flex flex-col items-center w-fit gap-4'>
                        <img src={four} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Lighting</p>
                    </div>
                    <div className='flex flex-col items-center w-fit gap-4'>
                        <img src={ten} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Baby & Kids</p>
                    </div>
                </div>
                <div className='flex flex-col gap-24'>
                    <div className='flex flex-col items-center w-fit gap-4'>
                        <img src={five} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Dining</p>
                    </div>
                    <div className='flex flex-col items-center w-fit gap-4'>
                        <img src={twelve} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Gifts Ideas</p>
                    </div>
                </div>
                <div className='flex flex-col gap-24'>
                    <div className='flex flex-col items-center w-fit gap-4'>
                        <img src={nine} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Bed & Bath</p>
                    </div>
                    <div className='flex flex-col items-center w-fit gap-4'>
                        <img src={eight} alt="two" className="" />
                        <p className='productnames text-center text-[#626262] pt-sans font-size-[12.8px] font-style-normal font-weight-[400] line-height-[19.2px]'>Washer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Display;
