import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon';
import {AiTwotonePhone} from 'react-icons/ai'
import Call from './Call';

const Navbar = () => {
  const user = false;
  
  
  return (
    <div className='h-12 md:h-24 lg:px-20 xl:px-40 text-green-500 p-4 flex items-center justify-between border-b-2 border-b-green-500 '>
      {/* Left Links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/orders">Orders</Link>
      </div>

      {/* Logo */}
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="#">
          FooDiMo
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className='text-2xl md:hidden'>
        <Menu/>
      </div>

      {/* Right Links */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className=' md:absolute top-3 r-2 lg:static  flex items-center gap-2 px-1 rounded-md cursor-pointer text-white bg-green-600 shadow shadow-black'>
          <AiTwotonePhone/>
          <Call/>
        </div>
        { !user ? (<Link href="/login">Login</Link>) : (<Link href="/menu">Orders</Link>) }
        <CartIcon/>
      </div>

    </div>
  )
}

export default Navbar