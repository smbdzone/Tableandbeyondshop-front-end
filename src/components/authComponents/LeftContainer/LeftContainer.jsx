import React from 'react';
import tbs from "../../../assets/tbs.png";

const LeftContainer = (props) => {
  return (
    <div className='w-1/2 flex flex-col items-center'>
        <img src={tbs} alt="" className='w-[387px] h-[51.163px]' />
        <img src={props.src} alt="" className='h-[362px] h-[527px]' style={{
            scale:"0.8",
        }}/>
    </div>
  )
}

export default LeftContainer;