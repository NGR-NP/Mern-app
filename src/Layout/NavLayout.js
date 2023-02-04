import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../sections/nav/Nav";

const NavLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default NavLayout;
