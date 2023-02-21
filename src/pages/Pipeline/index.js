import React, { useState } from 'react'
import PipelineFinalization from '../../components/pipeline/finalization';
import PipelineLeads from '../../components/pipeline/leads';
import PipelineMarketing from '../../components/pipeline/marketing';
import SubNav from '../../components/sub-nav';

export default function Pipeline() {
  const [tabType, setTabType]=useState('leads')
  console.log(tabType);
  return (
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
  )
}

