import React from 'react'
import Button from './Button'
import { PiArrowArcRight } from 'react-icons/pi'
import { BiArrowToRight } from 'react-icons/bi'

const Hero = () => {
  return (
    <div className='bg-black pt-40 font-poppins'>
      <div className='grid items-center h-[480px] -space-y-8 gap-0 justify-center w-[85%] mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl lg:text-6xl tracking-widest font-bold'>
            Let's Blog Together
        </h2>
        <p className='w-[75%] grid mx-auto tracking-wide '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quae error inventore aliquid quasi libero iste? Cupiditate officiis necessitatibus numquam mceat labore neque minus expedita consequatur molestiae asperiores magnam excepturi deserunt illum. Perferendis quia eaque eius possimus sed sunt repudiandae?
        </p>
        <div className='flex justify-center'>
        <Button hover  className={` flex justify-center `}>
            <div className='flex justify-center items-center gap-2'>
            Learn more <BiArrowToRight/>
            </div>
        </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
