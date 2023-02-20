import React from 'react'
import Search from '../../../images/search'
import { PipelineCard } from '../../card'
import { Dropdown } from '../../dropdown'
import { PipelineHeading } from '../../heading'
export default function PipelineLeads() {
  return (
    <div class="tab-content " id="pills-tabContent">
    <div
      className="tab-pane fade in active"
      id="pipeline-leads-pill"
      role="tabpanel"
      aria-labelledby="pipeline-leads-pill-tab"
    >
      <main className="custom-main-content mt-2 pt-0">
        <h1 className="custom-heading">Leads</h1>

        <div className="d-inline-flex align-items-end">
          <div className="pipeline-item  d-flex align-items-end">
            <div className="position-relative custom-search-filter w-100">
              <input
                type="text"
                placeholder="Search this board"
                className="w-100"
              />
              <div class="position-absolute custom-search-icon">
                <Search/>
              </div>
            </div>
          </div>
          <div className="pipeline-item ">
            <Dropdown label="City" option1="Barkely" option2="Dubai"/>
          </div>
          <div className="pipeline-item"></div>
          <div className="pipeline-item">
          <Dropdown label="Sort" option1="Last Updated" option2="Dubai"/>
          </div>
        </div>
        <div class="d-inline-flex mt-4 pt-3 mb-5">
          <div class="pipeline-item">
            <PipelineHeading heading="Business Development Call"/>
            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>
          </div>
          <div className="pipeline-item">
          <PipelineHeading heading=" Not selling"/>
            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

          </div>
          <div className="pipeline-item">
          <PipelineHeading heading="Create first appointment"/>
            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>
          </div>
          <div className="pipeline-item">
          <PipelineHeading heading="First appointment confirmed"/>
            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

          </div>
          <div className="pipeline-item">
          <PipelineHeading heading="Create second appointment"/>
            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

          </div>
          <div className="pipeline-item">
          <PipelineHeading heading="Second appointment confirmed"/>
            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

          </div>
          <div className="pipeline-item">
          <PipelineHeading heading="Sign listing agreement"/>
            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

          </div>
          <div className="pipeline-item">
          <PipelineHeading heading="Signing of listing agreement confirmed"/>
            <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

          </div>
          <div className="pipeline-item">
          <PipelineHeading heading="Finish Leads Cycle"/>
          </div>
        </div>
      </main>
    </div>
  </div>  )
}
