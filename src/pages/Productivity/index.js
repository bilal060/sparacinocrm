import React from 'react'
import Datepicker from './DatePicker'
import Email from './Email'
import {MyCalendar} from './FullCalander'

export default function ProductivityPage() {
  return (
    <>
  
    <ul className="nav nav-pills justify-content-center custom-pills pb-4 mt-2 pt-4" id="pills-tab" role="tablist">
    <li className="active">
      <a id="email-pill-tab" data-toggle="pill" href="#email-pill" role="tab" aria-controls="email-pill"
        aria-selected="true">Email</a>
    </li>
    <li>
      <a id="calender-pill-tab" data-toggle="pill" href="#calender-pill" role="tab" aria-controls="calender-pill"
        aria-selected="false">Calender</a>
    </li>
    <li>
      <a id="tasks-pill-tab" data-toggle="pill" href="#tasks-pill" role="tab" aria-controls="tasks-pill"
        aria-selected="false">Tasks</a>
    </li>
  </ul>
  <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade" id="email-pill" role="tabpanel" aria-labelledby="email-pill-tab">
      <Email/>
    </div>
    <div className="tab-pane fade" id="calender-pill" role="tabpanel" aria-labelledby="calender-pill-tab">
      <div className="d-flex mt-3">
        <div className="custom-datepicker px-3">
       <Datepicker/>
          <div className="events-list mt-6">
            <p className="day text-highlight"> <span className="font-weight-700">Today </span> 11/27/2022</p>
            <ul>
              <li>
                <span className="event-list-time">8:30 - 9:30 </span>
                <span className="events-list-member">Meet Tony </span>
              </li>
              <li>
                <span className="event-list-time">8:30 - 9:30 </span>

                <span className="events-list-member">Meet Tony </span>
              </li>
            </ul>
          </div>
          <div className="events-list">
            <p className="day"> <span className="font-weight-700">Tommorow </span> 11/27/2022</p>
            <ul>
              <li>
                <span className="event-list-time">8:30 - 9:30 </span>

                <span className="events-list-member">Meet Tony </span>
              </li>
              <li>
                <span className="event-list-time">8:30 - 9:30 </span>

                <span className="events-list-member">Meet Tony </span>
              </li>
            </ul>
          </div>
          <div className="events-list">
            <p className="day"> <span className="font-weight-700">Tommorow </span> 11/27/2022</p>
            <ul>
              <li>
                <span className="event-list-time">8:30 - 9:30 </span>

                <span className="events-list-member">Meet Tony </span>
              </li>
              <li>
                <span className="event-list-time">8:30 - 9:30 </span>

                <span className="events-list-member">Meet Tony </span>
              </li>
            </ul>
          </div>
        </div>
        <div id='calendar'>

<MyCalendar/>

        </div>

        <script src="/sparacinocrm/custom/themes/tpls/calender.js"></script>

      </div>
    </div>
  </div>
</>
  )
}
