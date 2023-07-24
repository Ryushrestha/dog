import React from 'react'
import Navinformation from './Navinformation'
import Navbar from './Navbar/Navbar'

const Navsection = () => {
  return (
    <div className='flex flex-col'>
      <div className='hidden md:flex'>
        <Navinformation/>
        </div>
        <Navbar/>
    </div>
  )
}

export default Navsection