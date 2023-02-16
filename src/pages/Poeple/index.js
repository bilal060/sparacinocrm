import React, { useState } from 'react'
import AllAccountsPage from './Accounts'
import AllContactsPage from './Contacts'
import LeadsPage from './Leads'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const Poeple = () => {

    const [key, setKey] = useState('leads');

    return (
        <>

            <div className="custom-main-content mt-2 pt-4">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 justify-content-center custom-pills-poeple pb-5 mb-5 pt-4 gap-32"
                >
                    <Tab eventKey="leads" title="Leads">
                        <LeadsPage />
                    </Tab>
                    <Tab eventKey="contacts" title="Contacts">
                        <AllContactsPage />
                    </Tab>
                    <Tab eventKey="accounts" title="Accounts" >
                        <AllAccountsPage />
                    </Tab>
                </Tabs>

            </div>
        </>
    )
}

export default Poeple