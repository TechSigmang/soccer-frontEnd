import "./courses.scss";
import { FaStar } from "react-icons/fa";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";
import Pageheader from "../../component/page-header/Pageheader";
import Topbar from "../../component/topbar/Topbar";
import course from "../../images/course/course-3.jpg";
import CourseComponent from "./CourseComponent";

const Courses = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Pageheader
        text={`Available Courses`}
        desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ullam ut eos, officiis culpa`}
      />
      <div className="courses">
        <h2>Available Courses</h2>
        <hr />

        <div className="course-lists">
          <CourseComponent>
            <div className="left">
              <div className="more">45% OFF</div>
              <img src={course} alt="" />
            </div>
            <div className="right">
              <div className="title">Course Title</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                sequi quia similique laudantium qui veniam molestiae, temporibus
              </p>
              <div className="more-info">
                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>4.0</span>
                </div>
                <div className="prize">
                  <span>&#36;</span>
                  200
                </div>
              </div>
            </div>
          </CourseComponent>

          <CourseComponent>
            <div className="left">
              <div className="more">45% OFF</div>
              <img src={course} alt="" />
            </div>
            <div className="right">
              <div className="title">Course Title</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                sequi quia similique laudantium qui veniam molestiae, temporibus
              </p>
              <div className="more-info">
                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>4.0</span>
                </div>
                <div className="prize">
                  <span>&#36;</span>
                  200
                </div>
              </div>
            </div>
          </CourseComponent>

          <CourseComponent>
            <div className="left">
              <div className="more">45% OFF</div>
              <img src={course} alt="" />
            </div>
            <div className="right">
              <div className="title">Course Title</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                sequi quia similique laudantium qui veniam molestiae, temporibus
              </p>
              <div className="more-info">
                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>4.0</span>
                </div>
                <div className="prize">
                  <span>&#36;</span>
                  200
                </div>
              </div>
            </div>
          </CourseComponent>

          <CourseComponent>
            <div className="left">
              <div className="more">45% OFF</div>
              <img src={course} alt="" />
            </div>
            <div className="right">
              <div className="title">Course Title</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
                sequi quia similique laudantium qui veniam molestiae, temporibus
              </p>
              <div className="more-info">
                <div className="rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span>4.0</span>
                </div>
                <div className="prize">
                  <span>&#36;</span>
                  200
                </div>
              </div>
            </div>
          </CourseComponent>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
