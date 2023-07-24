import React from 'react'
import jsonData from './data.json'

const ServiceCard = () => {
    const serviceData = jsonData.services
  return (
    <div className='flex flex-wrap justify-between  '>
        {serviceData && serviceData.map((data,index)=>{
            return(
                <div key={index} className='flex flex-col w-1/4 m-3 sm:m-5 h-62 sm:h-80 md:h-96 lg:h-96 rounded-md overflow-hidden border border-zinc-300 shadow-md gap-3 lg:gap-6 pb-10' >
                        <img className='w-full h-1/2 ' src={data.images}/>
                        <span className='flex flex-col px-2 lg:px-3 gap-1 lg:gap-4'>
                            <h1 className='text-heading text-base md:text-lg font-bold'>{data.service}</h1>
                            <h1 className='text-textgrey text-sm md:text-base  line-clamp-3 md:line-clamp-4'>{data.Description}</h1>
                        </span>
                        <span className='items-center mx-auto'>
                        <button className='bg-heading text-white font-semibold py-1 sm:text-sm md:text-base rounded-md px-1 md:px-2'>View More</button>
                        </span>
                 </div>   
            )
        })}
    </div>
  )
}

export default ServiceCard