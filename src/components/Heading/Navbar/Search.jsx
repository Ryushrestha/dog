import React from 'react'
import {BiSearch} from 'react-icons/bi'

const Search = () => {
  return (
    <div className='border border-button rounded-2xl flex flex-row py-0 md:py-1 items-center'>
      <input className='relative px-2 rounded-2xl ' placeholder='Search......'/>
      <BiSearch className='text-white bg-button rounded-full items-center md:text-2xl p-1 me-2'/>
    </div>
  )
}

export default Search