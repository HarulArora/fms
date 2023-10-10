import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import NavBar from "./Components/Header/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
