import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Introduction from '../components/Introduction'
import Contacts from '../components/Contacts'
import TechStack from '../components/TechStack'
import Thanks from '../components/Thanks'

function Homepage() {
  return (
    <div>
        <Navbar/>
        <Introduction/>
        <TechStack/>
        <Contacts/>
        <Faq/>
        <Thanks/>
        <Footer/>
    </div>
  )
}
export default Homepage