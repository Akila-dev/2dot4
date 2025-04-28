/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Pagination = ({
  slide_length,
  subActiveId,
  currentId,
  scrollTo,
  lg,
  show,
}) =>
  show && (
    <div
      className={`flex items-center justify-center gap-1 gsap-nav-controller ${
        lg ? "hidden lg:flex" : "flex lg:hidden"
      }`}
    >
      {[...Array(slide_length)].map((_, i) => (
        <button
          key={i}
          className={`size-2 rounded-full border border-[--white] ${
            i === subActiveId[currentId] ? "bg-[--white]" : "bg-transparent"
          }`}
          type="button"
          onClick={() => scrollTo(subActiveId[currentId], i, currentId)}
        />
      ))}
    </div>
  );

const CTASubSlider = ({
  title,
  text,
  btnText,
  href,
  onClick,
  short,
  makeTiny,
  id,
  page,
  slide_length,
  scrollTo,
  subActiveId,
  currentId,
}) => {
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });

  const hovering = contextSafe(() => {
    gsap
      .timeline()
      // .set('.clip-bg', {
      // 	top: '200px',
      // 	opacity: 0,
      // 	scale: 0,
      // 	duration: 1,
      // 	stagger: 0.175,
      // 	ease: 'power2.out',
      // })
      .to(".clip-bg", {
        top: "50%",
        opacity: 1,
        scale: 1,
        duration: 1,
        // stagger: 0.175,
        ease: "power2.out",
      });
  });
  const hoverOut = contextSafe(() => {
    gsap.to(".clip-bg", {
      top: "200px",
      scale: 0,
      duration: 1,
      // stagger: 0.175,
      ease: "power2.out",
    });
  });

  const exempt_pages = ["discover", "atelier", "manifesto"];

  return (
    <div
      id={id}
      ref={container}
      className="container !px-3 fixed h-full !py-[40px] !md:py-[50px]"
    >
      <div
        className={`pt-[calc(40px+7vh)] md:pt-[10vh] pb-[7vh] md:pb-[10vh] flex flex-col items-center justify-between h-full text-center ${
          short
            ? "max-w-[700px] xl:max-w-[50vw]"
            : "max-w-[900px] xl:max-w-[55vw]"
        }  ${makeTiny ? "px-0  " : "px-[2.5%] md:px-[100px] lg:px-[50px]"} ${
          exempt_pages.includes(page) ? "!pt-[7vh] md:pt-[10vh]" : ""
        }`}
      >
        <div className="space-vh">
          <p className="gsap-show page-title">{page}</p>

          <h1
            className={`gsap-subslide-show gsap-show ${
              makeTiny &&
              "text-[7vw] md:text-[3.5vw] lg:text-[2rem] leading-[130%]"
            }`}
          >
            {title}
          </h1>
        </div>
        <div className="space-vh">
          <Pagination
            slide_length={slide_length}
            scrollTo={scrollTo}
            subActiveId={subActiveId}
            currentId={currentId}
            show={slide_length && slide_length > 1}
          />
          <p className="gsap-subslide-show gsap-show">{text}</p>
          {btnText && (
            <div className="pt-2 w-full gsap-subslide-show gsap-show">
              {href ? (
                <Link
                  onMouseEnter={() => hovering()}
                  onMouseLeave={() => hoverOut()}
                  to={href}
                  target="_blank"
                  className="btn relative group overflow-hidden"
                >
                  <span className="clip-bg"></span>
                  <span className="relative z-1 group-hover:text-[--bg] duration-700">
                    {btnText}
                  </span>
                </Link>
              ) : (
                <button
                  type="button"
                  onMouseEnter={() => hovering()}
                  onMouseLeave={() => hoverOut()}
                  onClick={onClick}
                  className="btn relative group overflow-hidden"
                >
                  <span className="clip-bg"></span>
                  <span className="relative z-1 group-hover:text-[--bg] duration-700">
                    {btnText}
                  </span>
                </button>
              )}
            </div>
          )}
          <Pagination
            lg
            slide_length={slide_length}
            scrollTo={scrollTo}
            subActiveId={subActiveId}
            currentId={currentId}
            show={slide_length && slide_length > 1}
          />
        </div>
      </div>
    </div>
  );
};

export default CTASubSlider;
