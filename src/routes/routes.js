import { Routes, Route } from 'react-router-dom'
import CampaignsPage from '../pages/Campaigns';
import ProductivityPage from '../pages/Home';
import OpportunitiesPage from '../pages/Opportunities';
import PeoplesPage from '../pages/Peoples';
import PipelinePage from '../pages/Pipeline';
import PropertiesPage from '../pages/Properties';
import GIS from "../pages/GIS";
import Tasks from "../pages/Tasks";
import HomePage from "../pages/Home";
import ContactDetails from '../pages/ContactDetails';
import Changes from '../pages/Changes';
// import leads page copy and set routes
import PipelineLeadscopy from '../components/pipeline/leads/indexcopy.js';
function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/productivity' element={<ProductivityPage />} />
            <Route path='/properties' element={<PropertiesPage />} />
            <Route path='/people' element={<PeoplesPage />} />
            <Route path='/campaigns' element={<CampaignsPage />} />
            <Route path='/contactDetails' element={<ContactDetails />} />
            <Route path='/changes' element={<Changes />} />
            <Route path='/opportunities' element={<OpportunitiesPage />} />
            <Route path='/gis' element={<GIS />} />
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path='/pipeline' element={<PipelinePage />} />
            {/* Leads routs */}
            <Route path='/leads' element={<PipelineLeadscopy />} />
            {/* <Route path='/data' element={<DataPage />} /> */}
        </Routes>
    );
}

export default AppRoutes;
