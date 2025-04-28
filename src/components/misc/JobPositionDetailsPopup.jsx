/* eslint-disable react/prop-types */
// import React from 'react'
import { FaLocationDot, FaAnglesLeft } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

const JobPositionDetailsPopup = ({ data, close }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-y-auto overflow-x-hidden bg-opacity-40 bg-black !py-7 container-xy z-[100000000000]">
      <div className="bg-[--white] rounded-lg shadow-lg lg:max-w-[750px] xl:max-w-[70vw] mx-auto overflow-hidden">
        {/* Header */}
        <div className="text-left p-4 md:px-7">
          <h3 className="text-2xl xl:text-[1.8vw]">{data.title}</h3>
          <p className="">
            <span className="font-semibold text-black/70">{data.type}</span>
            <i className="text-gray-400">
              <FaLocationDot className="inline-block ml-3 mr-1 mt-[-3px]" />
              {data.location}
            </i>
          </p>
        </div>
        {/* Description */}
        <h3 className="px-4 md:px-7 !text-white py-2 bg-[--bg] card-title">
          Description
        </h3>
        <div
          className="description p-4 md:px-7"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        {/* Buttons */}
        <div className="px-4 md:px-7 flex justify-between items-center py-5 border-t border-gray-100">
          <button className="p btn-2" type="button" onClick={close}>
            <FaAnglesLeft className="inline-block mr-1" /> Back
          </button>
          <a
            href={data.apply_url}
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

export default JobPositionDetailsPopup;
