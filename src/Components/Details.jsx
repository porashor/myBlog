import React from 'react'

const Details = ({bigtext, head}) => {
  return (
    <div>
        <h2 className='text-3xl font-semibold tracking-wider border-b border-neutral-400 py-5 mb-5'>{head}</h2>
        <div className='leading-10 tracking-widest my-14  text-justify'>{bigtext}
        </div>
    </div>
  )
}

export default Details
