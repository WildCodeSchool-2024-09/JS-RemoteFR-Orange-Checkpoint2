import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cupcake from "../components/Cupcake";

const Cupcakes = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simule un appel API basé sur l'ID
    fetch(`http://localhost:3310/api/cupcakes/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [id]);

  if (!item) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <Cupcake data={item} />
    </div>
  );
};

export default Cupcakes;
