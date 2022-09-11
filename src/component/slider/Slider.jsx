import { FaArrowCircleRight } from "react-icons/fa";
import "./slider.scss";
import slider2 from "../../images/slider/slide2.webp";

const Slider = () => {
  return (
    <div className="slider">
      <div className="text">
        <div className="topic">Become a Professional Footballer</div>
        <div className="title">With our soccer traning kit</div>
        <div className="description">
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nulla
          optio assumenda soluta necessitatibus pariatur error, blanditiis
          debitis obcaecati itaque, est quibusdam, provident illo vel in vero
          sequi reprehenderit voluptatem!{" "}
        </div>
        <button>
          Signup Now &nbsp; <FaArrowCircleRight />{" "}
        </button>
      </div>
      <div className="images">
        <img src={slider2} alt="" />
      </div>
    </div>
  );
};

export default Slider;
