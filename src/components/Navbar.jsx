// import React from 'react'
import { Link } from "react-router-dom";

import { MenuButton, Logo, HoverScale } from "../components";

// Assets
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="container-x flex justify-between items-center w-full gap-4 py-3 bg-[--bg] fixed top-0 z-[1000000] border-b border-white/20">
      <div>
        <MenuButton />
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <HoverScale>
          <Link
            to="https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com"
            className="contact-us flex gap-[6px] items-center justify-center pointer-events-auto p"
          >
            <BiSolidMessageRoundedDetail className="text-lg md:text-lg" />
            <span className="hidden md:inline">Contact</span>{" "}
          </Link>
        </HoverScale>
      </div>
    </div>
  );
};

export default Navbar;
