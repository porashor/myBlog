import React from 'react'
import auth from "../assets/user-01.png"

const BlogCard = ({title, image, authorPic, published_date, category, author, reading_time}) => {
  return (
    <div className='w-full h-fit hover:shadow-xl p-4 border border-neutral-300 rounded-md grid items-center justify-start gap-2'>
      <img src={image} className='cover overflow-hidden' alt="img" />
      <p>
        {title}
      </p>
      <div className='flex justify-start items-center gap-3'>
        <img className='h-[25px]' src={auth} alt="aut" />
        <div >{author}</div>
      </div>
      <div className='flex justify-between items-center'>
      <div>{reading_time}</div>
      <div>{published_date}</div>
      </div>
    </div>
  )
}

export default BlogCard
