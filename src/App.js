import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/about/About';
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';

import Contact from './pages/contact/Contact';
import Courses from './pages/course/Courses';
import Home from './pages/home/Home'
import Price from './pages/price/Price';



const App = () => {
  return (
    <div>
     <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="price" element={<Price />} />
        <Route path="course" element={<Courses />} />

         <Route path="auth">
            <Route index element={<Login />} />
            <Route path='signup' element={<Signup />} />
          
        </Route>
        
        {/* <Route path="staffs">
            <Route index element={<Staffs />} />
            <Route path=":staffId" element={<SingleStaff />} />
            <Route path="new" element={<NewStaff />} />
        </Route> */}

      
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App