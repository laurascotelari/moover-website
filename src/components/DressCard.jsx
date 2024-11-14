import React from 'react'
import SizeOption from './SizeOption'

const DressCard = ({imgURL, name, price, sizes, alt}) => {
  return (
    <div className='transition ease-in-out delay-400 flex flex-1 flex-col w-full p-3 bg-white rounded-lg hover:drop-shadow-2xl  hover:scale-110	max-sm:w-full'>
      <img 
        src={imgURL} alt={alt}
        className='w-[280px] h-[350px] rounded'
      />
      <h3 className='text-xl mt-3 font-montserrat font-semibold text-primary-darker'>{name}</h3>

      <div className='my-2 grid place-content-start lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-6 gap-14'>
        {sizes.map((size) => (
          <SizeOption sizeName={size}/>
        ))}
      </div>

      <p className='text-xl py-1 font-montserrat font-semibold'>R${price}</p>
    </div>
  )
}

export default DressCard