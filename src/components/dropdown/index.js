import React, { useState } from "react";

export function Dropdown(props) {
  return (
    <div className="m-0 d-flex flex-column">
      <label className="custom-label-city mb-1" htmlFor="">
        {props.label}
      </label>
      <select name="City" className="custom-select-city">
        <option value="Barkely">{props.option1}</option>
        <option value="Dubai">{props.option2}</option>
      </select>
    </div>
  );
}

const GISOptions = ({ options }) => {
  return (
    <div className="dropdown-menu">
      {options.map((option, index) => (
        <button
          key={index}
          className="dropdown-item"
          onClick={() => console.log(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export function DropdownButton({ options }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };
  return (
    <div className="">
      <button onClick={toggleDropdown}>
        {isOpen && <GISOptions options={options} />}
      </button>
    </div>
  );
}

export function DropdownDivider() {
  return (
    <div
    className="dropdown-menu"
    aria-labelledby="dropdownMenuEditButton"
  >
    <p className="">Markup</p>
    <a className="dropdown-item" href="#">
      Change Target Layer
    </a>
    <a className="dropdown-item" href="#">
      Create New Markup
    </a>
    <a className="dropdown-item" href="#">
      Turn Measure On
    </a>
    <div className="dropdown-divider" />
    <a className="dropdown-item" href="#">
      Draw Polygon
    </a>
    <a className="dropdown-item" href="#">
      Draw Line
    </a>
    <a className="dropdown-item" href="#">
      Draw Circle
    </a>
    <a className="dropdown-item" href="#">
      Draw Rectangle
    </a>
    <div className="dropdown-divider" />
    <a className="dropdown-item" href="#">
      Draw Freehand Polygon
    </a>
    <a className="dropdown-item" href="#">
      Draw Freehand Line
    </a>
    <div className="dropdown-divider" />
    <a className="dropdown-item" href="#">
      Overlay Site Plan
    </a>
    <a className="dropdown-item" href="#">
      Place Icon
    </a>
    <a className="dropdown-item" href="#">
      Place Label
    </a>
    <div className="dropdown-divider" />
    <a className="dropdown-item" href="#">
      Clear Drawing
    </a>
  </div>
  )
}

