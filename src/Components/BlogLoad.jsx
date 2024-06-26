import React from 'react'
import SideBlog from './sideBlog'
import Blog from './Blog'

import Fat from './Fat'


const BlogLoad = () => {
    const list = [1,2,3,4]
  return (
    <div className='bg-white pt-1 text-black pb-5'>
        <div className='w-[85%] mx-auto my-10'>
            <div className='grid lg:grid-cols-[3fr_1fr] justify-start items-start gap-10'>
                <div>
                    <Blog/>
                </div>
                <div className=''>
                    <h1 className='capitalize my-4 text-xl tracking-wider'>latest blog</h1>
                    <div className='grid items-center'>
                        {
                            list.map((item, index)=>{
                                return (
                                    <div key={index}>
                                        <SideBlog/>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    <h1 className='capitalize my-4 text-xl tracking-wider'>following blog</h1>
                    <div className='grid items-center'>
                        {
                            list.map((item, index)=>{
                                return (
                                    <div key={index}>
                                        <SideBlog/>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogLoad
