// import React from 'react'
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";

const NavbarLayout = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="dark-text flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default NavbarLayout;
