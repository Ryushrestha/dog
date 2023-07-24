import React from 'react'
import LeftFooter from './LeftFooter'
import RightFooter from './RightFooter'
import {FaFacebookF,FaTwitter,FaInstagram,FaYoutube,FaLinkedinIn} from 'react-icons/fa'

const Footersection = () => {
  return (
    <div className='flex flex-col px-20 py-14 bg-footerbg mt-8'>
    <div className='flex flex-row     justify-between gap-6'>
      <span className='w-3/5'>
        <LeftFooter/>
        </span>
        <span className='w-2/5'>
        <RightFooter/>
        </span>
    </div>
      <hr className='my-3 mt-16'/>
      <div className='flex flex-row justify-between '>
        <span className='text-white'>
          <p>Copyright © 2023 City Pet House & Animal Clinic | All Rights Reserved</p>
        </span>
        <span className='flex flex-row gap-2'>
          <FaFacebookF className='text-footerbg bg-white rounded-md border-2 border-white text-lg'/>
          <FaTwitter className='text-footerbg bg-white rounded-md border-2 border-white text-lg'/>
          <FaInstagram className='text-footerbg bg-white rounded-md border-2 border-white text-lg'/>
          <FaYoutube className='text-footerbg bg-white rounded-md border-2 border-white text-lg'/>
          <FaLinkedinIn className='text-footerbg bg-white rounded-md border-2 border-white text-lg'/>
        </span>
      </div>
    </div>
  )
}

export default Footersection