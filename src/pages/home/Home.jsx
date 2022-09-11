import React from "react";
import About from "../../component/about/About";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Services from "../../component/services/Services";
import Slider from "../../component/slider/Slider";
import Testimonial from "../../component/testimonial/Testimonial";
import Topbar from "../../component/topbar/Topbar";
import "./home.scss";

const Home = () => {
  return <div>
    <Topbar />
    <Navbar />
    <Slider />
   <Services />
   <About />
   <Testimonial />
   <Footer />
    
    </div>;
};

export default Home;
