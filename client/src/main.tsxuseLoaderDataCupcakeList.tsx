export async function cupcakeLoader() {
  const response = await fetch("http://localhost:3310/api/cupcakes");

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des cupcakes !");
  }

  const data = await response.json();
  return data; // Retourne les données des cupcakes
}
