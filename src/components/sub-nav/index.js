// import React from "react";

// export default function SubNav(props) {
//   return (
//     <>
//       <ul
//         className="nav nav-pills flex justify-center  text-center custom-pills pb-[34px] mt-2"
//         id="pills-tab"
//         role="tablist"
//       >
//           {props.items.map((val,index)=>{
//               return(
//               <li>
                  // <a onClick={() => {
                  //         props.onchange(val);
                  //     }}
//                       className={props.tabType==={val} ? "font-weight-600" : " "}
//                   >
//                       {val}
//                   </a>
//               </li>
//               )
//           })}
//       </ul>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useLocation } from 'react-router-dom';

function SubNav(props) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const location = useLocation();
  useEffect(() => {
    // get the tab name from the URL
    const tabName = location.hash.substring(1);
    // find the index of the tab with the matching name
    const tabIndex = tabName ? props.tabs.findIndex(tab => tab.name === tabName) : 0;
    setActiveTabIndex(tabIndex);
  }, [location]); 

  const handleTabSelect = (index) => {
    setActiveTabIndex(index);
    window.open(`#${props.tabs[index].name}`,"_self");
  };

  return (
    <Tabs selectedIndex={activeTabIndex}   onSelect={handleTabSelect} >
      <TabList className="nav nav-pills flex justify-center  text-center custom-pills pb-[34px] mt-2 text-[#507A9B]" >
        {props.tabs.map((tab, name) => (
          <Tab  key={name}  className={props.tabs.title==={activeTabIndex} ? "font-weight-600" : " "}>{tab.title}</Tab>
        ))}
      </TabList>
      {props.tabs.map((tab, index) => (
        <TabPanel key={index}>
          <div>{tab.content}</div>
        </TabPanel>
      ))}
    </Tabs>
  );
}

export default SubNav;
