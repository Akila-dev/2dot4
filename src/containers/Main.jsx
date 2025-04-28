/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { CONTACT } from "../utils/data";
import {
  ScrollDown,
  MenuButton,
  Slider,
  Logo,
  HoverScale,
} from "../components";

import logo_icon from "../assets/imgs/2dot4-icon.svg";
// import logo_white from '../assets/imgs/logo-white.svg';

gsap.registerPlugin(useGSAP);

// Assets
import {
  BiSolidMessageRoundedDetail,
  BiLogoLinkedinSquare,
  BiLogoFacebookCircle,
} from "react-icons/bi";
import { PiInstagramLogoFill, PiDotsThreeOutlineFill } from "react-icons/pi";

const Main = ({ data, page, subpage, scroll_to }) => {
  const container = useRef();

  const socialIcons = [
    <PiInstagramLogoFill className="social-icons" />,
    <BiLogoLinkedinSquare className="social-icons" />,
    <BiLogoFacebookCircle className="social-icons" />,
  ];

  const contact = { ...CONTACT };

  // !ANIMATION CODES
  // !ANIMATION CODES
  // !ANIMATION CODES
  // !ANIMATION CODES
  // LINES ANIMATION
  useGSAP(
    () => {
      gsap.fromTo(
        ".gsap-fade-in",
        { opacity: 0, duration: 4, ease: "power1.out" },
        { opacity: 1, duration: 4, ease: "power1.out" }
      );
      gsap.from(".horizontal-line", {
        xPercent: -100,
        delay: 0.25,
        duration: 1.25,
        ease: "sine.out",
      });
      gsap.from(".vertical-line", {
        yPercent: -100,
        delay: 1.25,
        duration: 1.25,
        ease: "sine.out",
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="fixed top-0 left-0 w-full h-full">
      <div className="flex flex-col justify-between h-full w-full items-center relative overflow-hidden scroll-snap">
        {/* CONTENT */}
        <Slider
          data={data}
          page={page}
          subpage={subpage}
          allowSlide={true}
          scroll_to={scroll_to}
        />
        {/* TOP */}
        {/* TOP */}
        <div className="layout-vbars flex items-center justify-center relative w-full z-10 pointer-events-none">
          <div className="flex justify-center items-center w-full layout-text h-full">
            <div className="layout-sidebars layout-sidebar-l !justify-center">
              <MenuButton />
            </div>
            <div className="!w-full h-full flex items-center justify-center relative z-0">
              <Logo />
            </div>
            <div className="layout-sidebars layout-sidebar-r relative z-0">
              <div className="w-full flex justify-center">
                <HoverScale>
                  <Link
                    to="https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com"
                    className="contact-us flex gap-[6px] items-center justify-center pointer-events-auto p"
                  >
                    <span className="hidden md:inline">Contact</span>{" "}
                    <BiSolidMessageRoundedDetail className="sm md:hidden" />
                  </Link>
                </HoverScale>
              </div>
            </div>
          </div>
        </div>
        {/* MIDDLE */}
        {/* MIDDLE */}
        <div className="relative w-full flex-1 flex justify-between items-center z-10 pointer-events-none">
          <div className="!hidden md:!flex layout-sidebars !p-0 md:!px-8 lg:!px-10">
            {/* Side Nav space */}
          </div>
          <div className="w-full flex items-center justify-center flex-1">
            {/* CSPACE FOR THE ACTUAL CONTENTS */}
          </div>
          <div className="!hidden md:!flex layout-sidebars"></div>
        </div>
        {/* BOTTOM */}
        {/* BOTTOM */}
        <div className="layout-vbars flex items-center justify-center w-full z-0 pointer-events-none">
          <div className="flex justify-between items-center w-full layout-text h-full">
            <div className="layout-sidebars layout-sidebar-l pointer-events-auto">
              {/* <BiSolidPaperPlane className="text-xl" /> */}
              <div className="flex items-center justify-center w-full">
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
            </div>
            <div className="w-full border-none flex items-center justify-center h-full">
              <div>
                <ScrollDown />
              </div>
            </div>
            <div>
              {/* MD-XL ONLY */}
              <div className="!hidden md:!flex layout-sidebars layout-sidebar-r !justify-center">
                {contact.socials.map((link, id) => (
                  <HoverScale key={id}>
                    <a
                      href={link}
                      target="_blank"
                      className={`pointer-events-auto`}
                    >
                      {socialIcons[id]}
                    </a>
                  </HoverScale>
                ))}
              </div>
              {/* XS-SM ONLY */}
              <div className="!flex md:!hidden layout-sidebars layout-sidebar-r group relative">
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
        </div>
        {/* LINES */}
        {/* LINES */}
        <span className="lines horizontal-line border-b top-0 left-0 layout-vbars !z-0"></span>
        <span className="lines horizontal-line border-t bottom-0 left-0 layout-vbars !z-0"></span>
        {/* <span className="lines vertical-line border-r top-0 left-0 !h-full md:w-[--sidebar-w-md]  lg:w-[--sidebar-w] !hidden md:!block"></span>
				<span className="lines vertical-line border-l top-0 right-0 !h-full md:w-[--sidebar-w-md]  lg:w-[--sidebar-w] !hidden md:!block"></span> */}
      </div>
    </div>
  );
};

export default Main;
