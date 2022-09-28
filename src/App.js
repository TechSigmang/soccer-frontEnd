import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { UserProfider } from './context/UserContext';
import About from './pages/about/About';
import AdminLogin from './pages/admin/auth/AdminLogin';
import Account from './pages/admin/pages/account/Account';
import PageSetting from './pages/admin/pages/account/PageSetting';
import Dashboard from './pages/admin/pages/dashboard/Dashboard';
import Login from './pages/auth/login/Login';
import Signup from './pages/auth/signup/Signup';

import Contact from './pages/contact/Contact';
import Courses from './pages/course/Courses';
import TrainerDashboard from './pages/dashboard/TrainerDashboard';
import Home from './pages/home/Home'
import Price from './pages/price/Price';



const App = () => {
  return (
    <UserProfider>
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
                  <Route path='dashboard' element={<TrainerDashboard />} />
                
              </Route>

              <Route path="admin">
                  <Route index element={<AdminLogin />} />
                  <Route path='my-account' element={<Account/>} />
                  <Route path='page-setting' element={<PageSetting/>} />
                  <Route path='dashboard' element={<Dashboard />} />
                
              </Route>
              
              {/* <Route path="staffs">
                  <Route index element={<Staffs />} />
                  <Route path=":staffId" element={<SingleStaff />} />
                  <Route path="new" element={<NewStaff />} />
              </Route> */}

            
            </Route>
          </Routes>
  </BrowserRouter>
  </UserProfider>
  )
}

export default App