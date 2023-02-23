import React from "react";
import SubNav from "../../components/sub-nav";
import AllAccountsPage from "./Accounts";
import AllContactsPage from "./Contacts";
import LeadsPage from "./Leads";

const Poeple = () => {

  const tabs = [
    { title: "Accounts",name:"Accounts" ,content: <AllAccountsPage/>},
    { title: "Contacts",name:"Contacts" ,content: <AllContactsPage/> },
    { title: "Leads",name:"Leads" ,content: <LeadsPage/> },
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
                {tabType === "Accounts" && <AllAccountsPage/>}
                {tabType === "Contact" && <AllContactsPage/>}
                {tabType === "Leads" && <LeadsPage/>}
            </div> */}
    </>
  );
};

export default Poeple;
