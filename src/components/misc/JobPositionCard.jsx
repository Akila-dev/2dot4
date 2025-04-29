/* eslint-disable react/prop-types */
import { useState } from "react";

import { JobPositionDetailsPopup } from "../../components";
import { FaLocationDot } from "react-icons/fa6";

const JobPositionCard = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShowPopup(true)}
        className="block text-left py-3 w-full"
        type="button"
      >
        <h3 className="card-title">{data.title}</h3>
        <p className="">
          <span className="font-semibold">{data.type}</span>
          <i className="text-white/50">
            <FaLocationDot className="inline-block ml-3 mr-1 mt-[-3px]" />
            {data.location}
          </i>
        </p>
      </button>
      {showPopup && (
        <JobPositionDetailsPopup
          data={data}
          close={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default JobPositionCard;
