import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Thanks from '../components/Thanks'
import TechTalk from '../components/TechTalk'

function Blog() {
  return (
    <div>
        <Navbar/>
        <TechTalk/>
        <Thanks/>
        <Footer/>
    </div>
  )
}

export default Blog