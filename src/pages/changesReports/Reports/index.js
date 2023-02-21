import * as React from "react";
import {Heading} from "../../../components/heading";
import {ReportsTable } from "../../../components/table";
// import "../../index.css";
import SubNav from "../../../components/sub-nav";
import CustomPagination from "../../../components/pagination";
import Search from "../../../images/search";

export default function Reports() {
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
            <Heading heading="Reports" />
            </div>
            <div className="col-lg-9">
              <div
                className="d-flex align-items-end justify-content-lg-end"
                style={{ gap: '32px', flexWrap : "wrap" }}
              >
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
          <ReportsTable />
        </main>
        <CustomPagination count="1"/>
      </div>
    </>
  );
}
