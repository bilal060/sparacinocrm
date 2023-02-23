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
import PipelineLeadscopy from '../components/pipeline/leads/index.js';
import Changes from '../pages/changesReports/Changes';
import Calender from '../pages/Productivity/Calander';
import Poeple from "../pages/Poeple";
import ChangesReports from '../pages/changesReports';

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
            {/* Leads routs */}
            <Route path='/leads' element={<PipelineLeadscopy />} />
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
