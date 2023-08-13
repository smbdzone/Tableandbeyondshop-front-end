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


const Display = () => {
    return (
        <div className='flex mt-[100px] gap-32 items-center bg-[#F2F2F1] py-10' >
            <div className=''>
                <img src={logo2} alt="logo" className="" />
            </div>
            <div className='flex gap-20 mr-14'>
                <div className='flex flex-col gap-24 '>
                    <div className='flex flex-col items-center font-'>
                        <img src={two} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={three} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                </div>
                <div className='flex flex-col gap-24'>
                    <div className='flex flex-col items-center'>
                        <img src={four} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={five} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                </div>
                <div className='flex flex-col gap-24'>
                    <div className='flex flex-col items-center'>
                        <img src={six} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={seven} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                </div>
                <div className='flex flex-col gap-24'>
                    <div className='flex flex-col items-center'>
                        <img src={eight} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={nine} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                </div>
                <div className='flex flex-col gap-24'>
                    <div className='flex flex-col items-center'>
                        <img src={ten} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={eleven} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                </div>
                <div className='flex flex-col gap-24'>
                    <div className='flex flex-col items-center'>
                        <img src={twelve} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src={two} alt="two" className="" />
                        <p>Dining</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Display;
