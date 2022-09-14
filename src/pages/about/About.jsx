import "./about.scss";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Pageheader from "../../component/page-header/Pageheader";
import Topbar from "../../component/topbar/Topbar";
import about from "../../images/about/about.jpg"

const About = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Pageheader text={`About Us`} />
      <div className="abouts">
        <div className="left">
            <img src={about} alt="" />
        </div>
        <div className="right">
          <h2>Our History</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            modi adipisci facilis dolores repudiandae, quibusdam maxime officiis
            magni ipsa quam! Sint, praesentium? Impedit ipsum ex fugit, culpa
            dignissimos ad voluptates.
          </p>

          <h2>Our Mission</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            modi adipisci facilis dolores repudiandae, quibusdam maxime officiis
            magni ipsa quam! Sint, praesentium? Impedit ipsum ex fugit, culpa
            dignissimos ad voluptates.
          </p>

          <h2>Our Vission</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            modi adipisci facilis dolores repudiandae, quibusdam maxime officiis
            magni ipsa quam! Sint, praesentium? Impedit ipsum ex fugit, culpa
            dignissimos ad voluptates.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
