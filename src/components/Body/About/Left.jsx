import React from 'react'

const Left = () => {
    return (
        <>
            <div className='relative justify-center  h-full w-full mt-2'>
      <a className='anchor' id='about'></a>

                <img className='h-4/5 z-10' src='./background.png' />
                <div className='absolute top-20 overflow-hidden border-4 border-white bg-white border-spacing-2  rounded-md h-1/2 w-1/2 z-20'>
                    <img className='h-full w-full   rounded-md' src='./yellow.jpg' />
                </div>
                <div className='overflow-hidden absolute h-1/3 w-1/3 border-4 z-30 border-white bg-white border-spacing-2 rounded-md top-1/2 left-1/3 ' >
                    <img className='h-full w-full rounded-md object-cover' src='./human1.jpg' />
                </div>
                <div className='overflow-hidden absolute h-1/4 w-1/4 border-4 z-40 border-white  bg-white rounded-md top-1/3 left-2/4'>
                    <img className='h-full w-full rounded-md object-cover' src='./human2.jpg' />
                </div>
            </div>

        </>

    )
}

export default Left