import React, { useCallback, useRef } from "react";
// import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { GISCard } from "../../components/card";
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
import { DropdownButton } from "../../components/dropdown";
const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100%",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function GIS() {
  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyAbm3waJB9Cygfqgvqt1k8KjaGg9gKX3-M",
  //   libraries,
  // });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // if (loadError) return "Error";
  // if (!isLoaded) return "Loading...";

  return (
    <>
      <div className="map-menu ">
        <div className="row">
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
                  {/* Search Icon */}
                  <MenuSearch />
                </li>
                <li>
                  {/* Layers */}
                  <MenuLayer />
                </li>
                <li>
                  {/* List */}
                  <MenuList />
                </li>
                <li>
                  {/* Edit */}
                  <div className="dropdown">
                    <MenuEdit />
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
                  </div>
                </li>
                <li>
                  {/* Measure  */}
                  <div className="dropdown">
                    <MenuMeasure />
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuMeasureButton"
                    >
                      <a className="dropdown-item" href="#">
                        Measure Polygon
                      </a>
                      <a className="dropdown-item" href="#">
                        Measure Line
                      </a>
                      <a className="dropdown-item" href="#">
                        Measure Circle
                      </a>
                    </div>
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
                      "Toggle Tooltip Off"
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
                      "Save Copy As..."
                    ]}
                    />
                  </div>
                </li>
                <li>
                  {/* Book Mark */}
                  <div className="dropdown">
                    <MenuBookmark />
                    <DropdownButton
                    options={[
                      "Add Bookmark",
                      "Remove Bookmark"
                    ]}
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
                      "Toggle Tooltip Off"
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
      </div>
      <div class="position-relative">
        <div id="propertylistinmap">
          <div class="property-list-map">
            <div class="list-header d-flex justify-content-between align-items-center ">
              <h2 class="results">21 Results</h2>
              <button class="button-blue">Add all to campaign</button>
            </div>
            <div class="list">
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
        <div id="map">
          {/* <GoogleMap
            id="map"
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={{
              lat: 35.64860429083234,
              lng: 138.57693376912908,
            }}
            options={options}
            onLoad={onMapLoad}
          >
          </GoogleMap> */}
        </div>
      </div>
    </>
  );
}
