import React from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Pageheader from "../../component/page-header/Pageheader";
import Topbar from "../../component/topbar/Topbar";

const Courses = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Pageheader text={`Available Courses`} />
      <div className="courses">List of the available course materials</div>
      <Footer />
    </>
  );
};

export default Courses;
