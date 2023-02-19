import React, { useState } from "react";
import {
  ContactCampaignsTable,
  ContactDocumentsTable,
  ContactHistoryTable,
  ContactOpportunitiesTable,
  ContactPropertiesTable,
  ContactTaskTable,
  TaskTable,
} from "../../components/table";
import { Modal } from "react-bootstrap";
import CustomPagination from "../../components/pagination";

export default function ContactDetails() {
  const [showModal, setShow] = useState(false); 
  const [showModal2, setShow2] = useState(false);
  const [showModal3, setShow3] = useState(false);
  const [showModal4, setShow4] = useState(false);
  const [showModal5, setShow5] = useState(false);
  const [showModal6, setShow6] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleClose5 = () => setShow5(false);
  const handleClose6 = () => setShow6(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleShow2 = () => {
    setShow2(true);
  };
  const handleShow3 = () => {
    setShow3(true);
  };
  const handleShow4 = () => {
    setShow4(true);
  };
  const handleShow5 = () => {
    setShow5(true);
  };
  const handleShow6 = () => {
    setShow6(true);
  };
  return (
    <main className="custom-main-content main-padding">
      <section>
        <h1 className="custom-heading">
          <span className="text-Primary-Brand-Default">All Contacts </span>/
          Mrs. Cynthia Baird
        </h1>
        <div className="row mx-0 mt-5">
          <div className="col-lg-5 pr-lg-5">
            <div className="bg-white p-4 custom-personal-detail h-100">
              <h3 className="custom-card-heading pb-4">Personal Detail</h3>

              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Age</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">47y 6m</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Home Address</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">
                    {" "}
                    525 E Maude Ave Sunnyvale, CA 94085
                  </p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Phone Numbers</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">(240)793-7288</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Home Number</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">(240)793-7288</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Mobile Number</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">-</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Email Address</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">c.baird@gmail.com</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Mailing Address</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">
                    525 E Maude Ave Sunnyvale, CA 94085m
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pt-lg-0 bg-white pt-4">
            <div className="bg-white p-4 custom-employment-detail h-100">
              <h3 className="custom-card-heading pb-4">Employment</h3>

              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Occupation</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">Physician</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Professional Licenses</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">Doctor</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Employer</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Employer Address</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">Lorem ipsum dolor</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Work Phone</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">1234256789</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Work Fax</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">-</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6 p-0">
                  <p className="custom-title">Work email</p>
                </div>
                <div className="col-6 p-0">
                  <p className="custom-title-detail ">
                    c.baird@valleyhealth.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* properties table */}
      <section>
        <div className="custom-detail-list mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="custom-heading-h2">Properties</h2>
            {/* <!-- Link Property modal --> */}
            <button
              type="button"
              className="bg-white border-1 custom-task-create"
              onClick={() => handleShow()}
            >
              Link Property
            </button>
            <Modal show={showModal} onHide={handleClose}>
              <div className="modal-content p-32 custom-modal">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="modal-title" id="LinkPropertyModalTitle">
                    Link Property
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => handleClose()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="py-5 mb-5">
                  <input
                    type="text"
                    className="custom-search-bar pl-2"
                    placeholder="Search Property"
                    id="linkproperty"
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="custom-cancel-btn border-0"
                    data-dismiss="modal"
                    onClick={() => handleClose()}
                  >
                    Close
                  </button>
                  <button type="button" className="custom-save-btn border-0">
                    Link Property
                  </button>
                </div>
              </div>
            </Modal>
          </div>
          <ContactPropertiesTable />
          <CustomPagination count="1" />
        </div>
      </section>
      {/* task list */}
      <section>
        <div className="custom-detail-list mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="custom-heading-h2">Tasks</h2>
            {/* <!-- Link Property modal --> */}
            <button
              type="button"
              className="bg-white border-1 custom-task-create"
              data-toggle="modal"
              data-target="#CreateTaskModal"
              onClick={() => handleShow2()}
            >
              Create Task
            </button>
            <Modal show={showModal2} onHide={handleClose}>
              <div className="modal-content p-32 custom-modal">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="modal-title" id="CreateTaskModalTitle">
                    Create Task
                  </h5>
                  <button
                    type="button"
                    className="close"
                    // data-dismiss="modal"
                    // aria-label="Close"
                    onClick={() => handleClose2()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="py-5" id="CreateTaskForm">
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        className="custom-search-bar pl-2"
                        placeholder="Search Property"
                      />
                    </div>
                    <div className="col-6">
                      <select
                        name="taskStatus"
                        id="taskStatus"
                        className="custom-select-form w-100"
                      >
                        <option value="Status">Status</option>
                        <option value="task">task</option>
                      </select>
                    </div>
                  </div>
                  <div className="row pt-5">
                    <div className="col-6">
                      <input type="date" className="custom-search-bar pl-2" />
                    </div>
                    <div className="col-6">
                      <select
                        name="taskStatus"
                        id="taskStatus"
                        className="custom-select-form w-100"
                      >
                        <option value="Priority">Priority</option>
                        <option value="task">task</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="custom-cancel-btn border-0"
                    data-dismiss="modal"
                    onClick={() => handleClose2()}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="custom-save-btn border-0"
                    onclick="ChangeCreateTask()"
                  >
                    Create
                  </button>
                </div>
              </div>
            </Modal>
            {/* <!-- Link Property modal --> */}
          </div>
          <ContactTaskTable />
          <CustomPagination count="1" />
        </div>
      </section>
      {/* <!-- Document --> */}
      <section>
        <div className="custom-detail-list mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="custom-heading-h2">Document</h2>
            <button
              type="button"
              className="bg-white border-1 custom-task-create"
              onClick={() => handleShow3()}
            >
              Upload Document
            </button>

            <Modal show={showModal3} onHide={handleClose3}>
              <div className="modal-content p-32 custom-modal">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="modal-title" id="DocumentModalTitle">
                    Upload Document
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => handleClose3()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="py-5" id="uploadDocument">
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        className="custom-search-bar pl-2"
                        placeholder="Search Property"
                      />
                    </div>
                    <div className="col-6">
                      <select
                        name="taskStatus"
                        id="taskStatus"
                        className="custom-select-form w-100"
                      >
                        <option value="Status">Status</option>
                        <option value="task">task</option>
                      </select>
                    </div>
                  </div>
                  <div className="row pt-5">
                    <div className="col-12">
                      Please Upload a File
                      <br />
                      <input
                        className="custom-document-file-input pt-4"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="custom-cancel-btn border-0"
                    onClick={() => handleClose3()}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="custom-save-btn border-0"
                    onclick="UploadDocument()"
                  >
                    Create
                  </button>
                </div>
              </div>
            </Modal>
          </div>
          <ContactDocumentsTable />
          <CustomPagination count="1" />
          {/* <!-- Properties List End--> */}
        </div>
      </section>
      {/* <!-- Opportunity --> */}
      <section>
        <div className="custom-detail-list mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="custom-heading-h2">Opportunities</h2>
            <button
              type="button"
              className="bg-white border-1 custom-task-create"
              onClick={() => handleShow4()}
            >
              Create
            </button>
            <Modal show={showModal4} onHide={handleClose4}>
              <div className="modal-content p-32 custom-modal">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="modal-title" id="opportunitiesModalTitle">
                    Create Opprtunity
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => handleClose4()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="py-5">
                  <div className="row">
                    <div className="col-6">
                      <select
                        name="taskStatus"
                        id="taskStatus"
                        className="custom-select-form w-100"
                      >
                        <option value="Type">Type</option>
                        <option value="task">task</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="custom-search-bar pl-2"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="row pt-5">
                    <div className="col-12">
                      <select
                        name="taskStatus"
                        id="taskStatus"
                        className="custom-select-form w-100"
                      >
                        <option value="Type">Property</option>
                        <option value="task">task</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="custom-cancel-btn border-0"
                    onClick={() => handleClose4()}
                  >
                    Close
                  </button>
                  <button type="button" className="custom-save-btn border-0">
                    Create
                  </button>
                </div>
              </div>
            </Modal>
          </div>
          <ContactOpportunitiesTable />
          <CustomPagination count="1" />
        </div>
      </section>
      {/* <!-- Campaigns --> */}
      <section>
        <div className="custom-detail-list mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="custom-heading-h2">Campaigns</h2>
            <button
              type="button"
              className="bg-white border-1 custom-task-create"
              onClick={() => handleShow5()}
            >
              Create
            </button>
            <Modal show={showModal5} onHide={handleClose5}>
              <div className="modal-content p-32 custom-modal">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="modal-title" id="CampaignsModalTitle">
                    Create Campaigns
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => handleClose5()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="py-5 mb-5">
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        className="custom-search-bar pl-2"
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-6">
                      <select
                        name="taskStatus"
                        id="taskStatus"
                        className="custom-select-form w-100"
                      >
                        <option value="Type">Type</option>
                        <option value="task">task</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="custom-cancel-btn border-0"
                    onClick={() => handleClose5()}
                  >
                    Close
                  </button>
                  <button type="button" className="custom-save-btn border-0">
                    Create
                  </button>
                </div>
              </div>
            </Modal>
          </div>
          <ContactCampaignsTable />
          <CustomPagination count="1" />
        </div>
      </section>
      {/* <!-- History --> */}
      <section>
        <div className="custom-detail-list mt-5">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="custom-heading-h2">History</h2>
            <button
              type="button"
              className="bg-white border-1 custom-task-create"
              onClick={() => handleShow6()}
            >
              Create
            </button>
            <Modal show={showModal6} onHide={handleClose6}>
              <div className="modal-content p-32 custom-modal">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="modal-title" id="HistoryModalTitle">
                    Create Note
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => handleClose6()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="py-5 mb-5" id="CreateNoteForm">
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="text"
                        className="custom-search-bar pl-2"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="custom-cancel-btn border-0"
                    onClick={() => handleClose6()}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="custom-save-btn border-0"
                    onclick="CreateNote()"
                  >
                    Create
                  </button>
                </div>
              </div>
            </Modal>
          </div>
          <ContactHistoryTable />
          <CustomPagination count="1" />
        </div>
      </section>
    </main>
  );
}
