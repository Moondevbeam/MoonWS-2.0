import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Introduction from '../components/Introduction'
import Thanks from '../components/Thanks'

function Blog() {
  return (
    <div>
        <Navbar/>
        <Introduction/>
        <Thanks/>
        <Footer/>
    </div>
  )
}

export default Blog