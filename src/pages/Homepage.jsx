import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import PatternHex from '../components/PatternHex'
import Newsletter from '../components/Newsletter'
import Introduction from '../components/Introduction'
import Contacts from '../components/Contacts'
import TechStack from '../components/TechStack'

function Homepage() {
  return (
    <div style={{fontFamily:"Nunito"}}>
        <Navbar/>
        <Introduction/>
        <TechStack/>
        <Contacts/>
        <PatternHex/>
        <Faq/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
export default Homepage