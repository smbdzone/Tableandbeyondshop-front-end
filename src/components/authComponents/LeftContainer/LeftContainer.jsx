import React from 'react';
import tbs from "../../../assets/tbs.png";

const LeftContainer = (props) => {
  return (
    <div className='w-1/2 flex flex-col items-center mt-[50px]  pl-[100px]'>
        <img src={tbs} alt="" className='w-[387px] h-[51.163px]' />
        <img src={props.src} alt="" className='w-[562px] h-[387px] mt-[40px]'style={{
            scale:"0.8",
        }}/>
    </div>
  )
}

export default LeftContainer;