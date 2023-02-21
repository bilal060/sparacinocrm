import React from 'react'
import { PipelineCard } from '../../card'
import { Dropdown } from '../../dropdown'
import { Heading, PipelineHeading } from '../../heading'
import TypeSearch from '../../ui/Search'
export default function PipelineLeads() {
  return (

      <main className="custom-main-content mt-2 pt-0">
      <Heading heading="Leads"/>
        <div className="d-inline-flex align-items-end">
          <div className="pipeline-item  d-flex align-items-end">
            <TypeSearch/>
          </div>
          <div className="pipeline-item ">
            <Dropdown label="City" option1="Barkely" option2="Dubai"/>
          </div>
          <div className="pipeline-item"></div>
          <div className="pipeline-item">
          <Dropdown label="Sort" option1="Last Updated" option2="Dubai"/>
          </div>
        </div>
        <div className="d-inline-flex mt-4 pt-3 mb-5">
          <div className="pipeline-item">
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
    )
}
