import React from 'react'
import Navbar from '../../components/Navbar';
import MegaNav from '../../components/MegaNav';
import ContactBar from '../../components/ContactBar';
import greycup from '../../assets/greycup.png';
import translogo from '../../assets/translogo.png';
import './AddtoCart.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';
import bowl from '../../assets/bowl.png';
import cupPlate from '../../assets/cupPlate.png';
import plate from '../../assets/Plate.png';
import Rectangle_161 from '../../assets/Rectangle_161.png';
import three from '../../assets/3.png';
import Footer from '../../components/Footer';


const dummyCarouselData = [
    {
        id: 1,
        src: bowl,
    },
    {
        id: 2,
        src: cupPlate,
    },
    {
        id: 3,
        src: plate,
    },
    {
        id: 4,
        src: cupPlate,
    },
    {
        id: 5,
        src: bowl,

    },
    {
        id: 6,
        src: plate,
    }
];


const similarProducts = [
    {
      "imageSrc": greycup,
      "name": "Accompanist Soup Plate Set",
      "price": "AED400.00 inc. VAT"
    },
    {
      "imageSrc": greycup,
      "name": "Another Product Name",
      "price": "AED250.00 inc. VAT"
    },
    {
      "imageSrc": greycup,
      "name": "Yet Another Product",
      "price": "AED300.00 inc. VAT"
    },
    {
      "imageSrc": greycup,
      "name": "Fourth Product Name",
      "price": "AED450.00 inc. VAT"
    },
    {
        "imageSrc": greycup,
        "name": "Another Product Name",
        "price": "AED250.00 inc. VAT"
      },
      {
        "imageSrc": greycup,
        "name": "Yet Another Product",
        "price": "AED300.00 inc. VAT"
      },
      {
        "imageSrc": greycup,
        "name": "Fourth Product Name",
        "price": "AED450.00 inc. VAT"
      },
  ]
  

