import SelectForm from "./SelectForm";

function DailyFoodForm({ dateFood }) {
  console.log(dateFood);

  const addLocalStorage = function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const inputValue = e.target.elements.foodInput.value; // Access input value
    console.log(inputValue); // Log the input value
    let format = `${dateFood.dayOfMonth}/${dateFood.month}/${dateFood.year}`;
    localStorage.setItem(format, inputValue);
  };

  return (
    <>
      <h4
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          border: "1px solid black",
        }}
      >
        {dateFood.dayOfMonth} of {dateFood.month} {dateFood.year}
      </h4>
      <SelectForm />
      {/*  <form onSubmit={addLocalStorage}>
        <input name="foodInput" />

        <button type="submit">Submit</button>
  </form> */}
    </>
  );
}

export default DailyFoodForm;
