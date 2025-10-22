/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import {
  ScrollDown,
  MenuButton,
  Slider,
  Logo,
  HoverScale,
  FooterSocialLinks,
} from "../components";

import logo_icon from "../assets/imgs/2dot4-icon.svg";
// import logo_white from '../assets/imgs/logo-white.svg';

gsap.registerPlugin(useGSAP);

// Assets
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

const DiscoverContainer = ({ data, page, subpage }) => {
  const container = useRef();

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
        <Slider data={data} page={page} subpage={subpage} allowSlide />
        {/* TOP */}
        {/* TOP */}
        <div className="layout-vbars flex items-center justify-center relative w-full z-10 pointer-events-none">
          <div className="flex justify-center items-center w-full layout-text h-full">
            <div className="layout-sidebars layout-sidebar-l !justify-center">
              <MenuButton />
            </div>
            <div className="!w-full h-full flex items-center justify-center">
              <Logo />
            </div>
            <div className="layout-sidebars layout-sidebar-r">
              <div className="w-full flex justify-center">
                <HoverScale>
                  <Link
                    to="https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com"
                    className="flex gap-[6px] items-center justify-center pointer-events-auto"
                  >
                    <span className="hidden md:inline">Contact</span>{" "}
                    <BiSolidMessageRoundedDetail className="text-lg md:text-lg md:hidden" />
                  </Link>
                </HoverScale>
              </div>
            </div>
          </div>
        </div>
        {/* MIDDLE */}
        {/* MIDDLE */}
        <div className="relative w-full flex-1 flex justify-between items-center z-0 pointer-events-none">
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
        <div className="layout-vbars flex items-center justify-center w-full z-10 pointer-events-none ">
          <div className="flex justify-between items-center w-full layout-text h-full">
            <div className="layout-sidebars layout-sidebar-l pointer-events-auto">
              {/* <BiSolidPaperPlane className="text-xl" /> */}
              <div className="flex items-center justify-center w-full">
                <HoverScale>
                  <a
                    href="/manifesto"
                    className="flex items-end w-auto justify-center gap-[10px]"
                  >
                    <img
                      src={logo_icon}
                      alt="logo"
                      className="h-[30px] md:h-[40px] w-auto object-cover"
                    />
                    {/* <span className="hidden md:inline pb-1">Discover</span> */}
                  </a>
                </HoverScale>
              </div>
            </div>
            <div className="w-full border-none flex items-center justify-center h-full">
              <div className="">
                <ScrollDown />
              </div>
            </div>
            <div>
              <FooterSocialLinks />
            </div>
          </div>
        </div>
        {/* LINES */}
        {/* LINES */}
        <span className="lines horizontal-line border-b top-0 left-0 layout-vbars !z-0"></span>
        <span className="lines horizontal-line border-t bottom-0 left-0 layout-vbars !z-0 "></span>
        {/* <span className="lines vertical-line border-r top-0 left-0 !h-full md:w-[--sidebar-w-md]  lg:w-[--sidebar-w] !hidden md:!block"></span>
				<span className="lines vertical-line border-l top-0 right-0 !h-full md:w-[--sidebar-w-md]  lg:w-[--sidebar-w] !hidden md:!block"></span> */}
      </div>
    </div>
  );
};

export default DiscoverContainer;
