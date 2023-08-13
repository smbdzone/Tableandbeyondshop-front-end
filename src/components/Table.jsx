import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
// You can create a CSS file for additional styling using Tailwind
import deals from '../assets/deals.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container mt-24 px-16">
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
      <Carousel
        selectedItem={currentSlide}
        onChange={(index) => handleSlideChange(index)}
        showThumbs={false}
        infiniteLoop
      >
        <div>
          <img src={deals} alt="Image 1" />
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src={deals} alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
