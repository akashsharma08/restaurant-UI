"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
      const [currentSlide, setCurrentSlide] = useState(0)
      // useEffect(() => {
      //       const interval = setInterval(
      //             () => {setCurrentSlide((prev) => prev === data.length-1 ? 0 : prev+1)
      //       },2000)
      //       return () => clearInterval(interval)
      // },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] gap-4 md:h-[calc(100vh-9rem)] lg:flex-row bg-green-100'>
      {/* TEXT CONTAINER */}
      <div className=' flex-1  flex items-center justify-center flex-col gap-8 font-bold  text-green-500'>
            <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl lg:text-7xl'>
                  {data[currentSlide].title}
            </h1>
            <button className='bg-green-500 text-white py-4 px-8'>Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className=' flex-1 w-full py-4  relative '>
            <Image src={data[currentSlide].image} alt="img" fill className='object-cover' />
      </div>

    </div>
  )
}

export default Slider