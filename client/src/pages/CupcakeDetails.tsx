import { useLoaderData } from "react-router-dom";
import Cupcake from "../components/Cupcake";

type CupeCakeDetails = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

const CupcakeDetails = () => {
  const cupcake = useLoaderData() as CupeCakeDetails;

  return <Cupcake data={cupcake} />;
};

export default CupcakeDetails;
