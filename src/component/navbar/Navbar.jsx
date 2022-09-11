import { FaSearch, FaUserAlt, FaLockOpen } from "react-icons/fa";
import { Link } from 'react-router-dom'
import "./navbar.scss";
import logo from "../../images/logo/main-logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link  to={`/`}>
        <img src={logo} alt="Logo" />
        </Link>
        
      </div>

      <div className="menus">
        <nav>
          <ul>
            <li><Link to={`/`}>Home</Link> </li>
            <li><Link to={`/course`}>Courses</Link></li>
            <li><Link to={`/price`}>Prices</Link></li>
            <li><Link to={`/about`}>About Us</Link></li>
            <li><Link to={`/contact`}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
      <div className="search-area">
        <input type="text" placeholder="Search something.." />
        <button>
          <FaSearch />
        </button>
      </div>
      <div className="action">
        <Link to={`/auth/signup`} className="btnLink"><FaUserAlt/> Sign Up</Link>
        <Link to={`/auth`} className="btnLink"> <FaLockOpen/> Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
