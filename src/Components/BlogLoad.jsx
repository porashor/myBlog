import React from 'react'
import SideBlog from './sideBlog'
import Blog from './Blog'




const BlogLoad = ({children}) => {
    const list = [1,2,3,4,5,6,7,8,9,0,0,8,8,7,7]
  return (
    <div className='bg-white pt-1 text-black'>
        <div className='w-[85%] mx-auto my-10'>
            <div className='grid lg:grid-cols-[3fr_1fr] justify-start items-start gap-10'>
                <div>
                    <Blog/>
                </div>
                <div className=''>
                    <h1 className='capitalize my-4 text-xl tracking-wider'>latest blog</h1>
                    <div className='grid items-center'>
                        {
                            list.map((item, index)=>(
                                <div key={index}>
                                    <SideBlog/>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogLoad
