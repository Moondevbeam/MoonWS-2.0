import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Thanks from '../components/Thanks'
import MainContent from '../components/MainContent'

function Blog() {
  return (
    <div>
        <Navbar/>
        <Introduction/>
        <MainContent/>
        <Thanks/>
        <Footer/>
    </div>
  )
}

export default Blog