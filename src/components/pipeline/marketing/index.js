import React from "react";
import { PipelineCard } from "../../card";
import { Dropdown } from "../../dropdown";
import { Heading, PipelineHeading } from "../../heading";
import TypeSearch from "../../ui/Search";
export default function PipelineMarketing() {
  return (
    <main className="custom-main-content mt-2 pt-0">
      <Heading heading="Marketing" />

      <div className="d-inline-flex align-items-end">
        <div className="pipeline-item  d-flex align-items-end">
          <TypeSearch />
        </div>
        <div className="pipeline-item ">
          <Dropdown label="City" option1="Barkely" option2="Dubai" />
        </div>
        <div className="pipeline-item"></div>
        <div className="pipeline-item">
          <Dropdown label="Sort" option1="Last Updated" option2="Dubai" />
        </div>
      </div>

      <div className="d-inline-flex mt-4 pt-3 mb-5">
        <div className="pipeline-item">
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
        <div className="pipeline-item">
          <PipelineHeading heading=" Cold Call Buyers" />
        </div>
        <div className="pipeline-item">
          <PipelineHeading heading="Internal Email Blast" />
        </div>
        <div className="pipeline-item">
          <PipelineHeading heading="Post on Premium Markets" />
        </div>
        <div className="pipeline-item">
          <PipelineHeading heading="External Marketing Blast" />
        </div>
        <div className="pipeline-item">
          <PipelineHeading heading="Showing #1" />
        </div>
        <div className="pipeline-item">
          <PipelineHeading heading="Showing #2" />
        </div>
        <div className="pipeline-item">
          <PipelineHeading heading="Marketing Email Blast" />
        </div>
        <div className="pipeline-item">
          <PipelineHeading heading="Showing #3" />
        </div>
        <div className="pipeline-item">
          <PipelineHeading heading="Showing #4" />
        </div>
        <div className="pipeline-item">
          <PipelineHeading heading="Final Marketing Email Blast" />
        </div>
      </div>
    </main>
  );
}
