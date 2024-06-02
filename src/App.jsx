import React from 'react'
import Navber from './Components/Navber'
import Hero from './Components/Hero'
import SecNav from './Components/SecNav'
import BlogLoad from './Components/BlogLoad'
const App = () => {
  return (
    <div className='bg-black/30'>
      <Navber/>
      <Hero/>
      <SecNav/>
      <BlogLoad>new</BlogLoad>
    </div>
  )
}

export default App
