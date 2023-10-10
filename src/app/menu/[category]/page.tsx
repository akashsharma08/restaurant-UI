import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-green-500 '>
      {pizzas.map(item => (
        <Link key={item.id} className='w-full group h-[60vh] border-r-2 border-b-2 flex flex-col justify-between border-green-500 p-4 sm:w-1/2 lg:w-1/3 even:bg-green-100' href={`/product/${item.id}`}>
          {/* Image container */}
          {item.img && (
            <div className='relative h-[80%]'>
              <Image src={item.img} className='object-contain' alt='img' fill/>
            </div>
          )}
          <div className="flex items-center justify-between font-bold  ">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl ">`${item.price}`</h2>
            <button className=' hidden group-hover:block uppercase rounded:md text-white bg-green-500 p-2'>Add to cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
