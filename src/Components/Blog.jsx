import React from 'react'
import { company } from '../Data/fandamental'
import BlogCard from './BlogCard'
const Blog = () => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
            company.map((item, index)=>(
                <BlogCard key={index} {...item}/>
            ))
        }
    </div>
  )
}

export default Blog
