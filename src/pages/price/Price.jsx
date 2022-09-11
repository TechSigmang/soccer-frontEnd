import React from "react";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Pageheader from "../../component/page-header/Pageheader";
import Topbar from "../../component/topbar/Topbar";

const Price = () => {
  return <>
  <Topbar />
  <Navbar />
  <Pageheader text={`Prices`} />
  <div className="price">
    List of the prices
  </div>
  <Footer />
  </>;
};

export default Price;
