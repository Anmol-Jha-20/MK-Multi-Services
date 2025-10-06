import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import AboutPage from "./Pages/About.jsx";
import ContactPage from "./Pages/Contact.jsx";
import Gallery from "./Pages/Gallery.jsx";
import ConstructionService from "./Pages/Services Pages/ConstructionService.jsx";
import ManpowerConstructionServices from "./Pages/Services Pages/ManpowerService.jsx";
import FlooringConstructionServices from "./Pages/Services Pages/FlooringService.jsx";
import BuildingContractorsServices from "./Pages/Services Pages/BuildingContractors.jsx";
import PaintingServices from "./Pages/Services Pages/PaintingServices.jsx";
import DesigningServices from "./Pages/Services Pages/DesigningService.jsx";
import InstallationServices from "./Pages/Services Pages/InstallationService.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/construction-service",
        element: <ConstructionService />,
      },
      {
        path: "/manpower-service",
        element: <ManpowerConstructionServices />,
      },
      {
        path: "/flooring-services",
        element: <FlooringConstructionServices />,
      },
      {
        path: "/building-contractors",
        element: <BuildingContractorsServices />,
      },
      {
        path: "/painting-services",
        element: <PaintingServices />,
      },
      {
        path: "/designing-service",
        element: <DesigningServices />,
      },
      {
        path: "/installation-service",
        element: <InstallationServices />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
