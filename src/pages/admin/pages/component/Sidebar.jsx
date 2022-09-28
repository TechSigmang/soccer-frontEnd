import { Link } from "react-router-dom";
import { FaUser, FaHome, FaSignOutAlt, FaUserCircle, FaBalanceScaleLeft, FaCog} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="left">
      <ul>
        <li>
          <Link to={`/admin/dashboard`}>
            {" "}
            <FaHome className="icon" /> Dashboard{" "}
          </Link>
        </li>
        <li>
          <Link to={`/admin/my-account`}>
            {" "}
            <FaUser className="icon" /> My Account{" "}
          </Link>
        </li>
        <li>
          <Link to={`/admin/page-setting`}>
            {" "}
            <FaCog className="icon" /> Page Setting{" "}
          </Link>
        </li>
        <li>
          <Link to={`/admin/my-account`}>
            {" "}
            <FaBalanceScaleLeft className="icon" /> Price Setting{" "}
          </Link>
        </li>
        <li>
          <Link to={`/admin/my-account`}>
            {" "}
            <FaBalanceScaleLeft className="icon" /> Course Setting{" "}
          </Link>
        </li>

        <li>
          <Link to={`/admin`}>
            <FaSignOutAlt className="icon" /> Logout{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
