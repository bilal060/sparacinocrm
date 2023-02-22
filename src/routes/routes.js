import { Routes, Route } from 'react-router-dom'
import CampaignsPage from '../pages/Campaigns';
import ProductivityPage from '../pages/Productivity';
import OpportunitiesPage from '../pages/Opportunities'
import PipelinePage from '../pages/Pipeline';
import PropertiesPage from '../pages/Properties';

import GIS from "../pages/GIS";
import Tasks from "../pages/Tasks";
import HomePage from "../pages/Home";
import ContactDetails from '../pages/ContactDetails';
<<<<<<< HEAD
//import Changes from '../pages/Changes';
=======
// import Changes from '../pages/Changes';
// import leads page copy and set routes
import PipelineLeadscopy from '../components/pipeline/leads/indexcopy.js';
>>>>>>> e0c6bd84253f9fa768a5451075dde77fa280496e
import Changes from '../pages/changesReports/Changes';
import Calender from '../pages/Productivity/Calander';

// import PeoplesPage from '../pages/Peoples';
// import PipelinePage from '../pages/Pipeline';
// import PropertiesPage from '../pages/Properties';
import DataPage from "../pages/Data";                                                                                                                                                        
import Poeple from "../pages/Poeple";
import ChangesReports from '../pages/changesReports';
import SearchPropertyPage from '../pages/Properties/Search-Property';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/productivity' element={<ProductivityPage />} />
            <Route path='/properties' element={<PropertiesPage />} />
            <Route path='/people' element={<Poeple />} />
            <Route path='/campaigns' element={<CampaignsPage />} />
            <Route path='/contactDetails' element={<ContactDetails />} />
            <Route path='/changes' element={<Changes />} />
            <Route path='/opportunities' element={<OpportunitiesPage />} />
            <Route path='/gis' element={<GIS />} />
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path='/pipeline' element={<PipelinePage />} />
<<<<<<< HEAD
=======
            {/* Leads routs */}
            <Route path='/leads' element={<PipelineLeadscopy />} />
>>>>>>> e0c6bd84253f9fa768a5451075dde77fa280496e
            {/* <Route path="/pipeline/marketing" element={<PipelineMarketing/>}/>
            <Route path="/pipeline/leads" element={<PipelineLeads/>}/>
            <Route path="/pipeline/finalization" element={<PipelineFinalization/>}/> */}
            <Route path="/Productivity/Calander" element={<Calender/>}/>
            {/* <Route path='/data' element={<DataPage />} /> */}
             <Route path='/data' element={<ChangesReports />} />
        </Routes>
    );
}

export default AppRoutes;
