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
    <div className="carousel-container mt-16 px-16">
      <div className="flex justify-between items-center ">
        <h2 className="text-2xl font-bold">Irresistible Deals</h2>
        <div className="angle-buttons">
          <button
            className="text-xl mr-2 focus:outline-none"
            onClick={() => handleSlideChange(currentSlide === 0 ? 2 : currentSlide - 1)}
          >
            <FaChevronLeft />

          </button>
          <button
            className="text-xl focus:outline-none"
            onClick={() => handleSlideChange((currentSlide + 1) % 3)}
          >
            <FaChevronRight />

          </button>
        </div>
      </div>
      <hr className="mb-4" />
      {/* <Carousel
        selectedItem={currentSlide}
        onChange={(index) => handleSlideChange(index)}
        showThumbs={false}
        infiniteLoop
      >

      </Carousel> */}
      <div className='flex justify-center gap-10'>

        <div className='flex justify-center flex-col'>
          <img src={table1} alt="Image 1" />
          <p className='text-[#002D4F] font-bold text-center text-xl mt-5 mb-5'>Dinner Plates:
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
          <p className='text-[#002D4F] font-bold text-center text-xl mt-5 mb-5'>The Ultimate Guide to Cigar Cutters :
            A Perfect Slice for Your Smoking Pleasure
          </p>
          <p className='text-center mb-5'>
          Some quick example text to build on the card title and make up the bulk of the card's content.          </p>
          <div className='flex justify-center'>
          <button className='bg-[#002D4F] text-white  py-2 px-8' >
            Read More
          </button>
          </div>  
        </div>
        <div className='flex justify-center flex-col text-center'>
          <img src={table3} alt="Image 1" />
          <p className='text-[#002D4F] font-bold text-xl mt-5 mb-5'>Coffee Cups:
            The Perfect Companion for Your Daily Brew
          </p>
          <p className='text-center mb-5'>
            Some quick example text to build on the card title and make up the bulk of the cards content.
          </p>
          <div className='flex justify-center'>
          <button className='bg-[#002D4F] text-white  py-2 px-8 '  >
            Read More
          </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ImageCarousel;
