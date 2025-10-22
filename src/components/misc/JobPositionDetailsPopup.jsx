/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { FaLocationDot, FaAnglesLeft } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { PortableText } from "@portabletext/react";

const JobPositionDetailsPopup = ({ data, close }) => {
  const container = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        container.current &&
        content.current &&
        !content.current.contains(event.target)
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [close]);

  return (
    <div
      ref={container}
      className="fixed top-0 left-0 w-full h-screen overflow-y-auto overflow-x-hidden bg-white/5 !py-7 container-xy z-[100000000000] backdrop-blur-sm"
    >
      <div
        ref={content}
        className="bg-[--bg] rounded-lg shadow-lg lg:max-w-[750px] xl:max-w-[70vw] mx-auto overflow-hidden"
      >
        {/* Header */}
        <div className="text-left p-4 md:px-7">
          <h3 className="text-2xl xl:text-[1.8vw]">{data?.title}</h3>
          <p className="">
            <span className="font-semibold">{data?.employentType}</span>
            <i className="text-white/50">
              <FaLocationDot className="inline-block ml-3 mr-1 mt-[-3px]" />
              {data?.location}
            </i>
          </p>
        </div>
        {/* Description */}
        <h3 className="px-4 md:px-7 py-2 bg-[--card] card-title">
          Description
        </h3>
        <article className="prose prose-invert prose-p:text-[--grey] prose-h2:h2 prose-h3:h3 prose-img:rounded-md space-y-2 p-4 md:px-7 description">
          <PortableText
            value={data?.description}
            components={portableComponents}
          />
        </article>

        {/* Buttons */}
        <div className="px-4 md:px-7 flex justify-between items-center py-5 border-t border-[--border]">
          <button className="p btn-2" type="button" onClick={close}>
            <FaAnglesLeft className="inline-block mr-1" /> Back
          </button>
          <a
            href={data?.applicationLink}
            target="_blank"
            rel="noreferrer"
            className="btn-1 p"
          >
            Apply for this position
          </a>
          {/* CLOSE BUTTON */}
          <button
            className="p fixed top-7 right-4 lg:!right-10 !text-white hover:scale-125 transition duration-500 p-2 rounded-full bg-black bg-opacity-25"
            type="button"
            onClick={close}
          >
            <RiCloseLargeFill className="scale-150" />
          </button>
        </div>
      </div>
    </div>
  );
};

const portableComponents = {
  types: {
    image: ({ value }) =>
      value?.asset?.url ? (
        <img
          src={value.asset.url}
          alt=""
          width={800}
          height={400}
          className="rounded-md"
        />
      ) : null,
  },
};

export default JobPositionDetailsPopup;
