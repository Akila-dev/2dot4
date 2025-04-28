/* eslint-disable react/jsx-key */
// import React from 'react'

import { HoverScale } from "../components";

import { CONTACT } from "../utils/data";
import logo_icon from "../assets/imgs/2dot4-icon.svg";

// Assets
import { BiLogoLinkedinSquare, BiLogoFacebookCircle } from "react-icons/bi";
import { PiInstagramLogoFill, PiDotsThreeOutlineFill } from "react-icons/pi";

const Navbar = () => {
  const contact = { ...CONTACT };

  const socialIcons = [
    <PiInstagramLogoFill className="social-icons" />,
    <BiLogoLinkedinSquare className="social-icons" />,
    <BiLogoFacebookCircle className="social-icons" />,
  ];

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
        {/* MD-XL ONLY */}
        <div className="!hidden md:!flex">
          {contact.socials.map((link, id) => (
            <HoverScale key={id}>
              <a href={link} target="_blank" className={`pointer-events-auto`}>
                {socialIcons[id]}
              </a>
            </HoverScale>
          ))}
        </div>
        {/* XS-SM ONLY */}
        <div className="!flex md:!hidden group relative">
          <PiDotsThreeOutlineFill className="text-xl pointer-events-auto" />

          <div className="absolute top-[-75px] flex flex-col gap-2 transition-all duration-700 scale-0 group-hover:scale-100 group-active:scale-100">
            {contact.socials.map((link, id) => (
              <HoverScale key={id}>
                <a
                  href={link}
                  target="_blank"
                  className={`pointer-events-auto scale-150`}
                >
                  {socialIcons[id]}
                </a>
              </HoverScale>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
