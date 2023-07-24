import React, { useState } from 'react'
import Search from './Search'
import { FaShoppingCart } from 'react-icons/fa'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleOpen = () => {
    setNav(!nav)
  }


  const activeLink = 'text-button underline flex flex-row gap-9 font-semibold text-base'
  return (
    <div className='h-10 md:h-15 lg:h-24 px-3 sm:px-5  md:px-10 lg:px-20 py-5 lg:py-0 flex flex-row items-center justify-between my-4 md:my-0'>
      <div className='flex flex-row gap-6 items-center'>
        <span>
          <img className='h-6 md:h-8 lg:h-11 w-auto' src='./logo.png' />
        </span>
        <div className='hidden lg:flex flex-row gap-9 font-semibold text-base'>
          <a href='/' className='hover:text-button hover:underline'>Home</a>
          <a href='#about' className='hover:text-button hover:underline'>About</a>
          <a href='#service' className='hover:text-button hover:underline'>Services</a>
          <a href='#breed' className='hover:text-button hover:underline'>Breed</a>
          <a href='#shop' className='hover:text-button hover:underline'>Shop</a>
          <a href='#gallery' className='hover:text-button hover:underline'>Gallery</a>
        </div>


      </div>
      <div className='flex flex-row gap-2 md:gap-4 lg:gap-6'>
        <Search />
        <span className='border hidden  border-button rounded-md sm:flex flex-row gap-2 items-center p-2'>
          <FaShoppingCart className='text-button' />
          <p>2 Items</p>
        </span>
      </div>

      <div className='relative flex lg:hidden cursor-pointer'>
        <button  onClick={handleOpen}>{!nav ?
          (<BiMenuAltRight className='text-button text-lg' />) : (<AiOutlineClose className='text-button text-lg' />)
        }   </button>

        <div className={!nav ? 'hidden' : 'absolute top-0 right-5 w-32 rounded-md shadow-md flex flex-col gap-4 px-8 items-center py-6 bg-white text-black z-40  lg:hidden'}>
        <a href='/'>Home</a>
          <a href='#about'>About</a>
          <a href='#service'>Services</a>
          <a href='#breed'>Breed</a>
          <a href='#shop'>Shop</a>
          <a href='#gallery'>Gallery</a>

        </div>
      </div>
    </div>
  )
}

export default Navbar