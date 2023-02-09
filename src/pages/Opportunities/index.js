import * as React from 'react';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CreateButton from "../../components/createButton";
import Heading from "../../components/heading";
import { OpportunitiesTable } from "../../components/table";
import "../../index.css";

export default function Opportunities() {
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
            <Heading heading="All Opportunities" />
            <CreateButton buttonName="Create"/>
          </div>
          <OpportunitiesTable />
        </main>
        <div className='pagination flex justify-center items-center'>
        <Stack spacing={2}>
          <Pagination count={1}  />
        </Stack>
        </div>
      </div>
    </>
  );
}
