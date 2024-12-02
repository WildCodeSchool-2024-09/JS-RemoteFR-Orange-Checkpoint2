import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

type CupcakeData = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

function CupcakeDetails() {
  const { id } = useParams<{ id: string }>(); // Récupérer l'ID depuis l'URL
  const [cupcake, setCupcake] = useState<CupcakeData | null>(null);

  useEffect(() => {
    // Charger les détails du cupcake depuis l'API en fonction de l'ID
    const fetchCupcake = async () => {
      try {
        const response = await fetch(
          `http://localhost:3310/api/cupcakes/${id}`,
        );
        const data = await response.json();
        setCupcake(data); // Stocke les données du cupcake
      } catch (error) {
        console.error(
          "Erreur lors du chargement des détails du cupcake:",
          error,
        );
      }
    };

    fetchCupcake();
  }, [id]); // Recharge les données quand l'ID change

  // Affichage du cupcake ou d'un message de chargement
  if (!cupcake) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{cupcake.name}</h1>
      <Cupcake data={cupcake} />{" "}
      {/* Affiche le cupcake avec le composant Cupcake */}
    </div>
  );
}

export default CupcakeDetails;
