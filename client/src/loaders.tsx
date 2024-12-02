export const fetchCupcakesAndAccessories = async () => {
  const [cupcakesResponse, accessoriesResponse] = await Promise.all([
    fetch("http://localhost:3310/api/cupcakes"),
    fetch("http://localhost:3310/api/accessories"),
  ]);

  if (!cupcakesResponse.ok || !accessoriesResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const cupcakes = await cupcakesResponse.json();
  const accessories = await accessoriesResponse.json();

  return { cupcakes, accessories };
};
