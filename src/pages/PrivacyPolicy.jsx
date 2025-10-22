/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { CONTACT, PRIVACY_POLICY } from "../utils/data";
import {
  MenuButton,
  MenuPopup,
  ScrollDown,
  FooterSocialLinks,
} from "../components";

import logo_icon from "../assets/imgs/2dot4-icon.svg";
import privacy_bg from "../assets/imgs/sandy-bg.jpg";

gsap.registerPlugin(useGSAP);

// Assets
import { BiSolidMessageRoundedDetail } from "react-icons/bi";

const PrivacyPolicy = () => {
  const container = useRef();
  const menuContainer = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  const { contextSafe } = useGSAP({ scope: container });

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

  const close = contextSafe(() => {
    gsap.to(".gsap-menu-container", {
      xPercent: -100,
      duration: 0.75,
      stagger: 0.175,
      ease: "power2.out",
      onComplete: () => setShowMenu(false),
    });
  });

  const scaleUp = contextSafe((className) => {
    gsap.to("." + className, {
      scale: 1.2,
      duration: 0.75,
      ease: "power2.out",
    });
  });
  const scaleBack = contextSafe((className) => {
    gsap.to("." + className, {
      scale: 1,
      duration: 0.75,
      ease: "power2.out",
    });
  });

  return (
    <div ref={container} className="fixed top-0 left-0 w-full h-full">
      <div className="flex flex-col justify-between h-full w-full items-center relative overflow-hidden scroll-snap">
        {/* CONTENT */}
        {/* TOP */}
        <div className="absolute top-0 left-0 w-full h-full bg-black">
          <LazyLoadImage
            height={"100%"}
            src={privacy_bg}
            width={"100%"}
            className="w-screen h-screen object-cover opacity-30"
          />
        </div>
        {/* TOP */}
        <div className="h-[45px] md:h-[56.5px] flex items-center justify-center relative w-full z-10 pointer-events-none">
          <div className="flex justify-between items-center w-full layout-text h-full">
            <div className="layout-sidebars layout-sidebar-l !justify-center">
              <MenuButton onClick={() => setShowMenu(true)} />
            </div>
            <div className="!w-full h-full flex items-center justify-center">
              <h3 className="uppercase w-full border-none flex items-center justify-center h-full pointer-events-auto">
                <Link
                  to="/"
                  onMouseEnter={() => scaleUp("logo")}
                  onMouseLeave={() => scaleBack("logo")}
                  className="logo"
                >
                  {contact.brandName}
                  {/* <img
										src={logo_white}
										alt="logo"
										className="h-[30px] md:h-[40px] w-auto object-cover mb-1 hover:scale-110 transition duration-500"
									/> */}
                </Link>
              </h3>
            </div>
            <div className="layout-sidebars layout-sidebar-r">
              <Link
                to="https://vinwdzm1fbl.typeform.com/to/sRNc1NrB?typeform-source=2dot4.com"
                onMouseEnter={() => scaleUp("contact-us")}
                onMouseLeave={() => scaleBack("contact-us")}
                className="contact-us flex w-full gap-[6px] items-center justify-center pointer-events-auto"
              >
                <span className="hidden md:inline">Contact</span>{" "}
                <BiSolidMessageRoundedDetail className="text-xl md:text-lg md:hidden" />
              </Link>{" "}
            </div>
          </div>
        </div>
        {/* MIDDLE */}
        {/* MIDDLE */}
        <div className="relative w-full flex-1 flex justify-between items-center z-10">
          <div className="!hidden md:!flex layout-sidebars !p-0  overflow-y-auto overflow-x-hidden no-scrollbar !h-[calc(100vh-120px)]  !py-7">
            {/* Side Nav space */}
            <div className="w-full h-full flex flex-col gap-3 ">
              {PRIVACY_POLICY.map((item, i) => (
                <div key={i} className=" relative w-full group">
                  <a
                    href={"#" + item.title.replaceAll(" ", "")}
                    key={i}
                    onClick={() => setActive(i)}
                    className="privacy-link relative md:!px-8 lg:!px-10 block visited:!bg-red-600"
                  >
                    {item.title}
                  </a>
                  {active === i && (
                    <span
                      className={`hidden md:block absolute top-0 right-ful mt-3 h-[20px] md:w-[1.25rem] lg:w-[1.55rem] border-t-[1.5px] border-[--lines] transition duration-1000`}
                    ></span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-1">
            {/* CSPACE FOR THE ACTUAL CONTENTS */}
            <div className="w-full !h-[calc(100vh-120px)] overflow-y-auto overflow-x-hidden flex flex-col no-scrollbar px-5 md:px-[2rem] xl:px-[3rem] pb-7 scroll-smooth">
              {PRIVACY_POLICY.map((item, i) => (
                <div
                  id={item.title.replaceAll(" ", "")}
                  key={i}
                  className="flex flex-col gap-3 pt-5"
                >
                  <h2 className="text-lg md:text-xl lg:text-2xl font-medium leading-[160%]">
                    {!item.intro && i + "."} {item.title}
                  </h2>
                  <p className="text-[--grey]">{item.text}</p>
                  {item.list && (
                    <ul className="flex-y-2">
                      {item.list.map(({ title, desc, email }, i) => (
                        <li
                          key={i}
                          className="list-disc list-inside list-item leading-[160%]"
                        >
                          {title && <b>{title}:</b>}{" "}
                          {desc && (
                            <span className="text-[--grey]">{desc}</span>
                          )}{" "}
                          {email && (
                            <a
                              href={"mailto:" + { email }}
                              className="text-white underline underline-offset-4"
                            >
                              {email}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.more && <p>{item.more}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="!hidden md:!flex layout-sidebars"></div>
        </div>
        {/* BOTTOM */}
        {/* BOTTOM */}
        <div className="h-[45px] md:h-[56.5px] flex items-center justify-center w-full z-10 pointer-events-none ">
          <div className="flex justify-between items-center w-full layout-text h-full">
            <div className="layout-sidebars layout-sidebar-l pointer-events-auto">
              {/* <BiSolidPaperPlane className="text-xl" /> */}
              <div className="flex items-center justify-center w-full">
                <a
                  href="/manifesto"
                  className="discover flex items-end w-auto justify-center gap-[10px]"
                  onMouseEnter={() => scaleUp("discover")}
                  onMouseLeave={() => scaleBack("discover")}
                >
                  <img
                    src={logo_icon}
                    alt="logo"
                    className="h-[30px] md:h-[40px] w-auto object-cover"
                  />
                  {/* <span className="hidden md:inline pb-1">Discover</span> */}
                </a>
              </div>
            </div>
            <div className="w-full border-x border-[--lines] md:border-none flex items-center justify-center h-full">
              <div className="hidden lg:block">
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
        <span className="lines horizontal-line border-b top-0 left-0 !h-[45px] md:!h-[56.5px]"></span>
        <span className="lines horizontal-line border-t bottom-0 left-0 !h-[45px] md:!h-[56.5px] "></span>
        {/* <span className="lines vertical-line border-r top-0 left-0 !h-full md:w-[--sidebar-w-md]  lg:w-[--sidebar-w] !hidden md:!block"></span>
				<span className="lines vertical-line border-l top-0 right-0 !h-full md:w-[--sidebar-w-md]  lg:w-[--sidebar-w] !hidden md:!block"></span> */}
      </div>
      {showMenu && (
        <MenuPopup close={() => close()} container={menuContainer} />
      )}
    </div>
  );
};

export default PrivacyPolicy;
