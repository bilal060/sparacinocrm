import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './layouts/header';
import Campaigns from './pages/Campaigns';
import Changes from './pages/Changes';
import Opportunities from './pages/Opportunities';
import Tasks from './pages/Tasks';
import reportWebVitals from './reportWebVitals';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Reports from './pages/Reports';
import ContactDetails from './pages/ContactDetails';
import PipelineLeads from './pages/Pipeline/Leads';
import PipelineMarketing from './pages/Pipeline/Marketing';
import PipelineFinalization from './pages/Pipeline/Finalization';
import GIS from './pages/GIS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
     {/* <Tasks /> 
    <Campaigns/>
    <Opportunities/>
    <Changes/>
    <Reports/> */}
    {/* <ContactDetails/> */}
    {/* <PipelineLeads/>
    <PipelineMarketing/>
    <PipelineFinalization/> */}
    <GIS/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
