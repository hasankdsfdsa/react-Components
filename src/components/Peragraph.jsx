import React from 'react'

function Peragraph({text,type}) {
  return (
    <p className={`${type == "textA" ? "font-pop font-normal text-small w-[510px]" : type == "textB" ? "font-pop font-semibold text-2xl w-[434px]" : "font-frank font-bold text-2xl w-[437px]" } m-5`}>{text}</p>
  )
}

export default Peragraph