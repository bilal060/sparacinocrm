import * as React from "react";
import CreateButton from "../../components/createButton";
import {Heading} from "../../components/heading";
import CustomPagination from "../../components/pagination";
import SubNav from "../../components/sub-nav";
import { TaskTable } from "../../components/table";
import "../../index.css";


export default function Tasks() {
  return (
    <>
      <div>
        <SubNav item1="Emails" item2="Calender" item3="Tasks" />
        <main className="custom-main-content mt-2 pt-4">
          <div className="flex justify-between items-center">
            <Heading heading="My Tasks" />
            <CreateButton buttonName="Create Task" />
          </div>
          <TaskTable />
        </main>
          <CustomPagination count="1"/>
      </div>
    </>
  );
}
