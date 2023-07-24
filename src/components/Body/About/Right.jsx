import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {GrFormNext} from 'react-icons/gr'

const Right = () => {
  return (
    <div className='flex flex-col ms-1 sm:ms-4 gap-5 sm:gap-6'>
      <span className='flex flex-col'>
        <h1 className='text-3xl font-bold text-heading'>About Us</h1>
        <p className='text-lg text-textgrey '>Pet House & Animal clinic was established with
          moto to provide qualitative and affordable animal healthcare service to your doorstep.</p>
      </span>
      <span className='flex flex-col gap-3 '>
        <p className='text-base text-textgrey items-center flex flex-row gap-2'><AiOutlineCheckCircle className='text-button'/> Comprehensive</p>       
        <p className='text-base text-textgrey items-center flex flex-row gap-2'><AiOutlineCheckCircle className='text-button'/> Proffesionals</p>
        <p className='text-base text-textgrey items-center flex flex-row gap-2'><AiOutlineCheckCircle className='text-button'/> Compassionate veterinary service.</p>
      </span>
      <span className='' ><button className='flex flex-row py-1 px-2 bg-button gap-5 text-white text-base font-semibold rounded-2xl items-center'>Contact <GrFormNext className='bg-white text-button rounded-full text-base'/></button></span>
    </div>
  )
}

export default Right