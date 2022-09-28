
import   './dashboard.scss'

import Footer from '../../../../component/footer/Footer'
import Pageheader from '../../../../component/page-header/Pageheader'
import Topbar from '../../../../component/topbar/Topbar'
import Sidebar from '../component/Sidebar'

const Dashboard = () => {
  return (
    <div>
         <Topbar />
        <Pageheader text={`Admin Dashboard`} />
        
        <div className="dashboard">
                <Sidebar />
                <div className="right">
                    <h3>Dashboard</h3>
                </div>
        </div>

        <Footer />
    </div>
  )
}

export default Dashboard