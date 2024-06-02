import React from 'react'
import { pageLinks } from '../Data/fandamental'

const SecNav = () => {
  return (
    <div className='bg-white'>
        <div className='w-[85%] mx-auto border-b border-neutral-500'>
        <ul className='flex text-black items-center h-[80px] justify-center gap-10 text-2xl tracking-widest'>
            {
                pageLinks.map((item, index)=>(
                    <li key={index}>
                        <a href={item.href}>
                            {item.name}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
    </div>
  )
}

export default SecNav
