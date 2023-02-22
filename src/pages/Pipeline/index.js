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

    <div className="custom-main-content mt-2 pt-4">
    <SubNav tabs={tabs} />
  </div>
  )
}

