import React from "react";
import nav from "./nav.scss";
import { NavLink, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
function Nav(props) {
  const location = useLocation(); // Lấy vị trí URL hiện tại

  // Nếu đang ở trang login thì không hiển thị thanh Nav
  if (location.pathname === "/login") {
    return null;
  }
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
