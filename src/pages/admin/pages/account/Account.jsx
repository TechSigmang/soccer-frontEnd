import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Footer from '../../../../component/footer/Footer';
import Pageheader from '../../../../component/page-header/Pageheader';
import Topbar from '../../../../component/topbar/Topbar';
import Sidebar from '../component/Sidebar';

const Account = () => {
  return (
    <div>

<Topbar />
        <Pageheader text={`Admin Dashboard`} />
        
        <div className="dashboard">
                <Sidebar />
                <div className="right">
                    <h3>Dashbord/My Account</h3>
                   <Tabs>
                        <TabList>
                        <Tab>Personal Information</Tab>
                        <Tab>Password & Security</Tab>
                        <Tab>Payment</Tab>
                        </TabList>

                        <TabPanel>
                        <h2>Account Information</h2>
                        </TabPanel>
                        <TabPanel>
                        <h2>Password and Security</h2>
                        </TabPanel>
                        <TabPanel>
                        <h2>My Payment setting</h2>
                        </TabPanel>
                    </Tabs>
                </div>
        </div>

        <Footer />

 

    </div>

    
  )
}

export default Account