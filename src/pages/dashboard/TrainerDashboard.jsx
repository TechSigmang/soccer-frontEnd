import { FaUser, FaHome, FaSignOutAlt, FaFontAwesomeFlag, FaCreditCard, FaUserCircle, FaCarAlt} from 'react-icons/fa'
import Footer from '../../component/footer/Footer'

import Pageheader from '../../component/page-header/Pageheader'
import Topbar from '../../component/topbar/Topbar'
import './trainer-dashboard.scss'

const TrainerDashboard = () => {
  return (
    <div>
        <Topbar />
        <Pageheader text={`Trainer Dashboard`} />
        
        <div className="trainer-dashboard">
                <div className="left">
                    <ul>
                        <li><FaHome className='icon'/> Dashboard</li>
                        <li><FaUser className='icon'/> My Account</li>
                        <li><FaCarAlt className='icon'/> My Order</li>
                        <li><FaUserCircle className='icon'/> Personal Information</li>
                        <li><FaCreditCard className='icon'/> My Payment method</li>
                        <li><FaFontAwesomeFlag className='icon'/> Manage Team</li>
                        <li><FaFontAwesomeFlag className='icon'/>  Training</li>
                        <li><FaFontAwesomeFlag className='icon'/>  Competition </li>
                        <li><FaSignOutAlt className='icon'/> Logout </li>
                    </ul>
                </div>
                <div className="right">
                    Dasboard Content
                </div>
        </div>

        <Footer />
    </div>
  )
}

export default TrainerDashboard