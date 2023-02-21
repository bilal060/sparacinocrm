import { Routes, Route } from 'react-router-dom'
import CampaignsPage from '../pages/Campaigns';
import ProductivityPage from '../pages/Home';
import OpportunitiesPage from '../pages/Opportunities';
import PipelinePage from '../pages/Pipeline';
import PropertiesPage from '../pages/Properties';
import GIS from "../pages/GIS";
import Tasks from "../pages/Tasks";
import HomePage from "../pages/Home";
import ContactDetails from '../pages/ContactDetails';
import Changes from '../pages/changesReports/Changes';
import DataPage from "../pages/Data";
import Poeple from "../pages/Poeple";
import ChangesReports from '../pages/changesReports';
import SearchPropertyPage from '../pages/Properties/Search-Property';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/productivity' element={<ProductivityPage />} />
            <Route path='/properties' element={<SearchPropertyPage />} />
            <Route path='/people' element={<Poeple />} />
            <Route path='/campaigns' element={<CampaignsPage />} />
            <Route path='/contactDetails' element={<ContactDetails />} />
            <Route path='/changes' element={<Changes />} />
            <Route path='/opportunities' element={<OpportunitiesPage />} />
            <Route path='/gis' element={<GIS />} />
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path='/pipeline' element={<PipelinePage />} />
             <Route path='/data' element={<ChangesReports />} />
        </Routes>
    );
}

export default AppRoutes;
