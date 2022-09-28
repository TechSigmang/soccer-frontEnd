import {  FaSignInAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import  './adminlogin.scss'
import logo from "../../../images/logo/logo.png"

const AdminLogin = () => {
  return (
    <div className="admin-login">

        <div className='login-wrapper'>
            <div className="top">
            <Link to={`/`}>
            <img src={logo} alt="" />
            </Link>
            </div>
            <h2>Admin Login</h2>
        <div className="single-cell">
            <input type="text" name="" id=""  placeholder="Email Address"/>
        </div>

        <div className="single-cell">
            <input type="password" name="" id=""  placeholder="Password"/>
        </div>

        <div className="single-cell">
           <Link to={`/admin/dashboard`} className="btnLink">
                {/* <button><FaSignInAlt />&nbsp; Login</button> */}
                <FaSignInAlt />&nbsp; Login
           </Link>
        </div>

        <div className="single-cell">
           <span>Forget Password?</span>
        </div>

        </div>
    </div>
  )
}

export default AdminLogin