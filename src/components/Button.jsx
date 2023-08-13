import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='w-[536px] h-[54px] shrink-0 rounded-[5px] bg-[#002D4F]' style={{
            boxShadow:" 0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
            color:"#fff",
            fontFamily:"PT Sans",
            fontSize:"30px",
            fontWeight:"400px",
            fontStyle:"normal",
            lineHeight:"30px",
        }}>
            {props.text}
        </button>
    </div>
  )
}

export default Button;