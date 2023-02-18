import React from "react";
import { PipelineCard } from "../../../components/card";
import {Dropdown} from "../../../components/dropdown";
import { PipelineHeading } from "../../../components/heading";
import SubNav from "../../../components/sub-nav";
import Search from "../../../images/search";

export default function PipelineMarketing() {
  return (
    <main class="  pt-0 ">
      <SubNav item1="Pipeline" item2="Finalization" item3="Marketing" />
      <div class="tab-content " id="pills-tabContent">
        <div
          class="tab-pane fade in active"
          id="pipeline-leads-pill"
          role="tabpanel"
          aria-labelledby="pipeline-leads-pill-tab"
        >
          <main class="custom-main-content mt-2 pt-0">
            <h1 class="custom-heading">Marketing</h1>

            <div class="d-inline-flex align-items-end">
              <div class="pipeline-item  d-flex align-items-end">
                <div class="position-relative custom-search-filter w-100">
                  <input
                    type="text"
                    placeholder="Search this board"
                    class="w-100"
                  />
                  <div class="position-absolute custom-search-icon">
                    <Search/>
                  </div>
                </div>
              </div>
              <div class="pipeline-item ">
                <Dropdown label="City" option1="Barkely" option2="Dubai" />
              </div>
              <div class="pipeline-item"></div>
              <div class="pipeline-item">
                <Dropdown label="Sort" option1="Last Updated" option2="Dubai" />
              </div>
            </div>

            <div class="d-inline-flex mt-4 pt-3 mb-5">
              <div class="pipeline-item">
                <PipelineHeading heading="Create Marketing Material" />
                <PipelineCard
                  status="high"
                  name="Mrs. Sarah Williamson"
                  date1="22 Dec, 2022"
                  date2="22 Dec, 2022"
                  city="Dubai"
                  properties="3"
                  date3="22 Dec, 2022"
                />
              </div>
              <div class="pipeline-item">
                <PipelineHeading heading=" Cold Call Buyers" />
              </div>
              <div class="pipeline-item">
                <PipelineHeading heading="Internal Email Blast" />
              </div>
              <div class="pipeline-item">
                <PipelineHeading heading="Post on Premium Markets" />
              </div>
              <div class="pipeline-item">
                <PipelineHeading heading="External Marketing Blast" />
              </div>
              <div class="pipeline-item">
                <PipelineHeading heading="Showing #1" />
              </div>
              <div class="pipeline-item">
                <PipelineHeading heading="Showing #2" />
              </div>
              <div class="pipeline-item">
                <PipelineHeading heading="Marketing Email Blast" />
              </div>
              <div class="pipeline-item">
                <PipelineHeading heading="Showing #3" />
              </div>
              <div class="pipeline-item">
                <PipelineHeading heading="Showing #4" />
              </div>
              <div class="pipeline-item">
                <PipelineHeading heading="Final Marketing Email Blast" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
