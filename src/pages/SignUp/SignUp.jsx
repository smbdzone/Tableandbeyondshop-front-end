import React from 'react'
import Navbar from '../../components/Navbar';
import MegaNav from '../../components/MegaNav';
import ContactBar from '../../components/ContactBar';
import LeftContainer from '../../components/authComponents/LeftContainer/LeftContainer';
import RightContainer from '../../components/authComponents/RightContainer/RightContainer';
import Footer from '../../components/Footer';
import dish from "../../assets/signupdish.png";
import RightContainerSignUp from '../../components/authComponents/RightContainer/RightContainerSignUp';
import LeftContainerSignUp from '../../components/authComponents/LeftContainer/LeftContainerSignUp';

const SignUp = () => {
  return (
    <div>
        <Navbar/>
        <MegaNav />
        <ContactBar />
        <div className='flex flex-row mt-[100px] gap-[-200px]'>
            <LeftContainerSignUp src={dish}/>
            <RightContainerSignUp />
        </div>
        <Footer />
    </div>
  )
}

export default SignUp;