import "./App.css";

import React, { useState } from "react";
import StarComponent from "./StarComponent";
import WeekComponent from "./WeekComponent";

function App() {
  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "zaiZsw1Xy5uXNB+6+lpC9Q==vuvPL6daJmPuIocx";
        const query = "maple syrup";

        const response = await fetch(
          `https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(
            query
          )}`,
          {
            headers: {
              "X-Api-Key": apiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render
*/

  const [startDisplay, setStartDisplay] = useState(true);
  const [weekDisplay, setWeekDisplay] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      {startDisplay && (
        <StarComponent
          setStartDisplay={setStartDisplay}
          startDisplay={startDisplay}
          setWeekDisplay={setWeekDisplay}
          weekDisplay={weekDisplay}
        />
      )}
      {weekDisplay && (
        <WeekComponent
          setStartDisplay={setStartDisplay}
          startDisplay={startDisplay}
          setWeekDisplay={setWeekDisplay}
          weekDisplay={weekDisplay}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      )}
    </div>
  );
}

export default App;
