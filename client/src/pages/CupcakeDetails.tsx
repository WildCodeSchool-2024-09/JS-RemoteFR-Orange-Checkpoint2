import { useLoaderData, useParams } from "react-router-dom";

type CupcakeProps = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};

function CupcakeDetails() {
  const { id } = useParams<{ id: string }>();
  const data = useLoaderData() as { cupcakes: CupcakeProps[] };

  const cupcake = data.cupcakes.find((cupcake) => cupcake.id === Number(id));

  if (!cupcake) {
    return <div>Cupcake not found</div>;
  }

  return (
    <div>
      <h1>Cupcake Details</h1>
      <div>
        <h2>{cupcake.name}</h2>
        <p>Accessory: {cupcake.accessory}</p>
        <p>
          Colors: {cupcake.color1}, {cupcake.color2}, {cupcake.color3}
        </p>
      </div>
    </div>
  );
}

export default CupcakeDetails;