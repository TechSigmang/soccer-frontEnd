import React from 'react'
import Footer from '../../../component/footer/Footer'
import Navbar from '../../../component/navbar/Navbar'
import Pageheader from '../../../component/page-header/Pageheader'
import Topbar from '../../../component/topbar/Topbar'

const Login = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    <div className="login">Login form here</div>
    <Footer />
    </>
  )
}

export default Login