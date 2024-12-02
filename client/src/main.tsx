// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import CupcakeDetails from "./pages/CupcakeDetails";
import CupcakeList from "./pages/CupcakeList";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";

// 1. Fonction pour charger les cupcakes depuis l'API
const fetchCupcakes = async () => {
  const response = await fetch("http://localhost:3310/api/cupcakes");
  if (!response.ok) {
    throw new Error("Failed to fetch cupcakes");
  }
  return response.json(); // Retourne les cupcakes sous forme de tableau JSON
};

// 2. Déclarez les routes avec le loader sur `/cupcakes`
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/cupcakes",
        element: <CupcakeList />,
        loader: fetchCupcakes, // liez le loader à la route
      },
      {
        path: "/cupcakes/:id", // Nouvelle route pour les détails du cupcake
        element: <CupcakeDetails />,
      },
    ],
  },
]);

// Trouvez la racine HTML
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error(`Your HTML document should contain a <div id="root"></div>`);
}

// Montez l'application
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
