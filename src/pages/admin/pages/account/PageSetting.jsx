import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Footer from '../../../../component/footer/Footer';
import Pageheader from '../../../../component/page-header/Pageheader';
import Topbar from '../../../../component/topbar/Topbar';
import Sidebar from '../component/Sidebar';

const PageSetting = () => {
  return (
    <div>
      
<Topbar />
        <Pageheader text={`Admin Dashboard`} />
        
        <div className="dashboard">
                <Sidebar />
                <div className="right">
                    <h3>Dashbord/Page Settings</h3>
                   <Tabs>
                        <TabList>
                        <Tab>Service Section</Tab>
                        <Tab>About Section</Tab>
                        <Tab>Footer Section</Tab>
                        <Tab>FAQ Section</Tab>
                        </TabList>

                        <TabPanel>
                        <h2>Complete this section to set what shows on Our service</h2>
                        </TabPanel>
                        <TabPanel>
                        <h2>Complete this section to define what shows on about us</h2>
                        </TabPanel>
                        <TabPanel>
                        <h2>Complete this section to define what shows on footer section</h2>
                        </TabPanel>
                        <TabPanel>
                        <h2>Complete this section to define what appears on FAQ</h2>
                        </TabPanel>
                    </Tabs>
                </div>
        </div>

        <Footer />
    </div>
  )
}

export default PageSetting
