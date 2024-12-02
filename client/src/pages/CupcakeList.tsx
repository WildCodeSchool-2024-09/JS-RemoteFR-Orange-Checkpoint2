import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

type AccessoryArray = { id: number; name: string; slug: string }[];

function CupcakeList() {
  const cupcakes = useLoaderData() as {
    id: number;
    accessory: string;
    color1: string;
    color2: string;
    color3: string;
    name: string;
  }[];
  const [accessories, setAccessories] = useState<AccessoryArray>([]);
  const [selectedAccessory, setSelectedAccessory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3310/api/accessories")
      .then((response) => response.json())
      .then((data) => setAccessories(data as AccessoryArray))
      .catch((error) => console.error("Error fetching accessories:", error));
  }, []);

  const filteredCupcakes = selectedAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory === selectedAccessory)
    : cupcakes;

  return (
    <div>
      <h1>Cupcake List</h1>
      <select
        id="cupcake-select"
        value={selectedAccessory}
        onChange={(e) => setSelectedAccessory(e.target.value)}
      >
        <option value="">---</option>
        {accessories.map((accessory) => (
          <option key={accessory.id} value={accessory.slug}>
            {accessory.name}
          </option>
        ))}
      </select>
      <div className="cupcake-list">
        {filteredCupcakes.map((cupcake) => (
          <Cupcake key={cupcake.id} data={cupcake} />
        ))}
      </div>
    </div>
  );
}

export default CupcakeList;
