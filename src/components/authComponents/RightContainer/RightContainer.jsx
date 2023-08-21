import React, { useState } from 'react'
import Input from '../../Input';
import Button from '../../Button';
import horizontalLine from '../../../assets/horizontalLine.png';
import google from '../../../assets/google.png';
import facebook from '../../../assets/facebook.png';
import "./RightContainer.css";
import { useNavigate } from 'react-router-dom';

const RightContainer = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    

    

    const handleClick = () => {
        console.log("clicked");
        console.log(email, password);
       
    }

    return (
        <div className='w-1/2 flex flex-col  items-center justify-center pr-[300px]'>
            <p className='loginheading mt-[-10px] pb-[20px] text-[50px]'>Login</p>
            <p className='subheading pb-[60px] text-[25px] mt-[3px]'>Dont have an account yet? <span className='text-[#8D7C3B] cursor-pointer' onClick={() => navigate('/signup')}><u>Register</u></span></p>
            <div className='flex flex-col gap-8 relative h-[130px]'>
               <Input type="email" placeholder="Enter your Email" className="placeholder" value={email} onChange={(event) => setEmail(event.target.value)} />
               <Input type={showPassword ? 'text' : 'password'} placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none" className='absolute top-[90px] right-[20px]' onClick={() => setShowPassword(!showPassword)}>
                    <path d="M12.5 5.1C11.5959 5.1 10.7287 5.45821 10.0894 6.09584C9.45008 6.73346 9.09091 7.59826 9.09091 8.5C9.09091 9.40174 9.45008 10.2665 10.0894 10.9042C10.7287 11.5418 11.5959 11.9 12.5 11.9C13.4041 11.9 14.2713 11.5418 14.9106 10.9042C15.5499 10.2665 15.9091 9.40174 15.9091 8.5C15.9091 7.59826 15.5499 6.73346 14.9106 6.09584C14.2713 5.45821 13.4041 5.1 12.5 5.1ZM12.5 14.1667C10.9931 14.1667 9.5479 13.5696 8.48235 12.5069C7.4168 11.4442 6.81818 10.0029 6.81818 8.5C6.81818 6.99711 7.4168 5.55577 8.48235 4.49306C9.5479 3.43036 10.9931 2.83333 12.5 2.83333C14.0069 2.83333 15.4521 3.43036 16.5177 4.49306C17.5832 5.55577 18.1818 6.99711 18.1818 8.5C18.1818 10.0029 17.5832 11.4442 16.5177 12.5069C15.4521 13.5696 14.0069 14.1667 12.5 14.1667ZM12.5 0C6.81818 0 1.96591 3.52467 0 8.5C1.96591 13.4753 6.81818 17 12.5 17C18.1818 17 23.0341 13.4753 25 8.5C23.0341 3.52467 18.1818 0 12.5 0Z" fill="#D9C895" />
                </svg>
            </div>
            <div className='flex flex-row  w-full' style={{
                justifyContent: "space-between",
                width: "536px",
            }}>
                <div className='flex  pt-[30px] gap-3'>
                    <input  type="checkbox" name="" id="" />
                    <p style={{
                        color: "#162C35",
                        fontFamily: "PT Sans",
                        fontSize: "22px",
                        fontWeight: "400px",
                        fontStyle: "normal",
                        lineHeight: "80px",
                        

                    }}>Remember me</p>
                </div>
                <div className='pt-[30px]'>
                    <p style={{
                        color: "#8D7C3B",
                        fontFamily: "PT Sans",
                        fontSize: "22px",
                        fontWeight: "400px",
                        fontStyle: "normal",
                        lineHeight: "80px",

                    }}>
                        <u>Forgot password</u>
                    </p>
                </div>
            </div>
            <Button text="LOG IN" onClick={handleClick}  />
            <img src={horizontalLine} alt="" className='mt-[4rem] w-[536px]'/>
            <div className='flex flex-row gap-5 mt-[2rem] mr-[40px]'style={{
                justifyContent: "space-between",
                width: "536px",
                alignItems:"center",
                height:"64px",
            }}>
                <div className='flex flex-row justify-center gap-3  items-center w-[48%] h-[54px] shrink-0 bg-[#fff] rounded-[5px]  btn ml-[20px]' >
                    <img src={google} alt="" className='h-[28.108px] w-[28.108px]' />
                    <p className='logotext'>Google</p>
                </div>
                <div className='flex flex-row justify-center gap-3  items-center w-[48%] h-[54px] shrink-0 bg-[#fff] rounded-[5px]  btn mr-[20px]' >
                    <img src={facebook} alt="" className='h-[28px] w-[15px]' />
                    <p className='logotext'>Facebook</p>
                </div>
            </div>
            <div className='flex justify-around gap-[30px] mt-[2rem] mb-16 text-[#002D4F]' style={{textDecoration:"underline"}}>
                <p>Order Tracking</p>
                <p>Easy Return</p>
                <p>Support</p>
            </div>

        </div>
    )
}

export default RightContainer;