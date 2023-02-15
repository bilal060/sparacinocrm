import React from 'react'
import { GISCard } from '../../components/card'

export default function GIS() {
  return (
    <>
    <div className="map-menu ">
  <div className="row">
    <div className="col-sm-3 col-12">
      <div className="position-relative custom-search w-100">
        <input type="text" placeholder="Search" />
        <div className="position-absolute custom-search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={17}
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
    <div className="col-sm-9 col-12 toolbar">
      <div className="menu-list">
        <ul className="m-0 p-0">
          `
          <li>
            <button
              className="bg-transparent border-0"
              type="button"
              id="MenuHomeButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={22}
                viewBox="0 0 25 22"
                fill="none"
              >
                <path
                  d="M3.75391 12.9443V21.1943H9.75391V15.1943C9.75391 14.3659 10.4255 13.6943 11.2539 13.6943H12.7539C13.5823 13.6943 14.2539 14.3659 14.2539 15.1943V21.1943H20.2539V12.9443"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.753906 11.4441L10.9429 1.25511C11.2242 0.973597 11.6059 0.81543 12.0039 0.81543C12.4019 0.81543 12.7836 0.973597 13.0649 1.25511L23.2539 11.4441"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            {/* Search Icon */}
            <button
              className="bg-transparent border-0"
              type="button"
              id="MenuSearchButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5404 18.8025C18.6351 17.0622 20.5438 12.332 18.8036 8.23728C17.0634 4.14253 12.3332 2.2338 8.23843 3.97403C4.14367 5.71426 2.23495 10.4445 3.97518 14.5392C5.71541 18.634 10.4456 20.5427 14.5404 18.8025Z"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.0859 17.084L23.3339 23.3329"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            {/* Layers */}
            <button
              className="bg-transparent border-0"
              type="button"
              id="MenuLayersButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                id="layersbtn"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.9167 6.20002L12.7077 0.92202C12.2636 0.69266 11.7359 0.69266 11.2917 0.92202L1.08272 6.20002C0.878328 6.30587 0.75 6.51684 0.75 6.74702C0.75 6.9772 0.878328 7.18817 1.08272 7.29402L11.2917 12.575C11.7359 12.8044 12.2636 12.8044 12.7077 12.575L22.9167 7.30002C23.1211 7.19417 23.2494 6.9832 23.2494 6.75302C23.2494 6.52284 23.1211 6.31187 22.9167 6.20602V6.20002Z"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.09972 9.375L1.08272 11.453C0.878328 11.5589 0.75 11.7698 0.75 12C0.75 12.2302 0.878328 12.4411 1.08272 12.547L11.2917 17.828C11.7359 18.0574 12.2636 18.0574 12.7077 17.828L22.9167 12.547C23.1211 12.4411 23.2494 12.2302 23.2494 12C23.2494 11.7698 23.1211 11.5589 22.9167 11.453L18.8997 9.375"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.09972 14.625L1.08272 16.7C0.878328 16.8059 0.75 17.0168 0.75 17.247C0.75 17.4772 0.878328 17.6881 1.08272 17.794L11.2917 23.075C11.7359 23.3044 12.2636 23.3044 12.7077 23.075L22.9167 17.8C23.1211 17.6941 23.2494 17.4832 23.2494 17.253C23.2494 17.0228 23.1211 16.8119 22.9167 16.706L18.8997 14.625"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            {/* List */}
            <button
              className="bg-transparent border-0"
              type="button"
              id="MenuListButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 6.24805C4.24264 6.24805 5.25 5.24069 5.25 3.99805C5.25 2.75541 4.24264 1.74805 3 1.74805C1.75736 1.74805 0.75 2.75541 0.75 3.99805C0.75 5.24069 1.75736 6.24805 3 6.24805Z"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 15.248C4.24264 15.248 5.25 14.2407 5.25 12.998C5.25 11.7554 4.24264 10.748 3 10.748C1.75736 10.748 0.75 11.7554 0.75 12.998C0.75 14.2407 1.75736 15.248 3 15.248Z"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 24.248C4.24264 24.248 5.25 23.2407 5.25 21.998C5.25 20.7554 4.24264 19.748 3 19.748C1.75736 19.748 0.75 20.7554 0.75 21.998C0.75 23.2407 1.75736 24.248 3 24.248Z"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 4.74805H23.25"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 13.748H23.25"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.25 22.748H23.25"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            {/* Edit */}
            <div className="dropdown">
              <button
                className="bg-transparent border-0"
                type="button"
                id="dropdownMenuEditButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  id="DrawPolygon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.19 1.81027C21.5021 1.12522 20.569 0.74351 19.5982 0.750084C18.6274 0.756657 17.6995 1.15096 17.021 1.84527L2.521 16.3453L0.75 23.2503L7.655 21.4793L22.155 6.97927C22.8493 6.30073 23.2436 5.37285 23.2502 4.40206C23.2568 3.43128 22.8751 2.49814 22.19 1.81027Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.6055 2.26074L21.7395 7.39474"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5117 4.35449L19.6457 9.48849"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.51953 16.3457L7.65853 21.4747"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuEditButton"
              >
                <p className="">Markup</p>
                <a className="dropdown-item" href="#">
                  Change Target Layer
                </a>
                <a className="dropdown-item" href="#">
                  Create New Markup
                </a>
                <a className="dropdown-item" href="#">
                  Turn Measure On
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Draw Polygon
                </a>
                <a className="dropdown-item" href="#">
                  Draw Line
                </a>
                <a className="dropdown-item" href="#">
                  Draw Circle
                </a>
                <a className="dropdown-item" href="#">
                  Draw Rectangle
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Draw Freehand Polygon
                </a>
                <a className="dropdown-item" href="#">
                  Draw Freehand Line
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Overlay Site Plan
                </a>
                <a className="dropdown-item" href="#">
                  Place Icon
                </a>
                <a className="dropdown-item" href="#">
                  Place Label
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Clear Drawing
                </a>
              </div>
            </div>
          </li>
          <li>
            {/* Measure  */}
            <div className="dropdown">
              <button
                className="bg-transparent border-0"
                type="button"
                id="dropdownMenuMeasureButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.56125 1.49964L22.5012 21.4396C22.7155 21.6541 22.7795 21.9765 22.6635 22.2566C22.5476 22.5366 22.2744 22.7194 21.9713 22.7196H2.78125C1.95282 22.7196 1.28125 22.0481 1.28125 21.2196V2.03064C1.28111 1.72731 1.46369 1.45377 1.74386 1.33754C2.02404 1.22131 2.34663 1.28529 2.56125 1.49964Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.78125 11.4697V18.2197H12.5312L5.78125 11.4697V11.4697Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.53125 5.46973L5.03125 6.96973"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.2812 9.21973L8.78125 10.7197"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0312 12.9697L12.5312 14.4697"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.7812 16.7197L16.2812 18.2197"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuMeasureButton"
              >
                <a className="dropdown-item" href="#">
                  Measure Polygon
                </a>
                <a className="dropdown-item" href="#">
                  Measure Line
                </a>
                <a className="dropdown-item" href="#">
                  Measure Circle
                </a>
              </div>
            </div>
          </li>
          <li>
            {/* Picture */}
            <div className="dropdown">
              <button
                className="bg-transparent border-0"
                type="button"
                id="dropdownMenuPictureButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="0.75"
                    y="0.75"
                    width="22.5"
                    height="22.5"
                    rx="1.5"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.25 17.25L8.712 12.634C8.97285 12.286 9.37191 12.0683 9.80575 12.0374C10.2396 12.0065 10.6655 12.1654 10.973 12.473L12 13.5L15.3 9.1C15.5833 8.72229 16.0279 8.5 16.5 8.5C16.9721 8.5 17.4167 8.72229 17.7 9.1L20.37 12.66"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.375 8.25C7.41053 8.25 8.25 7.41053 8.25 6.375C8.25 5.33947 7.41053 4.5 6.375 4.5C5.33947 4.5 4.5 5.33947 4.5 6.375C4.5 7.41053 5.33947 8.25 6.375 8.25Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.75 17.25H23.25"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuPictureButton"
              >
                <a className="dropdown-item" href="#">
                  Image (JPEG)
                </a>
                <a className="dropdown-item" href="#">
                  PDF (8.5x11 Potrait)
                </a>
                <a className="dropdown-item" href="#">
                  PDF (8.5x11 Landsc.)
                </a>
                <a className="dropdown-item" href="#">
                  PDF (11x17 Potrait)
                </a>
                <a className="dropdown-item" href="#">
                  PDF (11x17 Landsc.)
                </a>
              </div>
            </div>
          </li>
          <li>
            {/* Printer */}
            <div className="dropdown">
              <button
                className="bg-transparent border-0"
                type="button"
                id="dropdownMenuPrinterButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5.25 17.249H2.25C1.42157 17.249 0.75 16.5775 0.75 15.749V8.24902C0.75 7.4206 1.42157 6.74902 2.25 6.74902H21.75C22.5784 6.74902 23.25 7.4206 23.25 8.24902V15.749C23.25 16.5775 22.5784 17.249 21.75 17.249H18.75"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.75 9.74902H5.25"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.25 12.749H18.75V23.249H5.25V12.749Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.75 6.74902H5.25V2.24902C5.25 1.4206 5.92157 0.749023 6.75 0.749023H17.25C18.0784 0.749023 18.75 1.4206 18.75 2.24902V6.74902Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.25 15.749H15.75"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.25 18.749H13.5"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuPrinterButton"
              >
                <a className="dropdown-item" href="#">
                  8.5 x 11
                </a>
                <a className="dropdown-item" href="#">
                  11 x 8.5
                </a>
                <a className="dropdown-item" href="#">
                  11 x 17
                </a>
                <a className="dropdown-item" href="#">
                  17 x 11
                </a>
                <a className="dropdown-item" href="#">
                  Advanced Printer
                </a>
              </div>
            </div>
          </li>
          <li>
            {/* Production */}
            <div className="dropdown">
              <button
                className="bg-transparent border-0"
                type="button"
                id="dropdownMenuProductionButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={22}
                  viewBox="0 0 24 22"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.307 1.83772C15.9494 1.69472 15.5506 1.69472 15.193 1.83772L8.80701 4.39272C8.44944 4.53572 8.05058 4.53572 7.69301 4.39272L1.77901 2.02672C1.54729 1.93385 1.28456 1.96236 1.07815 2.10277C0.871749 2.24318 0.748735 2.47709 0.75001 2.72672V17.0997C0.749907 17.7132 1.12339 18.2649 1.69301 18.4927L7.69301 20.8927C8.05058 21.0357 8.44944 21.0357 8.80701 20.8927L15.193 18.3377C15.5506 18.1947 15.9494 18.1947 16.307 18.3377L22.221 20.6997C22.4527 20.7926 22.7155 20.7641 22.9219 20.6237C23.1283 20.4833 23.2513 20.2494 23.25 19.9997V5.63072C23.2501 5.01724 22.8766 4.46553 22.307 4.23772L16.307 1.83772Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.25 4.5V21"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.75 1.73047V18.2305"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuProductionButton"
              >
                <a className="dropdown-item" href="#">
                  Production
                </a>
                <a className="dropdown-item" href="#">
                  Home
                </a>
                <a className="dropdown-item" href="#">
                  Home Mobile
                </a>
                <a className="dropdown-item" href="#">
                  Open
                </a>
                <a className="dropdown-item" href="#">
                  Save
                </a>
                <a className="dropdown-item" href="#">
                  Save Copy As...
                </a>
              </div>
            </div>
          </li>
          <li>
            {/* Book Mark */}
            <div className="dropdown">
              <button
                className="bg-transparent border-0"
                type="button"
                id="dropdownMenuBookMarkButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={24}
                  viewBox="0 0 18 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.059 23.105L9.882 18.613C9.35613 18.2307 8.64387 18.2307 8.118 18.613L1.941 23.105C1.71309 23.2707 1.41154 23.2946 1.16033 23.167C0.909112 23.0394 0.750618 22.7818 0.75 22.5V2.25C0.75 1.42157 1.42157 0.75 2.25 0.75H15.75C16.5784 0.75 17.25 1.42157 17.25 2.25V22.5C17.2494 22.7818 17.0909 23.0394 16.8397 23.167C16.5885 23.2946 16.2869 23.2707 16.059 23.105V23.105Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.25 16.1447L9.882 10.7867C9.35613 10.4044 8.64387 10.4044 8.118 10.7867L0.75 16.1447"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuBookMarkButton"
              >
                <a className="dropdown-item" href="#">
                  Add Bookmark
                </a>
                <a className="dropdown-item" href="#">
                  Remove Bookmark
                </a>
              </div>
            </div>
          </li>
          <li>
            {/* Setting */}
            <div className="dropdown">
              <button
                className="bg-transparent border-0"
                type="button"
                id="dropdownMenuSettingButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.546 2.43763C10.9171 2.84958 11.4455 3.08477 12 3.08477C12.5545 3.08477 13.0829 2.84958 13.454 2.43763L14.4 1.39963C14.9556 0.784771 15.8379 0.585987 16.6035 0.903209C17.369 1.22043 17.8521 1.98503 17.81 2.81263L17.739 4.21263C17.7112 4.7649 17.9183 5.30317 18.309 5.69446C18.6997 6.08575 19.2377 6.29359 19.79 6.26663L21.19 6.19563C22.017 6.15485 22.7804 6.63848 23.0968 7.40369C23.4132 8.16891 23.2143 9.05041 22.6 9.60563L21.558 10.5456C21.1466 10.9172 20.9118 11.4457 20.9118 12.0001C20.9118 12.5545 21.1466 13.083 21.558 13.4546L22.6 14.3946C23.2149 14.9502 23.4136 15.8325 23.0964 16.5981C22.7792 17.3636 22.0146 17.8468 21.187 17.8046L19.787 17.7336C19.2335 17.7052 18.6938 17.9126 18.3019 18.3045C17.91 18.6964 17.7025 19.2361 17.731 19.7896L17.802 21.1896C17.8387 22.0129 17.3563 22.771 16.595 23.0865C15.8337 23.4021 14.9564 23.2074 14.4 22.5996L13.459 21.5586C13.0876 21.1473 12.5593 20.9125 12.005 20.9125C11.4507 20.9125 10.9224 21.1473 10.551 21.5586L9.606 22.5996C9.0504 23.2103 8.17154 23.4071 7.40854 23.0917C6.64554 22.7763 6.1622 22.0164 6.2 21.1916L6.272 19.7916C6.30047 19.2381 6.09302 18.6984 5.7011 18.3065C5.30918 17.9146 4.76952 17.7072 4.216 17.7356L2.816 17.8066C1.98873 17.8498 1.22381 17.3677 0.905883 16.6027C0.587955 15.8378 0.785828 14.9555 1.4 14.3996L2.441 13.4596C2.85242 13.088 3.08722 12.5595 3.08722 12.0051C3.08722 11.4507 2.85242 10.9222 2.441 10.5506L1.4 9.60563C0.787888 9.05038 0.590308 8.17059 0.906222 7.40692C1.22214 6.64326 1.98351 6.16017 2.809 6.19963L4.209 6.27063C4.76359 6.29979 5.30448 6.09206 5.69699 5.69917C6.0895 5.30628 6.2967 4.76519 6.267 4.21063L6.2 2.80963C6.16129 1.9845 6.64431 1.22375 7.40754 0.907791C8.17076 0.591835 9.05017 0.788574 9.606 1.39963L10.546 2.43763Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 16.501C14.4853 16.501 16.5 14.4863 16.5 12.001C16.5 9.5157 14.4853 7.50098 12 7.50098C9.51472 7.50098 7.5 9.5157 7.5 12.001C7.5 14.4863 9.51472 16.501 12 16.501Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuSettingButton"
              >
                <a className="dropdown-item" href="#">
                  Upload File
                </a>
                <a className="dropdown-item" href="#">
                  Toogle Fullscreen
                </a>
                <a className="dropdown-item" href="#">
                  Upload Logo
                </a>
                <a className="dropdown-item" href="#">
                  Share Folders
                </a>
                <a className="dropdown-item" href="#">
                  Toggle Tooltip Off
                </a>
              </div>
            </div>
          </li>
          <li>
            {/* Synchronize */}
            {/* Button trigger modal */}
            <button
              type="button"
              className="bg-transparent border-0"
              data-toggle="modal"
              data-target="#TImeView"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={22}
                viewBox="0 0 24 22"
                fill="none"
              >
                <path
                  d="M13.5 21C18.8848 21 23.25 16.6348 23.25 11.25C23.25 5.86522 18.8848 1.5 13.5 1.5C8.11522 1.5 3.75 5.86522 3.75 11.25V12"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.75 8.99707L3.75 11.9971L6.75 8.99707"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.75 5.24707V11.9971H18"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
            </button>
            {/* Modal */}
            <div
              className="modal fade"
              id="TImeView"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="TImeViewTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Time View
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer"></div>
                </div>
              </div>
            </div>
          </li>
          <li>
            {/* Alerts */}
            <div className="dropdown">
              <button
                className="bg-transparent border-0"
                type="button"
                id="dropdownMenuHelpButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 8.99962C9.00029 7.47405 10.1455 6.19163 11.6613 6.01938C13.1771 5.84713 14.5808 6.8399 14.9234 8.32651C15.266 9.81312 14.4383 11.3201 13 11.8286C12.4004 12.0406 11.9997 12.6077 12 13.2436V14.2496"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17.25C11.7929 17.25 11.625 17.4179 11.625 17.625C11.625 17.8321 11.7929 18 12 18C12.2071 18 12.375 17.8321 12.375 17.625C12.375 17.4179 12.2071 17.25 12 17.25V17.25"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z"
                    stroke="#507A9B"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuHelpButton"
              >
                <a className="dropdown-item" href="#">
                  Toolbar Help
                </a>
                <a className="dropdown-item" href="#">
                  Quick Start Video
                </a>
                <a className="dropdown-item" href="#">
                  Support &amp; Resource Center
                </a>
                <a className="dropdown-item" href="#">
                  About LandVision
                </a>
              </div>
            </div>
          </li>
          <li>
            {/* Undo  */}
            <button
              className="bg-transparent border-0"
              type="button"
              id="MenuUndpButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M0.75 1.74805V9.24805H8.25"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0004 24.2478C17.7224 24.2511 22.5354 19.9589 23.1844 14.2738C23.8334 8.58875 20.1117 3.32217 14.5362 2.03578C8.96064 0.749383 3.30773 3.85303 1.40039 9.24779"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            {/* redo */}
            <button
              className="bg-transparent border-0"
              type="button"
              id="MenuUndpButton"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M24.25 1.74805V9.24805H16.75"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.9995 24.2478C7.27753 24.2511 2.46455 19.9589 1.81553 14.2738C1.16651 8.58875 4.88823 3.32217 10.4638 2.03578C16.0393 0.749383 21.6922 3.85303 23.5995 9.24779"
                  stroke="#507A9B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ul className="checkbox-list mt-3 mb-0 p-0">
    <li>
      <div className="dropdown">
        <label className="custom-checkbox">
          <p
            className="bg-transparent border-0 w-100 dropdown-toggle"
            type="button"
            id="dropdownMenuIncludeAreaButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Include Area
          </p>
          <div
            className="dropdown-menu custom-dropdown-menu"
            aria-labelledby="dropdownMenuIncludeAreaButton"
          >
            <h5 className="dropdown-heeading">Include Area</h5>
            <a className="dropdown-item" href="#">
              Add Polygon
            </a>
            <a className="dropdown-item" href="#">
              Add Circle
            </a>
            <a className="dropdown-item" href="#">
              Add Line
            </a>
          </div>
          <input type="checkbox" className="menu-list-checkbox" />
          <span className="checkmark" />
        </label>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <label className="custom-checkbox">
          <p
            className="bg-transparent border-0 w-100"
            type="button"
            id="dropdownMenuExcludeAreaButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Exclude Area
          </p>
          <div
            className="dropdown-menu custom-dropdown-menu"
            aria-labelledby="dropdownMenuExcludeAreaButton"
          >
            <h5 className="dropdown-heeading">Exclude Area</h5>
            <a className="dropdown-item" href="#">
              Add Polygon
            </a>
            <a className="dropdown-item" href="#">
              Add Circle
            </a>
            <a className="dropdown-item" href="#">
              Add Line
            </a>
          </div>
          <input type="checkbox" className="menu-list-checkbox" />
          <span className="checkmark" />
        </label>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <label className="custom-checkbox" htmlFor="Location">
          <p
            className="bg-transparent border-0 w-100"
            type="button"
            id="dropdownMenLocationButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Location
          </p>
          <div
            className="dropdown-menu custom-dropdown-menu"
            aria-labelledby="dropdownMenLocationButton"
          >
            <h5 className="dropdown-heeading">Location</h5>
            <div className="d-flex align-items-center">
              <a className="custom-btn">Select All</a>
              <a className="custom-btn">Select None</a>
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                City
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Starts With</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Zip
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Starts With</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Street Name
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Starts With</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                County
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Starts With</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                State Abv.
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Starts With</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
          </div>
          <input
            type="checkbox"
            className="menu-list-checkbox"
            id="Location"
            defaultValue="value1"
          />
          <span className="checkmark" />
        </label>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <label className="custom-checkbox" htmlFor="ProtoType">
          <p
            className="bg-transparent border-0 w-100"
            type="button"
            id="dropdownMenLocationButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Property Type
          </p>
          <div
            className="dropdown-menu custom-dropdown-menu"
            aria-labelledby="dropdownMenLocationButton"
          >
            <h5 className="dropdown-heeading">Property Type</h5>
            <div className="d-flex align-items-center">
              <a className="custom-btn">Select All</a>
              <a className="custom-btn">Select None</a>
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Multi Family
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Duplex, Triplex, Quadraplex
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Single Family
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Condominium, PUD
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Vacant Residential
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Mobile / Manufacturer
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Residential
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Industrial
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Office
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Retail
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Entertainment
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Hotel / Motel
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Healt care
              </label>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Commercial
              </label>
            </div>
          </div>
          <input
            type="checkbox"
            className="menu-list-checkbox"
            id="ProtoType"
            defaultValue="value1"
          />
          <span className="checkmark" />
        </label>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <label className="custom-checkbox" htmlFor="Characteristics">
          <p
            className="bg-transparent border-0 w-100"
            type="button"
            id="dropdownMenLocationButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Characteristics
          </p>
          <div
            className="dropdown-menu custom-dropdown-menu"
            aria-labelledby="dropdownMenLocationButton"
          >
            <h5 className="dropdown-heeading">Characteristics</h5>
            <div className="d-flex align-items-center">
              <a className="custom-btn">Select All</a>
              <a className="custom-btn">Select None</a>
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Year Built
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
              -<input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Number of Units
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
              -<input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Building Size
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
              -<input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Lot Size
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
              -<input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Lot Size
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
              -<input type="text" className="map-screen-input" />
            </div>
          </div>
          <input
            type="checkbox"
            className="menu-list-checkbox"
            id="Characteristics"
            defaultValue="value1"
          />
          <span className="checkmark" />
        </label>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <label className="custom-checkbox" htmlFor="Last-Market-Sale">
          <p
            className="bg-transparent border-0 w-100"
            type="button"
            id="dropdownMenLocationButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Last Market Sale
          </p>
          <div
            className="dropdown-menu custom-dropdown-menu"
            aria-labelledby="dropdownMenLocationButton"
          >
            <h5 className="dropdown-heeading">Last Market Sale</h5>
            <div className="d-flex align-items-center">
              <a className="custom-btn">Select All</a>
              <a className="custom-btn">Select None</a>
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                People i have not contacted
              </label>
            </div>
            <ul className="ml-4 mt-3">
              <li>
                <label className="radio-container">
                  Less 3 Month
                  <input type="radio" defaultChecked="checked" name="radio" />
                  <span className="radio-checkmark" />
                </label>
              </li>
              <li>
                <label className="radio-container">
                  Less 6 Month
                  <input type="radio" defaultChecked="checked" name="radio" />
                  <span className="radio-checkmark" />
                </label>
              </li>
              <li>
                <label className="radio-container">
                  Less 12 Month
                  <input type="radio" defaultChecked="checked" name="radio" />
                  <span className="radio-checkmark" />
                </label>
              </li>
              <li className="w-100">
                <label className="radio-container">
                  Custom
                  <input type="radio" defaultChecked="checked" name="radio" />
                  <span className="radio-checkmark" />
                  <div className="w-100" />
                  Last
                  <input type="text" className="map-screen-input" />
                  Month
                </label>
                <div className="d-flex " style={{ gap: 10 }}></div>
              </li>
            </ul>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Last Sale Price
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
              -<input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Seller name
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Assesed Value
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
              -<input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Improvement Pct
              </label>
            </div>
            <div
              className="d-flex align-items-cente r mt-4"
              style={{ gap: 10 }}
            >
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Assesed Land Value
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Assesed Improvement Value
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
          </div>
          <input
            type="checkbox"
            className="menu-list-checkbox"
            id="Last-Market-Sale"
            defaultValue="value1"
          />
          <span className="checkmark" />
        </label>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <label className="custom-checkbox" htmlFor="Ownership">
          <p
            className="bg-transparent border-0 w-100"
            type="button"
            id="dropdownMenLocationButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Ownership
          </p>
          <div
            className="dropdown-menu custom-dropdown-menu"
            aria-labelledby="dropdownMenLocationButton"
          >
            <h5 className="dropdown-heeading">Ownership</h5>
            <div className="d-flex align-items-center">
              <a className="custom-btn">Select All</a>
              <a className="custom-btn">Select None</a>
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                People i have not contacted
              </label>
            </div>
            <ul className="ml-5 mt-3">
              <li className="w-100">
                <div
                  className="d-flex align-items-center mt-5"
                  style={{ gap: 10 }}
                >
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-1"
                    type="checkbox"
                    defaultChecked=""
                    defaultValue="value1"
                  />
                  <label
                    htmlFor="styled-checkbox-1"
                    className="styled-checkbox-label"
                  >
                    First Owner Name
                  </label>
                </div>
                <div
                  className="d-flex align-items-center mt-4"
                  style={{ gap: 10 }}
                >
                  <select name="Cityy" id="Cityy" className="map-screen-select">
                    <option value="Starts With">Contains</option>
                  </select>
                  <input type="text" className="map-screen-input" />
                </div>
              </li>
              <li className="w-100">
                <div
                  className="d-flex align-items-center mt-5"
                  style={{ gap: 10 }}
                >
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-1"
                    type="checkbox"
                    defaultChecked=""
                    defaultValue="value1"
                  />
                  <label
                    htmlFor="styled-checkbox-1"
                    className="styled-checkbox-label"
                  >
                    Second Owner Name
                  </label>
                </div>
                <div
                  className="d-flex align-items-center mt-4"
                  style={{ gap: 10 }}
                >
                  <select name="Cityy" id="Cityy" className="map-screen-select">
                    <option value="Starts With">Contains</option>
                  </select>
                  <input type="text" className="map-screen-input" />
                </div>
              </li>
            </ul>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Address
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                City
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
          </div>
          <input
            type="checkbox"
            className="menu-list-checkbox"
            id="Ownership"
            defaultValue="value1"
          />
          <span className="checkmark" />
        </label>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <label className="custom-checkbox" htmlFor="Debts">
          <p
            className="bg-transparent border-0 w-100"
            type="button"
            id="dropdownMenLocationButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Debts
          </p>
          <div
            className="dropdown-menu custom-dropdown-menu"
            aria-labelledby="dropdownMenLocationButton"
          >
            <h5 className="dropdown-heeading">Debts</h5>
            <div className="d-flex align-items-center">
              <a className="custom-btn">Select All</a>
              <a className="custom-btn">Select None</a>
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Last Loan Amount
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
              -<input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Last Loan Maturity Date
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
              -<input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Last Loan Orignization Date
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
              -<input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Lender Name
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Document No.
              </label>
            </div>
            <div className="d-flex align-items-center mt-4" style={{ gap: 10 }}>
              <select name="Cityy" id="Cityy" className="map-screen-select">
                <option value="Starts With">Between</option>
              </select>
              <input type="text" className="map-screen-input" />
            </div>
          </div>
          <input
            type="checkbox"
            className="menu-list-checkbox"
            id="Debts"
            defaultValue="value1"
          />
          <span className="checkmark" />
        </label>
      </div>
    </li>
    <li>
      <div className="dropdown">
        <label className="custom-checkbox" htmlFor="People">
          <p
            className="bg-transparent border-0 w-100"
            type="button"
            id="dropdownMenLocationButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            People
          </p>
          <div
            className="dropdown-menu custom-dropdown-menu"
            aria-labelledby="dropdownMenLocationButton"
          >
            <h5 className="dropdown-heeading">People</h5>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                People i have not contacted
              </label>
            </div>
            <ul className="ml-4 mt-3">
              <li>
                <label className="radio-container">
                  Less 3 Month
                  <input type="radio" defaultChecked="checked" name="radio" />
                  <span className="radio-checkmark" />
                </label>
              </li>
              <li>
                <label className="radio-container">
                  Less 6 Month
                  <input type="radio" defaultChecked="checked" name="radio" />
                  <span className="radio-checkmark" />
                </label>
              </li>
              <li>
                <label className="radio-container">
                  Less 12 Month
                  <input type="radio" defaultChecked="checked" name="radio" />
                  <span className="radio-checkmark" />
                </label>
              </li>
              <li className="w-100">
                <label className="radio-container">
                  Custom
                  <input type="radio" defaultChecked="checked" name="radio" />
                  <span className="radio-checkmark" />
                  <div className="w-100" />
                  Last
                  <input type="text" className="map-screen-input" />
                  Month
                </label>
                <div className="d-flex " style={{ gap: 10 }}></div>
              </li>
            </ul>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Only Show Following People
              </label>
            </div>
            <ul className="ml-5">
              <li>
                <div
                  className="d-flex align-items-center mt-2"
                  style={{ gap: 10 }}
                >
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-1"
                    type="checkbox"
                    defaultChecked=""
                    defaultValue="value1"
                  />
                  <label
                    htmlFor="styled-checkbox-1"
                    className="styled-checkbox-label"
                  >
                    Leads
                  </label>
                </div>
              </li>
              <li>
                <div
                  className="d-flex align-items-center mt-2"
                  style={{ gap: 10 }}
                >
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-1"
                    type="checkbox"
                    defaultChecked=""
                    defaultValue="value1"
                  />
                  <label
                    htmlFor="styled-checkbox-1"
                    className="styled-checkbox-label"
                  >
                    Contacts
                  </label>
                </div>
              </li>
              <li>
                <div
                  className="d-flex align-items-center mt-2"
                  style={{ gap: 10 }}
                >
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-1"
                    type="checkbox"
                    defaultChecked=""
                    defaultValue="value1"
                  />
                  <label
                    htmlFor="styled-checkbox-1"
                    className="styled-checkbox-label"
                  >
                    Accountsss
                  </label>
                </div>
              </li>
            </ul>
            <div className="d-flex align-items-center mt-5" style={{ gap: 10 }}>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                defaultChecked=""
                defaultValue="value1"
              />
              <label
                htmlFor="styled-checkbox-1"
                className="styled-checkbox-label"
              >
                Pipline
              </label>
            </div>
            <ul className="ml-5">
              <li>
                <div
                  className="d-flex align-items-center mt-2"
                  style={{ gap: 10 }}
                >
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-1"
                    type="checkbox"
                    defaultChecked=""
                    defaultValue="value1"
                  />
                  <label
                    htmlFor="styled-checkbox-1"
                    className="styled-checkbox-label"
                  >
                    Leads
                  </label>
                </div>
              </li>
              <li>
                <div
                  className="d-flex align-items-center mt-2"
                  style={{ gap: 10 }}
                >
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-1"
                    type="checkbox"
                    defaultChecked=""
                    defaultValue="value1"
                  />
                  <label
                    htmlFor="styled-checkbox-1"
                    className="styled-checkbox-label"
                  >
                    Marketing
                  </label>
                </div>
              </li>
              <li>
                <div
                  className="d-flex align-items-center mt-2"
                  style={{ gap: 10 }}
                >
                  <input
                    className="styled-checkbox"
                    id="styled-checkbox-1"
                    type="checkbox"
                    defaultChecked=""
                    defaultValue="value1"
                  />
                  <label
                    htmlFor="styled-checkbox-1"
                    className="styled-checkbox-label"
                  >
                    Finalization
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <input
            type="checkbox"
            className="menu-list-checkbox"
            id="People"
            defaultValue="value1"
          />
          <span className="checkmark" />
        </label>
      </div>
    </li>
    <li className="font-16 font-weight-700 text-Primary-Brand-Default ml-2 mt-1">
      Clear Filter
    </li>
  </ul>
</div>

    <div class="position-relative">
    <div id="propertylistinmap">
        <div class="property-list-map">
            <div class="list-header d-flex justify-content-between align-items-center ">
                <h2 class="results">21 Results</h2>
                <button class="button-blue">Add all to campaign</button>
            </div>
            <div class="list">
                <GISCard location="525 Roosevelt Ave, Sunnyvale" neighborhood="Rockridge" area="10,598" units="18" type="Apartment House" />
                <GISCard location="525 Roosevelt Ave, Sunnyvale" neighborhood="Rockridge" area="10,598" units="18" type="Apartment House" />
                <GISCard location="525 Roosevelt Ave, Sunnyvale" neighborhood="Rockridge" area="10,598" units="18" type="Apartment House" />
                <GISCard location="525 Roosevelt Ave, Sunnyvale" neighborhood="Rockridge" area="10,598" units="18" type="Apartment House" />
                <GISCard location="525 Roosevelt Ave, Sunnyvale" neighborhood="Rockridge" area="10,598" units="18" type="Apartment House" />
                <GISCard location="525 Roosevelt Ave, Sunnyvale" neighborhood="Rockridge" area="10,598" units="18" type="Apartment House" />
                <GISCard location="525 Roosevelt Ave, Sunnyvale" neighborhood="Rockridge" area="10,598" units="18" type="Apartment House" />
                <GISCard location="525 Roosevelt Ave, Sunnyvale" neighborhood="Rockridge" area="10,598" units="18" type="Apartment House" />
                <GISCard location="525 Roosevelt Ave, Sunnyvale" neighborhood="Rockridge" area="10,598" units="18" type="Apartment House" />
                <GISCard location="525 Roosevelt Ave, Sunnyvale" neighborhood="Rockridge" area="10,598" units="18" type="Apartment House" />
            </div>

        </div>
    </div>
</div>
</>
  )
}
