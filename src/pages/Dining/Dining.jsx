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


const Dining = () => {
    return (
        <div>
            <Navbar />
            <MegaNav />
            <ContactBar />
            <div className="flex flex-col text-center ">
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
                    <div className='flex items-center justify-center  '>
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
                <div className="grid grid-cols-3 gap-4">
                    {/* Item Cards */}
                    <ItemCard src={Rectangle1} title={"very nice"} description={"very nice"} price={500} detail={"New"} />
                    <ItemCard src={Rectangle1} title={"very nice"} description={"very nice"} price={500} detail={"New"} />
                    <ItemCard src={Rectangle1} title={"very nice"} description={"very nice"} price={500} detail={"New"} />
                    <ItemCard src={Rectangle1} title={"very nice"} description={"very nice"} price={500} detail={"New"} />

                    {/* You can add more ItemCard components here */}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Dining;