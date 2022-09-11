import { FaPhoneAlt, FaEnvelopeOpen, FaMapMarker} from 'react-icons/fa'
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Pageheader from "../../component/page-header/Pageheader";
import Topbar from "../../component/topbar/Topbar";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Pageheader text={`Contact Us`} />
      <div className="contact">
        <div className="left">
            <h2>Get in touch</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi laudantium dignissimos similique aspernatur aliquid porro.</p>
            <div className="contact-details">
                <span><FaPhoneAlt /> Phone: </span>
                <span><FaEnvelopeOpen /> Email: </span>
                <span><FaMapMarker /> Address: </span>
            </div>
        </div>
        <div className="right">
            <h2>Contact Form</h2>
            <p>You can also get in touch by feeling the form below;</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
