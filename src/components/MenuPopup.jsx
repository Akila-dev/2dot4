/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { FOOTERLINKLIST } from "../utils/data";
import { CloseBtn } from "../components";

const MenuPopup = ({ close, container }) => {
  const menu = [
    {
      link: "about",
    },
    {
      link: "technology",
    },
    {
      link: "diamonds",
    },
    {
      link: "applications",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".gsap-menu-container", {
        xPercent: -100,
        duration: 0.75,
        stagger: 0.175,
        ease: "power2.out",
      });
    },
    { scope: container }
  );

  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      ref={container}
      className="fixed top-0 left-0 w-full sm:max-w-[375px] xl:max-w-[27.5vw] h-full pointer-events-auto !z-[10000000]"
    >
      <div className="gsap-menu-container bg-[--bg] text-[--white] w-full h-full overflow-y-auto flex flex-col gap-10 justify-between px-5 md:px-[2rem] text-xs">
        <CloseBtn onClick={() => close()} />

        <div>
          <div className="flex-y-4">
            {menu.map((item, id) => (
              <Link
                key={id}
                to={"/"}
                // to={'/' + item.link}
                state={{ index: id }}
                className={`block uppercase text-2xl text-medium link ${
                  pathname === `/${item.link}`
                    ? "font-bold text-white"
                    : "text-white/70"
                }`}
              >
                {item.link}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-5 pb-[40px] md:pb-[50px] xl:pb-[3.7vw] gap-2">
          <div className="flex-y-4 col-span-2">
            {FOOTERLINKLIST.slice(0, 3).map((link, id) => (
              <Link
                key={id}
                to={link.link}
                className={`block uppercase sm link ${
                  pathname === link.link
                    ? "font-bold text-white"
                    : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex-y-4 col-span-3">
            {FOOTERLINKLIST.slice(3, 6).map((link, id) => (
              <Link
                key={id}
                to={link.link}
                className={`block uppercase sm link ${
                  pathname === link.link
                    ? "font-bold text-white"
                    : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {/* <div className="layout-vbars border-t border-[--border] absolute bottom-0 left-0 w-full" /> */}
      </div>
    </div>
  );
};

export default MenuPopup;
