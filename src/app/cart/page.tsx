import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className=' h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-green-700'>
      {/* product container */}
      <div className='flex-1 h-1/2 p-4 flex flex-col justify-center overflow-scroll  lg:h-full lg:w-2/3 2xl:w-1/2 lg:p-20 xl:p-40'>
        {/* single item */}
        <div className="flex items-center justify-between m-4 ">
          <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold">Silician</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79.25</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        {/* single item */}
        <div className="flex items-center justify-between m-4  ">
          <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold">Silician</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79.25</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className="flex items-center justify-between m-4 ">
          <Image src="/temporary/p1.png" alt='' width={100} height={100}/>
          <div className="">
            <h1 className="uppercase text-xl font-bold">Silician</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$79.25</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      {/* payment container */}
      <div className=" h-1/2 p-4 bg-cyan-100 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between ">
          <span className=''>Subtotal (3 Items)</span>
          <span className=''>$81.56</span>
        </div>
        <div className="flex justify-between ">
          <span className=''>Service cost</span>
          <span className=''>$0.00</span>
        </div>
        <div className="flex justify-between ">
          <span className=''>Delivery Cost</span>
          <span className='text-red-700'>Free!</span>
        </div>
        <hr className='my-2'/>
        <div className="flex justify-between ">
          <span className=''>TOTAL(INCL. VAT)</span>
          <span className='font-bold'>$81.21</span>
        </div>
        <button className=' bg-green-800 text-white p-3 rounded-md w-1/2 self-end'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage
