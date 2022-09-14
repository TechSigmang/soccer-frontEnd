import "./price.scss";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Pageheader from "../../component/page-header/Pageheader";
import Topbar from "../../component/topbar/Topbar";

const Price = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Pageheader
        text={`Prices`}
        desc={`Find yourself a simple plan, that takes care of your need.`}
      />
      <div className="price">
        <div className="price-wrapper">
          <div className="price-container active">
              <div className="plan">Basic</div>
              <div className="price-tag">$200<small>/year</small></div>
              <ul>
                <li>Access to aal videos</li>
                <li>All version update included</li>
                <li>Export to PDF</li>
                <li>Save training session</li>
                <li>Share access to 4 users</li>
                <li>Renewale after 1 year</li>
              </ul>
            <button>Get Started</button>
          </div>

          <div className="price-container">
              <div className="plan">Standard</div>
              <div className="price-tag">$400 <small>/year</small></div>
              <ul>
                <li>Access to aal videos</li>
                <li>All version update included</li>
                <li>Export to PDF</li>
                <li>Save training session</li>
                <li>Share access to 4 users</li>
                <li>Renewale after 1 year</li>
              </ul>
            <button>Get Started</button>
          </div>

          <div className="price-container">
              <div className="plan">Pro</div>
              <div className="price-tag">$100<small>/year</small></div>
              <ul>
                <li>Access to aal videos</li>
                <li>All version update included</li>
                <li>Export to PDF</li>
                <li>Save training session</li>
                <li>Share access to 4 users</li>
                <li>Renewale after 1 year</li>
              </ul>
            <button>Get Started</button>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Price;
