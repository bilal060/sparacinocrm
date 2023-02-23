import * as React from "react";
import { TaskTable } from "../../components/table";
import Genarictables from "../../components/Genarictables/genarictables";
import "../../index.css";


export default function Tasks() {
  return (
    <>
   
        {/* <SubNav item1="Emails" item2="Calender" item3="Tasks" />
        <main className="custom-main-content mt-2 pt-4">
          <div className="flex justify-between items-center">
            <Heading heading="My Tasks" />
            <CreateButton buttonName="Create Task" />
          </div>
        </main>
          <CustomPagination count="1"/>*/}
          <TaskTable /> 
          <Genarictables/>
    </>
  );
}
