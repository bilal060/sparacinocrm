import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

export const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  return (
    <>
      <div className="S_Form float-right">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text Icon" id="basic-addon1">
              <i className="fa fa-search"></i>
            </span>
          </div>
          <input type="text" className="form-control imput_Field" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </div>

      <div>
        <FullCalendar
          editable
          selectable
          events={'https://fullcalendar.io/api/demo-feeds/events.json'}
          headerToolbar={{
            start: "prev today next",
            end: "dayGridDay dayGridWeek dayGridMonth dayGridYear",
          }}
          plugins={[daygridPlugin, interactionPlugin]}
          views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
          eventContent={(arg) => {
            return (
              <div className="event-box p-2" >
                <p className="m-0 font-12 text-Secondar-70 font-weight-400">ar</p>
                <p className="m-0 font-12 text-Secondar-70 font-weight-600">assa</p>
              </div>

            )
          }}
        />
      </div>
    </>
  );
};