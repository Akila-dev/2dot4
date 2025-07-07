/* eslint-disable react/prop-types */
// import React from 'react'

import { Link } from "react-router-dom";

const PersonnelCard = ({ data, link }) => {
  return (
    <Link to={link} className="hover:scale-105 transition duration-500 z-0">
      <div className="border border-[--card] rounded-md overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-36 lg:h-40 xl:h-[13vw] object-cover"
        />
        <div className="p-3">
          <h3
            className="card-title !leading-[1.1em] ellipsis"
            dangerouslySetInnerHTML={{ __html: data.name }}
          />
          <p
            className="ellipsis"
            dangerouslySetInnerHTML={{ __html: data.position }}
          />
        </div>
      </div>
    </Link>
  );
};

export default PersonnelCard;
