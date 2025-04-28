import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { MenuPopup } from "../components";

gsap.registerPlugin(useGSAP);

// eslint-disable-next-line react/prop-types
const MenuButton = () => {
  const container = useRef();
  const menuContainer = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const { contextSafe } = useGSAP({ scope: container });
  const animateIcon = contextSafe(() => {
    gsap
      // .timeline()
      // .set('.menu-lines', {
      // 	width: 0,
      // })
      .fromTo(
        ".menu-lines",
        {
          width: 0,
        },
        {
          width: 20,
          duration: 1,
          stagger: 0.175,
          ease: "power2.out",
          // clearProps: 'width',
        }
      );
  });

  const close = contextSafe(() => {
    gsap.to(".gsap-menu-container", {
      xPercent: -100,
      duration: 0.75,
      stagger: 0.175,
      ease: "power2.out",
      onComplete: () => setShowMenu(false),
    });
  });

  return (
    <div ref={container} className="relative z-[10000]">
      <button
        onMouseEnter={() => animateIcon()}
        onClick={() => setShowMenu(true)}
        className="flex items-center uppercase gap-2 pointer-events-auto p relative z-0"
      >
        <div className="flex flex-col gap-0 w-[20px]">
          <span className="menu-lines block h-[4px] w-[20px] border-t border-[--white]"></span>
          <span className="menu-lines block h-[3px] w-[20px] border-t border-[--white]"></span>
          <span className="menu-lines block h-[2px] w-[20px] border-b border-[--white]"></span>
        </div>
        <span className="hidden md:block">Menu</span>
      </button>
      {showMenu && (
        <MenuPopup close={() => close()} container={menuContainer} />
      )}
    </div>
  );
};

export default MenuButton;
