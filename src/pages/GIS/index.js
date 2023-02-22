import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { GISCard } from "../../components/card";
import "./map";
import {
  Home,
  MenuBookmark,
  MenuEdit,
  MenuHelp,
  MenuLayer,
  MenuList,
  MenuMeasure,
  MenuPicture,
  MenuPrinter,
  MenuProduction,
  MenuRedo,
  MenuSearch,
  MenuSetting,
  MenuTimeview,
  MenuUndo,
  Search,
} from "../../images/map";
import { DropdownButton, DropdownDivider } from "../../components/dropdown";
import {
  Characteristics,
  Checkbox,
  FilterHeading,
  FilterLabels,
  Location,
  PropertyType,
} from "../../components/GIS";
import CheckboxLabel from "../../components/GIS";

export default function GIS() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYmlsYWxsIiwiYSI6ImNsY3l1YzB2bDA0bHYzcXFvN2ZkODBmMDUifQ.SzofkdBg0GBjQP-rQ5WYbw";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/bilall/clcz47x23014a14pgt2ggh79j",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <>
      <div className="map-menu ">
        <div className="row h-40px">
          <div className="col-sm-3 col-12">
            <div className="position-relative custom-search w-100">
              <input type="text" placeholder="Search" />
              <div className="position-absolute custom-search-icon">
                <Search />
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-12 toolbar">
            <div className="menu-list">
              <ul className="m-0 p-0">
                `
                <li>
                  <Home />
                </li>
                <li>
                  <MenuSearch />
                </li>
                <li>
                  <MenuLayer />
                </li>
                <li>
                  <MenuList />
                </li>
                <li>
                  <div className="dropdown">
                    <MenuEdit />
                    <DropdownDivider />
                  </div>
                </li>
                <li>
                  {/* Measure  */}
                  <div className="dropdown">
                    <MenuMeasure />
                    <DropdownButton
                      options={[
                        "Measure Polygon1",
                        "Measure Line",
                        "Measure Circlers",
                      ]}
                    />
                    <div className="dropdown-divider" />
                    <DropdownButton
                      options={[
                        "Measure Polygon2",
                        "Measure Line",
                        "Measure Circlers",
                      ]}
                    />
                    <div className="dropdown-divider" />
                  </div>
                </li>
                <li>
                  {/* Picture */}
                  <div className="">
                    <MenuPicture />
                    <DropdownButton
                      options={[
                        "Upload File",
                        "Toogle Fullscreen",
                        "Upload Logo",
                        "Share Folders",
                        "Toggle Tooltip Off",
                      ]}
                    />
                  </div>
                </li>
                <li>
                  {/* Printer */}
                  <div className="dropdown">
                    <MenuPrinter />
                    <DropdownButton
                      options={[
                        "8.5 x 11",
                        "11 x 8.5",
                        "11 x 17",
                        "17 x 11",
                        "Advanced Printer",
                      ]}
                    />
                  </div>
                </li>
                <li>
                  {/* Production */}
                  <div className="dropdown">
                    <MenuProduction />
                    <DropdownButton
                      options={[
                        "Production",
                        "Home",
                        "Home Mobile",
                        "Open",
                        "Save",
                        "Save Copy As...",
                      ]}
                    />
                  </div>
                </li>
                <li>
                  {/* Book Mark */}
                  <div className="dropdown">
                    <MenuBookmark />
                    <DropdownButton
                      options={["Add Bookmark", "Remove Bookmark"]}
                    />
                  </div>
                </li>
                <li>
                  {/* Setting */}
                  <div className="dropdown">
                    <MenuSetting />
                    <DropdownButton
                      options={[
                        "Upload File",
                        "Toogle Fullscreen",
                        "Upload Logo",
                        "Share Folders",
                        "Toggle Tooltip Off",
                      ]}
                    />
                  </div>
                </li>
                <li>
                  {/* Synchronize */}
                  {/* Button trigger modal */}
                  <MenuTimeview />
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="TImeView"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="TImeViewTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalLongTitle"
                          >
                            Time View
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer"></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  {/* Alerts */}
                  <div className="dropdown">
                    <MenuHelp />
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuHelpButton"
                    >
                      <a className="dropdown-item" href="#">
                        Toolbar Help
                      </a>
                      <a className="dropdown-item" href="#">
                        Quick Start Video
                      </a>
                      <a className="dropdown-item" href="#">
                        Support &amp; Resource Center
                      </a>
                      <a className="dropdown-item" href="#">
                        About LandVision
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  {/* Undo  */}
                  <MenuUndo />
                </li>
                <li>
                  {/* redo */}
                  <MenuRedo />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="checkbox-list mt-3 mb-0 p-0">
          <li>
            <div className="dropdown">
              <label className="custom-checkbox">
                <CheckboxLabel label="Include Area" />
                <div
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="dropdownMenuExcludeAreaButton"
                >
                  <FilterHeading heading="Include Area" />
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
                <Checkbox id="include area" />
              </label>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <label className="custom-checkbox">
                <CheckboxLabel label="Exclude Area" />
                <div
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="dropdownMenuExcludeAreaButton"
                >
                  <FilterHeading heading="Exclude Area" />

                  <CheckboxLabel label="Exclude Area" />

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
                <Checkbox id="Exclude area" />
              </label>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <label className="custom-checkbox" htmlFor="Location">
                <CheckboxLabel label="Location" />
                <div
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="dropdownMenLocationButton"
                >
                  <FilterHeading heading="Location" />
                  <div className="d-flex align-items-center">
                    <a className="custom-btn">Select All</a>
                    <a className="custom-btn">Select None</a>
                  </div>
                  <Location
                    labels={[
                      "City",
                      "Zip",
                      "Street Name",
                      "County",
                      " State Abv.",
                    ]}
                  />
                  </div>
                <Checkbox id="location" />
              </label>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <label className="custom-checkbox" htmlFor="ProtoType">
                <CheckboxLabel label="Property Type" />

                <div
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="dropdownMenLocationButton"
                >
                  <FilterHeading heading="Property Type" />
                  <div className="d-flex align-items-center">
                    <a className="custom-btn">Select All</a>
                    <a className="custom-btn">Select None</a>
                  </div>
                  <PropertyType
                    labels={[
                      "Multi Family",
                      "Duplex, Triplex, Quadraplex",
                      "Single Family",
                      "Condominium, PUD",
                      " Vacant Residential",
                      " Mobile / Manufacturer",
                      "Residential",
                      "Industrial",
                      "Office",
                      "Retail",
                      "Entertainment",
                      "Hotel / Motel",
                      "Healt care",
                      "Commercial",
                    ]}
                  />
                </div>
                <Checkbox id="ProtoType" />
              </label>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <label className="custom-checkbox" htmlFor="Characteristics">
                <CheckboxLabel
                  id="dropdownMenLocationButton"
                  label="Characteristics"
                />

                <div
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="dropdownMenLocationButton"
                >
                  <FilterHeading heading="Characteristics" />

                  <div className="d-flex align-items-center">
                    <a className="custom-btn">Select All</a>
                    <a className="custom-btn">Select None</a>
                  </div>
                  <Characteristics
                    labels={[
                      "Year Built",
                      "Number of Units",
                      "Building Size",
                      "Lot Size",
                    ]}
                  />
                </div>
                <Checkbox id="Characteristics" />
              </label>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <label className="custom-checkbox" htmlFor="Last-Market-Sale">
                <CheckboxLabel label="Last Market Sale" />
                <div
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="dropdownMenLocationButton"
                >
                  <FilterHeading heading="Last Market Sale" />
                  <div className="d-flex align-items-center">
                    <a className="custom-btn">Select All</a>
                    <a className="custom-btn">Select None</a>
                  </div>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      People i have not contacted
                    </label>
                  </div>
                  <ul className="ml-4 mt-3">
                    <li>
                      <label className="radio-container">
                        Less 3 Month
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                        />
                        <span className="radio-checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="radio-container">
                        Less 6 Month
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                        />
                        <span className="radio-checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="radio-container">
                        Less 12 Month
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                        />
                        <span className="radio-checkmark" />
                      </label>
                    </li>
                    <li className="w-100">
                      <label className="radio-container">
                        Custom
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                        />
                        <span className="radio-checkmark" />
                        <div className="w-100" />
                        Last
                        <input type="text" className="map-screen-input" />
                        Month
                      </label>
                      <div className="d-flex " style={{ gap: 10 }}></div>
                    </li>
                  </ul>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Last Sale Price
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Seller name
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
                  </div>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Assesed Value
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Improvement Pct
                    </label>
                  </div>
                  <div
                    className="d-flex align-items-cente r mt-4"
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
                  </div>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Assesed Land Value
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
                  </div>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Assesed Improvement Value
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
                  </div>
                </div>
                <Checkbox id="Last-Market-Sale" />
              </label>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <label className="custom-checkbox" htmlFor="Ownership">
                <CheckboxLabel label="Ownership" />

                <div
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="dropdownMenLocationButton"
                >
                  <FilterHeading heading="Ownership" />

                  <div className="d-flex align-items-center">
                    <a className="custom-btn">Select All</a>
                    <a className="custom-btn">Select None</a>
                  </div>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      People i have not contacted
                    </label>
                  </div>
                  <ul className="ml-5 mt-3">
                    <li className="w-100">
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
                          htmlFor="styled-checkbox-1"
                          className="styled-checkbox-label"
                        >
                          First Owner Name
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
                          <option value="Starts With">Contains</option>
                        </select>
                        <input type="text" className="map-screen-input" />
                      </div>
                    </li>
                    <li className="w-100">
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
                          htmlFor="styled-checkbox-1"
                          className="styled-checkbox-label"
                        >
                          Second Owner Name
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
                          <option value="Starts With">Contains</option>
                        </select>
                        <input type="text" className="map-screen-input" />
                      </div>
                    </li>
                  </ul>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Address
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
                  </div>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      City
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
                  </div>
                </div>
                <Checkbox id="Ownership" />
              </label>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <label className="custom-checkbox" htmlFor="Debts">
                <CheckboxLabel label="Debts" />

                <div
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="dropdownMenLocationButton"
                >
                  <FilterHeading heading="Debts" />

                  <div className="d-flex align-items-center">
                    <a className="custom-btn">Select All</a>
                    <a className="custom-btn">Select None</a>
                  </div>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Last Loan Amount
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Last Loan Maturity Date
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Last Loan Orignization Date
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Lender Name
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
                  </div>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Document No.
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
                  </div>
                </div>
                <Checkbox id="Debts" />
              </label>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <label className="custom-checkbox" htmlFor="People">
                <CheckboxLabel label="People" />

                <div
                  className="dropdown-menu custom-dropdown-menu"
                  aria-labelledby="dropdownMenLocationButton"
                >
                  <FilterHeading heading="People" />
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      People i have not contacted
                    </label>
                  </div>
                  <ul className="ml-4 mt-3">
                    <li>
                      <label className="radio-container">
                        Less 3 Month
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                        />
                        <span className="radio-checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="radio-container">
                        Less 6 Month
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                        />
                        <span className="radio-checkmark" />
                      </label>
                    </li>
                    <li>
                      <label className="radio-container">
                        Less 12 Month
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                        />
                        <span className="radio-checkmark" />
                      </label>
                    </li>
                    <li className="w-100">
                      <label className="radio-container">
                        Custom
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                        />
                        <span className="radio-checkmark" />
                        <div className="w-100" />
                        Last
                        <input type="text" className="map-screen-input" />
                        Month
                      </label>
                      <div className="d-flex " style={{ gap: 10 }}></div>
                    </li>
                  </ul>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Only Show Following People
                    </label>
                  </div>
                  <ul className="ml-5">
                    <li>
                      <div
                        className="d-flex align-items-center mt-2"
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
                          htmlFor="styled-checkbox-1"
                          className="styled-checkbox-label"
                        >
                          Leads
                        </label>
                      </div>
                    </li>
                    <li>
                      <div
                        className="d-flex align-items-center mt-2"
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
                          htmlFor="styled-checkbox-1"
                          className="styled-checkbox-label"
                        >
                          Contacts
                        </label>
                      </div>
                    </li>
                    <li>
                      <div
                        className="d-flex align-items-center mt-2"
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
                          htmlFor="styled-checkbox-1"
                          className="styled-checkbox-label"
                        >
                          Accountsss
                        </label>
                      </div>
                    </li>
                  </ul>
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
                      htmlFor="styled-checkbox-1"
                      className="styled-checkbox-label"
                    >
                      Pipline
                    </label>
                  </div>
                  <ul className="ml-5">
                    <li>
                      <div
                        className="d-flex align-items-center mt-2"
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
                          htmlFor="styled-checkbox-1"
                          className="styled-checkbox-label"
                        >
                          Leads
                        </label>
                      </div>
                    </li>
                    <li>
                      <div
                        className="d-flex align-items-center mt-2"
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
                          htmlFor="styled-checkbox-1"
                          className="styled-checkbox-label"
                        >
                          Marketing
                        </label>
                      </div>
                    </li>
                    <li>
                      <div
                        className="d-flex align-items-center mt-2"
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
                          htmlFor="styled-checkbox-1"
                          className="styled-checkbox-label"
                        >
                          Finalization
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <Checkbox id="People" />
              </label>
            </div>
          </li>
          <li className="font-16 font-weight-700 text-Primary-Brand-Default ml-2 mt-1">
            Clear Filter
          </li>
        </ul>
      </div>
      <div className="">
        <div id="propertylistinmap">
          <div className="property-list-map">
            <div className="list-header d-flex justify-content-between align-items-center ">
              <h2 className="results">21 Results</h2>
              <button className="button-blue">Add all to campaign</button>
            </div>
            <div className="list">
              <GISCard
                location="525 Roosevelt Ave, Sunnyvale"
                neighborhood="Rockridge"
                area="10,598"
                units="18"
                type="Apartment House"
              />
              <GISCard
                location="525 Roosevelt Ave, Sunnyvale"
                neighborhood="Rockridge"
                area="10,598"
                units="18"
                type="Apartment House"
              />
              <GISCard
                location="525 Roosevelt Ave, Sunnyvale"
                neighborhood="Rockridge"
                area="10,598"
                units="18"
                type="Apartment House"
              />
              <GISCard
                location="525 Roosevelt Ave, Sunnyvale"
                neighborhood="Rockridge"
                area="10,598"
                units="18"
                type="Apartment House"
              />
              <GISCard
                location="525 Roosevelt Ave, Sunnyvale"
                neighborhood="Rockridge"
                area="10,598"
                units="18"
                type="Apartment House"
              />
              <GISCard
                location="525 Roosevelt Ave, Sunnyvale"
                neighborhood="Rockridge"
                area="10,598"
                units="18"
                type="Apartment House"
              />
              <GISCard
                location="525 Roosevelt Ave, Sunnyvale"
                neighborhood="Rockridge"
                area="10,598"
                units="18"
                type="Apartment House"
              />
              <GISCard
                location="525 Roosevelt Ave, Sunnyvale"
                neighborhood="Rockridge"
                area="10,598"
                units="18"
                type="Apartment House"
              />
              <GISCard
                location="525 Roosevelt Ave, Sunnyvale"
                neighborhood="Rockridge"
                area="10,598"
                units="18"
                type="Apartment House"
              />
              <GISCard
                location="525 Roosevelt Ave, Sunnyvale"
                neighborhood="Rockridge"
                area="10,598"
                units="18"
                type="Apartment House"
              />
            </div>
          </div>
        </div>
        <div ref={mapContainer} className="map-container" id="map"></div>
        {/* <div id='map' style='width: 400px; height: 300px;'></div> */}
      </div>
    </>
  );
}
