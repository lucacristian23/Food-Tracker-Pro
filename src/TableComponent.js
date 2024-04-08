import "./index.css";
function TableComponent({
  data,
  displayContainer,
  setDisplayContainer,
  dateFood,
  setDateFood,
}) {
  // const [displayDailyFoodForm, setDisplayDailyFoodForm] = useState(false);

  const defaultValue = 1;
  const localStorageKey = `${data.dayOfMonth}/${data.month}/${data.year}`;

  const storedValue = localStorage.getItem(localStorageKey);

  const valueFromLocalStorage = storedValue ? storedValue : defaultValue;

  return (
    <div>
      <div
        className={`custom-table ${data?.selected ? "selected" : ""}`}
        onClick={function () {
          setDateFood(data);
          // setDisplayDailyFoodForm(true);
          setDisplayContainer(false);
        }}
      >
        <div className="row">
          <div className="cell1" style={{ height: "7vh" }}>
            {data.dayOfWeek}, {data.dayOfMonth}, {data.month}
          </div>
        </div>
        <div className="row">
          <div className="cell" style={{ height: "2vh" }}>
            Cell 2
          </div>
          <div className="cell" style={{ height: "2vh" }}>
            {valueFromLocalStorage}
          </div>
        </div>

        <div className="row">
          <div className="cell" style={{ height: "2vh" }}>
            Cell 2
          </div>
          <div className="cell" style={{ height: "2vh" }}>
            Cell 3
          </div>
        </div>

        <div className="row">
          <div className="cell" style={{ height: "2vh" }}>
            Cell 2
          </div>
          <div className="cell" style={{ height: "2vh" }}>
            Cell 3
          </div>
        </div>

        <div className="row">
          <div className="cell" style={{ height: "2vh" }}>
            Cell 2
          </div>
          <div className="cell" style={{ height: "2vh" }}>
            Cell 3
          </div>
        </div>

        <div className="row">
          <div className="cell" style={{ height: "2vh" }}>
            Cell 2
          </div>
          <div className="cell" style={{ height: "2vh" }}>
            Cell 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
