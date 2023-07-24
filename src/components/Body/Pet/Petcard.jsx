import React, { useEffect, useState } from 'react'
import { getDogCategories } from '../../../breeds/breeds.axios'

const Petcard = () => {
    const [breed,setBreed] = useState([])

    const getBreed = async () =>{
        const result = await getDogCategories()
        const limit = result.slice(0,8)
        setBreed(limit)
    }
    useEffect(()=>{
        getBreed()
    },[])
    console.log("breed", breed)

  return (
    <div className='flex flex-row flex-wrap  justify-evenly'>
        {
            breed && breed.map((breeds,index)=>{
                return(
                    <div key={index} className='flex flex-col w-1/4 md:w-1/5 m-2 md:m-3 lg:m-5 h-60 sm:h-64 md:h-72 lg:h-80  border border-zinc-300 overflow-hidden rounded-lg shadow-md p-2 '>
                        <span className='h-4/5 overflow-hidden'>
                        <img className='h-full w-full object-fill' src={breeds.img}/>
                        </span>
                        <span className='flex flex-col'>
                            <h3 className='text-heading text-sm md:text-base font-bold'>{breeds.breed}</h3>
                            <span className='flex flex-col gap-2'>
                            <span className='flex flex-row gap-2 overflow-hidden'>
                                <p className='text-textgrey text-sm md:text-base'>Coat:</p>
                                <p className='text-footerbg text-sm md:text-base font-semibold line-clamp-1 truncate'>{breeds.meta.coat}</p>
                                </span>
                                <span className='flex flex-row gap-2'>
                                <p className='text-textgrey text-sm md:text-base'>Origin:</p>
                                <p className='text-footerbg text-sm md:text-base font-semibold truncate'>{breeds.origin}</p>
                                </span>
                                </span>
                               
                               
                            
                        </span>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Petcard