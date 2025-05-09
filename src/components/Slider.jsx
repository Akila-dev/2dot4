/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { SideNavLink, Slide, SubpageSlider } from "../components";
import WheelReact from "wheel-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "swiper/css";
gsap.registerPlugin(useGSAP);

const getWindowsDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Slider = ({ data, subpage, page, allowSlide, scroll_to }) => {
  // *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
  const [screenSize, setScreenSize] = useState(getWindowsDimension());
  const container = useRef(null);
  const [activeId, setActiveId] = useState(0);
  const [subActiveId, setsubActiveId] = useState(
    new Array(data.length).fill(0)
  ); // Active Id for the subpage sliders (i.e ltr and rtl slides)
  // const [callNext, setCallNext] = useState(second)
  const [touchStart, setTouchStart] = useState({
    x: 0,
    y: 0,
  });
  const { contextSafe } = useGSAP({ scope: container });
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getWindowsDimension());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollTo = contextSafe((from, to) => {
    if (allowSlide) {
      if (
        from >= 0 &&
        from <= data.length - 1 &&
        to >= 0 &&
        to <= data.length - 1
      ) {
        setIsScrolling(true);
        // if(scrolling){
        if (from !== to) {
          if (from < to) {
            gsap
              .timeline()
              .fromTo(
                "#slide" + from + " " + ".gsap-show",
                {
                  opacity: 1,
                  y: 0,
                },
                {
                  opacity: 0,
                  y: 15,
                  duration: 0.35,
                  stagger: 0.1,
                  ease: "power1.out",
                }
              )
              .fromTo(
                ".gsap-nav-controller",
                {
                  opacity: 1,
                  y: 0,
                },
                {
                  opacity: 0,
                  y: 15,
                  duration: 0.35,
                  ease: "power1.out",
                },
                "<"
              )
              .fromTo(
                "#slide" + to,
                {
                  height: 0,
                  y: (screenSize.height * 40) / 100,
                },
                {
                  height: screenSize.height,
                  y: 0,
                  duration: 1,
                  ease: "power1.out",
                }
              )
              .fromTo(
                "#slide" + from,
                {
                  height: screenSize.height,
                },
                {
                  y: -(screenSize.height * 30) / 100,
                  duration: 1,
                  ease: "power1.out",
                },
                "<0.2"
              )
              .set("#slide" + from, {
                height: 0,
                y: 0,
              })
              .fromTo(
                "#slide" + to + " " + ".gsap-show",
                {
                  opacity: 0,
                  y: 15,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.35,
                  stagger: 0.1,
                  ease: "power1.out",
                }
              )
              .fromTo(
                ".gsap-nav-controller",
                {
                  opacity: 0,
                  y: 15,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.35,
                  // stagger: 0.1,
                  ease: "power1.out",
                },
                "<"
              );
          } else {
            gsap
              .timeline()
              .fromTo(
                "#slide" + from + " " + ".gsap-show",
                {
                  opacity: 1,
                  y: 0,
                },
                {
                  opacity: 0,
                  y: 15,
                  duration: 0.35,
                  stagger: 0.1,
                  ease: "power1.out",
                }
              )
              .fromTo(
                ".gsap-nav-controller",
                {
                  opacity: 1,
                  y: 0,
                },
                {
                  opacity: 0,
                  y: 15,
                  duration: 0.35,
                  ease: "power1.out",
                },
                "<"
              )
              .set("#slide" + to, {
                y: -(screenSize.height * 40) / 100,
                height: screenSize.height,
              })
              .fromTo(
                "#slide" + from,
                {
                  height: screenSize.height,
                  y: 0,
                },
                {
                  height: 0,
                  y: (screenSize.height * 40) / 100,
                  duration: 1.5,
                  ease: "power1.out",
                }
              )
              .fromTo(
                "#slide" + to,
                {
                  y: -(screenSize.height * 40) / 100,
                  height: screenSize.height,
                },
                {
                  y: 0,
                  height: screenSize.height,
                  duration: 1.5,
                  ease: "power1.out",
                },
                "<-0.6"
              )
              .set("#slide" + from, {
                height: 0,
                y: 0,
              })
              .fromTo(
                "#slide" + to + " " + ".gsap-show",
                {
                  opacity: 0,
                  y: 15,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.35,
                  stagger: 0.1,
                  ease: "power1.out",
                },
                "<-0.4"
              )
              .fromTo(
                ".gsap-nav-controller",
                {
                  opacity: 0,
                  y: 15,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.35,
                  ease: "power1.out",
                },
                "<"
              );
          }
          setActiveId(to);
          setTimeout(() => {
            setIsScrolling(false);
          }, 3000);
        }
      }
    } else {
      setIsScrolling(false);
    }
  });

  const subScrollTo = contextSafe((from, to, id) => {
    if (allowSlide) {
      if (
        from >= 0 &&
        from <= data[id].content[0].text.length - 1 &&
        to >= 0 &&
        to <= data[id].content[0].text.length - 1
      ) {
        setIsScrolling(true);

        var targetTo = "#" + String(page + id + to);
        var targetFrom = "#" + String(page + id + from);
        // setIsSideScrolling(true);
        if (from !== to) {
          if (from < to) {
            gsap
              .timeline()
              .fromTo(
                ".gsap-nav-controller",
                {
                  opacity: 1,
                  y: 0,
                },
                {
                  opacity: 0,
                  y: 15,
                  duration: 0.35,
                  ease: "power1.out",
                }
              )
              .fromTo(
                targetFrom + " " + ".gsap-show",
                {
                  opacity: 1,
                  y: 0,
                },
                {
                  opacity: 0,
                  y: 15,
                  duration: 0.35,
                  stagger: 0.1,
                  ease: "power1.out",
                },
                "<"
              )
              .set(targetTo, {
                width: 0,
                x: (screenSize.width * 20) / 100,
              })
              .fromTo(
                targetTo,
                {
                  width: 0,
                  x: (screenSize.width * 20) / 100,
                },
                {
                  width: screenSize.width,
                  x: 0,
                  duration: 1,
                  ease: "power1.out",
                }
              )
              .fromTo(
                targetFrom,
                {
                  width: screenSize.width,
                },
                {
                  x: -(screenSize.width * 20) / 100,
                  duration: 1,
                  ease: "power1.out",
                },
                "<0.2"
              )
              .set(targetFrom, {
                width: 0,
                x: 0,
              })
              .fromTo(
                targetTo + " " + ".gsap-show",
                {
                  opacity: 0,
                  y: 15,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.35,
                  stagger: 0.1,
                  ease: "power1.out",
                },
                "<-0.2"
              )
              .fromTo(
                ".gsap-nav-controller",
                {
                  opacity: 0,
                  y: 15,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.35,
                  ease: "power1.out",
                },
                "<"
              );
          } else {
            gsap
              .timeline()
              .fromTo(
                ".gsap-nav-controller",
                {
                  opacity: 1,
                  y: 0,
                },
                {
                  opacity: 0,
                  y: 15,
                  duration: 0.35,
                  ease: "power1.out",
                }
              )
              .fromTo(
                targetFrom + " " + ".gsap-show",
                {
                  opacity: 1,
                  y: 0,
                },
                {
                  opacity: 0,
                  y: 15,
                  duration: 0.35,
                  stagger: 0.1,
                  ease: "power1.out",
                },
                "<"
              )
              // .set(targetFrom, {
              // 	width: screenSize.width,
              // 	x: 0,
              // })
              .set(targetTo, {
                x: -(screenSize.width * 20) / 100,
                width: screenSize.width,
              })
              .fromTo(
                targetTo,
                {
                  x: -(screenSize.width * 20) / 100,
                  width: screenSize.width,
                },
                {
                  x: 0,
                  width: screenSize.width,
                  duration: 1,
                  ease: "power1.out",
                }
              )
              .fromTo(
                targetFrom,
                {
                  width: screenSize.width,
                  x: 0,
                },
                {
                  width: 0,
                  x: (screenSize.width * 20) / 100,
                  duration: 1,
                  ease: "power1.out",
                },
                "<0.2"
              )

              .set(targetFrom, {
                width: 0,
                x: 0,
              })
              .fromTo(
                targetTo + " " + ".gsap-show",
                {
                  opacity: 0,
                  y: 15,
                },
                {
                  opacity: 1,
                  y: 0,
                  // delay: 1,
                  duration: 0.35,
                  stagger: 0.1,
                  ease: "power1.out",
                }
              )
              .fromTo(
                ".gsap-nav-controller",
                {
                  opacity: 0,
                  y: 15,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.35,
                  // stagger: 0.1,
                  ease: "power1.out",
                },
                "<"
              );
          }

          let newActiveId = subActiveId;
          newActiveId[id] = to;
          setsubActiveId(newActiveId);

          setTimeout(() => {
            setIsScrolling(false);
          }, 3000);
        }
      }
    } else {
      setIsScrolling(false);
    }
  });

  const nextSubSlide = contextSafe(() => {
    if (subActiveId[activeId] < data[activeId].content[0].text.length - 1) {
      setIsScrolling(true);
      subScrollTo(subActiveId[activeId], subActiveId[activeId] + 1, activeId);
    }
  });

  const prevSubSlide = contextSafe(() => {
    if (subActiveId[activeId] > 0) {
      setIsScrolling(true);
      subScrollTo(subActiveId[activeId], subActiveId[activeId] - 1, activeId);
    }
  });

  // ! DESKTOP CONTROLS WITH MOUSEWHEEL
  useEffect(() => {
    WheelReact.config({
      left: () => {
        if (page === "home") {
          if (!isScrolling) {
            if (activeId < data.length - 1) {
              setIsScrolling(true);
              scrollTo(activeId, activeId + 1);
            }
          }
        } else {
          if (!isScrolling) {
            nextSubSlide();
          }
        }
      },
      right: () => {
        if (page === "home") {
          if (!isScrolling) {
            if (activeId > 0) {
              setIsScrolling(true);
              scrollTo(activeId, activeId - 1);
            }
          }
        } else {
          if (!isScrolling) {
            prevSubSlide();
          }
        }
      },
      up: () => {
        if (!isScrolling) {
          if (activeId < data.length - 1) {
            setIsScrolling(true);
            scrollTo(activeId, activeId + 1);
          }
        }
      },
      down: () => {
        if (!isScrolling) {
          if (activeId > 0) {
            setIsScrolling(true);
            scrollTo(activeId, activeId - 1);
          }
        }
      },
    });
  }, [
    activeId,
    data.length,
    isScrolling,
    nextSubSlide,
    page,
    prevSubSlide,
    scrollTo,
  ]);

  // ! MOBILE SWIPE CONTROL USING TOUCHES
  const touchControl = (e) => {
    let touchendX = e.changedTouches[0].clientX;
    let touchendY = e.changedTouches[0].clientY;

    if (
      Math.abs(touchendX - touchStart.x) > Math.abs(touchendY - touchStart.y)
    ) {
      if (touchendX < touchStart.x) {
        if (page === "home") {
          if (activeId < data.length - 1) {
            scrollTo(activeId, activeId + 1);
          }
        } else {
          nextSubSlide();
        }
      }
      if (touchendX > touchStart.x) {
        if (page === "home") {
          if (activeId > 0) {
            scrollTo(activeId, activeId - 1);
          }
        } else {
          prevSubSlide();
        }
      }
    } else {
      if (touchendY < touchStart.y) {
        if (activeId < data.length - 1) {
          setIsScrolling(true);
          scrollTo(activeId, activeId + 1);
        }
      }
      if (touchendY > touchStart.y) {
        if (activeId > 0) {
          scrollTo(activeId, activeId - 1);
        }
      }
    }
  };

  // !HANDLE NAV CLICK SCROLL
  useEffect(() => {
    if (scroll_to !== "") {
      scrollTo(activeId, scroll_to);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll_to]);

  const nav_exceptions = ["discover", "manifesto", "atelier"];

  return (
    <div
      ref={container}
      {...WheelReact.events}
      className="absolute bottom-0 left-0 w-full h-full object-cover overflow-hidden"
      onTouchStart={(e) =>
        setTouchStart({
          ...touchStart,
          ["x"]: e.touches[0].clientX,
          ["y"]: e.touches[0].clientY,
        })
      }
      onTouchEnd={(e) => touchControl(e)}
    >
      <div className="scroll-container h-full gsap-fade-in">
        {data.map((item, index) => (
          <div
            id={"slide" + index}
            className={`scroll-item fixed bottom-0 overflow-hidden w-full h-0`}
            key={index}
          >
            <div className="h-full">
              {subpage ? (
                <SubpageSlider
                  data={item}
                  id={index}
                  page={page}
                  // activeId={subActiveId[index]}
                  next={() => nextSubSlide()}
                  prev={() => prevSubSlide()}
                  container={container}
                  scrollTo={subScrollTo}
                  subActiveId={subActiveId}
                  currentId={activeId}
                />
              ) : (
                <Slide data={item} id={index} page={page} />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Sidebar */}
      <div
        className={
          nav_exceptions.includes(page)
            ? "hidden"
            : "!hidden md:!flex layout-sidebars !p-0 md:!px-8 lg:!px-10 fixed top-0 left-0 h-full gsap-fade-in"
        }
      >
        <div className="md-flex-y-3">
          {data.map((item, id) => (
            <SideNavLink
              data={item}
              id={id}
              key={id}
              onClick={() => scrollTo(activeId, id)}
              active={activeId}
            />
          ))}
        </div>
      </div>
      {/* TOP NAV FOR MOBILE */}
      <div
        className={
          nav_exceptions.includes(page)
            ? "hidden"
            : "md:hidden gsap-fade-in w-full h-[40px] border-b-0 border-[--border] fixed top-[40px] md:top-[56.5px]"
        }
      >
        <div className="flex items-center h-full w-full overflow-x-scroll no-scrollbar justify-evenly flex-nowrap overflow-y-auto gap-[5%] px-[5%]">
          {data.map((item, id) => (
            <div key={id} className="block text-center">
              <SideNavLink
                data={item}
                id={id}
                key={id}
                onClick={() => scrollTo(activeId, id)}
                active={activeId}
              />
            </div>
          ))}
        </div>
        <span className="horizontal-line absolute top-0 left-0 w-full h-[40px] border-b border-[--border] z-[-1]"></span>
      </div>
    </div>
  );
};

export default Slider;
