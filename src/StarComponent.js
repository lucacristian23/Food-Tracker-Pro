import "./index.css";

function StarComponent({
  startDisplay,
  setStartDisplay,
  weekDisplay,
  setWeekDisplay,
}) {
  return (
    <div>
      <h3 className="title">Food Tracker Pro</h3>
      <h4 className="subTitle">
        Keeping track of what you eat was never so easy
      </h4>
      <button
        className="button buttonStart"
        onClick={function () {
          setStartDisplay((s) => (s = false));
          setWeekDisplay((s) => (s = true));
        }}
      >
        Start Planning
      </button>
      <button className="button buttonRecord">Records</button>
    </div>
  );
}
export default StarComponent;
