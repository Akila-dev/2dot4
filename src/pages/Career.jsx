import { useState, useEffect } from "react";

import { JobPositionCard, Button, DataFetchingVisuals } from "../components";

import bg from "../assets/imgs/sandy-bg.jpg";

import { client } from "../lib/sanityClient";
import { JOB_QUERY } from "../lib/queries";

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await client.fetch(JOB_QUERY);
        setJobs(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      {/* Hero */}
      <div className="relative">
        <img
          src={bg}
          alt="bg"
          className="w-full h-[40vh] max-h-[350px] xl:max-h-[25vw] object-cover"
        />
        <div className="text-center w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center container-x">
          <h1 className="pt-[50px]">Shine Bright With Us</h1>
        </div>
      </div>
      {/* lISTING */}
      <div className="container-xy text-[--bg] space-y-5 lg:space-y-7">
        <h2 className="text-center">Open Positions</h2>
        <div className="max-w-[700px] xl:max-w-[50vw] mx-auto divide-y divide-[--border] border border-[--border] shadow-lg shadow-white/5 rounded-lg py-4 px-4 xl:px-5 flex flex-col">
          <DataFetchingVisuals
            isLoading={loading}
            dataLength={jobs?.length}
            noDataFoundText="No job openings available at the moment. Please check back later."
          >
            {jobs.map((job, index) => (
              <JobPositionCard data={job} key={index} />
            ))}
          </DataFetchingVisuals>
        </div>
      </div>
      <div className="container-x pb-10 text-center space-y-7">
        <p className="!text-white max-w-[900px] xl:max-w-[65vw] mx-auto">{`Didn't find anything to match your experience? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.`}</p>
        <div className="text-center">
          <Button text="Open Application" href="#" />
        </div>
      </div>
    </div>
  );
};

export default Career;
