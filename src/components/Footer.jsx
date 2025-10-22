/* eslint-disable react/jsx-key */
// import React from 'react'

import { HoverScale, FooterSocialLinks } from "../components";

import logo_icon from "../assets/imgs/2dot4-icon.svg";

const Navbar = () => {
  return (
    <div className="container-x flex justify-between items-center w-full gap-4 py-1 bg-[--bg] border-t border-white/20">
      <div>
        <HoverScale>
          <a
            href="/manifesto"
            className="discover flex items-end w-auto justify-center gap-[10px]"
          >
            <img
              src={logo_icon}
              alt="logo"
              className="h-[30px] md:h-[40px] w-auto object-cover p-[2px]"
            />
            {/* <span className="hidden md:inline pb-1">Discover</span> */}
          </a>
        </HoverScale>
      </div>
      <div>
        <p className="uppercase !font-semibold">© 2DOT4, 2024</p>
      </div>
      <div>
        <FooterSocialLinks footer />
      </div>
    </div>
  );
};

export default Navbar;
