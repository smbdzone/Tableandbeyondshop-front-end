import React from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MegaNav from '../../components/MegaNav';
import ContactBar from '../../components/ContactBar';
import LeftContainer from '../../components/authComponents/LeftContainer/LeftContainer';
import RightContainer from '../../components/authComponents/RightContainer/RightContainer';
import dish from "../../assets/dish.png";

const Login = () => {
  return (
    <div>
        <Navbar/>
        <MegaNav />
        <ContactBar />
        <div className='flex flex-row mt-[150px]'>
            <LeftContainer src={dish}/>
            <RightContainer/>
        </div>
        <Footer />
    </div>
  )
}

export default Login;