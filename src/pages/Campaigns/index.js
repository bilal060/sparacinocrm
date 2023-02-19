import * as React from 'react';
import CreateButton from "../../components/createButton";
import {Heading} from "../../components/heading";
import { CampaignTable } from "../../components/table";
import "../../index.css";
import CustomPagination from '../../components/pagination';

export default function Campaigns() {
  return (
    <>
      <div
        className="tab-pane fade in active"
        id="tasks-pill"
        role="tabpanel" 
        aria-labelledby="tasks-pill-tab"
      >
        <main className="custom-main-content mt-2 pt-4">
          <div className="flex justify-between items-center">
            <Heading heading="All Campaigns" />
            <CreateButton buttonName="Create"/>
          </div>
          <CampaignTable />
        </main>
        <CustomPagination count="1"/>
      </div>
    </>
  );
}
