import React from 'react';


const Input = (props) => {
  return (
    <div>
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="w-[536px] h-[54px] shrink-0 rounded-[5px] bg-[#fff]"
        style={{
            boxShadow:" 0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
            color:"#A19C97",
            fontFamily:"PT Sans",
            fontSize:"20px",
            fontWeight:"400px",
            fontStyle:"normal",
            lineHeight:"80px",
            paddingLeft:props.paddingLeft,
        }}  />
    </div>
  )
}

export default Input;