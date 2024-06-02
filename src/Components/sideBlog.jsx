import React from 'react'
import Button from './Button'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'
const SideBlog = () => {
  return (
    <div className='text-md my-4 border-b border-neutral-400 text-neutral-500 tracking-wide'>
      <p className='text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis odit veritatis harum aperiam modi animi reprehenderit quod praesentium qui eligendi? Eaque cupiditate odit repellat asperiores qui, enim quis inventore id.
      </p>
      <button className='py-3 text-black hover:underline flex items-center gap-2'>Read more <BiArrowToRight/></button>
    </div>
  )
}

export default SideBlog
