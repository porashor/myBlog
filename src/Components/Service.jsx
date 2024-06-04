import React from 'react'
import Details from './Details'
import { details } from '../Data/text'
const Service = () => {
  return (
    <div className='text-black bg-white mt-[100px]'>
      <div className='w-[85%] mx-auto'>
        <Details head={`Service`} bigtext={details}/>
      </div>
    </div>
  )
}

export default Service
