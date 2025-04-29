import { useState } from "react";

// import bg from "../assets/sectionImgs/1/12.jpg";

import { PERSONNELS } from "../utils/personnel_data";
import { PersonnelCard } from "../components";

const Governance = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tabs */}
      <div className="bg-[--card] container-x mt-[50px] sticky top-[50px] z-10">
        <div className="flex w-full flex-nowrap overflow-x-auto no-scrollbar">
          {PERSONNELS &&
            PERSONNELS.map(({ tag }, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`p-3 p uppercase !font-semibold whitespace-nowrap hover:!text-white ${
                  activeTab === i
                    ? "border-white !text-white"
                    : "border-white/0 !text-white/70"
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
