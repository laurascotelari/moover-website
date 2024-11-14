import React from 'react'

const SizeOption = ({sizeName}) => {
  return (
    <div className='grid place-content-center w-[40px] h-[40px] rounded-full border-solid border-2 border-primary-darker'>
        <h1 className=' text-primary-darker font-montserrat font-semibold'>{sizeName}</h1>
    </div>
  )
}

export default SizeOption