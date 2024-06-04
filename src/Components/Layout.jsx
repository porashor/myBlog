import React from 'react'
import Navber from './Navber'
import Foother from './Foother'

const Layout = ({children}) => {
  return (
    <div className='w-full'>
      <Navber/>
      <div>
        {children}
      </div>
      <Foother/>
    </div>
  )
}

export default Layout
