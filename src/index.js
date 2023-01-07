import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import FacilitiesPage from "./Pages/Facilities";
import RulesPage from "./Pages/RulesPage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";
import BodhPage from "./Pages/BodhPage";
import JeevanCharitra from "./Pages/JeevanCharitra";
import MandirGalleryPage from "./Pages/MandirGallery";
import PratimajiPage from "./Pages/PratimajiPage";
import MusicPage from "./Pages/AllMusic";

import "./index.scss";
import "./player.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ashram-gallery",
    element: <GalleryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/rules",
    element: <RulesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/facilities",
    element: <FacilitiesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact-us",
    element: <ContactPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mandir-gallery",
    element: <MandirGalleryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bodh",
    element: <BodhPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pratimaji",
    element: <PratimajiPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jeevan-charitra",
    element: <JeevanCharitra />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/most-popular",
    element: <MusicPage />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
