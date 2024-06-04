import React from 'react'
import Button from './Button'
import { footherLinks } from '../Data/fandamental'
import { RiTwitterLine } from 'react-icons/ri'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
const Foother = () => {
  return (
    <div className='py-20 bg-[#0a022b] text-white'>
      <div className='w-[85%] mx-auto'>
        <div className='grid lg:grid-cols-[7fr_3fr] gap-4 border-b border-neutral-700 pb-4'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 items-start justify-start xl:border-r border-neutral-700'>
                {
                    footherLinks.map((item, index)=>(
                        <div key={index}>
                            <div className='text-xl font-semibold pb-4 tracking-wide'>{item.header}</div>
                            <div>{
                                item.links.map((item, index)=>(
                                    <div className='text-sm pb-1 text-neutral-400 tracking-wide cursor-pointer' key={index}>{item}</div>
                                ))
                                }</div>
                        </div>
                    ))
                }
            </div>
            <div className='grid items-center gap-4'>
                <h1 className='text-xl font-semibold tracking-wide'>Subscribe for updates</h1>
                <div className='grid xl:grid-cols-[7fr_3fr] items-center'>
                    <input type="email" className="w-full h-12 rounded-md outline-none text-black p-2 my-1 text-xl" placeholder='enter your email'/>
                    <Button hover className={`border mx-2 h-[50px] hover:border-yellow-700`}>Subscribe</Button>
                </div>
                <div className='text-sm text-neutral-400 tracking-wide leading-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur alias deserunt vel in itaque, accusantium voluptate veniam maxime harum rerum voluptates illum! Ratione earum alias nesciunt quo tenetur odit.
                </div>
            </div>
        </div>
        <div className='flex justify-between items-center py-4'>
            <div className='text-md text-neutral-400'>@ Copyright 2024| All right reserved by Parashar</div>
            <div className='flex gap-4 text-3xl text-neutral-400 '>
                <RiTwitterLine className='hover:text-white cursor-pointer' href='#'/>
                <FaInstagram className='hover:text-white cursor-pointer' href='#'/>
                <FaFacebook className='hover:text-white cursor-pointer' href='#'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Foother
