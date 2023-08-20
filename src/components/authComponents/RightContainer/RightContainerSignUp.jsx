import React, { useState } from 'react';
import Input from '../../Input';
import Button from '../../Button';
import horizontalLine from '../../../assets/horizontalLine.png';
import google from '../../../assets/google.png';
import facebook from '../../../assets/facebook.png';
import "./RightContainer.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { send } from 'emailjs-com';

export const RightContainerSignUp = () => {
    const navigate = useNavigate();
   

    const initialFormState = {
        to_name: "",
        message:"123956",
        reply_to: "",
      };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp,setOtp] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [toSend, setToSend] = useState(initialFormState);
    

    const handleClick = () => {
        console.log("clicked");
        console.log(name, address, phoneNumber, email, password, confirmPassword);
        if(name === "" || address === "" || phoneNumber === "" || email === "" || password === "" || confirmPassword === ""){
            alert("Please fill all the fields");
            return;
        }
        setShowModal(true);
        setToSend({ ...toSend, to_name: name, reply_to: email });
        send("service_aahp50k", "template_kbav2uu", toSend, "8BogwQF7LOde4Cxy_")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setToSend(initialFormState);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    };

    // const handleChange = (e) => {
    //     setToSend({ ...toSend, [e.target.name]: e.target.value });
    //   };

      const verifyOtp = (otp) => {
        if(otp == "123956"){
            alert("otp verified");
            navigate('/dining');
            return;
        }
        else{
            alert("wrong otp");
            return;
        }
      }

      const handleChangeText = (e) => {
        e.preventDefault();
        setOtp(e.target.value);
        };


  return (
    <div className='flex flex-col ml-24  items-center '>
            <p className='loginheading pb-[20px] text-[50px] '>Sign Up</p>
            <p className='subheading pb-[10px] text-[20px]'>Already have an account yet? <span className='text-[#8D7C3B] cursor-pointer' onClick={() => navigate('/login')}><u>Sign In</u></span></p>
            <div className='flex flex-col gap-[25px] relative scale-y-90'>
                <Input type='text' placeholder='Full Name'  value={name} onChange={(e) => setName(e.target.value)} />
                <Input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input type='text' placeholder='Full Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                <Input type='text' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <Input type={showPassword ? 'text' : 'password'} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none" className='absolute top-[380px] right-[20px]' onClick={() => setShowPassword(!showPassword)}>
                    <path d="M12.5 5.1C11.5959 5.1 10.7287 5.45821 10.0894 6.09584C9.45008 6.73346 9.09091 7.59826 9.09091 8.5C9.09091 9.40174 9.45008 10.2665 10.0894 10.9042C10.7287 11.5418 11.5959 11.9 12.5 11.9C13.4041 11.9 14.2713 11.5418 14.9106 10.9042C15.5499 10.2665 15.9091 9.40174 15.9091 8.5C15.9091 7.59826 15.5499 6.73346 14.9106 6.09584C14.2713 5.45821 13.4041 5.1 12.5 5.1ZM12.5 14.1667C10.9931 14.1667 9.5479 13.5696 8.48235 12.5069C7.4168 11.4442 6.81818 10.0029 6.81818 8.5C6.81818 6.99711 7.4168 5.55577 8.48235 4.49306C9.5479 3.43036 10.9931 2.83333 12.5 2.83333C14.0069 2.83333 15.4521 3.43036 16.5177 4.49306C17.5832 5.55577 18.1818 6.99711 18.1818 8.5C18.1818 10.0029 17.5832 11.4442 16.5177 12.5069C15.4521 13.5696 14.0069 14.1667 12.5 14.1667ZM12.5 0C6.81818 0 1.96591 3.52467 0 8.5C1.96591 13.4753 6.81818 17 12.5 17C18.1818 17 23.0341 13.4753 25 8.5C23.0341 3.52467 18.1818 0 12.5 0Z" fill="#D9C895" />
                </svg>
                <Input type={showConfirmPassword ? 'text' : 'password'} placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="17" viewBox="0 0 25 17" fill="none" className='absolute top-[465px] right-[20px]' onClick={() => setShowConfirmPassword(!showPassword)}>
                    <path d="M12.5 5.1C11.5959 5.1 10.7287 5.45821 10.0894 6.09584C9.45008 6.73346 9.09091 7.59826 9.09091 8.5C9.09091 9.40174 9.45008 10.2665 10.0894 10.9042C10.7287 11.5418 11.5959 11.9 12.5 11.9C13.4041 11.9 14.2713 11.5418 14.9106 10.9042C15.5499 10.2665 15.9091 9.40174 15.9091 8.5C15.9091 7.59826 15.5499 6.73346 14.9106 6.09584C14.2713 5.45821 13.4041 5.1 12.5 5.1ZM12.5 14.1667C10.9931 14.1667 9.5479 13.5696 8.48235 12.5069C7.4168 11.4442 6.81818 10.0029 6.81818 8.5C6.81818 6.99711 7.4168 5.55577 8.48235 4.49306C9.5479 3.43036 10.9931 2.83333 12.5 2.83333C14.0069 2.83333 15.4521 3.43036 16.5177 4.49306C17.5832 5.55577 18.1818 6.99711 18.1818 8.5C18.1818 10.0029 17.5832 11.4442 16.5177 12.5069C15.4521 13.5696 14.0069 14.1667 12.5 14.1667ZM12.5 0C6.81818 0 1.96591 3.52467 0 8.5C1.96591 13.4753 6.81818 17 12.5 17C18.1818 17 23.0341 13.4753 25 8.5C23.0341 3.52467 18.1818 0 12.5 0Z" fill="#D9C895" />
                </svg>
            </div>
            {showModal ? (
        <div className='flex flex-col gap-5 relative'>
          <Input type='text' placeholder='Enter OTP' value={otp} onChange={handleChangeText} />
          <Button text='Verify OTP' onClick={() => verifyOtp(otp)} />
        </div>
      ) : null}
            <div className='flex flex-row  w-full' style={{
                justifyContent: "space-between",
                width: "536px",
            }}>
                <div className='flex pb-6 '>
                    <input  type="checkbox" name="" id="" />
                    <p style={{
                        color: "#162C35",
                        fontFamily: "PT Sans",
                        fontSize: "18px",
                        fontWeight: "400px",
                        fontStyle: "normal",
                        lineHeight: "30px",
                        marginLeft: "10px",
                        // paddingBottom: "30px",

                    }}> I have accepted the terms and condition</p>
                </div>
            </div>
            <div className='pb-20'>
            <Button text="SIGN UP" onClick={handleClick} />
            {/* {showModal ? <div className='mt-[100px] '>
                <input type="text" value={otp} onChange={handleChangeText} />
                <button type='submit' onClick={() => verifyOtp(otp)}>Verify otp</button>
            </div> : ""} */}
            </div>

        </div>
  )
}

export default RightContainerSignUp;
