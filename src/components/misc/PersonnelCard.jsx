/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom";

const PersonnelCard = ({ data, link }) => {
  return (
    <div className="border border-gray-200 rounded-md overflow-hidden">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-36 lg:h-40 xl:h-[13vw] object-cover"
      />
      <div className="p-3">
        <Link to={link}>
          <h3
            className="card-title !leading-[1.1em] hover:!text-[--active] transition duration-500"
            dangerouslySetInnerHTML={{ __html: data.name }}
          />
        </Link>
        <p
          className="!text-black/50"
          dangerouslySetInnerHTML={{ __html: data.position }}
        />
      </div>
    </div>
  );
};

export default PersonnelCard;
