import { useState } from "react";

// import bg from "../assets/sectionImgs/1/12.jpg";

import { PERSONNELS } from "../utils/personnel_data";
import { PersonnelCard } from "../components";

const Governance = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Hero */}
      {/* <div className="relative">
        <img
          src={bg}
          alt="bg"
          className="w-full h-[40vh] max-h-[350px] xl:max-h-[25vw] object-cover"
        />
        <div className="text-center w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center container-x">
          <h1 className="!text-white pt-[50px]">Our Esteemed Pilots</h1>
        </div>
      </div> */}

      {/* Tabs */}
      <div className="bg-[#eaeaea] container-x mt-[50px] sticky top-[50px]">
        <div className="flex w-full flex-nowrap overflow-x-auto no-scrollbar">
          {PERSONNELS &&
            PERSONNELS.map(({ tag }, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`p-3 p uppercase !font-semibold whitespace-nowrap border-b-2 hover:!text-black ${
                  activeTab === i
                    ? "border-black !text-black"
                    : "border-black/0 !text-black/70"
                }`}
              >
                {tag}
              </button>
            ))}
        </div>
      </div>
      {/* Data Listing */}
      <div className="container-xy !pt-5 text-[--bg] space-y-5 lg:space-y-7">
        {/* Lists */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-5">
          {PERSONNELS[activeTab].data &&
            PERSONNELS[activeTab].data.map((data, index) => (
              <PersonnelCard
                key={index}
                data={data}
                link={`/${PERSONNELS[activeTab].tag}/${index}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Governance;
