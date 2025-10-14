import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="max-w-7xl mx-auto my-20 mb-[100px] ml-[100px]">
      <h1 className='text-4xl font-bold'><span className='text-[#03AF75]'>Latest & Top </span> Job Openings</h1>
      <div className='grid grid-cols-3 gap-4 my-5 mt-8'>
                {
                    allJobs.length <= 0 ? 
                    <span className="text-[20px]">No job found (´•︵•`)</span>
                    : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
      </div>


       <div className="flex flex-row mt-[100px]">
          <div className="w-1/2">
            <img
              src="https://www.wsdcareer.com/wp-content/uploads/2025/05/JobEntry-Job-Portal-Website-Template-05-19-2025_12_49_AM.png"
              className="w-[400px] ml-[90px]"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-bold">
              We Help To Get The Best Job <br /> And Find A Talent
            </h1>
            <p className="text-[16px] mt-[17px] w-[80%] text-gray-600">
              Our mission is to bridge the gap between ambitious job seekers and
              forward-thinking companies. We provide a dynamic marketplace that
              ensures swift, accurate, and satisfying matches, helping you take
              the next big step in your career or grow your team with the right
              individuals.
            </p>


            <div className="flex items-start mt-2 mb-1 w-[80%]">
              <svg
                className="flex-shrink-0 w-5 h-6 text-green-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>

              <p className="text-[15px] text-gray-800 mt-[4px] w-[80%]">
                <span className="text-bold">Diverse Opportunities: </span>{" "}
                Explore thousands of openings across various industries.
              </p>
            </div>

            <div className="flex items-start mb-1">
              <svg
                className="flex-shrink-0 w-5 h-6 text-green-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>

              <p className="text-[15px] text-gray-800 mt-[4px] w-[80%]">
                Verified Candidates: Connect with top-tier talent vetted for
                expertise.
              </p>
            </div>

            <div className="flex items-start mb-1">
              <svg
                className="flex-shrink-0 w-5 h-6 text-green-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>

              <p className="text-[15px] text-gray-800 mt-[4px] w-[80%]">
                Seamless Experience: Easy-to-use platform for both job seekers
                and recruiters.
              </p>
            </div>

            <div className="flex items-start mb-1">
              <svg
                className="flex-shrink-0 w-5 h-6 text-green-500 mr-3 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>

              <p className="text-[15px] text-gray-800 mt-[4px] w-[80%]">
                Career Advancement: Unlock your potential with roles from
                industry-leading companies.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default LatestJobs;
