import * as React from "react";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarValue({ selectedDate, setSelectedDate }) {
  // const [value, setValue] = React.useState(dayjs("2022-04-17"));

  const [value, setValue] = React.useState(function () {
    let date = new Date();

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const dateString = `${year}-${month}-${day}`;
    if (!selectedDate) return dayjs(dateString);
    else return selectedDate;
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        value={value}
        onChange={function (newValue) {
          setSelectedDate(newValue);

          return setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
