/* eslint-disable react/prop-types */
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HoverScale = ({ className, children }) => {
  const container = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  const scaleUp = contextSafe(() => {
    gsap.to(container.current, {
      scale: 1.2,
      duration: 0.75,
      ease: "power2.out",
    });
  });
  const scaleBack = contextSafe(() => {
    gsap.to(container.current, {
      scale: 1,
      duration: 0.75,
      ease: "power2.out",
    });
  });

  return (
    <div
      ref={container}
      className={className || ""}
      onMouseEnter={() => scaleUp()}
      onMouseLeave={() => scaleBack()}
    >
      {children}
    </div>
  );
};

export default HoverScale;
