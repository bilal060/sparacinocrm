import React from "react";
import CreateButton from "../createButton";
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
      <table className="table custom-task-table mt-3 gfg" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
          <tr>
            <th scope="col" >
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className=" relative">
              Subject
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[65px] top-[33px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col">
              Contact
            </th>
            <th scope="col">
              Status
            </th>
            <th scope="col">
              Priority
            </th>
            <th scope="col">
              Due Date
            </th>
            <th scope="col">
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
      <table className="table custom-task-table mt-3 gfg" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
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
                className="absolute left-[92px] top-[33px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                <td className = "geeks">{campaign}</td>
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
      <table className="table custom-task-table mt-3" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
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
                className="absolute left-[55px] top-[32px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
export function ChangesTable() {
  const data = [
    {
      source: "MLS",
      address: "525 E Maude Ave, Sunnyvale",
      owner: "Mrs. Cynthia Baird",
      type: "listed",
      date: "06/02/2022",
      amount: "$6,950,000"
    },
    {
      source: "MLS",
      address: "525 E Maude Ave, Sunnyvale",
      owner: "Mrs. Cynthia Baird",
      type: "listed",
      date: "06/02/2022",
      amount: "$6,950,000"
    },
    {
      source: "MLS",
      address: "525 E Maude Ave, Sunnyvale",
      owner: "Mrs. Cynthia Baird",
      type: "listed",
      date: "06/02/2022",
      amount: "$6,950,000"
    },
  ];
  return (
    <div className="App">
      <table className="table custom-task-table mt-3 gfg" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
          <tr>
            <th scope="col">
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className="relative">
              Changes
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[75px] top-[32px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
        {data.map(({ source, address,owner, type, date, amount }) => {
          return (
            <tbody>
              <tr key={source}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td className = "geeks">{source}</td>
                <td>{address}</td>
                <td>{owner}</td>
                <td>{type}</td>
                <td>{date}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export function ReportsTable() {
  const data = [
    {
      name: "Calling",
      action: <CreateButton buttonName="View" />,
    },
    {
      name: "Calling",
      action: <CreateButton buttonName="View" />,
    },
  ];
  return (
      <table className="table custom-task-table mt-3 gfg" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
          <tr>
            <th scope="col" className="text-start relative pl-4">
              Name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[53px] top-[33px] "
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col" className="text-end pr-[131px]">
              Action
            </th>
          </tr>
        </thead>
        {data.map(({ name,action }) => {
          return (
            <tbody>
              <tr key={name}>
                <td className="text-start-once pl-4">{name}</td>
                <td className="dark-text text-end-once pr-[104px]">{action}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
  );
}
//Contact Details Page Tables
export function ContactPropertiesTable() {
  const data = [
    {
      Id: "51903179",
      Address: "6321 Dover St",
      City: "Oakland",
      State: "CA",
      Zip: "94609",
      Area: "10,598",
      Units: "18",
      Action:<Edit/>
    },
    {
      Id: "51903179",
      Address: "6321 Dover St",
      City: "Oakland",
      State: "CA",
      Zip: "94609",
      Area: "10,598",
      Units: "18",
      Action:<Edit/>
    },
    {
      Id: "51903179",
      Address: "6321 Dover St",
      City: "Oakland",
      State: "CA",
      Zip: "94609",
      Area: "10,598",
      Units: "18",
      Action:<Edit/>
    },
  ];
  return (
    <div className="App">
      <table className="table custom-task-table mt-3" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
          <tr>
            <th scope="col">
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className="relative">
           ATTOM ID
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[80px] top-[32px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip</th>
            <th scope="col">Area</th>
            <th scope="col">Units</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        {data.map(({Id, Address, City,State, Zip, Area, Units,Action }) => {
          return (
            <tbody>
              <tr key={Id}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{Id}</td>
                <td>{Address}</td>
                <td >{City}</td>
                <td>{State}</td>
                <td>{Zip}</td>
                <td>{Area}</td>
                <td>{Units}</td>
                <td>{Action}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export function ContactTaskTable() {
  const data = [
    {
      subject: "Call",
      status: "Not Started",
      priority: "High",
      date:"06/23/2022",
      action: <Edit />,
    },
    {
      subject: "Call",
      status: "Not Started",
      priority: "High",
      date:"06/23/2022",
      action: <Edit />,
    },
    {
      subject: "Call",
      status: "Not Started",
      priority: "High",
      date:"06/23/2022",
      action: <Edit />,
    },
  ];
  return (
      <table className="table custom-task-table mt-3 gfg" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
          <tr>
            <th scope="col" >
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className=" relative">
              Subject
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[65px] top-[33px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col">
              Status
            </th>
            <th scope="col">
              Priority
            </th>
            <th scope="col">
              Due Date
            </th>
            <th scope="col">
              Action
            </th>
          </tr>
        </thead>
        {data.map(({ subject, status, priority, date,action }) => {
          return (
            <tbody>
              <tr key={subject}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{subject}</td>
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
export function ContactDocumentsTable() {
  const data = [
    {
      Name: "Call",
      File: "High",
      Category:"",
      status: "Active",
      action: <Edit />,
    },
    {
      Name: "Call",
      File: "High",
      Category:"",
      status: "Active",
      action: <Edit />,
    },

  ];
  return (
      <table className="table custom-task-table mt-3 gfg" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
          <tr>
            <th scope="col" >
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className=" relative">
              Name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[65px] top-[33px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col">
              File
            </th>
            <th scope="col">
              Category
            </th>
            <th scope="col">
              Status
            </th>
            <th scope="col">
              Action
            </th>
          </tr>
        </thead>
        {data.map(({ Name, File, Category, status,action }) => {
          return (
            <tbody>
              <tr key={Name}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{Name}</td>
                <td>{File}</td>
                <td>{Category}</td>
                <td>{status}</td>
                <td>{action}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
  );
} 
export function ContactOpportunitiesTable() {
  const data = [
    {
      name: "Selling 123 Fake Street",
      sales: "Prospecting",
      close:"06/17/2022",
      amount: "$123.00",
      assigned: "admin",
      action: <Edit />,
    },

  ];
  return (
      <table className="table custom-task-table mt-3 gfg" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
          <tr>
            <th scope="col" >
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className=" relative">
              Name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[65px] top-[33px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col">
            Sales Stage
            </th>
            <th scope="col">
            Close
            </th>
            <th scope="col">
            Amount
            </th>
            <th scope="col">
            Assigned
            </th>
            <th scope="col">
              Action
            </th>
          </tr>
        </thead>
        {data.map(({ Name, sales, close, amount, assigned, action }) => {
          return (
            <tbody>
              <tr key={Name}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{Name}</td>
                <td>{sales}</td>
                <td>{close}</td>
                <td>{amount}</td>
                <td>{assigned}</td>
                <td>{action}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
  );
} 
export function ContactCampaignsTable() {
  const data = [
    {
      campaign: "Lorem Ipsum",
      activity: "Lorem Ipsum",
      date:"06/17/2022",
      related: "",
    },
  ];
  return (
      <table className="table custom-task-table mt-3 gfg" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
          <tr>
            <th scope="col" >
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className=" relative">
            Campaign
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[65px] top-[33px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col">
            Activity
            </th>
            <th scope="col">
              Date
            </th>
            <th scope="col">
              Related
            </th>
          </tr>
        </thead>
        {data.map(({ campaign, activity, date, related }) => {
          return (
            <tbody>
              <tr key={campaign}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{campaign}</td>
                <td>{activity}</td>
                <td>{date}</td>
                <td>{related}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
  );
} 
export function ContactHistoryTable() {
  const data = [
    {
      subject: "Call",
      status: "Not Started",
      Created: "06/23/2022",
      date:"",
      action: <Edit />,
    },
    {
      subject: "Call",
      status: "Not Started",
      Created: "06/23/2022",
      date:"06/23/2022",
      action: <Edit />,
    },

  ];
  return (
      <table className="table custom-task-table mt-3 gfg" style={{ width: "100%" }}>
        <thead className="bg-transparent border-top-0">
          <tr>
            <th scope="col" >
              <input type="checkbox" name="" value="" />
            </th>
            <th scope="col" className=" relative">
              Subject
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className="absolute left-[65px] top-[33px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.40176 0.975586L0 2.31745L6 7.97559L12 2.31745L10.5982 0.975586L6 5.29187L1.40176 0.975586Z"
                  fill="#2C4251"
                />
              </svg>
            </th>
            <th scope="col">
              Status
            </th>
            <th scope="col">
              Created
            </th>
            <th scope="col">
              Due Date
            </th>
            <th scope="col">
              Action
            </th>
          </tr>
        </thead>
        {data.map(({ subject, status, Created, date,action }) => {
          return (
            <tbody>
              <tr key={subject}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{subject}</td>
                <td>{status}</td>
                <td>{Created}</td>
                <td>{date}</td>
                <td>{action}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
  );
}