import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeStyle: React.CSSProperties = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          end
          to="/host"
          style={({
            isActive,
          }: {
            isActive: boolean;
          }): React.CSSProperties | undefined =>
            isActive ? activeStyle : undefined
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/Vans"
          style={({
            isActive,
          }: {
            isActive: boolean;
          }): React.CSSProperties | undefined =>
            isActive ? activeStyle : undefined
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/Income"
          style={({
            isActive,
          }: {
            isActive: boolean;
          }): React.CSSProperties | undefined =>
            isActive ? activeStyle : undefined
          }
        >
          Income
        </NavLink>
        <NavLink
          to="/host/Reviews"
          style={({
            isActive,
          }: {
            isActive: boolean;
          }): React.CSSProperties | undefined =>
            isActive ? activeStyle : undefined
          }
        >
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
};

export default HostLayout;
