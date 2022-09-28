import { FaPhoneAlt, FaMapMarkedAlt, FaEnvelope, FaFacebook, FaInstagram, FaGooglePlus, FaTwitter, FaCcMastercard, FaCcAmex, FaCcVisa, FaCcPaypal, FaCcApplePay, FaCcAmazonPay, FaGooglePay } from "react-icons/fa";
import "./footer.scss";
import logo from "../../images/logo/logo.png";

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer-items">
        <div className="footer-card">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          </div>
          <div className="location">
            {" "}
            <FaMapMarkedAlt /> Location
          </div>
          <div className="phone">
            {" "}
            <FaPhoneAlt /> Phone
          </div>
          <div className="email">
            <FaEnvelope /> Email
          </div>
        </div>

        <div className="footer-card">
          <h2>Quick Link</h2>
          <ul>
            <li> Contact Us</li>
            <li> FAQ</li>
            <li> Contact Us</li>
            <li> Contact Us</li>
            <li> Contact Us</li>
          </ul>
         
        </div>

        <div className="footer-card">
          <h2>Accepted Payment</h2>
          <span>You can make payment via any of the method listed bellow;</span>
          <div className="cards">
            <FaCcMastercard />
            <FaCcVisa />
            <FaCcAmazonPay />
            <FaCcPaypal />
            <FaCcAmex />
            <FaCcPaypal />
          </div>
          
        </div>

        <div className="footer-card">
          
        <h2>Services</h2>
          <ul>
            <li> Terms and Condition</li>
            <li> Licence</li>
            <li> Contact Us</li>
            <li> Contact Us</li>
            <li> Contact Us</li>
          </ul>

        </div>
      </div>
    </div>
      <div className="footer-action">
        <div className="social">
            <span>Follow Us:</span>
            <p> 
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGooglePlus />
            </p>
        </div>
        <div className="subscribe"> 
            <span>Subscribe for our news letter:</span>
            <div className="sub-wrapper">
                <input type="text" placeholder="Enter Your Email Address" />
                <button>Subscribe!</button>
            </div>
    
        </div>
      </div>
      <div className="copy-right">&copy; 2022, Soccer Acedemy, All Right Reserved</div>
      </>
  );
};

export default Footer;
