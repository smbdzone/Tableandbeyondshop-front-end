// import React from 'react'
import source from '../assets/logo2.png'

const Footer = () => {
    return (
        <div className='w-full bg-[#A6C3DB] mt-10 p-10 flex gap-40 '>
            <img src={source} alt="" className='-translate-x-10' />
            <div className='flex flex-col gap-36'>
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
            </div>
        </div>
    )
}

export default Footer