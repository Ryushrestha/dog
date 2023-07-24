import React from 'react'
import Petcard from './Petcard'
import {GrFormNext} from 'react-icons/gr'

const Pet = () => {
    
  return (
    <div className='flex flex-col items-center px-3 sm:px-5 md:px-10 lg:px-20  mt-10 gap-3 md:gap-6'>
      <a className='anchor' id='breed'></a>
         <span className='flex flex-col items-center gap-4'>
        <h1 className='text-heading text-3xl font-bold' >Our Pet Collections</h1>      
        <p className='text-base text-textgrey'>"Bring joy to your home with a furry companion from our pet selection."</p>      
      </span>
      <Petcard/>
      <a href='/pet'><button className='flex flex-row py-1 ps-4 pe-2 bg-button gap-9 text-white text-lg font-semibold rounded-2xl items-center'>View All <GrFormNext className='bg-white text-button rounded-full text-lg'/></button></a>
      
    </div>
  )
}

export default Pet