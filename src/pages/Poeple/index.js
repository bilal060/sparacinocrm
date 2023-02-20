import React, { useState } from 'react'
import SubNav from "../../components/sub-nav";
import PipelineLeads from "../../components/pipeline/leads";
import PipelineFinalization from "../../components/pipeline/finalization";
import PipelineMarketing from "../../components/pipeline/marketing";



const Poeple = () => {

    const [tabType, setTabType]=useState('leads')
    const data =['accounts','contact','leads'];
    return (
        <>

            <div className="custom-main-content mt-2 pt-4">
                <SubNav
                    tabType={tabType}
                    onchange={(v)=>setTabType(v)}
                    items={data}
                />
                {tabType === "accounts" && <PipelineLeads/>}
                {tabType === "contact" && <PipelineFinalization/>}
                {tabType === "leads" && <PipelineMarketing/>}
            </div>
        </>
    )
}

export default Poeple