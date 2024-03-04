import React, { useEffect } from 'react'
import Navbar from '../Home/Navbar'
import SitePage from './SitePage'
import Footer from '../Home/Footer'

const SiteHomePage = () => {
  useEffect(() => {
      window.scrollTo(0, 0); 
      document.title="Site Selection"
    },[])
  return (
    <div>
        <Navbar/>
        <SitePage/>
        <hr/>
        <Footer/>
    </div>
  )
}

export default SiteHomePage