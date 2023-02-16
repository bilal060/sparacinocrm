import React from "react";
import { PipelineCard } from "../../../components/card";
import Dropdown from "../../../components/dropdown";
import { PipelineHeading } from "../../../components/heading";
import SubNav from "../../../components/sub-nav";
export default function PipelineLeads() {
  return (
    <main class="  pt-0 ">
        <SubNav item1="Pipeline" item2="Finalization" item3="Marketing"/>

      <div class="tab-content " id="pills-tabContent">
        <div
          class="tab-pane fade in active"
          id="pipeline-leads-pill"
          role="tabpanel"
          aria-labelledby="pipeline-leads-pill-tab"
        >
          <main class="custom-main-content mt-2 pt-0">
            <h1 class="custom-heading">Leads</h1>

            <div class="d-inline-flex align-items-end">
              <div class="pipeline-item  d-flex align-items-end">
                <div class="position-relative custom-search-filter w-100">
                  <input
                    type="text"
                    placeholder="Search this board"
                    class="w-100"
                  />
                  <div class="position-absolute custom-search-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M0.367188 6.86621C0.367188 10.3037 3.16406 13.1006 6.60156 13.1006C7.96094 13.1006 9.20312 12.6631 10.2266 11.9287L14.0703 15.7803C14.25 15.96 14.4844 16.0459 14.7344 16.0459C15.2656 16.0459 15.6328 15.6475 15.6328 15.124C15.6328 14.874 15.5391 14.6475 15.375 14.4834L11.5547 10.6396C12.3594 9.59277 12.8359 8.28809 12.8359 6.86621C12.8359 3.42871 10.0391 0.631836 6.60156 0.631836C3.16406 0.631836 0.367188 3.42871 0.367188 6.86621ZM1.70312 6.86621C1.70312 4.16309 3.89844 1.96777 6.60156 1.96777C9.30469 1.96777 11.5 4.16309 11.5 6.86621C11.5 9.56934 9.30469 11.7646 6.60156 11.7646C3.89844 11.7646 1.70312 9.56934 1.70312 6.86621Z"
                        fill="#767B84"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="pipeline-item ">
                <Dropdown label="City" option1="Barkely" option2="Dubai"/>
              </div>
              <div class="pipeline-item"></div>
              <div class="pipeline-item">
              <Dropdown label="Sort" option1="Last Updated" option2="Dubai"/>
              </div>
            </div>

            <div class="d-inline-flex mt-4 pt-3 mb-5">
              <div class="pipeline-item">
                <PipelineHeading heading="Business Development Call"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>
              </div>
              <div class="pipeline-item">
              <PipelineHeading heading=" Not selling"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Create first appointment"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>
              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="First appointment confirmed"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Create second appointment"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Second appointment confirmed"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Sign listing agreement"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Signing of listing agreement confirmed"/>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
              <PipelineHeading heading="Finish Leads Cycle"/>
              </div>
            </div>
          </main>
        </div>

        <div
          class="tab-pane fade"
          id="pipeline-marketing-pill"
          role="tabpanel"
          aria-labelledby="pipeline-marketing-pill-tab"
        >
          <main class="custom-main-content mt-2 pt-0">
            <h1 class="custom-heading">Marketing</h1>

            <div class="d-inline-flex align-items-end">
              <div class="pipeline-item  d-flex align-items-end">
                <div class="position-relative custom-search-filter w-100">
                  <input
                    type="text"
                    placeholder="Search this board"
                    class="w-100"
                  />
                  <div class="position-absolute custom-search-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M0.367188 6.86621C0.367188 10.3037 3.16406 13.1006 6.60156 13.1006C7.96094 13.1006 9.20312 12.6631 10.2266 11.9287L14.0703 15.7803C14.25 15.96 14.4844 16.0459 14.7344 16.0459C15.2656 16.0459 15.6328 15.6475 15.6328 15.124C15.6328 14.874 15.5391 14.6475 15.375 14.4834L11.5547 10.6396C12.3594 9.59277 12.8359 8.28809 12.8359 6.86621C12.8359 3.42871 10.0391 0.631836 6.60156 0.631836C3.16406 0.631836 0.367188 3.42871 0.367188 6.86621ZM1.70312 6.86621C1.70312 4.16309 3.89844 1.96777 6.60156 1.96777C9.30469 1.96777 11.5 4.16309 11.5 6.86621C11.5 9.56934 9.30469 11.7646 6.60156 11.7646C3.89844 11.7646 1.70312 9.56934 1.70312 6.86621Z"
                        fill="#767B84"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="pipeline-item ">
                <form class="d-flex flex-column m-0">
                  <label class="custom-label-city mb-1" for="">
                    City
                  </label>
                  <select name="City" class="custom-select-city w-100">
                    <option value="Barkely">Barkely</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                </form>
              </div>
              <div class="pipeline-item"></div>
              <div class="pipeline-item">
                <form class="d-flex flex-column m-0">
                  <label class="custom-label-city mb-1" for="">
                    sort
                  </label>
                  <select name="City" class="custom-select-city w-100">
                    <option value="Barkely">Last Updated</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                </form>
              </div>
            </div>

            <div class="d-inline-flex mt-4 pt-3 mb-5">
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Create Marketing Material
                </p>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Cold Call Buyers
                </p>
              </div>
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Internal Email Blast
                </p>
              </div>
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Post on Premium Markets
                </p>
              </div>
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  External Marketing Blast
                </p>
              </div>
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Showing #1
                </p>
              </div>
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Showing #2
                </p>
              </div>
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Marketing Email Blast
                </p>
              </div>
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Showing #3
                </p>
              </div>
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Showing #4
                </p>
              </div>
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Final Marketing Email Blast
                </p>
              </div>
            </div>
          </main>
        </div>
        <div
          class="tab-pane fade"
          id="pipeline-finaliztion-pill"
          role="tabpanel"
          aria-labelledby="pipeline-finaliztion-pill-tab"
        >
          <main class="custom-main-content mt-2 pt-0">
            <h1 class="custom-heading">Finalization</h1>
            <div class="d-inline-flex align-items-end w-100">
              <div class="pipeline-item  d-flex align-items-end">
                <div class="position-relative custom-search-filter w-100">
                  <input
                    type="text"
                    placeholder="Search this board"
                    class="w-100"
                  />
                  <div class="position-absolute custom-search-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M0.367188 6.86621C0.367188 10.3037 3.16406 13.1006 6.60156 13.1006C7.96094 13.1006 9.20312 12.6631 10.2266 11.9287L14.0703 15.7803C14.25 15.96 14.4844 16.0459 14.7344 16.0459C15.2656 16.0459 15.6328 15.6475 15.6328 15.124C15.6328 14.874 15.5391 14.6475 15.375 14.4834L11.5547 10.6396C12.3594 9.59277 12.8359 8.28809 12.8359 6.86621C12.8359 3.42871 10.0391 0.631836 6.60156 0.631836C3.16406 0.631836 0.367188 3.42871 0.367188 6.86621ZM1.70312 6.86621C1.70312 4.16309 3.89844 1.96777 6.60156 1.96777C9.30469 1.96777 11.5 4.16309 11.5 6.86621C11.5 9.56934 9.30469 11.7646 6.60156 11.7646C3.89844 11.7646 1.70312 9.56934 1.70312 6.86621Z"
                        fill="#767B84"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="pipeline-item ">
                <form class="d-flex flex-column m-0">
                  <label class="custom-label-city mb-1" for="">
                    City
                  </label>
                  <select name="City" class="custom-select-city w-100">
                    <option value="Barkely">Barkely</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                </form>
              </div>
              <div class="pipeline-item"></div>
              <div class="pipeline-item">
                <form class="d-flex flex-column m-0">
                  <label class="custom-label-city mb-1" for="">
                    sort
                  </label>
                  <select name="City" class="custom-select-city w-100">
                    <option value="Barkely">Last Updated</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                </form>
              </div>
            </div>
            <div class="d-inline-flex mt-4 pt-3 mb-5">
              <div class="pipeline-item">
                <p class="text-Primary-Brand-Default font-16 font-weight-600 mb-5 pb-3">
                  Lorem Ipsum
                </p>
                <PipelineCard status="high" name="Mrs. Sarah Williamson" date1="22 Dec, 2022" date2="22 Dec, 2022" city="Dubai" properties="3" date3="22 Dec, 2022"/>

              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
}
