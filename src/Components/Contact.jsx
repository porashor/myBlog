import React from 'react'
import Button from './Button'
import Review from './Review'
import { InformationText } from '../Data/text'
import Details from './Details'

const Contact = () => {
  return (
    <div className='bg-white text-black mt-[200px]'>
      <div className='w-[85%] mx-auto grid gap-5 items-center'>
        <div>
            <h2 className='text-3xl font-semibold tracking-wider border-b border-neutral-400 py-5'>Contact With Us</h2>
            <div className='bg-[#0a022b] my-12 py-7 rounded-md w-[70%] mx-auto'>
                <div className='w-[85%] mx-auto grid items-center'>
                <input type="text"  className='outline-none text-white h-[35px] md:h-[50px] rounded-md px-3 bg-slate-500' placeholder='Enter your email'/>
                <label htmlFor="textarea" className='text-white py-4 text-lg '>Write your information</label>
                <textarea name="text" id="textarea" className='outline-none text-white h-[50px] md:h-[100px] rounded-md p-3 bg-slate-500'></textarea>
                <Button hover className={`text-white duration-500 hover:transition-all my-4 border border-neutral-500 hover:border-yellow-500`}>Submit here!</Button>
                </div>
            </div>
        </div>
        <Details bigtext={InformationText} head={`Information`}/>
      </div>
    <Review/>
    </div>
  )
}

export default Contact
