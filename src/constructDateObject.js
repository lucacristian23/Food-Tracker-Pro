export default function constructDateObject(date) {
  function getClosestMonday(date) {
    const theDate = new Date(date);
    const dayOfWeek = theDate.getDay();
    const diff = theDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Calculate Monday's date
    return new Date(theDate.setDate(diff));
  }

  function generateWeekArray(date) {
    const monday = getClosestMonday(date);
    const weekArray = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(monday);
      currentDate.setDate(monday.getDate() + i);
      const dayOfWeek = currentDate.toLocaleString("en-US", {
        weekday: "long",
      });
      const month = currentDate.toLocaleString("en-US", { month: "long" });
      const dayOfMonth = currentDate.getDate();
      const year = currentDate.getFullYear();

      const selected = currentDate.toLocaleString() === date.toLocaleString();

      weekArray.push({
        dayOfWeek,
        month,
        dayOfMonth,
        year,
        selected,
      });
    }

    return weekArray; // Return the generated week array
  }

  // Call the generateWeekArray function with the provided date
  return generateWeekArray(date);
}

// Fri Apr 19 2024 00:00:00 GMT+0300 (Eastern European Summer Time)
