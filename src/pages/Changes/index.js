import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CreateButton from "../../components/createButton";
import {Heading} from "../../components/heading";
import { ChangesTable } from "../../components/table";
import "../../index.css";
import SubNav from "../../components/sub-nav";
import Dropdown from "../../components/dropdown";
import CustomPagination from "../../components/pagination";

export default function Changes() {
  return (
    <>
      <div
        className="tab-pane fade in active"
        id="tasks-pill"
        role="tabpanel"
        aria-labelledby="tasks-pill-tab"
      >
        <SubNav item1="Changes" item2="Reports" />
        <main className="custom-main-content mt-2 pt-4">
          <div className="row align-items-start align-items-lg-center">
            <div className="col-lg-3">
            <Heading heading="All Changes" />
              {/* <h1 className="custom-heading w-lg-auto w-100">Changes</h1> */}
            </div>
            <div className="col-lg-9">
              <div
                className="d-flex align-items-end justify-content-lg-end"
                style={{ gap: '32px', flexWrap : "wrap" }}
              >
                <Dropdown label="Source" option1="dubai" option2="Barkely"/>
                <Dropdown label="City" option1="dubai" option2="Barkely"/>


                <div className="position-relative custom-search-filter">
                  <input type="text" placeholder="Filter" />
                  <div className="position-absolute custom-search-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M0.367188 6.86621C0.367188 10.3037 3.16406 13.1006 6.60156 13.1006C7.96094 13.1006 9.20312 12.6631 10.2266 11.9287L14.0703 15.7803C14.25 15.96 14.4844 16.0459 14.7344 16.0459C15.2656 16.0459 15.6328 15.6475 15.6328 15.124C15.6328 14.874 15.5391 14.6475 15.375 14.4834L11.5547 10.6396C12.3594 9.59277 12.8359 8.28809 12.8359 6.86621C12.8359 3.42871 10.0391 0.631836 6.60156 0.631836C3.16406 0.631836 0.367188 3.42871 0.367188 6.86621ZM1.70312 6.86621C1.70312 4.16309 3.89844 1.96777 6.60156 1.96777C9.30469 1.96777 11.5 4.16309 11.5 6.86621C11.5 9.56934 9.30469 11.7646 6.60156 11.7646C3.89844 11.7646 1.70312 9.56934 1.70312 6.86621Z"
                        fill="#767B84"
                      />
                    </svg>
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
        <CustomPagination count="1"/>
      </div>
    </>
  );
}
