import {
  FaPhoneAlt,
  FaMapMarker,
  FaTimesCircle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaClock,
  FaGooglePlus,
  FaEnvelopeOpen
} from "react-icons/fa";
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="top-menus">
        <div className="phone">
          <FaPhoneAlt />&nbsp; Phone: (+234) 8038850000
        </div>

        <div className="location">
          <FaMapMarker />&nbsp; London, UK
        </div>
        <div className="timer">
          <FaClock />&nbsp; 24/7 Support
        </div>
        <div className="timer">
          <FaEnvelopeOpen />&nbsp; info@succertrainer.com
        </div>
      </div>
      <div className="social">
        <FaFacebook className="icon"/> <FaInstagram className="icon"/> <FaTwitter className="icon"/> <FaGooglePlus className="icon"/>
      </div>
    </div>
  );
};

export default Topbar;
