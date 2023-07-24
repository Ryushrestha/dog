import React from 'react'

const RightFooter = () => {
  return (
    <div className='flex flex-row text-white justify-end'>
       
        <span className='flex flex-col gap-8'>
            <h1 className='font-semibold'>Gallery</h1>
            <span className='grid grid-cols-2 gap-4'>
                    <img className='h-16' src='./gallery1.png'/>
                    <img className='h-16' src='./gallery2.png'/>
                    <img className='h-16' src='./gallery3.png'/>
                    <img className='h-16' src='./gallery4.png'/>

            </span>
        </span>
    </div>
  )
}

export default RightFooter