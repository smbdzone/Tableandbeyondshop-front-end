import React from 'react'
import Navbar from '../../components/Navbar';
import MegaNav from '../../components/MegaNav';
import ContactBar from '../../components/ContactBar';
import Landing from '../../components/Landing';
import { Carousel } from 'react-responsive-carousel';
import Display from '../../components/Display';
import ImageCarousel from '../../components/ImageCarousel';
import Table from '../../components/Table';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
    <Navbar />
    <MegaNav />
    <ContactBar />
    <Landing />
    <Carousel />   
    <Display />
    <ImageCarousel />
    <Table />
    <Footer />
    </div>
  )
}

export default Home;