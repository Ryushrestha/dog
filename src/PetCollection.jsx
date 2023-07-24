import React, { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { getDogBreed } from './breeds/breeds.axios'
import { Product } from './context/CardContext'


const PetCollection = () => {
    const [breed,setBreed] = useState([])
    const router = useNavigate()

    const getBreed = async () =>{
        const result = await getDogBreed()
        const limit = result.slice(0,20)
        setBreed(limit)
    }
    useEffect(()=>{
        getBreed()
    },[])
    // console.log("breed", breed)
   
  
  const navigate = useNavigate()

    const {handleProduct} = useContext(Product)

    const viewCard =(e,breeds) =>{
        e.preventDefault()
        handleProduct(breeds)
        
        navigate('/products')


    }

  return (
    <div className='flex flex-row flex-wrap  justify-evenly'>
        {
            breed && breed.map((breeds,index)=>{
                return(
                    <div key={index} className='flex flex-col cursor-pointer w-1/4 md:w-1/5 m-2 md:m-3 lg:m-5 h-60 sm:h-64 md:h-72 lg:h-80  border border-zinc-300 overflow-hidden rounded-lg shadow-md p-2 ' onClick={(e)=>viewCard(e,breeds)}>
                        <span className='h-4/5 overflow-hidden'>
                        <img className='h-full w-full object-fill' src={breeds.image.url}/>
                        </span>
                        <span className='flex flex-col'>
                            <h3 className='text-heading text-sm md:text-base font-bold'>{breeds.name}</h3>
                            <span className='flex flex-col gap-2'>
                            <span className='flex flex-row gap-2 overflow-hidden'>
                                <p className='text-textgrey text-sm md:text-base'>Used For:</p>
                                <p className='text-footerbg text-sm md:text-base font-semibold line-clamp-1 truncate'>{breeds.breed_group}</p>
                                </span>
                                <span className='flex flex-row gap-2'>
                                <p className='text-textgrey text-sm md:text-base'>Life-span:</p>
                                <p className='text-footerbg text-sm md:text-base font-semibold truncate'>{breeds.life_span}</p>
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

export default PetCollection