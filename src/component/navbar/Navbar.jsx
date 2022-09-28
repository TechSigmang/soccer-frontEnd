import { useRef } from "react";
import { FaSearch, FaUserAlt, FaLockOpen, FaTimes, FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'
import "./navbar.css";
import logo from "../../images/logo/logo.png";

const Navbar = () => {
  const navRef = useRef()

  const toggleNav = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <header>
      <div className="logo">
         <Link  to={`/`}>
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav ref={navRef}>
          <ul>
                    <li><Link to={`/`}>Home</Link> </li>
                    <li><Link to={`/course`}>Courses</Link></li>
                    <li><Link to={`/price`}>Prices</Link></li>
                    <li><Link to={`/about`}>About Us</Link></li>
                    <li><Link to={`/contact`}>Contact Us</Link></li>
            </ul>
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

            <button className="nav-btn nav-close-btn" onClick={toggleNav}><FaTimes /> </button>
      </nav>
      <button className="nav-btn" onClick={toggleNav}><FaBars /> </button>
    </header>
  );
};

export default Navbar;
