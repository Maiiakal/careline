import "whatwg-fetch";
import React from "react";

import Scheduler from "devextreme-react/scheduler";
import CustomStore from "devextreme/data/custom_store";

function getData(_, requestOptions) {
  const PUBLIC_KEY = "AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k";
  const CALENDAR_ID = "f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com";
  const dataUrl = [
    "https://www.googleapis.com/calendar/v3/calendars/",
    CALENDAR_ID,
    "/events?key=",
    PUBLIC_KEY,
  ].join("");

  // return fetch(dataUrl, requestOptions)
  //   .then((response) => response.json()) 
  //   .then((data) => data.items);

  return [
    {
      eventName: "Weekly Meeting",
      start: { dateTime: "2022-05-24T10:30:00", timezone: "UTC" },
      end: { dateTime: "2022-05-24T11:00:00", timezone: "UTC" },
    },
    {
      eventName: "Weekly Meeting 2",
      start: { dateTime: "2022-05-24T12:30:00+01:00", timezone: "UTC" },
      end: { dateTime: "2022-05-24T13:00:00+01:00", timezone: "UTC" },
    },
  ];
}

const dataSource = new CustomStore({
  load: (options) => getData(options, { showDeleted: false }),
});

const events = {
  eventName: "Weekly Meeting",
  start: { dateTime: "2022-05-24T10:30:00+01:00", timezone: "UTC" },
  end: { dateTime: "2022-05-24T11:00:00+01:00", timezone: "UTC" },
};

// const dataSource = new CustomStore({
//   load: function(){
//         return event1;
//   }
// });

const currentDate = new Date();
const views = ["day", "workWeek", "month"];

class CalendarUI extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Scheduler
          dataSource={dataSource}
          views={views}
          defaultCurrentView="workWeek"
          defaultCurrentDate={currentDate}
          height={500}
          startDayHour={7}
          editing={false}
          showAllDayPanel={false}
          startDateExpr="start.dateTime"
          endDateExpr="end.dateTime"
          textExpr="eventName"
          timeZone="Israel"
        />
      </React.Fragment>
    );
  }
}

export default CalendarUI;
