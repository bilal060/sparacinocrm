import React from "react";

export default function CheckboxLabel(props) {
  return (
    <p
      className="bg-transparent border-0 w-100"
      type="button"
      id={props.id}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {props.label}
    </p>
  );
}

export function Checkbox(props) {
  return (
    <>
      <input type="checkbox" className="menu-list-checkbox" id={props.id} />
      <span className="checkmark" />
    </>
  );
}

export function FilterHeading(props) {
  return <h5 className="dropdown-heeading">{props.heading}</h5>;
}

export function PropertyType({ labels }) {
  return (
    <>
      {labels.map((labels, index) => (
        <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
          <input
            className="styled-checkbox"
            id="styled-checkbox-1"
            type="checkbox"
            defaultChecked=""
            defaultValue="value1"
          />
          <label
            key={index}
            className="styled-checkbox-label"
            htmlFor="styled-checkbox-1"
            onClick={() => console.log(labels)}
          >
            {labels}
          </label>
        </div>
      ))}
    </>
  );
}

export function Location({ labels }) {
  return (
    <>
      {labels.map((labels, index) => (
        <>
          <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
            <input
              className="styled-checkbox"
              id="styled-checkbox-1"
              type="checkbox"
              defaultChecked=""
              defaultValue="value1"
            />
            <label
            key={index}
              htmlFor="styled-checkbox-1"
              className="styled-checkbox-label"
            >
              {labels}
            </label>
          </div>
          <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
            <select name="Cityy" id="Cityy" className="map-screen-select">
              <option value="Starts With">Starts With</option>
            </select>
            <input type="text" className="map-screen-input" />
          </div>
        </>
      ))}
    </>
  );
}
export function Characteristics({ labels }) {
    return (
      <>
        {labels.map((labels, index) => (
          <>
                  <div
                    className="d-flex align-items-center mt-5"
                    style={{ gap: 10 }}
                  >
                    <input
                      className="styled-checkbox"
                      id="styled-checkbox-1"
                      type="checkbox"
                      defaultChecked=""
                      defaultValue="value1"
                    />
                    <label
                    key={index}
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      {labels}
                    </label>
                  </div>
                  <div
                    className="d-flex align-items-center mt-4"
                    style={{ gap: 10 }}
                  >
                    <select
                      name="Cityy"
                      id="Cityy"
                      className="map-screen-select"
                    >
                      <option value="Starts With">Between</option>
                    </select>
                    <input type="text" className="map-screen-input" />
                    -<input type="text" className="map-screen-input" />
                  </div>
          </>
        ))}
      </>
    );
  }