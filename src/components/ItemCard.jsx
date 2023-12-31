import React from 'react'
import { FaEye, FaGift, FaRegStar, FaShoppingBag } from 'react-icons/fa';
import new1 from '../assets/new.png';
import eye from '../assets/eye.png';
import gift from '../assets/gift.png';
import shopping from '../assets/shopping.png';
const ItemCard = (props) => {

    


    return (
        <div className='w-[360px] rounded-[10px] h-[ 610px]  ' style={{
            boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.10)',
            height: props.height,
            width: props.width,
            backgroundColor: props.bgColor,

        }}>
            <div className='bg-[#E2DDD9] rounded-[10px] relative flex' style={{
                height: props.bgheight,
                width: props.bgwidth,
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <img src={props.src} alt="" className='w-[360px] h-[360px] flex   'style={{
                    height: props.imgheight,
                    width: props.imgwidth,
                    justifyContent: 'center',
                    alignItems: 'center',
                }} />
                {props.favIconPos !== "lvp" ? (
                    <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none" className='absolute top-[20px] left-[10px]'>
                    <path d="M11.615 17.7956L11.5 17.9101L11.3735 17.7956C5.911 12.8632 2.3 9.60163 2.3 6.29428C2.3 4.00545 4.025 2.28883 6.325 2.28883C8.096 2.28883 9.821 3.43324 10.4305 4.98965H12.5695C13.179 3.43324 14.904 2.28883 16.675 2.28883C18.975 2.28883 20.7 4.00545 20.7 6.29428C20.7 9.60163 17.089 12.8632 11.615 17.7956ZM16.675 0C14.674 0 12.7535 0.926975 11.5 2.38038C10.2465 0.926975 8.326 0 6.325 0C2.783 0 0 2.75804 0 6.29428C0 10.6087 3.91 14.145 9.8325 19.4894L11.5 21L13.1675 19.4894C19.09 14.145 23 10.6087 23 6.29428C23 2.75804 20.217 0 16.675 0Z" fill="url(#paint0_linear_156_542)" />
                    <defs>
                        <linearGradient id="paint0_linear_156_542" x1="11.5" y1="0" x2="11.5" y2="21" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#80702D" />
                            <stop offset="0.465134" stop-color="#D9C895" />
                            <stop offset="1" stop-color="#80702D" />
                        </linearGradient>
                    </defs>
                </svg>
                <img src={new1} alt="" className='h-[30px] absolute top-[20px] right-[0px]' style={{width:"70px"}} />
                </>
                ):(
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none" className='absolute top-[20px] right-[10px]'>
                    <path d="M11.615 17.7956L11.5 17.9101L11.3735 17.7956C5.911 12.8632 2.3 9.60163 2.3 6.29428C2.3 4.00545 4.025 2.28883 6.325 2.28883C8.096 2.28883 9.821 3.43324 10.4305 4.98965H12.5695C13.179 3.43324 14.904 2.28883 16.675 2.28883C18.975 2.28883 20.7 4.00545 20.7 6.29428C20.7 9.60163 17.089 12.8632 11.615 17.7956ZM16.675 0C14.674 0 12.7535 0.926975 11.5 2.38038C10.2465 0.926975 8.326 0 6.325 0C2.783 0 0 2.75804 0 6.29428C0 10.6087 3.91 14.145 9.8325 19.4894L11.5 21L13.1675 19.4894C19.09 14.145 23 10.6087 23 6.29428C23 2.75804 20.217 0 16.675 0Z" fill="url(#paint0_linear_156_542)" />
                    <defs>
                        <linearGradient id="paint0_linear_156_542" x1="11.5" y1="0" x2="11.5" y2="21" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#80702D" />
                            <stop offset="0.465134" stop-color="#D9C895" />
                            <stop offset="1" stop-color="#80702D" />
                        </linearGradient>
                    </defs>
                </svg>
                )}
                
                <p className='absolute top-[23px] right-[13px] text-white'>{props.detail}</p>
            </div>

            <div className='flex justify-center absolute translate-x-[55px] translate-y-[-20px] gap-3 ' style={{marginLeft:props.iconsMarginLeft , marginTop:props.iconsMarginTop}}>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={shopping} alt="" className='p-2 ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={gift} alt="" className='p-2 ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={eye} alt="" className='p-2' />
                </div>
              </div>

        {props.favIconPos !== "lvp" ? (
            <>
            <div className='text-[#8D7C3B] flex justify-between text-[18px] pl-5 ' style={{marginTop:props.textMarginTop}} >
                <p>{props.title}</p>
            </div>
            <hr className='border-[#F69785] mb-1 mt-1 border-2' />

            <p className='text-[#9C9687] text-[25px] text-left pl-5 '>{props.description}</p>
            <p className='text-[#002D4F] font-normal  text-[18px] text-left pl-5'>{props.price} AED</p>
            </>
        ) : (
            <div className='ml-[20px]'>
            <div className='text-[#8D7C3B] flex justify-between text-[18px] pt-[25px] ' >
                <p>{props.title}</p>
            </div>
            <hr className='border-[#F69785] mb-1 mt-3 border-2' />

            <p className='text-[#9C9687] text-[20px] pt-[5px]'>{props.description}</p>
            <p className='text-[#002D4F] font-bold text-[15px] pt-[5px]'>{props.price} AED</p>
            </div>

        )}
            

        </div>
    )
}

export default ItemCard;