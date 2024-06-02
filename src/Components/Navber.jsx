import React, { useState } from 'react'
import { navigation } from '../Data/fandamental'
import Button from './Button'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { BiMenu } from 'react-icons/bi'

const Navber = () => {
    const [show, setShow] = useState(false);
    const handle = ()=>{
        if (show){
            setShow(false)
        }else{
            setShow(true)
        }
    }
  return (
    <div className='fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-md text-white grid items-center'>
        <div className='w-[90%] mx-auto flex  lg:grid lg:grid-cols-[2fr_7fr_2fr] justify-between items-center py-6'>
            <div className='text-3xl md:text-4xl lg:text-5xl font-semibold'>
                Blog<span className='gradient text-transparent bg-clip-text'>M</span>
            </div>
            <div className='hidden lg:flex items-center justify-center gap-4'>
                {navigation.map((item,index)=>(
                    <div key={index}>
                        <a className='text-2xl hover:text-yellow-600 duration-200 font-semibold' href={item.href}>
                            {item.name}
                        </a>
                    </div>
                ))}
            </div>
            <div className='hidden lg:flex justify-between items-center'>
                <div className='flex gap-5 justify-end items-center text-xl'>
                    <FaFacebook className='hover:text-yellow-800'/>
                    <FaInstagram className='hover:text-yellow-800'/>
                    <FaLinkedin className='hover:text-yellow-800'/>
                </div>
                <Button hover className={`border border-neutral-500  hover:border-yellow-800`}>
                    Log In
                </Button>
            </div>
            <div onClick={handle} className='block lg:hidden '>
                {
                    show ? <div><FaX/></div> : <div><BiMenu/></div>
                }
            </div>
        </div>
    </div>
  )
}

export default Navber
