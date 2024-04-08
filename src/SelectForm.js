import React, { useState, useEffect, useReducer } from "react";
import Select, { components } from "react-select";
import { colourOptions, mealOptions, weightOptions } from "./data";
import NumberInputBasic from "./NumberInputBasic";
import FoodData from "./FoodData";

function SelectForm() {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [amount, setAmount] = useState(100);
  const [clicked, setClicked] = useState(false);
  const [productsBreakFast, setProductsBreakFast] = useState(null);

  const [productsLunch, setProductsLunch] = useState(null);

  const [productsDinner, setProductsDinner] = useState(null);

  const [productsSnack, setProductsSnack] = useState(null);
  const [productsTotal, setProductsTotal] = useState(null);
  let defaultValues = {
    name: "",
    servingSize: 0,
    protein: 0,
    carbohydrates: 0,
    fat_total_g: 0,
    fat_saturated_g: 0,
    cholesterol_mg: 0,
    sodium_mg: 0,
    potassium_mg: 0,
    fiber_g: 0,
    sugar_g: 0,
    calories: 0,
  };
  const [state, dispatch] = useReducer(reducer, defaultValues);

  function reducer(state, action) {
    console.log("action.payload.protein:", action.payload.protein);
    console.log("state.protein:", state.protein);

    return {
      ...state, // maintain the existing state properties
      protein: action.payload.protein + state.protein,
      carbohydrates: action.payload.carbohydrates_total_g + state.carbohydrates,
      fat_total_g: action.payload.fat_total_g + state.fat_total_g,
      fat_saturated_g: action.payload.fat_saturated_g + state.fat_saturated_g,
      cholesterol_mg: action.payload.cholesterol_mg + state.cholesterol_mg,
      sodium_mg: action.payload.sodium_mg + state.sodium_mg,
      potassium_mg: action.payload.potassium_mg + state.potassium_mg,
      fiber_g: action.payload.fiber_g + state.fiber_g,
      sugar_g: action.payload.sugar_g + state.sugar_g,
      calories: action.payload.calories + state.calories,
    };
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "zaiZsw1Xy5uXNB+6+lpC9Q==vuvPL6daJmPuIocx";
        const query = `${amount} ${selectedOption3.value} ${selectedOption1.value}`;

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

        if (selectedOption2.value === "breakfast") {
          setProductsBreakFast((p) => [
            ...(p ?? []),
            {
              name: data[0].name,
              servingSize: data[0].serving_size_g,
              protein: data[0].protein_g,
              carbohydrates: data[0].carbohydrates_total_g,
              fat_total_g: data[0].fat_total_g,
              fat_saturated_g: data[0].fat_saturated_g,
              cholesterol_mg: data[0].cholesterol_mg,
              sodium_mg: data[0].sodium_mg,
              potassium_mg: data[0].potassium_mg,
              fiber_g: data[0].fiber_g,
              sugar_g: data[0].sugar_g,
              calories: data[0].calories,
            },
          ]);
        }

        if (selectedOption2.value === "lunch") {
          setProductsLunch((p) => [
            ...(p ?? []),
            {
              name: data[0].name,
              servingSize: data[0].serving_size_g,
              protein: data[0].protein_g,
              carbohydrates: data[0].carbohydrates_total_g,
              fat_total_g: data[0].fat_total_g,
              fat_saturated_g: data[0].fat_saturated_g,
              cholesterol_mg: data[0].cholesterol_mg,
              sodium_mg: data[0].sodium_mg,
              potassium_mg: data[0].potassium_mg,
              fiber_g: data[0].fiber_g,
              sugar_g: data[0].sugar_g,
              calories: data[0].calories,
            },
          ]);
        }

        if (selectedOption2.value === "dinner") {
          setProductsDinner((p) => [
            ...(p ?? []),
            {
              name: data[0].name,
              servingSize: data[0].serving_size_g,
              protein: data[0].protein_g,
              carbohydrates: data[0].carbohydrates_total_g,
              fat_total_g: data[0].fat_total_g,
              fat_saturated_g: data[0].fat_saturated_g,
              cholesterol_mg: data[0].cholesterol_mg,
              sodium_mg: data[0].sodium_mg,
              potassium_mg: data[0].potassium_mg,
              fiber_g: data[0].fiber_g,
              sugar_g: data[0].sugar_g,
              calories: data[0].calories,
            },
          ]);
        }

        if (selectedOption2.value === "snack") {
          setProductsSnack((p) => [
            ...(p ?? []),
            {
              name: data[0].name,
              servingSize: data[0].serving_size_g,
              protein: data[0].protein_g,
              carbohydrates: data[0].carbohydrates_total_g,
              fat_total_g: data[0].fat_total_g,
              fat_saturated_g: data[0].fat_saturated_g,
              cholesterol_mg: data[0].cholesterol_mg,
              sodium_mg: data[0].sodium_mg,
              potassium_mg: data[0].potassium_mg,
              fiber_g: data[0].fiber_g,
              sugar_g: data[0].sugar_g,
              calories: data[0].calories,
            },
          ]);
        }
        dispatch({ type: "total", payload: data[0] });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [clicked]);

  const handleChange1 = (selectedOption) => {
    setSelectedOption1(selectedOption);
  };

  const handleChange2 = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };

  const handleChange3 = (selectedOption) => {
    setSelectedOption3(selectedOption);
  };

  const { Option, SingleValue } = components;

  const CustomOption = (props) => (
    <Option {...props}>
      {props.data.label}
      {props.data.isFixed && <span>(Fixed)</span>}
    </Option>
  );

  const CustomSingleValue = (props) => (
    <SingleValue {...props}>
      {props.data.label}
      {props.data.isFixed && <span>(Fixed)</span>}
    </SingleValue>
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            paddingLeft: "5 vw",
            width: "30%",
          }}
        >
          <div style={{ width: "60%" }}>
            <h4>Select your food</h4>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={colourOptions[0]}
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="color1"
              options={colourOptions}
              onChange={handleChange1}
              components={{
                Option: CustomOption,
                SingleValue: CustomSingleValue,
              }}
              value={selectedOption1}
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: "100%",
                }),
              }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <h4>Select meal time</h4>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={mealOptions[1]}
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="color2"
              options={mealOptions}
              onChange={handleChange2}
              components={{
                Option: CustomOption,
                SingleValue: CustomSingleValue,
              }}
              value={selectedOption2}
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: "100%",
                }),
              }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <h4>Select unit of measure</h4>
            <Select
              className="basic-single"
              classNamePrefix="select"
              defaultValue={weightOptions[0]}
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="color3"
              options={weightOptions}
              onChange={handleChange3}
              components={{
                Option: CustomOption,
                SingleValue: CustomSingleValue,
              }}
              value={selectedOption3}
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: "100%",
                }),
              }}
            />
          </div>

          <div style={{ width: "60%" }}>
            <h4>Select amount</h4>
            <NumberInputBasic
              aria-label="Demo number input"
              placeholder="Type a number…"
              amount={amount}
              setAmount={setAmount}
              value={amount}
              onChange={(event, val) => {
                console.log("Event:", event); // Check if the event object is correctly received
                console.log("New value:", val); // Check if the new value is correctly received
                setAmount(val); // Update the state with the new value
              }}
            />
          </div>
        </div>

        <div
          className="submitedFoodsContainer"
          style={{
            border: "1px solid black",
          }}
        >
          {productsBreakFast && (
            <FoodData products={productsBreakFast} header="Breakfast" />
          )}
          {productsLunch && (
            <FoodData products={productsLunch} header="Lunch" />
          )}
          {productsDinner && (
            <FoodData products={productsDinner} header="Dinner" />
          )}
          {productsSnack && (
            <FoodData products={productsSnack} header="Snack" />
          )}

          <FoodData products={[state]} header="Total" />
        </div>
      </div>

      <button
        className="button submitButton"
        onClick={function () {
          setClicked((c) => !c);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default SelectForm;
