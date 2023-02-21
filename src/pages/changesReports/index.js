import React, { useState } from "react";
import SubNav from "../../components/sub-nav";
import Changes from "./Changes";
import Reports from "./Reports";

const ChangesReports = () => {
  // const [tabType, setTabType]=useState('Changes')
  // const data =['Changes','Reports'];
  const tabs = [
    { title: "Changes",name:"Changes", content: <Changes /> },
    { title: "Reports",name:"Reports", content: <Reports /> },
  ];
  return (
    <>
      <div className="custom-main-content mt-2 pt-4">
        <SubNav tabs={tabs} />
      </div>
      {/* <div className="custom-main-content mt-2 pt-4">
                <SubNav
                    tabType={tabType}
                    onchange={(v)=>setTabType(v)}
                    items={data}
                />
                {tabType === "Changes" && <Changes/>}
                {tabType === "Reports" && <Reports/>}
            </div> */}
    </>
  );
};

export default ChangesReports;
