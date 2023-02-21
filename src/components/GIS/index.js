import React from "react";

export default function CheckboxDropdown(props) {
  return (
    <label className="custom-checkbox">
      <p
        className="bg-transparent border-0 w-100"
        type="button"
        id="dropdownMenuExcludeAreaButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.label}
      </p>
      <div
        className="dropdown-menu custom-dropdown-menu"
        aria-labelledby="dropdownMenuExcludeAreaButton"
      >
        <h5 className="dropdown-heeading">{props.heading}</h5>
        <a className="dropdown-item" href="#">
          Add Polygon
        </a>
        <a className="dropdown-item" href="#">
          Add Circle
        </a>
        <a className="dropdown-item" href="#">
          Add Line
        </a>
      </div>
      <input type="checkbox" className="menu-list-checkbox" />
      <span className="checkmark" />
    </label>
  );
}

export function Label(props) {
  return (
    <>
      <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
        <input
          className="styled-checkbox"
          id="styled-checkbox-1"
          type="checkbox"
          defaultChecked=""
          defaultValue="value1"
        />
        <label htmlFor="styled-checkbox-1" className="styled-checkbox-label">
          {props.label}
        </label>
      </div>
    </>
  );
}
