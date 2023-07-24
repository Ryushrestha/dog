import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import {GrFormPrevious,GrFormNext} from 'react-icons/gr'




const Carousel = () => {
    
    const properties = {
        prevArrow: <button className='bg-white text-xl text-button  rounded-full ms-3 hover:bg-button' ><GrFormPrevious className='text-button' /></button>,
        nextArrow: <button  className='bg-white text-xl  text-button rounded-full me-3 hover:bg-button'><GrFormNext/></button>
    }
  
    return (
        <Slide className='w-auto '  {...properties}>
            <div className="" >
                <div className='relative  h-40 sm:h-60 md:h-96' >
                    <img className=''  src='./dog1.jpg'/>
                    
                    <span className='absolute top-6 mx-auto w-screen flex flex-col items-center'>
                        <p className='font-extrabold text-base sm:text-lg md:text-3xl'>We Provide the best care to our furry friends!</p>
                        <p className='font-semibold text-sm sm:text-base md:text-xl'>Top Quality Pet Product</p>
                        </span>
                </div>
            </div>
            <div className="">
                <div className='relative items-center flex justify-center h-40 sm:h-60 md:h-96'>
                <img src='./dog2.jpg'/>
                    <span className='absolute top-6 mx-auto w-screen flex flex-col items-center'>
                    <p className='font-extrabold text-base sm:text-lg md:text-3xl'>We Provide the best care to our furry friends!</p>
                        <p className='font-semibold text-sm sm:text-base  md:text-xl'>Top Quality Pet Product</p>
                    </span>
                </div>
            </div>
        </Slide>
    )
}

export default Carousel