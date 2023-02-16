import { Routes, Route } from 'react-router-dom'
import CampaignsPage from '../pages/Campaigns';
// import DataPage from '../pages/Data';
// import ProductivityPage from '../pages/Home';
// import HomePage from '../pages/Home';
import OpportunitiesPage from '../pages/Opportunities';
import GIS from '../pages/GIS';
import Tasks from '../pages/Tasks'
import PipelineMarketing from '../pages/Pipeline/Marketing';
import PipelineLeads from '../pages/Pipeline/Leads';
import PipelineFinalization from '../pages/Pipeline/Finalization';

// import PeoplesPage from '../pages/Peoples';
// import PipelinePage from '../pages/Pipeline';
// import PropertiesPage from '../pages/Properties';

function AppRoutes() {
    return (
        <Routes>
            {/* <Route path='/' element={<HomePage />} /> */}
            {/* <Route path='/productivity' element={<ProductivityPage />} /> */}
            {/* <Route path='/properties' element={<PropertiesPage />} /> */}
            {/* <Route path='/people' element={<PeoplesPage />} /> */}
            {/* <Route path='/pipeline' element={<PipelinePage />} /> */}
            <Route path='/campaigns' element={<CampaignsPage />} />
            <Route path='/opportunities' element={<OpportunitiesPage />} />
            <Route path='/GIS' element={<GIS />} />
            <Route path="/Tasks" element={<Tasks/>}/>
            <Route path="/pipeline/marketing" element={<PipelineMarketing/>}/>
            <Route path="/pipeline/leads" element={<PipelineLeads/>}/>
            <Route path="/pipeline/finalization" element={<PipelineFinalization/>}/>
            {/* <Route path='/data' element={<DataPage />} /> */}
        </Routes>
    );
}

export default AppRoutes;
