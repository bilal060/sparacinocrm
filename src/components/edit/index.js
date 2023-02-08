import React from "react";

export default function Edit() {
  return (
    <div className="relative editbtn">
      <select name="Edit" id="action-edit" className="custom-action-edit-input">
        <option value="Edit">Edit</option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="position-absolute"
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
      >
        <path
          d="M7 8.49902C7.19531 8.49902 7.39062 8.4209 7.52344 8.27246L13.5703 2.07715C13.7031 1.94434 13.7812 1.77246 13.7812 1.57715C13.7812 1.1709 13.4766 0.858398 13.0703 0.858398C12.875 0.858398 12.6953 0.936523 12.5625 1.06152L7 6.74902L1.42969 1.06152C1.30469 0.936523 1.125 0.858398 0.921875 0.858398C0.515625 0.858398 0.210938 1.1709 0.210938 1.57715C0.210938 1.77246 0.289062 1.94434 0.421875 2.08496L6.46875 8.27246C6.61719 8.4209 6.79688 8.49902 7 8.49902Z"
          fill="#47505E"
        />
      </svg>
    </div>
  );
}
