import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

/* ************************************************************************* */
const sampleCupcakes = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "blue",
    color2: "white",
    color3: "red",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "yellow",
    color2: "red",
    color3: "black",
    name: "Germany",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "yellow",
    color2: "blue",
    color3: "blue",
    name: "Sweden",
  },
];

type CupcakeArray = typeof sampleCupcakes;

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

function CupcakeList() {
  // Step 1: get all cupcakes
  console.info(useLoaderData() as CupcakeArray);

  // Step 3: get all accessories
  const accessories: { id: number; name: string; slug: string }[] = [];

  // Step 5: create filter state
  const [filter, setFilter] = useState<number | null>(null);

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">Filter by{""}:</label>
        {/* Step 5: use a controlled component for select */}
        <select
          id="cupcake-select"
          value={filter ?? ""}
          onChange={(e) =>
            setFilter(e.target.value ? Number.parseInt(e.target.value) : null)
          }
        >
          <option value="">---</option>
          <option value="4">Wild</option>
          <option value="5">Christmas Candy</option>
          {/* Step 4: add an option for each accessory */}
          {accessories.map((accessory) => (
            <option key={accessory.id} value={accessory.id}>
              {accessory.name}
            </option>
          ))}
        </select>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 5: filter cupcakes before repeating */}
        {sampleCupcakes
          .filter((cupcake) =>
            filter ? cupcake.accessory_id === filter.toString() : true,
          )
          .map((cupcake) => (
            <li key={cupcake.id} className="cupcake-item">
              <Cupcake data={cupcake} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default CupcakeList;
