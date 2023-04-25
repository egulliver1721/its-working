import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <header>
        <NavLink to="/">#VANLIFE</NavLink>
        <nav>
          <NavLink
            style={({
              isActive,
            }: {
              isActive: boolean;
            }): React.CSSProperties | undefined =>
              isActive ? activeStyle : undefined
            }
            to="/host"
          >
            Host
          </NavLink>
          <NavLink
            style={({
              isActive,
            }: {
              isActive: boolean;
            }): React.CSSProperties | undefined =>
              isActive ? activeStyle : undefined
            }
            to="/about"
          >
            {" "}
            About
          </NavLink>
          <NavLink
            style={({
              isActive,
            }: {
              isActive: boolean;
            }): React.CSSProperties | undefined =>
              isActive ? activeStyle : undefined
            }
            to="/vans"
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;

/**
 * Challenge - part 1:
 * Make the main navbar indicate the currently-active route. (You can
 * leave the home link alone, since it's doubling as our logo. Only
 * make changes to the /host, /about, and /vans links)
 *
 * Use the following CSS rules:
 *      font-weight: bold;
 *      text-decoration: underline;
 *      color: #161616;
 *
 * You can use either inline styles or a className.
 */
