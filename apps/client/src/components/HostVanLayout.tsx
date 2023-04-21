import React from "react";
import { Outlet } from "react-router-dom";
import HostVanDetails from "../pages/host/HostVanDetails";

const HostVanLayout = () => {
  return (
    <>
      <HostVanDetails />
      <Outlet />
    </>
  );
};

export default HostVanLayout;
