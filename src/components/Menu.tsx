"use client";
import { AiOutlineMenuFold } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import React, { useState } from 'react'
import Link from 'next/link';
import CartIcon from './CartIcon';

const links = [
      { id: 1, title: "Homepage", url: "/" },
      { id: 2, title: "Menu", url: "/menu" },
      { id: 3, title: "Working Hours", url: "/" },
      { id: 4, title: "Contact", url: "/" }
]

const Menu = () => {
      const [open, setOpen] = useState(false);
      // Temporary
      const user = false;
  return (
    <div>
      { !open ? 
            <div className='cursor-pointer' onClick={() => setOpen(true)}><AiOutlineMenuFold/></div> 
            : 
            <div className='cursor-pointer' onClick={() => setOpen(false)}><GiCancel/></div> 
      }
      { open && (
            <div className='bg-green-700 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full z-10 flex gap-8 items-center justify-center flex-col'>
                  {links.map(item => (
                        <Link 
                              href={item.url} 
                              key={item.id}
                              onClick={() => setOpen(false)}
                        >{item.title}</Link>
                  ))}
                  
                  { !user ? 
                        <Link 
                              href="/login" 
                              onClick={() => setOpen(false)}
                        >Login</Link> 
                        : 
                        <Link 
                              href="/login"
                              onClick={() => setOpen(false)}
                        >Orders</Link> 
                  }
                  <Link 
                        href="/cart"
                        onClick={() => setOpen(false)}
                  ><CartIcon/></Link>
            </div>
      )}
    </div>
  )
}

export default Menu