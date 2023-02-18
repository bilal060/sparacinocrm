import React from "react";
import { PipelineCard } from "../../../components/card";
import {Dropdown} from "../../../components/dropdown";
import { PipelineHeading } from "../../../components/heading";
import SubNav from "../../../components/sub-nav";
import Search from "../../../images/search";
export default function PipelineLeads() {
  return (
    <main class="  pt-0 ">
      <SubNav item1="Pipeline" item2="Finalization" item3="Marketing"/>
      <div class="tab-content " id="pills-tabContent">
        <div
          class="tab-pane fade in active"
          id="pipeline-leads-pill"
          role="tabpanel"
          aria-labelledby="pipeline-leads-pill-tab"
        >
          <main class="custom-main-content mt-2 pt-0">
            <h1 class="custom-heading">Leads</h1>

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
                <Dropdown label="City" option1="Barkely" option2="Dubai"/>
              </div>
              <div class="pipeline-item"></div>
              <div class="pipeline-item">
              <Dropdown label="Sort" option1="Last Updated" option2="Dubai"/>
              </div>
            </div>
            <div class="d-inline-flex mt-4 pt-3 mb-5">
              <div class="pipeline-item">
                <PipelineHeading heading="Business Development Call"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>
              </div>
              <div class="pipeline-item">
              <PipelineHeading heading=" Not selling"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Create first appointment"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>
              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="First appointment confirmed"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Create second appointment"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Second appointment confirmed"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Sign listing agreement"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Signing of listing agreement confirmed"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Finish Leads Cycle"/>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
