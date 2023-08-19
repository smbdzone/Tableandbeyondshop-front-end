// import React from 'react'
import source from '../assets/logo2.png';
import Input from './Input';
import fb from '../assets/Vector-2.png';
import pint from '../assets/Vector-1.png';
import insta from '../assets/Vector.png';

const Footer = () => {
    return (
        <>
        <div className='w-full bg-[#A6C3DB] mt-10 p-10 flex gap-40 '>
            <img src={source} alt="" className='-translate-x-10' />
            <div className='flex flex-col gap-10'>
                <div className="flex gap-36">
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[#8D7C3B] pb-4 text-[20px]'>Customer Care</h1>
                        <h2 className='text-[#58595B] text-[15px]'>Contact Us</h2>
                        <h2 className='text-[#58595B] text-[15px]'>Return and Refund Policy</h2>
                        <h2 className='text-[#58595B] text-[15px]'>Shipping and Delivery FAQs</h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[#8D7C3B] pb-4 text-[20px]'>Corporate</h1>
                        <h2 className='text-[#58595B] text-[15px]'>About Us</h2>
                        <h2 className='text-[#58595B] text-[15px]'>Table Talk</h2>
                        <h2 className='text-[#58595B] text-[15px]'>Our Hospitality Offerings</h2>
                        <h2 className='text-[#58595B] text-[15px]'>Terms and Conditions</h2>
                        <h2 className='text-[#58595B] text-[15px]'>Privacy Policy</h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-[#8D7C3B] pb-4 text-[20px]'>Special Services</h1>
                        <h2 className='text-[#58595B] text-[15px]'>Inspirations</h2>
                        <h2 className='text-[#58595B] text-[15px]'>Special Customization</h2>
                        <h2 className='text-[#58595B] text-[15px]'>Overseas Shipping</h2>
                        <h2 className='text-[#58595B] text-[15px]'>Gift Voucher</h2>
                        <h2 className='text-[#58595B] text-[15px]'>Gift Registry</h2>
                    </div>
                </div>
                <div>

                </div>
                <p className='text-center' >
                Subscribe to our Newsletter and enjoy 15% discount
                </p >
                <div className='flex flex-col w-full  justify-center items-center gap-5'>
                <Input placeholder="Enter Full Name"  paddingLeft="25px"/>
                <Input placeholder="Enter Email" paddingLeft="20px" />
                <button className='w-[192px] h-[44px] shrink-0 rounded-[5px] bg-[#8D7C3B] text-white' style={{
                    fontFamily:"PT Sans",
                }}>
                    Subscribe
                </button>
                <div className='flex gap-2'>
                    <img src={fb} alt="" className='h-[31px] w-[31px]'/>
                    <img src={pint} alt="" className='h-[31px] w-[31px]'/>
                    <img src={insta} alt="" className='h-[31px] w-[31px]'/>
                </div>
                </div>
                
            </div>
            
        </div>
        <div style={{
            display:"flex",
            flexDirection:"row",
            backgroundColor:"#fff",
            width:"100%",
            justifyContent:"space-between",
            paddingBottom:"20px",
            marginTop:"10px"
        }}>
            <p className=' text-[#A6C3DB] text-[15px]'
            style={{
                fontFamily:"PT Sans",
                fontWeight:"400px",
                fontStyle:"normal",
            
            }}>
            Copyright © . Table And Beyond Shop 2023
            </p>
            <p className=' text-[#A6C3DB] text-[15px]'
            style={{
                fontFamily:"PT Sans",
                fontWeight:"400px",
                fontStyle:"normal",
            
            }}>
            Designed & Developed by SMB Digital Zone
            </p>
        </div>
        </>
    )
}

export default Footer