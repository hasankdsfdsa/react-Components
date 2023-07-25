import React from 'react'

function Heading(props) {
  return (
   <props.as className = {`${props.type=="banner" ? " font-pop font-semibold ":"font-frank font-bold"} text-large w-[450px] m-5 ` }>{props.text}</props.as>
  )
}

export default Heading