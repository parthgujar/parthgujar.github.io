import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import BodhPage from "./Pages/Mandir/BodhPage";
import JeevanCharitra from "./Pages/Mandir/JeevanCharitra";
import MandirGalleryPage from "./Pages/Mandir/MandirGallery";
import PratimajiPage from "./Pages/PratimajiPage";
import SwadhyayDaily from "./Pages/Swadhaya/SwadhyayDaily";
import BhaktiAllAlbums from "./Pages/Bhakti/BhaktiAllAlbums";
import AshramPage from "./Pages/AshramPage";
import BhaktiDaily from "./Pages/Bhakti/BhaktiDaily";
import BhaktiPopular from "./Pages/Bhakti/BhaktiPopular";
import MandirHistory from "./Pages/Mandir/MandirHistory";

import "react-accessible-accordion/dist/fancy-example.css";
import "./index.scss";
import "./player.scss";
import BhaktiVideo from "./Pages/Bhakti/BhaktiVideo";
import SwadhyayPopular from "./Pages/Swadhaya/SwadhyayPopular";
import SwadhyayVideo from "./Pages/Swadhaya/SwadhyayVideo";
import SwadhyayAllAlbums from "./Pages/Swadhaya/SwadyayAllAlbums";

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
    path: "/mandir-history",
    element: <MandirHistory />,
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
    element: <BhaktiDaily />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bhakti-popular",
    element: <BhaktiPopular />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bhakti-videos",
    element: <BhaktiVideo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bhakti-all-songs",
    element: <BhaktiAllAlbums />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/swadhyay-daily",
    element: <SwadhyayDaily />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/swadhyay-popular",
    element: <SwadhyayPopular />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/swadhyay-videos",
    element: <SwadhyayVideo />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/swadhyay-all-songs",
    element: <SwadhyayAllAlbums />,
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
