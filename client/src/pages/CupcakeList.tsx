import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Cupcake from "../components/Cupcake";

type CupcakeProps = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

type Accessory = {
  id: number;
  name: string;
  slug: string;
};

function CupcakeList() {
  const data = useLoaderData() as {
    cupcakes: CupcakeProps[];
    accessories: Accessory[];
  };
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  const filteredCupcakes = selectedAccessory
    ? data.cupcakes.filter((cupcake) => cupcake.accessory === selectedAccessory)
    : data.cupcakes;

  return (
    <>
      <h1>My cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filter by{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {data.accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.slug}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>
      <ul className="cupcake-list" id="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <li key={cupcake.id} className="cupcake-item">
            <Link to={`/cupcakes/${cupcake.id}`}>
              <Cupcake data={cupcake} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CupcakeList;
