import React from 'react'
import Blogcard from './Blogcard'

const Blogsection = () => {
  return (
    <div className='px-3 sm:px-5 md:px-10 lg:px-20 flex flex-col gap-6 '>
      <a className='anchor' id='gallery'></a>
        <h1 className='text-heading text-3xl font-bold mx-auto'>Our Blogs</h1>

        <Blogcard/>
    </div>
  )
}

export default Blogsection