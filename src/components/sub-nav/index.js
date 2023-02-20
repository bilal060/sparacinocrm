import React from "react";

export default function SubNav(props) {
  return (
    <>
      <ul
        className="nav nav-pills flex justify-center  text-center custom-pills pb-[34px] mt-2"
        id="pills-tab"
        role="tablist"
      >
        <li>
          <a
            onClick={() => {
              props.onchange("leads");
            }}
            className={props.tabType==="leads" || props.tabType==="changes" ? "font-weight-600" : " "}
          >
            {props.item1}
          </a>
        </li>
        <li>
          <a
            id="calender-pill-tab"
            className={props.tabType==="finalization" || props.tabType==="reports" ? "font-weight-600" : " "}
            onClick={() => {
              props.onchange("finalization");
            }}
            
            aria-controls="calender-pill"
            aria-selected="false"
          >
            {props.item2}
          </a>
        </li>
        <li>
          <a
            id="tasks-pill-tab"
            className={props.tabType==="marketing" ? "font-weight-600" : " "}
            onClick={() => {
              props.onchange("marketing");
            }}
            aria-controls="tasks-pill"
            aria-selected="false"
          >
            {props.item3}
          </a>
        </li>
      </ul>
    </>
  );
}
