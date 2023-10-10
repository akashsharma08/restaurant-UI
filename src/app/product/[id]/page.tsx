import Price from '@/components/Price'
import { singleProduct } from '@/data'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-green-500 md:flex-row md:gap-8 items-center'>
      {/* IMAGE CONTAINER */}
      {singleProduct.img && 
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image src={singleProduct.img} alt='' className='object-contain' fill />
        </div>
      }
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] justify-center md:gap-6 lg:gap-8">
        <h1 className='text-3xl font-bold uppercase xl:text-4xl'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price id={singleProduct.id} options={singleProduct.options} price={singleProduct.price}/>
      </div>
      
    </div>
  )
}

export default SingleProductPage
