import React from 'react'
import Navbar from '../../components/Navbar';
import MegaNav from '../../components/MegaNav';
import ContactBar from '../../components/ContactBar';
import Landing from '../../components/Landing';

import Display from '../../components/Display';
import ImageCarousel from '../../components/ImageCarousel';
import Table from '../../components/Table';
import Footer from '../../components/Footer';
import CarouselSection from '../../components/Carousel';

const Home = () => {
  return (
    <div>
    <Navbar />
    <MegaNav />
    <ContactBar />
    <Landing />
    <CarouselSection />   
    <Display />
    <ImageCarousel />
    <Table />
    <Footer />
    </div>
  )
}

export default Home;