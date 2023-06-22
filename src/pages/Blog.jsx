import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Introduction from '../components/Introduction'

function Blog() {
  return (
    <div>
        <Navbar/>
        <Introduction/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Blog