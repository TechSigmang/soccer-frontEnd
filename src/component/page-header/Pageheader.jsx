import "./pageheader.scss";
import { propTypes } from "prop-types";

const Pageheader = ({ text, desc }) => {
  return (
    <div className="pageheader">
      <h2 className="page-title">{text}</h2>
      <hr className="line" />
      <p>{desc} </p>
    </div>
  );
};

Pageheader.defaultProps = {
  text: "",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ullam ut eos, officiis culpa "
};

export default Pageheader;
