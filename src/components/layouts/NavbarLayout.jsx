// import React from 'react'
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";

const NavbarLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default NavbarLayout;
