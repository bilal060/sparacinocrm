import React from 'react'
import PipelineFinalization from '../../components/pipeline/finalization';
import PipelineLeads from '../../components/pipeline/leads';
import PipelineMarketing from '../../components/pipeline/marketing';
import SubNav from '../../components/sub-nav';

export default function Pipeline() {
  const tabs = [
    { title: "Leads", name:"Leads", content: <PipelineLeads/>},
    { title: "Finalization", name:"Finalization", content: <PipelineFinalization/>},
    { title: "Marketing", name:"Marketing", content: <PipelineMarketing/> },
  ];
  return (
<<<<<<< HEAD
    // <main className="  pt-0 ">
    // <SubNav
    //   tabType={tabType}
    //   onchange={(v)=>setTabType(v)}
    //   items={data}
    // />
    // {tabType === "Leads" && <PipelineLeads/>}
    // {tabType === "Finalization" && <PipelineFinalization/>}
    // {tabType === "Marketing" && <PipelineMarketing/>}
    // </main>
=======

>>>>>>> e0c6bd84253f9fa768a5451075dde77fa280496e
    <div className="custom-main-content mt-2 pt-4">
    <SubNav tabs={tabs} />
  </div>
  )
}

