import React from 'react'
import Footer from '../../component/footer/Footer'
import Navbar from '../../component/navbar/Navbar'
import Pageheader from '../../component/page-header/Pageheader'
import Topbar from '../../component/topbar/Topbar'

const About = () => {
  return (
    <>
        <Topbar />
        <Navbar />
        <Pageheader text={`About Us`} />
        <div className="abouts">
            About us goes here
        </div>
        <Footer />
    </>
  )
}

export default About