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
import dish1 from '../../assets/dish1.png';
import dish2 from '../../assets/dish2.png';
import dish3 from '../../assets/dish3.png';
import dish4 from '../../assets/dish4.png';
import dish5 from '../../assets/dish5.png';
import dish6 from '../../assets/dish6.png';
import dish7 from '../../assets/dish7.png';
import dish8 from '../../assets/dish8.png';
import dish9 from '../../assets/dish9.png';
import './Dining.css';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import car5 from '../../assets/car5.png';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.png';
import car4 from '../../assets/car4.png';
import FilterModal from '../../components/FilterModal';



const Dining = () => {

    const [gridQuantity, setgridQuantity] = useState(3);
    const carouselItems = [
        {
            id: 1,
            src: car5,
            title: "Dinnerware",
            description: "Acccompanist Bowl Square",
            price: 500,
            detail: "New",

        },
        {
            id: 2,
            src: car2,
            title: "Dinnerware",
            description: "Acccompanist",
            price: 500,
            detail: "New",

        },
        {
            id: 3,
            src: car3,
            title: "Dinnerware",
            description: "Acccompanist",
            price: 500,
            detail: "New",

        },
        {
            id: 4,
            src: car4,
            title: "Dinnerware",
            description: "Acccompanist",
            price: 500,
            detail: "New",

        },
        {
            id: 5,
            src: car5,
            title: "Dinnerware",
            description: "Acccompanist",
            price: 500,
            detail: "New",

        },
        {
            id: 6,
            src: car2,
            title: "Dinnerware",
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
        if (document.getElementsByClassName('myModal')[0].style.display === 'block') {
            document.getElementsByClassName('myModal')[0].style.display = 'none';
            return;
        } else {
            document.getElementsByClassName('myModal')[0].style.display = 'block';
            console.log('modal opened');

        }

    }


    return (
        <div style={{ overflowX: 'hidden' }}>
            <Navbar />
            <MegaNav />
            <ContactBar />
            <div className="flex flex-col text-center gap-[40px] mt-[30px] ">
                <p className='heading'>Home / Dining</p>
                <p className='subheading'>Dining</p>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className='flex flex-col'>
                        <img src={Dinnerware} alt="" className='w-[108px] h-[102px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Dinnerware</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={Barware} alt="" className='w-[108px] h-[102px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Barware</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={Flatware} alt="" className='w-[108px] h-[102px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Flatware</p>

                    </div>
                    <div className='flex flex-col'>
                        <img src={Glassware} alt="" className='w-[108px] h-[102px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Glassware</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={Dinnerware} alt="" className='w-[108px] h-[102px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Dinnerware</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={Barware} alt="" className='w-[108px] h-[102px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Barware</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={Flatware} alt="" className='w-[108px] h-[102px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Flatware</p>

                    </div>
                    <div className='flex flex-col'>
                        <img src={Glassware} alt="" className='w-[138px] h-[102px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Glassware</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={Glassware} alt="" className='w-[108px] h-[102px]' />
                        <p className='text-[#002D4F] font-bold text-[18px]'>Glassware</p>
                    </div>
                </div>
                <div className='flex mt-[80px]' style={{
                    justifyContent: 'space-between'
                }}>
                    <div className='flex items-center justify-center gap-4 ml-[170px]   '>
                        <div className='flex items-center justify-center filterOptions'>
                            Color
                        </div>
                        <div className='flex items-center justify-center filterOptions'>
                            Price
                        </div>
                        <div className='flex items-center justify-center filterOptions'>
                            Sort
                        </div>
                        <div className='flex items-center justify-around filterOptions' onClick={openModal}>
                            All filters
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M17 4H8M11 14H2" stroke="#A19C97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14 17C15.6569 17 17 15.6569 17 14C17 12.3431 15.6569 11 14 11C12.3431 11 11 12.3431 11 14C11 15.6569 12.3431 17 14 17Z" stroke="#A19C97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 7C5.65685 7 7 5.65685 7 4C7 2.34315 5.65685 1 4 1C2.34315 1 1 2.34315 1 4C1 5.65685 2.34315 7 4 7Z" stroke="#A19C97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-2  mr-[180px]'>
                        <p className='text-[#58595B] text-[21px]'>View</p>
                        <input type="range" className='' value={gridQuantity} onChange={(e) => setgridQuantity(e.target.value)} min="3" max="6" />
                        <p className='text-[#58595B] text-[21px]'>{gridQuantity} products</p>
                    </div>

                </div>

                {gridQuantity == 3 ? (<div className="wrapper3  w-[85%] ml-[170px]" >

                    <ItemCard src={dish1} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} bgheight="450px" height="600px" width="480px" iconsMarginLeft="110px" textMarginTop="40px" />
                    <ItemCard src={dish2} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} bgheight="450px" height="600px" width="480px" iconsMarginLeft="110px" textMarginTop="40px" />
                    <ItemCard src={dish3} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="450px" width="480px" iconsMarginLeft="110px" textMarginTop="40px" />
                    <ItemCard src={dish4} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="450px" width="480px" iconsMarginLeft="110px" textMarginTop="40px" />
                    <ItemCard src={dish5} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="450px" width="480px" iconsMarginLeft="110px" textMarginTop="40px" />
                    <ItemCard src={dish6} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="450px" width="480px" iconsMarginLeft="110px" textMarginTop="40px" />
                    <ItemCard src={dish7} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="450px" width="480px" iconsMarginLeft="110px" textMarginTop="40px" />
                    <ItemCard src={dish8} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="450px" width="480px" iconsMarginLeft="110px" textMarginTop="40px" />
                    <ItemCard src={dish9} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="450px" width="480px" iconsMarginLeft="110px" textMarginTop="40px" />

                </div>) : null}
                {
                    gridQuantity === "4" ? (
                        <div className='wrapper4'>
                            <ItemCard src={dish1} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="350px" width="400px" iconsMarginLeft="70px" textMarginTop="40px" />
                            <ItemCard src={dish2} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="350px" width="400px" iconsMarginLeft="70px" textMarginTop="40px" />
                            <ItemCard src={dish3} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="350px" width="400px" iconsMarginLeft="70px" textMarginTop="40px" />
                            <ItemCard src={dish4} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="350px" width="400px" iconsMarginLeft="70px" textMarginTop="40px" />
                            <ItemCard src={dish5} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="350px" width="400px" iconsMarginLeft="70px" textMarginTop="40px" />
                            <ItemCard src={dish6} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="350px" width="400px" iconsMarginLeft="70px" textMarginTop="40px" />
                            <ItemCard src={dish7} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="350px" width="400px" iconsMarginLeft="70px" textMarginTop="40px" />
                            <ItemCard src={dish8} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="350px" width="400px" iconsMarginLeft="70px" textMarginTop="40px" />
                            <ItemCard src={dish9} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="600px" bgheight="350px" width="400px" iconsMarginLeft="70px" textMarginTop="40px" />

                        </div>
                    ) : null
                }
                {
                    gridQuantity === "5" ? (
                        <div className='wrapper5'>
                            <ItemCard src={dish1} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="100x" bgheight="300px" width="320px" iconsMarginLeft="30px" textMarginTop="20px" />
                            <ItemCard src={dish2} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="500px" bgheight="300px" width="320px" iconsMarginLeft="30px" textMarginTop="20px" />
                            <ItemCard src={dish3} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="500px" bgheight="300px" width="320px" iconsMarginLeft="30px" textMarginTop="20px" />
                            <ItemCard src={dish4} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="500px" bgheight="300px" width="320px" iconsMarginLeft="30px" textMarginTop="20px" />
                            <ItemCard src={dish5} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="500px" bgheight="300px" width="320px" iconsMarginLeft="30px" textMarginTop="20px" />
                            <ItemCard src={dish6} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="500px" bgheight="300px" width="320px" iconsMarginLeft="30px" textMarginTop="20px" />
                            <ItemCard src={dish7} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="500px" bgheight="300px" width="320px" iconsMarginLeft="30px" textMarginTop="20px" />
                            <ItemCard src={dish8} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="500px" bgheight="300px" width="320px" iconsMarginLeft="30px" textMarginTop="20px" />
                            <ItemCard src={dish9} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="500px" bgheight="300px" width="320px" iconsMarginLeft="30px" textMarginTop="20px" />

                        </div>
                    ) : null
                }

                {
                    gridQuantity === "6" ? (
                        <div className='wrapper6'>
                            <ItemCard src={dish1} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="450px" bgheight="250px" width="260px" imgheight="70%" imgwidth="70%" textMarginTop="20px" />
                            <ItemCard src={dish2} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="450px" bgheight="250px" width="260px" imgheight="70%" imgwidth="70%" textMarginTop="20px" />
                            <ItemCard src={dish3} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="450px" bgheight="250px" width="260px" imgheight="70%" imgwidth="70%" textMarginTop="20px" />
                            <ItemCard src={dish4} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="450px" bgheight="250px" width="260px" imgheight="70%" imgwidth="70%" textMarginTop="20px" />
                            <ItemCard src={dish5} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="450px" bgheight="250px" width="260px" imgheight="70%" imgwidth="70%" textMarginTop="20px" />
                            <ItemCard src={dish6} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="450px" bgheight="250px" width="260px" imgheight="70%" imgwidth="70%" textMarginTop="20px" />
                            <ItemCard src={dish7} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="450px" bgheight="250px" width="260px" imgheight="70%" imgwidth="70%" textMarginTop="20px" />
                            <ItemCard src={dish8} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="450px" bgheight="250px" width="260px" imgheight="70%" imgwidth="70%" textMarginTop="20px" />
                            <ItemCard src={dish9} title={"Dinnerware"} description={"Accompanist Bowl Square"} price={500} detail={"New"} height="450px" bgheight="250px" width="260px" imgheight="70%" imgwidth="70%" textMarginTop="20px" />

                        </div>
                    ) : null
                }



                <div className='text-left relative ml-[170px] mt-[140px]'>
                    <div className='flex w-full ' style={{
                        justifyContent: 'space-between'

                    }}>
                        <p className='Dheading'>Last Viewed Products</p>
                        <div className="flex justify-center absolute right-[205px]">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 0}
                                className="mr-2"
                            >
                                <FaChevronLeft size={20} color='#C1A868' />
                            </button>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages - 1}
                            >
                                <FaChevronRight size={20} color='#C1A868' />
                            </button>
                        </div>
                    </div>
                    <hr className='w-[1520px]'></hr>
                    <div className="grid grid-cols-4  mt-[50px] carousel pb-[100px] w-[90%]">
                        {/* Display sliced carousel items */}
                        {slicedItems.map((item) => (
                            <ItemCard src={item.src} title={item.title} description={item.description} price={item.price} favIconPos="lvp" bgheight="318px" bgwidth="358px" imgheight="257px" imgwidth="257px" height="100%" width="90%" iconsMarginLeft="50px" />
                        ))}
                    </div>


                </div>
                <div className='flex flex-col text-left ml-[50px] gap-4 mb-[20px]'>
                    <p className='Dheading'>Dining</p>
                    <p className='DPara w-[94%] tracking-[2px]'>Dining Products: is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                    <p className='DPara w-[94%] tracking-[2px]'>Remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
            <div className=' myModal absolute  top-0 right-[1px] h-fit w-fit z-1 scale-x-0.5' style={{ display: "none" }} >
                <FilterModal handClose={openModal} />
            </div>
            <Footer />

        </div>
    )
}

export default Dining;