const AddtoCart = () => {
    const [quantity, setQuantity] = React.useState(1);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div>
            <Navbar />
            <MegaNav />
            <ContactBar />
            <div className='flex gap-20 items-center ml-[200px] mt-[100px] fullContainer'>
                <div className='flex flex-col gap-[40px]'>
                    <img src={greycup} alt="" className='h-[700px] w-[700px] ' />
                    <div className='flex gap-10 items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="36" viewBox="0 0 22 36" fill="none" onClick={() => handleSlideChange(currentSlide === 0 ? 2 : currentSlide - 1)} className='cursor-pointer'>
                            <path d="M0.928118 15.8692L16.6164 0.881549C16.909 0.602063 17.2563 0.380364 17.6385 0.229108C18.0207 0.0778515 18.4304 0 18.8441 0C19.6797 0 20.4811 0.317103 21.0719 0.881549C21.3644 1.16103 21.5965 1.49283 21.7548 1.858C21.9132 2.22316 21.9946 2.61454 21.9946 3.00979C21.9946 3.80804 21.6627 4.5736 21.0719 5.13804L7.57995 17.9974L21.0719 30.8568C21.366 31.1355 21.5994 31.467 21.7587 31.8323C21.918 32.1976 22 32.5894 22 32.9851C22 33.3808 21.918 33.7726 21.7587 34.1379C21.5994 34.5031 21.366 34.8347 21.0719 35.1133C20.7802 35.3943 20.4332 35.6173 20.0508 35.7695C19.6685 35.9217 19.2584 36 18.8441 36C18.4299 36 18.0198 35.9217 17.6375 35.7695C17.2551 35.6173 16.9081 35.3943 16.6164 35.1133L0.928118 20.1257C0.634029 19.847 0.4006 19.5155 0.241306 19.1502C0.0820103 18.7849 0 18.3932 0 17.9974C0 17.6017 0.0820103 17.2099 0.241306 16.8447C0.4006 16.4794 0.634029 16.1479 0.928118 15.8692Z" fill="#A19C97" />
                        </svg>
                        {
                            dummyCarouselData.slice(currentSlide, currentSlide + 3).map((item) => (
                                <div className='flex justify-center items-center'>
                                    <img src={item.src} alt="" className='w-[127.635px] h-[109.721px]' />
                                </div>
                            ))
                        }
                        {/* <img src={bowl} alt="" className='w-[127.635px] h-[109.721px]' />
                        <img src={cupPlate} alt="" className='w-[127.635px] h-[109.721px]' />
                        <img src={plate} alt="" className='w-[127.635px] h-[109.721px]' /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="36" viewBox="0 0 22 36" fill="none" onClick={() => handleSlideChange((currentSlide + 1) % 3)} className='cursor-pointer'>
                            <path d="M21.0719 15.8692L5.38359 0.881549C5.09104 0.602063 4.74373 0.380364 4.3615 0.229108C3.97926 0.0778515 3.56958 0 3.15585 0C2.32029 0 1.51895 0.317103 0.928114 0.881549C0.635563 1.16103 0.403499 1.49283 0.245172 1.858C0.0868442 2.22316 0.00535623 2.61454 0.00535623 3.00979C0.00535623 3.80804 0.337281 4.5736 0.928114 5.13804L14.42 17.9974L0.928114 30.8568C0.634026 31.1355 0.400603 31.467 0.241308 31.8323C0.0820136 32.1976 0 32.5894 0 32.9851C0 33.3808 0.0820136 33.7726 0.241308 34.1379C0.400603 34.5031 0.634026 34.8347 0.928114 35.1133C1.2198 35.3943 1.56683 35.6173 1.94918 35.7695C2.33153 35.9217 2.74164 36 3.15585 36C3.57006 36 3.98017 35.9217 4.36252 35.7695C4.74488 35.6173 5.0919 35.3943 5.38359 35.1133L21.0719 20.1257C21.366 19.847 21.5994 19.5155 21.7587 19.1502C21.918 18.7849 22 18.3932 22 17.9974C22 17.6017 21.918 17.2099 21.7587 16.8447C21.5994 16.4794 21.366 16.1479 21.0719 15.8692Z" fill="#A19C97" />
                        </svg>
                    </div>
                </div>
                <div className='bg-[white] h-[900px] w-[900px] mt-[100px]'>
                    <img src={translogo} alt="" className='h-[500px] w-[300px] absolute right-0 top-[400px] ' />
                    <div className='flex flex-col align-left mt-10'>
                        <p className='text-[#002D4F] text-[30px] font-medium not-italic leading-[22px]'>Noritake</p>
                        <p className='text-[#002D4F] text-[40px] font-bold non-italic leading-[22px] mt-10'>Accompanist Dinner Plate Set</p>
                        <p className='text-[#002D4F] mt-10 text-[20px] font-normal leading-[22px]'>AED300.00  inc. VAT</p>
                        <p className='para mt-[60px] w-[693px]'>Accompanist is the epitome of simple elegance featuring a single gold rim on a lustrously glazed white bone china. Rich gold accents on the cup handle and other accessory pieces add a touch of distinction that gives the pattern a sophistication that will never go out of style. The simplicity of the pattern makes its own statement, and at the same time provides a backdrop for any table setting theme.</p>
                        <div className='flex gap-10 mt-[60px]' >
                            <div className="flex gap-10" style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)" }}>
                                <div className='bg-[#8D7C3B] w-[50px] rounded-l-[5px]' onClick={() => quantity != 1 ? setQuantity(quantity - 1) : null}>
                                    <AiOutlineMinus className='text-[white] text-[30px] mt-2 ml-2' />
                                </div>
                                <div className='flex items-center justify-center text-[black] text-[25px] leading-[29px]'>
                                    {quantity}
                                </div>
                                <div className='bg-[#8D7C3B] w-[50px] rounded-r-[5px]' onClick={() => setQuantity(quantity + 1)}>
                                    <AiOutlinePlus className='text-[white] text-[30px] mt-2 ml-2' />
                                </div>
                            </div>

                            <div className='bg-[#002D4F] rounded-[5px] w-[206px] h-[44px] text-[white] flex justify-center align-center items-center text-[20px] font-normal leading-[29px] non-italic'>
                                Add to Card
                            </div>
                            <div className='bg-[#A19C97] rounded-[5px] w-[206px] h-[44px] text-[#F5F5F5] flex justify-center align-center items-center text-[20px] font-normal leading-[29px] non-italic'>
                                Add to Gift Registry
                            </div>
                        </div>
                        <div className='flex detailsDiv justify-around w-[685px] mt-[40px] h-[160px]'>
                            <div className='flex flex-col ml-[2rem] mt-[1rem] '>
                                <p className='text-[black] text-[30px] font-normal leading-[29px]'>Details</p>
                                <ul className='text-[#58595B] text-[20px]'>
                                    <li className='flex items-center gap-2'>
                                        <BsFillCircleFill className='text-[#8D7C3B] text-[10px] mt-1' />
                                        Bone China
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <BsFillCircleFill className='text-[#8D7C3B] text-[10px] mt-1' />
                                        Measures: Ø28cm
                                    </li>
                                    <li className='flex items-center gap-2'>
                                        <BsFillCircleFill className='text-[#8D7C3B] text-[10px] mt-1' />
                                        Price Per Set of 4
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col mt-[1rem]'>
                                <p className='text-[#58595B] text-[30px] font-normal leading-[29px]'>Remarks</p>
                                <ul className='text-[#58595B] text-[20px]'>
                                    <li className='flex items-center gap-2'>
                                        <BsFillCircleFill className='text-[#8D7C3B] text-[10px] mt-1' />
                                        Dishwasher Safe</li>
                                </ul>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="122" height="19" viewBox="0 0 122 19" fill="none" className='mt-[30px]'>
                            <path d="M9.24242 0L11.3175 6.38636L18.0325 6.38636L12.5999 10.3333L14.675 16.7197L9.24242 12.7727L3.80986 16.7197L5.88492 10.3333L0.452356 6.38636L7.16737 6.38636L9.24242 0Z" fill="#8D7C3B" />
                            <path d="M35.1213 0L37.1964 6.38636L43.9114 6.38636L38.4788 10.3333L40.5539 16.7197L35.1213 12.7727L29.6888 16.7197L31.7638 10.3333L26.3313 6.38636L33.0463 6.38636L35.1213 0Z" fill="#8D7C3B" />
                            <path d="M61.0002 0L63.0753 6.38636L69.7903 6.38636L64.3577 10.3333L66.4328 16.7197L61.0002 12.7727L55.5677 16.7197L57.6427 10.3333L52.2102 6.38636L58.9252 6.38636L61.0002 0Z" fill="#8D7C3B" />
                            <path d="M86.8791 0L88.9542 6.38636L95.6692 6.38636L90.2367 10.3333L92.3117 16.7197L86.8791 12.7727L81.4466 16.7197L83.5216 10.3333L78.0891 6.38636L84.8041 6.38636L86.8791 0Z" fill="#8D7C3B" />
                            <path d="M112.758 0L114.833 6.38636L121.548 6.38636L116.116 10.3333L118.191 16.7197L112.758 12.7727L107.325 16.7197L109.401 10.3333L103.968 6.38636L110.683 6.38636L112.758 0Z" fill="#8D7C3B" />
                        </svg>
                        <div className='flex gap-10 mt-[27px]'>
                            <div className='reviewBtn flex items-center justify-center text-[18px] font-normal leading-[29px] non-italic'>
                                Add Review
                            </div>
                            <div className='reviewBtn flex items-center justify-center text-[18px] font-normal leading-[29px] non-italic'>
                                View All Reviews
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-[70px] ml-[50px]'>
                <div className='flex w-[475px] h-[155px] mt-20 items-center' style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)" }}>

                    <img src={Rectangle_161} alt="" className='h-[97px] w-[97px] ml-5' />
                    <div className='flex flex-col pt-3 ml-5'>
                        <p className='text-[#58595B] text-[30px] font-normal leading-[29px] non-italic'>More Dining</p>
                        <p className='text-[#002D4F] text-[20px] font-normal leading-[39px] non-italic'>Accompanist Dinner Plate</p>
                        <p className='text-[#002D4F] text-[20px] font-normal  non-italic'>Set</p>
                    </div>

                </div>
                <div className='flex w-[475px] h-[155px] mt-20 items-center' style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)" }}>

                    <img src={Rectangle_161} alt="" className='h-[97px] w-[97px] ml-5' />
                    <div className='flex flex-col pt-3 ml-5'>
                        <p className='text-[#58595B] text-[30px] font-normal leading-[29px] non-italic'>Explore Accompanist</p>
                        <p className='text-[#002D4F] text-[20px] font-normal leading-[39px] non-italic'>Accompanist Dinner Plate</p>
                        <p className='text-[#002D4F] text-[20px] font-normal  non-italic'>Set</p>
                    </div>

                </div>
                <div className='flex w-[475px] h-[155px] mt-20 items-center' style={{ boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.10)" }}>

                    <img src={three} alt="" className='h-[97px] w-[97px] ml-5' />
                    <div className='flex flex-col pt-3 ml-5'>
                        <p className='text-[#58595B] text-[30px] font-normal leading-[29px] non-italic'>Cigar Room</p>
                        <p className='text-[#002D4F] text-[20px] font-normal leading-[39px] non-italic'>Accompanist Dinner Plate</p>
                        <p className='text-[#002D4F] text-[20px] font-normal  non-italic'>Set</p>
                    </div>

                </div>
            </div>
            <div className='ml-[50px] mt-[100px] relative'>

                <p className='text-[#002D4F] text-[40px] leading-[53.76px] font-bold'>Similar Products</p>
                <div className="flex justify-center absolute top-[-20px] right-[220px] ">
                    <div
                        onClick={() => setCurrentPage(currentPage - 1)}
                       
                        // disabled={currentPage === 0}
                        className="mr-2 navigation"
                    >
                        ‹
                    </div>
                    <div
                        onClick={() => setCurrentPage(currentPage + 1)}
                        // onClick={handleNextPage}
                        // disabled={currentPage === totalPages - 1}
                        className='navigation'
                    >
                        ›
                    </div>
                </div>
                <hr className='py-10 mt-3' style={{ stroke: "1px" }} />
                <div className='flex gap-[70px]'>
                    {
                        similarProducts.slice(currentPage * 4, currentPage * 4 + 4).map((item) => (
                            <div className='flex flex-col'>
                                <img src={item.imageSrc} alt="" className='h-[338px] w-[338px] rounded-[5px]' />
                                <p className='text-[#002D4F] text-[20px] font-normal leading-[53.76px]'>{item.name}</p>
                                <hr className='border-[#F69785] mb-1  border-2' />
                                <p className='text-[#8D7C3B] text-[15px] font-normal '>{item.price}</p>
                            </div>
                        ))
                    }
                    {/* <div className='flex flex-col'>
                        <img src={greycup} alt="" className='h-[338px] w-[338px] rounded-[5px]' />
                        <p className='text-[#002D4F] text-[20px] font-normal leading-[53.76px]'>Accompanist Soup Plate Set</p>
                        <p className='text-[#8D7C3B] text-[15px] font-normal '>AED400.00 inc. VAT</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={greycup} alt="" className='h-[338px] w-[338px] rounded-[5px]' />
                        <p className='text-[#002D4F] text-[20px] font-normal leading-[53.76px]'>Accompanist Soup Plate Set</p>
                        <p className='text-[#8D7C3B] text-[15px] font-normal '>AED400.00 inc. VAT</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={greycup} alt="" className='h-[338px] w-[338px] rounded-[5px]' />
                        <p className='text-[#002D4F] text-[20px] font-normal leading-[53.76px]'>Accompanist Soup Plate Set</p>
                        <p className='text-[#8D7C3B] text-[15px] font-normal '>AED400.00 inc. VAT</p>
                    </div>
                    <div className='flex flex-col'>
                        <img src={greycup} alt="" className='h-[338px] w-[338px] rounded-[5px]' />
                        <p className='text-[#002D4F] text-[20px] font-normal leading-[53.76px]'>Accompanist Soup Plate Set</p>
                        <p className='text-[#8D7C3B] text-[15px] font-normal '>AED400.00 inc. VAT</p>
                    </div> */}
                </div>
            </div>
            <Footer />

        </div>

    )
}

export default AddtoCart;