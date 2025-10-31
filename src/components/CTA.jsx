/* eslint-disable react/prop-types */
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "../components";

gsap.registerPlugin(useGSAP);

const Cta = ({
  // page,
  title,
  text,
  btnText,
  href,
  onClick,
  short,
  makeTiny,
  id,
}) => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".gsap-show", {
        opacity: 0,
        y: 15,
        duration: 0.75,
        stagger: 0.175,
        ease: "power2.out",
        delay: 0.5,
      });
    },
    { scope: container }
  );

  return (
    <div
      id={id}
      ref={container}
      className="container !px-3 !h-full !py-[40px] !md:py-[50px]"
    >
      <div
        className={`pt-[calc(40px+7vh)] pb-[7vh] md:py-[10vh] flex flex-col items-center justify-between h-full text-center ${
          short
            ? "max-w-[700px] xl:max-w-[50vw]"
            : "max-w-[900px] xl:max-w-[55vw]"
        }  ${makeTiny ? "px-0  " : "px-[2.5%] md:px-[100px] lg:px-[50px]"}`}
      >
        <div className="space-vh">
          {/* <p className="gsap-show page-title">{page}</p> */}
          <h1
            className={`gsap-show ${
              makeTiny &&
              "text-[7vw] md:text-[3.5vw] lg:text-[2rem] leading-[130%]"
            }`}
          >
            {Array.isArray(title)
              ? title.map((t, i) => (
                  <span key={i}>
                    {t} {i === title.length - 1 ? "" : <br />}
                  </span>
                ))
              : title}
          </h1>
        </div>
        <div className="space-vh">
          <p className="gsap-show">{text}</p>
          {btnText &&
            (typeof btnText === "string" ? (
              <div className="pt-2 w-full gsap-show">
                {href ? (
                  <Button href={href} text={btnText} />
                ) : (
                  <Button onClick={onClick} text={btnText} />
                )}
              </div>
            ) : (
              <div className="pt-2 w-full gsap-show grid md:block lg:grid md:space-y-2 lg:space-y-0 grid-cols-2 lg:gap-2">
                {btnText.map((btn, i) => (
                  <Button key={i} href={href[i]} text={btn} />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cta;
