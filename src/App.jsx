import React from 'react'
import Navber from './Components/Navber'
import Hero from './Components/Hero'
import SecNav from './Components/SecNav'
import BlogLoad from './Components/BlogLoad'
import Foother from './Components/Foother'
const App = () => {
  return (
    <div className='bg-black/30'>
      <Navber/>
      <Hero/>
      <SecNav/>
      <BlogLoad/>
      <Foother/>
    </div>
  )
}

export default App
