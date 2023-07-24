import React from 'react'
import jsonData from '../Services/data.json'
const Blogcard = () => {
    const blog = jsonData.blogs
  return (
    <div  className='flex flex-row gap-3 md:gap-6 justify-between'>
        {blog && blog.map((blog,index)=>{
            return(
                <div className='w-1/3 gap-5 flex flex-col' key={index}>
                    <img className='w-full h-2/3' src={blog.images}/>
                    <span className='flex flex-col gap-4'>
                        <p className='text-heading font-bold text-base truncate'>{blog.name}</p>
                    <p className='text-textgrey text-sm line-clamp-3'>{blog.description}</p>
                       
                    </span>
                   <span className='flex align-bottom items-baseline'>
                     <button className='bg-heading text-white font-semibold py-1 rounded-md px-2 '>View More</button>
                     </span>
                </div>
            )
        })}
    </div>
  )
}

export default Blogcard