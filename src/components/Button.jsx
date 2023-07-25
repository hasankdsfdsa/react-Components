import React from 'react'

function Button({text,type}) {
  return (
   <button className={`${type=="btnA" ? "font-semibold  py-[10px] px-[28px] bg-primary border-primary hover:bg-transparent " : type=="btnB" ? " font-semibold py-[25px] px-[91px] rounded-[10px] bg-black text-white hover:bg-transparent  hover:text-black border-black" : "font-normal py-[9px] px-[108px] border-black   hover:bg-black hover:text-white  rounded-[10px]"} font-pop text-2xl border ease-in duration-300  m-5 `}>{text}</button>
  )
}

export default Button