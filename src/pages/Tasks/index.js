import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CreateButton from "../../components/createButton";
import Heading from "../../components/heading";
import SubNav from "../../components/sub-nav";
import { TaskTable } from "../../components/table";
import "../../index.css";

export default function Tasks() {
  return (
    <>
      <div
        class="tab-pane fade in active"
        id="tasks-pill"
        role="tabpanel"
        aria-labelledby="tasks-pill-tab"
      >
        <main class="custom-main-content mt-2 pt-4">
          <SubNav item1="Emails" item2="Calender" item3="Tasks" />
          <div class="flex justify-between items-center">
            <Heading heading="My Tasks" />
            <CreateButton buttonName="Create Task" />
          </div>
          <TaskTable />
        </main>
          <div className="flex justify-center items-center">
            <Stack spacing={2}>
              <Pagination count={1} />
            </Stack>
          </div>
      </div>
    </>
  );
}
