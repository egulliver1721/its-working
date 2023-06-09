import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetails from "./pages/Vandetails";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/HostVans";
import HostVanDetails from "./pages/host/HostVanDetails";
import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanPricing from "./pages/host/HostVanPricing";
import PageNotFound from "./pages/pageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VanDetails />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="vans" element={<HostVans />} />

        <Route path="vans/:id" element={<HostVanDetails />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="Photos" element={<HostVanPhotos />} />
        </Route>

        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
