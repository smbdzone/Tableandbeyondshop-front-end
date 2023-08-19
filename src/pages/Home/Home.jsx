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
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import car5 from '../../assets/car5.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import car4 from '../../assets/car4.png';
import ItemCard from '../../components/ItemCard';
// import './Home.css';
const Home = () => {

  const [gridQuantity, setgridQuantity] = useState(3);
  const carouselItems = [
      {
          id: 1,
          src: car5,
          title: "very nice",
          description: "very nice",
          price: 500,
          detail: "New",

      },
      {
          id: 2,
          src: car2,
          title: "very nice",
          description: "very nice",
          price: 500,
          detail: "New",

      },
      {
          id: 3,
          src: car3,
          title: "very nice",
          description: "very nice",
          price: 500,
          detail: "New",

      },
      {
          id: 4,
          src: car4,
          title: "very nice",
          description: "very nice",
          price: 500,
          detail: "New",

      },
      {
          id: 5,
          src: car5,
          title: "very nice",
          description: "very nice",
          price: 500,
          detail: "New",

      },
      {
          id: 6,
          src: car2,
          title: "very nice",
          description: "veryyyy nice",
          price: 500,
          detail: "New",

      }
      // Add more carousel items
  ];

  const itemsPerPage = 4; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(carouselItems.length / itemsPerPage);

  const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedItems = carouselItems.slice(startIndex, endIndex);

  const calculateCardSize = () => {
      const baseWidth = 318;
      const baseHeight = 435;
      const reductionFactor = (gridQuantity - 1) * 0.1;
      const width = baseWidth * (1 - reductionFactor);
      const height = baseHeight * (1 - reductionFactor);

      return { width, height };
  };

  const { width: cardWidth, height: cardHeight } = calculateCardSize();

  const openModal = () => {
      if(document.getElementsByClassName('myModal')[0].style.display === 'block'){
          document.getElementsByClassName('myModal')[0].style.display = 'none';
          return;
      }else{
          document.getElementsByClassName('myModal')[0].style.display = 'block';
      console.log('modal opened');

      }
      
  }
  return (
    <div>
    <Navbar />
    <MegaNav />
    <ContactBar />
    <Landing />
    <CarouselSection />   
    <Display />
    <Table />
    <div className='text-left relative ml-[50px] mt-[60px] newArrival'>
                    <div className='flex w-full ' style={{
                        justifyContent: 'space-between'
                
                    }}>
                    <p className='Dheading'>New Arrival</p>
                    <div className="flex justify-center mr-[80px] ">
                        <div
                            onClick={handlePrevPage}
                            disabled={currentPage === 0}
                            className="mr-2 navigation"
                        >
                            ‹
                        </div>
                        <div
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages - 1}
                            className='navigation'
                        >
                            ›
                        </div>
                    </div>
                    </div>
                    <hr></hr>
                    <div className="grid grid-cols-4  mt-[50px] carousel pb-[100px] newArrival">
                        {/* Display sliced carousel items */}
                        {slicedItems.map((item) => (
                            <ItemCard src={item.src} title={item.title} description={item.description} price={item.price} favIconPos="lvp" bgheight="318px" bgwidth="318px" imgheight="257px" imgwidth="257px" height="100%" width="318px" />
                        ))}
                    </div>
                    

                </div>
                <ImageCarousel />
    
    <Footer />
    </div>
  )
}

export default Home;