import "./index.css";

import DateCalendarValue from "./DateCalendarValue";
import TableComponent from "./TableComponent";
import constructDateObject from "./constructDateObject";
import { useState } from "react";
import DailyFoodForm from "./DailyFoodForm";
function WeekComponent({
  startDisplay,
  setStartDisplay,
  weekDisplay,
  setWeekDisplay,
  selectedDate,
  setSelectedDate,
}) {
  let dateObject = null;
  if (selectedDate?.$d) {
    dateObject = constructDateObject(selectedDate.$d);
    console.log(dateObject);
  }
  const [displayContainer, setDisplayContainer] = useState(true);
  const [dateFood, setDateFood] = useState(null);

  return (
    <div>
      {displayContainer && (
        <DateCalendarValue
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
      {displayContainer && (
        <div className="table_container">
          {dateObject?.map((data) => (
            <TableComponent
              data={data}
              key={data.dayOfMonth}
              setDisplayContainer={setDisplayContainer}
              displayContainer={displayContainer}
              dateFood={dateFood}
              setDateFood={setDateFood}
            />
          ))}
        </div>
      )}

      {!displayContainer && <DailyFoodForm dateFood={dateFood} />}
      <button
        className="backButton button"
        onClick={() => {
          setStartDisplay(true);
          setWeekDisplay(false);
        }}
      >
        BACK
      </button>
    </div>
  );
}

export default WeekComponent;
