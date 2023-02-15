import React from 'react'

export default function Dropdown(props) {
  return (
    <div className="m-0 d-flex flex-column">
    <label className="custom-label-city mb-1" htmlFor="">{props.label}</label>
    <select name="City" className="custom-select-city">
        <option value="Barkely">{props.option1}</option>
        <option value="Dubai">{props.option2}</option>
    </select>
</div>
  )
}
