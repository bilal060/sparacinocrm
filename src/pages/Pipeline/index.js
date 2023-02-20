import React, { useState } from 'react'
import PipelineFinalization from '../../components/pipeline/finalization';
import PipelineLeads from '../../components/pipeline/leads';
import PipelineMarketing from '../../components/pipeline/marketing';
import SubNav from '../../components/sub-nav';

export default function Pipeline() {
  const [tabType, setTabType]=useState('leads')
  const data =['leads','Finalization','Marketing'];

  console.log(tabType);
  return (
    <main className="  pt-0 ">
    <SubNav
      tabType={tabType}
      onchange={(v)=>setTabType(v)}
      items={data}
    />
    {tabType === "leads" && <PipelineLeads/>}
    {tabType === "Finalization" && <PipelineFinalization/>}
    {tabType === "Marketing" && <PipelineMarketing/>}
    </main>
  )
}

