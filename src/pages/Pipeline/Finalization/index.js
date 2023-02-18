import React from "react";
import { PipelineCard } from "../../../components/card";
import {Dropdown} from "../../../components/dropdown";
import { PipelineHeading } from "../../../components/heading";
import SubNav from "../../../components/sub-nav";
import Search from "../../../images/search";

export default function PipelineFinalization() {
  return (
    <main class="  pt-0 ">
      <SubNav item1="Pipeline" item2="Finalization" item3="Marketing" />
      <div
        class="tab-pane fade in active"
        id="pipeline-finaliztion-pill"
        role="tabpanel"
        aria-labelledby="pipeline-finaliztion-pill-tab"
      >
        <main class="custom-main-content pt-0">
          <h1 class="custom-heading">Finalization</h1>
          <div class="d-inline-flex align-items-end w-100">
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
              <PipelineHeading heading="Lorem Ipsum" />
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
          </div>
        </main>
      </div>
    </main>
  );
}
