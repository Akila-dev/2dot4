/* eslint-disable react/prop-types */
// import React from "react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { useParams } from "react-router-dom";

import { PERSONNELS } from "../utils/personnel_data";

const PersonnelDetails = () => {
  const params = useParams();

  const data = PERSONNELS.filter((personnel) => personnel.tag === params.tab)[0]
    .data[params.id];

  console.log(data);
  return (
    <div className="pt-[30px]">
      <div className="container-xy bg-black/10 !pb-10 flex flex-col items-center !text-center">
        <h1>{data.name}</h1>
        <p className="uppercase !font-medium pb-2 !text-black/50 h3">
          {data.position}
        </p>
        <div className="flex gap-2">
          {data.socials.map(({ type, link }, i) => (
            <a
              href={link}
              key={i}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 min-w-9 !bg-black flex justify-center items-center rounded p-1 hover:scale-125 transition duration-500 shadow-md"
            >
              {type === "facebook" && <FaFacebookF />}
              {type === "instagram" && <FaInstagram />}
              {type === "linkedin" && <FaLinkedinIn />}
            </a>
          ))}
        </div>
      </div>
      <div className="container-xy !pt-10 xl:max-w-[95vw] mx-auto">
        {/* Details */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 xl:gap-12">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full md:max-w-[35vw] xl:max-w-[25vw] rounded-md shadow-md object-contain object-top"
          />
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: data.about }}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonnelDetails;
