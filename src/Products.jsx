import React, { useContext } from 'react'
import { Product } from './context/CardContext'

const Products = () => {
    let {product} =useContext(Product)
    console.log("product",product)
  return (
<div className='w-1/2 mx-auto flex flex-row border border-zinc-400  my-5 shadow-lg rounded-md p-2'>
    <span className='w-1/2 '>
      <img className='w-full rounded-md' src={product.image.url}/>
    </span>
    <span className='px-5 py-5 flex flex-col gap-5 align-middle'>
      <span className='flex flex-col gap-2'>
        <h1 className='text-2xl text-heading font-bold'>{product.name}</h1>
        <h1 className='text-base text-textgrey font-semibold'>{product.bred_for}</h1>
        </span>
        <span className='flex flex-col gap-3'>
          <span className='flex flex-row gap-2'>
          <p className='font-semibold text-base text-bold '>Life Expectancy :</p>
          <p>{product.life_span}</p>
          </span>
          <span className='flex flex-row gap-2'>
          <p className='font-semibold text-base text-bold '>Height :</p>
          <p>{product.height.metric} inch</p>
          </span>
          <span className='flex flex-row gap-2'>
          <p className='font-semibold text-base text-bold '>Weight :</p>
          <p>{product.weight.metric}</p>
          </span>
        </span>
       
        <span className='flex flex-row gap-2'>
          <p className='font-semibold text-base text-bold '>Behavior </p>
          <p >{product.temperament}</p>
          </span>
        
    </span>
</div>
  )
}

export default Products