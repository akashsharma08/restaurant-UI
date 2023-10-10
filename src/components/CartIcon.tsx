"use client";
import Link from 'next/link'
import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

const CartIcon = () => {
  return (
    <Link href="/cart" className='flex items-center'>
      <div className='relative text-2xl p-1'>
            <AiOutlineShoppingCart/>
      </div>
      <span>Cart (3)</span>
    </Link>
  )
}

export default CartIcon