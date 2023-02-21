import * as React from "react";
import { Heading } from "../../../components/heading";
import { ChangesTable } from "../../../components/table";
// import "../../index.css";
import SubNav from "../../../components/sub-nav";
import {Dropdown} from "../../../components/dropdown";
import CustomPagination from "../../../components/pagination";
import Search from "../../../images/search";

export default function Changes() {
  return (
    <>
      <div 
      
        className="tab-pane fade in active"
        id="tasks-pill"
        role="tabpanel"
        aria-labelledby="tasks-pill-tab"
      >
        <main className="custom-main-content mt-2 pt-4">
          <div className="row align-items-start align-items-lg-center">
            <div className="col-lg-3">
              <Heading heading="All Changes" />
            </div>
            <div className="col-lg-9">
              <div
                className="d-flex align-items-end justify-content-lg-end"
                style={{ gap: "32px", flexWrap: "wrap" }}
              >
                <Dropdown label="Source" option1="dubai" option2="Barkely" />
                <Dropdown label="City" option1="dubai" option2="Barkely" />
                <div className="position-relative custom-search-filter">
                  <input type="text" placeholder="Filter" />
                  <div className="position-absolute custom-search-icon">
                    <Search/>
                  </div>
                </div>
                <button
                  id="apply-filter"
                  className="custom-filter-apply text-white"
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
          <ChangesTable />
        </main>
        <CustomPagination count="1" />
      </div>
    </>
  );
}
