import React, { useState } from 'react'
import PipelineFinalization from '../../components/pipeline/finalization';
import PipelineLeads from '../../components/pipeline/leads';
import PipelineMarketing from '../../components/pipeline/marketing';
import SubNav from '../../components/sub-nav';

export default function Pipeline() {
  // const [tabType, setTabType]=useState('Leads')
  // const data =['Leads','Finalization','Marketing'];
  const tabs = [
    { title: "Leads", name:"Leads", content: <PipelineLeads/>},
    { title: "Finalization", name:"Finalization", content: <PipelineFinalization/>},
    { title: "Marketing", name:"Marketing", content: <PipelineMarketing/> },
  ];
  // console.log(tabType);
  return (
<<<<<<< HEAD
    <main className="  pt-0 ">
    <SubNav
      tabType={tabType}
      onchange={(v)=>setTabType(v)}
      item1="leads"
      item2="Finalization"
      item3="Marketing"
    />
  
    {tabType === "leads" && <PipelineLeads/>}
    {tabType === "finalization" && <PipelineFinalization/>}
    {tabType === "marketing" && <PipelineMarketing/>}
    </main>
=======
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
    <div className="custom-main-content mt-2 pt-4">
    <SubNav tabs={tabs} />
  </div>
>>>>>>> 57f053ceece6b63a84305e104ce150e72b2efc55
  )
}

