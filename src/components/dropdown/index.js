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
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <button onClick={toggleDropdown}>
        {isOpen && <GISOptions options={options} />}
      </button>
    </div>
  );
}
