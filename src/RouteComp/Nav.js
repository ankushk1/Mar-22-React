import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <ul
        style={{
          listStyle: "none"
        }}
        className="d-flex w-50 justify-content-between"
      >
        <li>
          <NavLink
            // className={({ isActive }) =>
            //   isActive ? "activeClass" : "inactiveClass"
            // // }
            // style={({ isActive }) =>
            //   isActive
            //     ? {
            //         backgroundColor: "red"
            //       }
            //     : {
            //         backgroundColor: "white"
            //       }
            // }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={({ isActive }) =>
            //   isActive ? "activeClass" : "inactiveClass"
            // }
            to="/cart"
          >
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink
            // className={({ isActive }) =>
            //   isActive ? "activeClass" : "inactiveClass"
            // }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
