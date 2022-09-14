import  './login.scss'
import { FaFacebook, FaTwitter, FaGoogle, FaApple} from 'react-icons/fa'
import Footer from '../../../component/footer/Footer'
import Navbar from '../../../component/navbar/Navbar'
import Pageheader from '../../../component/page-header/Pageheader'
import Topbar from '../../../component/topbar/Topbar'
import login from "../../../images/auth/signup.jpg"

const Login = () => {
  return (
    <>
    <Topbar />
    <Navbar />
    <div className="login">

    <div className="login-left">
        <img src={login} alt="" />
    </div>
    <div className="login-right">
      <h2>Sign-in</h2>
      <p>Complete the form below. </p>
      

      <div className="single-cell">
        <input type="text" name="" id=""  placeholder="Email Address"/>
      </div>

      <div className="single-cell">
        <input type="password" name="" id=""  placeholder="Password"/>
      </div>



      <button> Login </button>

<div className="alternative">OR</div>
<hr />

<div className="double-cell">
        <button className="social-btn"><FaGoogle /> With Google</button>
        <button className="social-btn"> <FaFacebook/> With Facebook</button>
      </div>
      <div className="double-cell">
        <button className="social-btn"><FaTwitter /> With Twitter</button>
        <button className="social-btn"><FaApple /> With Apple</button>
      </div>

    </div>
    </div>
    <Footer />
    </>
  )
}

export default Login