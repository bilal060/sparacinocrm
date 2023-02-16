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
            id="email-pill-tab"
            data-toggle="pill"
            href="#email-pill"
            role="tab"
            aria-controls="email-pill"
            aria-selected="false"
          >
            {props.item1}
          </a>
        </li>
        <li>
          <a
            id="calender-pill-tab"
            data-toggle="pill"
            href="#calender-pill"
            role="tab"
            aria-controls="calender-pill"
            aria-selected="false"
          >
            {props.item2}
          </a>
        </li>
        <li>
          <a
            id="tasks-pill-tab"
            data-toggle="pill"
            href="#tasks-pill"
            role="tab"
            aria-controls="tasks-pill"
            aria-selected="true"
          >
            {props.item3}
          </a>
        </li>
      </ul>
    </>
  );
}
