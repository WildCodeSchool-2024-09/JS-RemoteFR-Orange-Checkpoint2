import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

// Données d'exemple de cupcakes
const sampleCupcakes = [
  {
    id: 10,
    accessory_id: "4",
    accessory: "wcs",
    color1: "bleu",
    color2: "blanc",
    color3: "rouge",
    name: "France",
  },
  {
    id: 11,
    accessory_id: "4",
    accessory: "wcs",
    color1: "jaune",
    color2: "rouge",
    color3: "noir",
    name: "Allemagne",
  },
  {
    id: 27,
    accessory_id: "5",
    accessory: "christmas-candy",
    color1: "jaune",
    color2: "bleu",
    color3: "bleu",
    name: "Suède",
  },
];

type CupcakeArray = typeof sampleCupcakes;

type Accessory = {
  id: string;
  name: string;
};

function CupcakeList() {
  // Charger les cupcakes en utilisant useLoaderData
  const cupcakes = useLoaderData() as CupcakeArray;

  // État pour gérer les accessoires et l'accessoire sélectionné
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [selectedAccessory, setSelectedAccessory] = useState<string>("");

  // Récupérer les accessoires depuis l'API
  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/accessories");
        const data: Accessory[] = await response.json();
        setAccessories(data);
      } catch (error) {
        console.error(
          "Erreur·lors·de·la·récupération·des·accessoires·:",
          error,
        );
      }
    };

    fetchAccessories();
  }, []);

  // Filtrer les cupcakes en fonction de l'accessoire sélectionné
  const filteredCupcakes = selectedAccessory
    ? cupcakes.filter((cupcake) => cupcake.accessory_id === selectedAccessory)
    : cupcakes;

  return (
    <>
      <h1>Mes Cupcakes</h1>
      <form className="center">
        <label htmlFor="cupcake-select">
          Filtrer par{" "}
          <select
            id="cupcake-select"
            value={selectedAccessory}
            onChange={(e) => setSelectedAccessory(e.target.value)}
          >
            <option value="">---</option>
            {accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </label>
      </form>

      <ul className="cupcake-list">
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
