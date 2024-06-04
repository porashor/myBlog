import React from 'react'
import Details from './Details'
import { AboutText, details } from '../Data/text'
const About = () => {
  return (
    <div className='text-black bg-white mt-[200px]'>
      <div className='w-[85%] mx-auto'>
        <Details bigtext={AboutText} head={`About`}/>
      </div>
    </div>
  )
}

export default About
