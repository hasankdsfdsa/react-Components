import React from 'react'

function Counter({textA,textB}) {
  return (
    <>
      <div className='m-10'>
      <h2 className='text-large font-pod font-bold'>{textA}</h2>
      <p className='text-medium font-pop font-medium'>{textB}</p>
      </div>
    </>
  )
}

export default Counter