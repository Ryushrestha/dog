import React from 'react'

const LeftFooter = () => {
  return (
    <div className='flex flex-row text-white justify-between h-full'>
        <span className='flex flex-col gap-8 my-auto'>
            <img  className='h-10 w-auto' src='./wLogo.png'/>
            <span className='flex flex-col gap-4'>
                <span>
                    <h1 className='text-footergrey' >Phone Number:</h1>
                    <p>+977-9861859764</p>
                </span>
                <span>
                    <h1 className='text-footergrey' >Location:</h1>
                    <p>Tahachal-Kathmandu</p>
                </span>
            </span>
        </span>
        <div className='w-1/2 md:flex hidden'>
            <p>"City Pet House & Animal Clinic: Quality and affordable animal care at your doorstep. Comprehensive, professional, and compassionate veterinary services by our dedicated and experienced team."</p>
        </div>
        <span className='gap-6 flex flex-col'>
            <h1 className='font-semibold'>Menu</h1>
            <span className='flex flex-col gap-2'>
            <a href='#home' className=' hover:underline'>Home</a>
          <a href='#about' className=' hover:underline'>About</a>
          <a href='#service' className=' hover:underline'>Services</a>
          <a href='#breed' className=' hover:underline'>Breed</a>
          <a href='#shop' className='hover:underline'>Shop</a>
          <a href='#gallery' className='hover:underline'>Gallery</a>
            </span>
        </span>
    </div>
  )
}

export default LeftFooter