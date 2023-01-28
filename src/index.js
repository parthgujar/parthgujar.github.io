import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import BodhPage from "./Pages/BodhPage";
import JeevanCharitra from "./Pages/JeevanCharitra";
import MandirGalleryPage from "./Pages/MandirGallery";
import PratimajiPage from "./Pages/PratimajiPage";
import MostPopular from "./Pages/MostPopular";
import Nityakram from "./Pages/Nityakram";
import AllCDs from "./Pages/Allcds";
import AllAlbums from "./Pages/AllAlbums";
import AshramPage from "./Pages/AshramPage";

import "react-accessible-accordion/dist/fancy-example.css";
import "./index.scss";
import "./player.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/ashram",
    element: <AshramPage />,
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
    path: "/bhakti-daily",
    element: <Nityakram />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bhakti-popular",
    element: <MostPopular />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bhakti-videos",
    element: <AllCDs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bhakti-all-songs",
    element: <AllAlbums />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/swadhyay-daily",
    element: <Nityakram />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/swadhyay-popular",
    element: <MostPopular />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/swadhyay-videos",
    element: <AllCDs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/swadhyay-all-songs",
    element: <AllAlbums />,
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
