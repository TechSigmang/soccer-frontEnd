import { useContext } from "react";
import "./signup.scss";
import { FaFacebook, FaTwitter, FaGoogle, FaApple } from "react-icons/fa";
import Footer from "../../../component/footer/Footer";
import Navbar from "../../../component/navbar/Navbar";
import Topbar from "../../../component/topbar/Topbar";
import Pageheader from "../../../component/page-header/Pageheader";
import signup from "../../../images/auth/signup.jpg";
import UserContext from "../../../context/UserContext";

const Signup = () => {
  const { user } = useContext(UserContext)
  console.log(user);
  return (
    <>
      <Topbar />
      <Navbar />
      <Pageheader
        text={`Signup`}
        desc={`Register to become a member, and have the benefit`}
      />
      <div className="signup">
        <div className="signup-left">
          <img src={signup} alt="" />
        </div>
        <div className="signup-right">
          <h2>Create Account</h2>
          <p>Complete the form below. </p>
          <div className="double-cell">
            <input type="text" name="" id="" placeholder="First Name" />

            <input type="text" name="" id="" placeholder="Last Name" />
          </div>

          <div className="single-cell">
            <input type="text" name="" id="" placeholder="Email Address" />
          </div>

          <div className="double-cell">
            <input
              type="password"
              name=""
              id=""
              placeholder="Create Password"
            />

            <input
              type="password"
              name=""
              id=""
              placeholder="Retype Passowrd"
            />
          </div>

          <button> Continue </button>

          <div className="alternative">OR</div>
          <hr />

          <div className="double-cell">
            <button className="social-btn">
              <FaGoogle /> With Google
            </button>
            <button className="social-btn">
              {" "}
              <FaFacebook /> With Facebook
            </button>
          </div>
          <div className="double-cell">
            <button className="social-btn">
              <FaTwitter /> With Twitter
            </button>
            <button className="social-btn">
              <FaApple /> With Apple
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
