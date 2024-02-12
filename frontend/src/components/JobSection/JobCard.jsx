import React from "react";
import SaveforLater from "../../assets/saveForLater.png";

const JobCard = ({ data }) => {
  console.log("jobCardData", data);

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl">
          SEARCH RESULTS/ <span className="text-xl font-thin"> JOBS-2049 results</span>
        </h1>
        <div className="flex justify-between items-center space-x-3">
          <span>Sort By</span>
          <div>
            <select className="bg-white px-4 py-2 text-gray-950">
              <option value="fruit">Latest</option>
              <option value="vegetable">Latest 2</option>
              <option value="meat">Latest 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-jobCardBg rounded-xl">
        <div className="p-6">
          <div className="gradient-border mb-6">
            <h2 className="text-white pl-4 py-1">JOBS</h2>
          </div>

     
          {data?.JobDetails.map((job, index) => (
            <div key={index} className="w-full mb-4">
              <div className="p-5 bg-jobCardPrimary rounded-t-xl flex">
                <img
                  src={SaveforLater}
                  alt="Save this job"
                  className="w-20 h-20 mt-1 border mr-8 hover:cursor-pointer"
                  title="Save the job"
                />
                <div className="w-3/5 mr-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {job.title}
                  </h5>
                  <p className="mb-3 font-normal">
                    {job?.description}
                  </p>
                </div>
                <div className="flex items-center justify-between space-x-4">
                  <span className="font-bold">Skill Match</span>
                  <div className="w-20 h-20 text-white flex items-center justify-center border-4 rounded-full">
                    <span className="text-xl font-bold">78</span>
                  </div>
                </div>
              </div>

              <div className="bg-jobCardPrimaryDark rounded-b-xl flex p-5 justify-between">
                <div className="flex space-x-2">
                  {" "}
                  <p className="font-normal">{job?.postedAgo} </p>
                  <h3>&#8226;</h3> <p>{job?.applicants} applicants</p>
                </div>

                <div className="flex space-x-4">
                  <button className="bg-primaryButton rounded-full px-7 py-1">
                    APPLY NOW
                  </button>
                  <img
                    src={SaveforLater}
                    alt="saveForLater"
                    className="w-6 h-8 invert-white"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobCard;
