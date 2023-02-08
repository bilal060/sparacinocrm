import React from "react";
import Edit from "../edit";

export function TaskTable() {
  const data = [
    {
      subject: "Call",
      contact: "Mrs. Cynthia Baird",
      status: "Not Started",
      priority: "High",
      date:"06/23/2022",
      action: <Edit />,
    },
    {
      subject: "Call",
      contact: "Mrs. Cynthia Baird",
      status: "Not Started",
      priority: "High",
      date:"06/23/2022",
      action: <Edit />,
    },
    {
      subject: "Call",
      contact: "Mrs. Cynthia Baird",
      status: "Not Started",
      priority: "High",
      date:"06/23/2022",
      action: <Edit />,
    },
  ];
  return (
      <table class="table custom-task-table mt-3" style={{ width: "100%" }}>
        <thead class="bg-transparent border-top-0">
          <tr>
            <th scope="col" className="text-center">
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className="text-center relative">
              Subject
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[96px] top-[23px]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col" className="text-center">
              Contact
            </th>
            <th scope="col" className="text-center">
              Status
            </th>
            <th scope="col" className="text-center">
              Priority
            </th>
            <th scope="col" className="text-center">
              Due Date
            </th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        {data.map(({ subject, contact, status, priority, date,action }) => {
          return (
            <tbody>
              <tr key={subject}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{subject}</td>
                <td className="dark-text">{contact}</td>
                <td>{status}</td>
                <td>{priority}</td>
                <td>{date}</td>
                <td>{action}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
  );
}

export function CampaignTable() {
  const data = [
    {
      campaign: "Lorem Ipsum",
      contact: "Mrs. Cynthia Baird",
      property: "525 E Maude Ave, Sunnyvaleo",
      activity: "Lorem Ipsum",
      date: "06/02/2022",
      related: ""
    },
    {
      campaign: "Lorem Ipsum",
      contact: "Mrs. Cynthia Baird",
      property: "525 E Maude Ave, Sunnyvaleo",
      activity: "Lorem Ipsum",
      date: "06/02/2022",
      related: ""
    },
    {
      campaign: "Lorem Ipsum",
      contact: "Mrs. Cynthia Baird",
      property: "525 E Maude Ave, Sunnyvaleo",
      activity: "Lorem Ipsum",
      date: "06/02/2022",
      related: ""
    },
  ];
  return (
    <div className="App">
      <table class="table custom-task-table mt-3" style={{ width: "100%" }}>
        <thead class="bg-transparent border-top-0">
          <tr>
            <th scope="col">
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className="relative">
              Campaigns{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[118px] top-[23px]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col">Contact</th>
            <th scope="col">Property</th>
            <th scope="col">Activity Type</th>
            <th scope="col">Activity Date</th>
            <th scope="col">Related</th>
          </tr>
        </thead>
        {data.map(({ campaign, contact,property, activity, date, related }) => {
          return (
            <tbody>
              <tr key={campaign}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{campaign}</td>
                <td>{contact}</td>
                <td>{property}</td>
                <td>{activity}</td>
                <td>{date}</td>
                <td>{related}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export function OpportunitiesTable() {
  const data = [
    {
      name: "Selling 123 Fake Street",
      contact: "Mrs. Cynthia Baird",
      pipeline: "Label",
      close: "06/17/2022",
      amount: "$123.00",
      assigned: "admin",
      action: <Edit/>
    },
    {
      name: "Selling 123 Fake Street",
      contact: "Mrs. Cynthia Baird",
      pipeline: "Label",
      close: "06/17/2022",
      amount: "$123.00",
      assigned: "admin",
      action: <Edit/>
    },
    {
      name: "Selling 123 Fake Street",
      contact: "Mrs. Cynthia Baird",
      pipeline: "Label",
      close: "06/17/2022",
      amount: "$123.00",
      assigned: "admin",
      action: <Edit/>
    },
  ];
  return (
    <div className="App">
      <table class="table custom-task-table mt-3" style={{ width: "100%" }}>
        <thead class="bg-transparent border-top-0">
          <tr>
            <th scope="col">
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className="relative">
              Name{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[166px] top-[23px]"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col">Contact</th>
            <th scope="col">Pipeline</th>
            <th scope="col">Close</th>
            <th scope="col">Amount</th>
            <th scope="col">Assigned</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        {data.map(({name, contact, pipeline,close, amount, assigned, action }) => {
          return (
            <tbody>
              <tr key={name}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{name}</td>
                <td>{contact}</td>
                <td ><span className="pipeline-tag">{pipeline}</span></td>
                <td>{close}</td>
                <td>{amount}</td>
                <td>{assigned}</td>
                <td>{action}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
