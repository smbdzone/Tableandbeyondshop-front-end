import { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
// You can create a CSS file for additional styling using Tailwind
import deals from '../assets/deals.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import table1 from '../assets/table1.png';
import table2 from '../assets/table2.png';
import table3 from '../assets/table3.png';


const dummyCards = [
  {
    id: 1,
    image: table1,
    title: 'The Ultimate Guide to Cigar Cutters:',
    description: 'A Perfect Slice for Your Smoking Pleasure',
    extraText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    id: 2,
    image: table3,
    title: 'The Ultimate Guide to Cigar Cutters:',
    description: 'A Perfect Slice for Your Smoking Pleasure',
    extraText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    id: 3,
    image: table2,
    title: 'Coffee Cups:',
    description: 'The Perfect Companion for Your Daily Brew',
    extraText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    id: 4,
    image: table1,
    title: 'The Ultimate Guide to Cigar Cutters:',
    description: 'A Perfect Slice for Your Smoking Pleasure',
    extraText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    id: 5,
    image: table3,
    title: 'The Ultimate Guide to Cigar Cutters:',
    description: 'A Perfect Slice for Your Smoking Pleasure',
    extraText: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  }
];


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

            className="mr-2 navigation text-[60px] font-medium"
          >
            ‹
          </div>
          <div
            onClick={() => handleSlideChange((currentSlide + 1) % 3)}

            className='navigation text-[60px] font-medium'
          >
            ›
          </div>
        </div>
      </div>
      <hr className="mb-5 mt-2 border-2 bg-[#6C757D ]" />
      <div className='flex justify-center gap-10 mt-14'>
        {dummyCards.slice(currentSlide, currentSlide + 3).map((card) => (
          <div key={card.id} className='flex justify-center flex-col'>
            <img src={card.image} alt={`Image ${card.id}`} className='mt-[-30px]' />
            <p className='text-[#002D4F] font-bold text-center text-[20px] leading-[28.8px] my-5'>
              <span className='text-[#002D4F] text-[25px] font-bold leading-[28.8px]'>
                {card.title}
              </span><br />
              {card.description}
            </p>
            <p className='text-center mb-5 text-black text-[18px] font-normal leading-[26px]'>
              {card.extraText}
            </p>
            <div className='flex justify-center'>
              <button className='bg-[#002D4F] text-white text-[18px] py-2 px-8'>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;






