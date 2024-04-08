import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core CSS

function FoodData({ products, header }) {
  const columns = [
    { field: "name", header: "Name" },
    { field: "servingSize", header: "Serving Size" },
    { field: "protein", header: "Protein" },
    { field: "carbohydrates", header: "Carbohydrates" },
    { field: "fat_total_g", header: "Total Fat" },
    { field: "fat_saturated_g", header: "Saturated Fat" },
    { field: "cholesterol_mg", header: "Cholesterol (mg)" },
    { field: "sodium_mg", header: "Sodium (mg)" },
    { field: "potassium_mg", header: "Potassium (mg)" },
    { field: "fiber_g", header: "Fiber (g)" },
    { field: "sugar_g", header: "Sugar (g)" },
    { field: "calories", header: "Calories" },
  ];

  return (
    <>
      <DataTable
        value={products}
        header={header}
        showGridlines
        tableStyle={{ minWidth: "60rem" }}
      >
        {columns.map((col, i) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </>
  );
}

export default FoodData;
