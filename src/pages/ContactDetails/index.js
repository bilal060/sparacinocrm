import React, { useState } from "react";
import { ContactPropertiesTable, TaskTable } from "../../components/table";
import { Modal } from "react-bootstrap";
import CustomPagination from '../../components/pagination';

export default function ContactDetails() {
  const [showModal, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };
  return (
    <main className="custom-main-content main-padding">
      <section>
        <h1 className="custom-heading">
          <span className="text-Primary-Brand-Default">All Contacts </span>/ Mrs.
          Cynthia Baird
        </h1>
        <div className="row mx-0 mt-5">
          <div className="col-lg-5 pr-lg-5">
            <div className="bg-white p-4 custom-personal-detail h-100">
              <h3 className="custom-card-heading">Personal Detail</h3>

              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Age</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">47y 6m</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Home Address</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">
                    {" "}
                    525 E Maude Ave Sunnyvale, CA 94085
                  </p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Phone Numbers</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">(240)793-7288</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Home Number</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">(240)793-7288</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Mobile Number</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">-</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Email Address</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">c.baird@gmail.com</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Mailing Address</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">
                    525 E Maude Ave Sunnyvale, CA 94085m
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pt-lg-0 bg-white pt-4">
            <div className="bg-white p-4 custom-employment-detail h-100">
              <h3 className="custom-card-heading">Employment</h3>

              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Occupation</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">Physician</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Professional Licenses</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">Doctor</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Employer</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Employer Address</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">Lorem ipsum dolor</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Work Phone</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">1234256789</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Work Fax</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">-</p>
                </div>
              </div>
              <div className="row mx-0 mb-2">
                <div className="col-6">
                  <p className="custom-title">Work email</p>
                </div>
                <div className="col-6">
                  <p className="custom-title-detail ">c.baird@valleyhealth.com</p>
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
              // onClick={() => handleShow()}
            >
              Link Property
            </button>
            <Modal 
            // show={showModal} onHide={handleClose}
            >
              <div className="modal-content p-32 custom-modal">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="modal-title" id="LinkPropertyModalTitle">
                    Link Property
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={()=>handleClose() }
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
                    onClick={()=>handleClose()}
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
          <CustomPagination count="1"/>
        </div>
      </section>
      {/* <!-- Properties List --> */}
      {/* task list */}
      <section>
        <div className="custom-detail-list mt-5">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="custom-heading-h2">Tasks</h2>
                {/* <!-- Link Property modal --> */}
                <button type="button" className="bg-white border-1 custom-task-create" data-toggle="modal"
                    data-target="#CreateTaskModal" onClick={() => handleShow()}
                    >
                    Create Task
                </button>
                <Modal show={showModal} onHide={handleClose}>
                <div className="modal-content p-32 custom-modal">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="modal-title" id="CreateTaskModalTitle">Create Task</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="py-5" id="CreateTaskForm">
                                <div className="row">
                                    <div className="col-6">
                                        <input type="text" className="custom-search-bar pl-2" placeholder="Search Property"/>
                                    </div>
                                    <div className="col-6">
                                        <select name="taskStatus" id="taskStatus" className="custom-select-form w-100">
                                            <option value="Status">Status</option>
                                            <option value="task">task</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className="col-6">
                                        <input type="date" className="custom-search-bar pl-2"/>
                                    </div>
                                    <div className="col-6">
                                        <select name="taskStatus" id="taskStatus" className="custom-select-form w-100">
                                            <option value="Priority">Priority</option>
                                            <option value="task">task</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="button" className="custom-cancel-btn border-0"
                                    data-dismiss="modal">Close</button>
                                <button type="button" className="custom-save-btn border-0"
                                    onclick="ChangeCreateTask()">Create</button>
                            </div>
                        </div>
                </Modal>
                {/* <!-- Link Property modal --> */}
            </div>
            <TaskTable/>
            <CustomPagination count="1"/>
        </div>
    </section>
    </main>
  );
}
