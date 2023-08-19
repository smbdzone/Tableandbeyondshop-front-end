import { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
// You can create a CSS file for additional styling using Tailwind
import deals from '../assets/deals.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import table1 from '../assets/table1.png';
import table2 from '../assets/table2.png';
import table3 from '../assets/table3.png';


const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };


  return (
    <div className="carousel-container mb-44 px-16">
      <div className="flex justify-between items-center ">
        <h2 className="text-[40px] text-[#002D4F]">Table Talk</h2>
        <div className="flex justify-center mr-[20px] ">
          <div
            onClick={() => handleSlideChange(currentSlide === 0 ? 2 : currentSlide - 1)}

            className="mr-2 navigation"
          >
            ‹
          </div>
          <div
            onClick={() => handleSlideChange((currentSlide + 1) % 3)}

            className='navigation'
          >
            ›
          </div>
        </div>
      </div>
      <hr className="mb-5 mt-2 border-2 bg-[#6C757D ]" />
      <div className='flex justify-center gap-10 mt-14'>

        <div className='flex justify-center flex-col'>
          <img src={table1} alt="Image 1" />
          <p className='text-[#002D4F] font-bold text-center text-xl my-5 '>
            Dinner Plates:
            Choosing the Perfect Tableware for Your Meals
          </p>
          <p className='text-center mb-5 '>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <div className='flex justify-center'>
            <button className='bg-[#002D4F] text-white  py-2 px-8' >
              Read More
            </button>
          </div>
        </div>
        <div className='flex justify-center flex-col'>
          <img src={table3} alt="Image 1" />
          <p className='text-[#002D4F] font-bold text-center text-xl my-5'>Dinner Plates:
            Choosing the Perfect Tableware for Your Meals
          </p>
          <p className='text-center mb-5'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <div className='flex justify-center'>
            <button className='bg-[#002D4F] text-white  py-2 px-8' >
              Read More
            </button>
          </div>
        </div>
        <div className='flex justify-center flex-col'>
          <img src={table2} alt="Image 1" />
          <p className='text-[#002D4F] font-bold text-center text-xl my-5'>Dinner Plates:
            Choosing the Perfect Tableware for Your Meals
          </p>
          <p className='text-center mb-5'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <div className='flex justify-center'>
            <button className='bg-[#002D4F] text-white  py-2 px-8' >
              Read More
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ImageCarousel;
