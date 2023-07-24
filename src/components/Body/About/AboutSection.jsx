import React from 'react'
import Left from './Left'
import Right from './Right'

const AboutSection = () => {
  return (
    <div className='px-3 sm:px-5 md:px-10 lg:px-20  flex sm:flex-row flex-col gap-4 mt-3 sm:items-center'>
      <div className='sm:w-1/2 w-full'>
        <Left/>
        </div>
        <div className='sm:w-1/2 w-full'>
        <Right/>
        </div>
    </div>
  )
}

export default AboutSection