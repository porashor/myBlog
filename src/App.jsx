import React, { useState } from 'react'
import Navber from './Components/Navber'
import Hero from './Components/Hero'
import SecNav from './Components/SecNav'
import BlogLoad from './Components/BlogLoad'
import Foother from './Components/Foother'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout'
import Contact from './Components/Contact'
import About from './Components/About'
import Service from './Components/Service'
import Login from './Components/Login'
import Signin from './Components/Signin'


export function Home(){
  


  return (
    <div>
      <Hero/>
      <BlogLoad/>
    </div>
  )
}

//this is new









//-----------
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/blog' Component={BlogLoad}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/about' Component={About}/>
          <Route path='/service' Component={Service}/>
          <Route path='/login' Component={Login}/>
          <Route path='/signin' Component={Signin}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
