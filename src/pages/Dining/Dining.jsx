import React from 'react'
import Navbar from '../../components/Navbar';
import MegaNav from '../../components/MegaNav';
import Dinnerware from '../../assets/Dinnerware.png';
import Barware from '../../assets/Barware.png';
import Flatware from '../../assets/Flatware.png';
import Glassware from '../../assets/Glassware.png';
import ContactBar from '../../components/ContactBar';
import Footer from '../../components/Footer';
import ItemCard from '../../components/ItemCard';
import Rectangle1 from '../../assets/Dinnerware1.png';
import './Dining.css';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import car5 from '../../assets/car5.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import car4 from '../../assets/car4.png';



const Dining = () => {

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

    return (
        <div style={{overflowX:'hidden'}}>
            <Navbar />
            <MegaNav />
            <ContactBar />
            <div className="flex flex-col text-center gap-[40px] ">
                <p className='heading'>Home / Dining</p>
                <p className='subheading'>Dining</p>
                <div className='flex flex-row justify-center items-center'>
                    <div className='flex flex-col'>
                        <img src={Dinnerware} alt="" className='w-[138px] h-[132px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Dinnerware</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={Barware} alt="" className='w-[138px] h-[132px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Barware</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={Flatware} alt="" className='w-[138px] h-[132px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Flatware</p>

                    </div>
                    <div className='flex flex-col'>
                        <img src={Glassware} alt="" className='w-[138px] h-[132px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Glassware</p>
                    </div>
                </div>
                <div className='flex ' style={{
                    justifyContent: 'space-between'
                }}>
                    <div className='flex items-center justify-center gap-4 ml-[50px]  '>
                        <div className='flex items-center justify-center filterOptions'>
                            Color
                        </div>
                        <div className='flex items-center justify-center filterOptions'>
                            Price
                        </div>
                        <div className='flex items-center justify-center filterOptions'>
                            Sort
                        </div>
                        <div className='flex items-center justify-center filterOptions'>
                            All filters
                        </div>
                    </div>
                    <div className='flex'>
                        <p>View</p>
                        <input type="range" />
                        <p>6 products</p>
                    </div>

                </div>
                <div className="grid grid-cols-3 gap-[70px] ml-[100px] mt-[50px] carousel ">
                    {/* Item Cards */}
                    <ItemCard src={Rectangle1} title={"very nice"} description={"very nice"} price={500} detail={"New"} />
                    <ItemCard src={Rectangle1} title={"very nice"} description={"very nice"} price={500} detail={"New"} />
                    <ItemCard src={Rectangle1} title={"very nice"} description={"very nice"} price={500} detail={"New"} />
                    <ItemCard src={Rectangle1} title={"very nice"} description={"very nice"} price={500} detail={"New"} />

                    {/* You can add more ItemCard components here */}
                </div>
                <div className='text-left relative ml-[50px]'>
                    <div className='flex w-full ' style={{
                        justifyContent: 'space-between'
                
                    }}>
                    <p className='Dheading'>Last Viewed Products</p>
                    <div className="flex justify-center ">
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 0}
                            className="mr-2"
                        >
                            <FaChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages - 1}
                        >
                            <FaChevronRight size={20} />
                        </button>
                    </div>
                    </div>
                    <hr></hr>
                    <div className="grid grid-cols-4  mt-[50px] carousel pb-[100px]">
                        {/* Display sliced carousel items */}
                        {slicedItems.map((item) => (
                            <ItemCard src={item.src} title={item.title} description={item.description} price={item.price} favIconPos="lvp" bgheight="318px" bgwidth="318px" imgheight="257px" imgwidth="257px" height="100%" width="318px" />
                        ))}
                    </div>
                    

                </div>
                <div className='flex flex-col text-left ml-[50px] gap-4'>
                    <p className='Dheading'>Dining</p>
                    <p className='DPara w-[90%]'>Dining Products: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                    <p className='DPara w-[90%]'>Remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Dining;