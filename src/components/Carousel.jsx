import { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaAngleLeft, FaAngleRight, FaRegStar, FaShoppingBag, FaGift, FaEye } from 'react-icons/fa'; // Make sure to install react-icons
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
// import car4 from '../assets/car4.png';
import car5 from '../assets/car5.png';
import car6 from '../assets/car6.png';
import './Carousel.css';
import shopping from "../assets/shopping.png";
import gift from "../assets/gift.png";
import eye from "../assets/eye.png";


const CarouselSection = () => {
  const carouselItems = [
    {
      title: 'Cigar Room',
      images: [
        { src: { car1 }, description: 'Description 1' },
        { src: { car2 }, description: 'Description 2' },
        // Add more images and descriptions
      ],
    },
    {
      title: 'Kitchen Room',
      images: [
        { src: { car1 }, description: 'Description 1' },
        { src: { car2 }, description: 'Description 2' },
        // Add more images and descriptions
      ],
    },
    {
      title: 'Dining Room',
      images: [
        { src: { car1 }, description: 'Description 1' },
        { src: { car2 }, description: 'Description 2' },
        // Add more images and descriptions
      ],
    },
    {
      title: 'Cheese Room',
      images: [
        { src: { car1 }, description: 'Description 1' },
        { src: { car2 }, description: 'Description 2' },
        // Add more images and descriptions
      ],
    },
    // Add more carousel items
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const currentCarouselItem = carouselItems[activeIndex];

  return (
    <section className="bg-white pb-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[40px] text-[#002D4F] font-normal">{currentCarouselItem.title}</h2>
          <div className="flex items-center space-x-4">
            <div className='navigation cursor-pointer ' onClick={handlePrevClick}>
              ‹
            </div>
            <div className='navigation cursor-pointer' onClick={handleNextClick}>
              ›
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1320" height="1" viewBox="0 0 1320 1" fill="none" className='mb-[30px]' >
          <path d="M0 0.5H1320" stroke="#6C757D" />
        </svg>
        <div className='flex justify-center gap-[100px] '>
          <div className=''>
            <img className='h-[800px]' src={car1} alt="" />
          </div>
          <div className='flex flex-col justify-between w-fit' >
            <div className='relative '>
              <img src={car2} alt="" />
              <div className='flex justify-center absolute translate-x-[55px] translate-y-[-20px] gap-3'>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={shopping} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={gift} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={eye} alt="" className='h-[30%] w-[40%] ' />
                </div>
              </div>

              <div className='text-[#8D7C3B] flex justify-between mt-5' >
                <p>Dining</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2 ' />

              <p className='text-[#9C9687] text-sm'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
            <div  className=''>
              <img src={car3} alt="" />

              <div className='flex justify-center absolute translate-x-[55px] translate-y-[-20px] gap-3'>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={shopping} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={gift} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={eye} alt="" className='h-[30%] w-[40%] ' />
                </div>
              </div>
              <div className='text-[#8D7C3B] flex justify-between mt-4' >
                <p>Dining</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2' />

              <p className='text-[#9C9687] text-sm'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
          </div>
          <div className='flex flex-col justify-between' >

            <div>
              <img src={car6} alt="" />
              <div className='flex justify-center absolute translate-x-[55px] translate-y-[-20px] gap-3'>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={shopping} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={gift} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={eye} alt="" className='h-[30%] w-[40%] ' />
                </div>
              </div>



              <div className=''>

              </div>
              <div className='text-[#8D7C3B] flex justify-between mt-5' >
                <p>Dining</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2 ' />

              <p className='text-[#9C9687] text-sm'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
            <div>
              <img src={car5} alt="" />
              <div className='flex justify-center absolute translate-x-[55px] translate-y-[-20px] gap-3'>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={shopping} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={gift} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={eye} alt="" className='h-[30%] w-[40%] ' />
                </div>
              </div>
              <div className='text-[#8D7C3B] flex justify-between mt-5' >
                <p>Dining</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2' />

              <p className='text-[#9C9687] text-sm'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
          </div>
          <div className='flex flex-col justify-between' >
            <div>
              <img src={car2} alt="" />
              <div className='flex justify-center absolute translate-x-[55px] translate-y-[-20px] gap-3'>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={shopping} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={gift} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={eye} alt="" className='h-[30%] w-[40%] ' />
                </div>
              </div>
              <div className='text-[#8D7C3B] flex justify-between mt-5' >
                <p>Dining</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2' />

              <p className='text-[#9C9687] text-sm'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
            <div>
              <img src={car6} alt="" />
              <div className='flex justify-center absolute translate-x-[55px] translate-y-[-20px] gap-3'>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={shopping} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={gift} alt="" className='h-[40%] w-[40%] ' />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <img src={eye} alt="" className='h-[30%] w-[40%] ' />
                </div>
              </div>

              <div className='text-[#8D7C3B] flex justify-between mt-5' >
                <p>Dining</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2' />

              <p className='text-[#9C9687] text-sm'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
          </div>


        </div>
        {/* <div className="flex flex-wrap">
          <div className="w-1/4">
            <img src={currentCarouselItem.images[0].src} alt={currentCarouselItem.title} className="h-full" />
          </div>
          <div className="w-1/2">
            <Carousel showThumbs={false} selectedItem={1} infiniteLoop>
              {currentCarouselItem.images.map((image, index) => (
                <div key={index}>
                  <img src={image.src} alt={currentCarouselItem.title} />
                  <p className="mt-2">{image.Dining}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CarouselSection;
