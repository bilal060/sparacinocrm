import React from "react";

export default function SubNav(props) {
  return (
    <>
      <ul
        className="nav nav-pills flex justify-center  text-center custom-pills pb-[34px] mt-2"
        id="pills-tab"
        role="tablist"
      >
          {props.items.map((val,index)=>{
              return(
              <li>
                  <a onClick={() => {
                          props.onchange(val);
                      }}
                      className={props.tabType==={val} ? "font-weight-600" : " "}
                  >
                      {val}
                  </a>
              </li>
              )
          })}


      </ul>
    </>
  );
}
