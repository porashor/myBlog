import React from 'react'
import { useLocation } from 'react-router-dom'
import Details from './Details';
import { details } from '../Data/text'

const Post = () => {
    const {state} = useLocation();
    const {title, image, authorPic, published_date, category, author, reading_time, id, tags} = state
    console.log(image)
    console.log(state)
  return (
    <div className='my-[100px] w-[85%] mx-auto'>
        <div className='text-black'>
            <img src={image} alt="" className='w-[100%] h-cover mx-center' />
            <Details head={title} bigtext={details}/>
            <div className='text-2xl font-semibold'>Auther : {author}</div>
            <div>{published_date}</div>
            <div>{reading_time}</div>
            <div> all tages are given below----{tags.map((item, index)=>(
                <div key={index}>{item}</div>
            ))}</div>
        </div>
    </div>
  )
}

export default Post
