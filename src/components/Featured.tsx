import { featuredProducts } from '@/data'
import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-green-500'>
      {/* Wrapper text */}
      <div className="w-max flex ">
        {/* Single Item */}
        {featuredProducts.map((item) =>(
          <div key={item.id}  className="w-screen md:w-[50vw] xl:w-[33vw] xl:h-[90vh] h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-green-100 transition-all duration-300">
            {/* Image container */}
            {item.img && <div className="relative flex-1 w-full hover:rotate-[60deg] duration-700 ">
              <Image src={item.img} alt="img" fill className='object-contain' />
            </div>}
            {/* Text container */}
            <div className="flex-1 flex flex-col gap-4 text-center items-center justify-center">
              <h1 className="text-xl font-font uppercase xl:text-2xl 2xl:text-3xl ">{item.title}</h1>
              <p>{item.desc}</p>
              <span className='text-xl font-bold'>{item.price}</span>
              <button className='bg-green-500 text-white p-2 rounded-md'>Add to cart</button>
            </div>

          </div>))
        }
      </div>
    </div>
  )
}

export default Featured