import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";
import { useEffect, useState } from "react";

/* ************************************************************************* */
/* const sampleCupcakes = [
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
]; */

/* type CupcakeArray = typeof sampleCupcakes; */

/* you can use sampleCupcakes if you're stucked on step 1 */
/* if you're fine with step 1, just ignore this ;) */
/* ************************************************************************* */

type Cupcake = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

export async function CupcakeLoader() {
  const response = await fetch('http://localhost:3310/api/cupcakes');
  if (!response.ok) {
    throw new Error('Failed to fetch cupcakes');
  }
  const cupcakes = await response.json();
  return cupcakes;
}

function CupcakeList() {

  type Accessory = {
    id: string;
    name: string;
    slug: string;
  };

  // Step 1: get all cupcakes
  const cupcakes = useLoaderData() as Cupcake[]; // Charge les données récupérées par le loader

  console.info('Cupcakes:', cupcakes);

  // Step 3: get all accessories
  const [accessories, setAccessories] = useState<Accessory[]>([]);

  useEffect(() => {
    async function fetchAccessories() {
      const response = await fetch('http://localhost:3310/api/accessories');
      if (!response.ok) {
        throw new Error('Failed to fetch accessories');
      }
      const accessories = await response.json();
      setAccessories(accessories);
    }
    fetchAccessories();
  }, []);

  console.info('Accessories:', accessories);

  // Step 5: create filter state
  const [selectedAccessory, setSelectedAccessory] = useState('');

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          {/* Step 5: use a controlled component for select */}

          <>
            Filter by{" "}
            <select id="cupcake-select" onChange={(e) => setSelectedAccessory(e.target.value)}>
              <option value="">---</option>
              {accessories.map(accessory => (
                <option value={accessory.id} key={accessory.id}>{accessory.name}</option>
              ))}
              {/* Step 4: add an option for each accessory */}
            </select>
          </>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {/* Step 2: repeat this block for each cupcake */}
        {selectedAccessory === '' ? cupcakes.map(cupcake => (
          <li className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        )) : cupcakes.filter(cupcake => cupcake.accessory_id === selectedAccessory).map(cupcake => (
          <li className="cupcake-item">
            <Cupcake data={cupcake} />
          </li>
        ))}
        {/* Step 5: filter cupcakes before repeating */}
        {/* end of block */}
      </ul>
    </>
  );
}

export default CupcakeList;

