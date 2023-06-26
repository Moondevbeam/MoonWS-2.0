import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Thanks from '../components/Thanks'
import TechTalk from '../components/TechTalk'

function Blog() {
  return (
    <div>
        <Navbar/>
        <Introduction/>
        <TechTalk/>
        <Thanks/>
        <Footer/>
    </div>
  )
}

export default Blog