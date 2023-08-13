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
      title: 'Children Room',
      images: [
        { src: { car1 }, description: 'Description 1' },
        { src: { car2 }, description: 'Description 2' },
        // Add more images and descriptions
      ],
    },
    {
      title: 'Adults Room',
      images: [
        { src: { car1 }, description: 'Description 1' },
        { src: { car2 }, description: 'Description 2' },
        // Add more images and descriptions
      ],
    },
    {
      title: 'Masters Room',
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
    <section className="bg-white py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{currentCarouselItem.title}</h2>
          <div className="flex items-center space-x-4">
            <FaAngleLeft className="cursor-pointer" onClick={handlePrevClick} />
            <FaAngleRight className="cursor-pointer" onClick={handleNextClick} />
          </div>
        </div>
        <hr className="mb-4 h-1 bg-[#6C757D]" />
        <div className='flex justify-between gap-6'>
          <div className=''>
            <img className='h-[800px]' src={car1} alt="" />
          </div>
          <div className='flex flex-col justify-between gap-6' >
            <div className='relative'>
              <img src={car2} alt="" />
              <div className='flex justify-center absolute right-1/2 top-[262px] translate-x-1/2 gap-1'>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B] hover:bg-[#002D4F]'>
                  <FaGift />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaShoppingBag />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaEye />
                </div>
              </div>

              <div className='text-[#8D7C3B] flex justify-between mt-6' >
                <p>Description</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2'  />

              <p className='text-[#9C9687] text-xs'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
            <div>
              <img src={car3} alt="" />
              {/* <div className='flex justify-center absolute right-1/2 top-[262px] translate-x-1/2 gap-1'>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaGift />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaShoppingBag />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaEye />
                </div>
              </div> */}
              <div className='flex justify-center absolute translate-x-1/2 translate-y-[-20px] gap-1'>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaGift />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaShoppingBag />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaEye />
                </div>
              </div>
              <div className='text-[#8D7C3B] flex justify-between mt-4' >
                <p>Description</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2'  />

              <p className='text-[#9C9687] text-xs'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
          </div>
          <div className='flex flex-col justify-between' >

            <div>
              <img src={car6} alt="" />
              <div className='flex justify-center absolute translate-x-1/2 translate-y-[-20px] gap-1'>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaGift />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaShoppingBag />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaEye />
                </div>
              </div>

            

              <div className=''>

              </div>
              <div className='text-[#8D7C3B] flex justify-between mt-5' >
                <p>Description</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2'  />

              <p className='text-[#9C9687] text-xs'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
            <div>
              <img src={car5} alt="" />
              <div className='flex justify-center absolute translate-x-1/2 translate-y-[-20px] gap-1'>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaGift />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaShoppingBag />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaEye />
                </div>
              </div>
              <div className='text-[#8D7C3B] flex justify-between mt-5' >
                <p>Description</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2'  />

              <p className='text-[#9C9687] text-xs'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
          </div>
          <div className='flex flex-col justify-between' >
            <div>
              <img src={car2} alt="" />
              <div className='flex justify-center absolute translate-x-1/2 translate-y-[-20px] gap-1'>

                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaGift />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaShoppingBag />
                </div>
                <div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
                  <FaEye />
                </div>
              </div>
              <div className='text-[#8D7C3B] flex justify-between mt-5' >
                <p>Description</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2'  />

              <p className='text-[#9C9687] text-xs'>Luxurious Bag Decorated</p>
              <p className='text-[#002D4F] font-bold text-sm'>500 AED</p>

            </div>
            <div>
              <img src={car6} alt="" />
              <div className='flex justify-center absolute translate-x-1/2 translate-y-[-20px] gap-1'>

<div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
  <FaGift />
</div>
<div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
  <FaShoppingBag />
</div>
<div className='flex h-10 w-10 rounded-full bg-white justify-center items-center shadow-2xl text-[#8D7C3B]'>
  <FaEye />
</div>
</div>

              <div className='text-[#8D7C3B] flex justify-between mt-5' >
                <p>Description</p>
                <div className='flex mt-1'>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              </div>
              <hr className='border-[#F69785] mb-2 mt-1 border-2'  />

              <p className='text-[#9C9687] text-xs'>Luxurious Bag Decorated</p>
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
                  <p className="mt-2">{image.description}</p>
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
