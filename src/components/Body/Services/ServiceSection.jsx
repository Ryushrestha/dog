import React from 'react'

import ServiceCard from './ServiceCard'

const ServiceSection = () => {
  return (
    <div className='flex flex-col items-center px-3 sm:px-5 md:px-10 lg:px-20 mt-4 gap-6'>
      <a className='anchor' id='service'></a>

      <span className='flex flex-col items-center gap-4'>
        <h1 className='text-heading text-3xl font-bold' >Our Services</h1>
        <span className='items-center flex flex-col '>
        <p className='text-base text-textgrey'>We provide a wide range of products & services for pets such as food, toys, grooming supplies, and veterinary care.</p>
        <p className='text-base text-textgrey'>We aim to meet the needs of pet owners and ensure the health and happiness of their furry friends</p>
        </span>
      </span>
      
      <ServiceCard/>
    </div>
  )
}

export default ServiceSection