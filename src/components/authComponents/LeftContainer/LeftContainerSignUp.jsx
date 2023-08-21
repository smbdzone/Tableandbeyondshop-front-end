import React from 'react';
import tbs from "../../../assets/tbs.png";

const LeftContainerSignUp = (props) => {
  return (
    <div className='w-1/2 flex flex-col items-center mt-[50px] ml-[30px] pl-[200px]'>
        <img src={tbs} alt="" className='w-[387px] h-[51.163px]' />
        <img src={props.src} alt="" className='w-[562px] h-[387px] mt-[40px]'style={{
            scale:"0.8",
        }}/>
    </div>
  )
}

export default LeftContainerSignUp