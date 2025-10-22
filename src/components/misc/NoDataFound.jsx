/* eslint-disable react/prop-types */
import { PiEmptyDuotone } from "react-icons/pi";

const NoDataFound = ({ text = "No data found" }) => {
  return (
    <div className="flex flex-col justify-center items-center py-[1em] gap-[1em] card-bg-1 rounded-[0.5em] animate-pulse">
      <div className="animate-bounc">
        <PiEmptyDuotone
          size={100}
          className="-rotate-4 size-[7em] text-[--active]"
        />
      </div>
      <div className="max-w-[15em] text-center">
        <h3 className="!leading-[1.2] text-[--grey] opacity-80">{text}</h3>
      </div>
    </div>
  );
};

export default NoDataFound;
