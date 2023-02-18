import React from "react";
import DropdownArrow from "../../images/dropdownArrow";

export default function Edit() {
  return (
    <div className="relative editbtn">
      <select name="Edit" id="action-edit" className="custom-action-edit-input">
        <option value="Edit">Edit</option>
      </select>
      <DropdownArrow/>
    </div>
  );
}
