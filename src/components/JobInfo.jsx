import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetJobsDetailsQuery } from "../Services/SearchApi";
import { Parallax } from "react-parallax";
import img from '../assets/img2.jpg'
const JobInfo = () => {
  const { job_id } = useParams();
  const { data: jobInfo } = useGetJobsDetailsQuery(job_id);
  const jobDetail = jobInfo?.data;

  return (
    <>
    <Parallax strength={600} bgImage={img} >
      <div className="  " style={{ height: '100%' }}>
        <div className="flex justify-center items-center text-6xl font-serif underline underline-offset-2 p-2  m-4">
          <h1 className="py-16">Job Details...</h1>
        </div>
        
        {jobDetail?.map((job) => (
          <div key={job.job_id} className="flex">
            <div className="bg-[#b09f9f] backdrop-filter backdrop-blur-lg  bg-opacity-0 w-[100vw] p-4 rounded-lg m-4">
              <div className="flex justify-center items-center space-x-4">
                <img
                  className="mt-2 rounded-xl w-20 h-20"
                  src={job.employer_logo}
                  alt=""
                />
                <h1 className="text-black font-bold text-5xl font-serif">
                  {job.employer_name}
                </h1>
              </div>
              <div className="flex justify-center items-center text-center mt-4">
                <p className="text-2xl font-semibold">{job.job_title}</p>
              </div>
              <hr className="m-8 border-2  border-gray-800"></hr>
              <div className="grid grid-cols-2">
                <div className="space-y-4 m-4">
                  <h2 className="text-2xl font-bold font-serif">Info:</h2>
                  <p className="font-semibold text-lg">
                    Company Type:{" "}
                    <span class="company-type font-normal text-md text-[#fefbfb]">
                      {job.employer_company_type
                        ? job.employer_company_type
                        : "null"}
                    </span>
                  </p>
                  <p className="font-semibold text-lg">
                    Publisher:{" "}
                    <span class="publisher font-normal text-md  bg-blue-800 p-2 rounded-xl text-[#F9F4F4]">
                      {" "}
                      {job.job_publisher}
                    </span>
                  </p>
                  <p className="font-semibold text-lg">
                    Quality Score:{" "}
                    <span class="quality-score font-normal text-md  bg-green-800 p-2 rounded-xl text-[#F9F4F4]">
                      {job.job_apply_quality_score * 100} %
                    </span>
                  </p>
                  <p className="font-semibold text-lg">
                    Remote:{" "}
                    <span class="remote font-normal text-md text-[#fefbfb]">
                      {job.job_is_remote ? "YES" : "No"}
                    </span>
                  </p>
                  <p className="font-semibold text-lg">
                    Posted at:{" "}
                    <span class="posted-at font-normal text-md text-[#fefbfb]">
                      {new Date(
                        job.job_posted_at_datetime_utc
                      ).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="font-semibold text-lg">
                    Location:{" "}
                    <span class="location font-normal text-md text-[#fefbfb]">
                      {job.job_city}, {job.job_state} {job.job_country}
                    </span>
                  </p>

                  <p className="font-semibold text-lg">
                    Experience{" "}
                    <span className="text-sm text-gray-200">(min) </span>:{" "}
                    <span class="experience font-normal text-md text-[#fefbfb]">
                      {job.job_required_experience
                        .required_experience_in_months / 12}{" "}
                      yrs
                    </span>
                  </p>
                  <p className="font-semibold text-lg">Skills Required:</p>
                  <div className="flex ">
                  {
                    job.job_required_skills &&
                    job.job_required_skills?.map((skill, index) => (
                        
                       <div key={index} className="">
                        <p className="flex p-2">
                      <span className="flex justify-center items-center bg-white rounded-xl p-2">
                        
                        {skill}
                      </span>
                        </p>
                       </div>
                        ))
                      }
                      </div>
                

                  <p className="font-semibold text-lg">Qualifications:</p>
                  {job.job_highlights &&
                    job.job_highlights.Qualifications?.map((qualification, index) => (
                      <li key={index} className="text-[#fefbfb]">
                        {qualification}
                      </li>
                    ))
                  }

                  <p className="font-semibold text-lg">Responsibility:</p>

                  <ul className="responsibility break-keep">
                    {job.job_highlights &&
                      job.job_highlights.Responsibilities?.map((responsibility, index) => (
                        <li key={index} className="text-[#fefbfb]">
                          {responsibility}
                        </li>
                      ))}
                  </ul>
                  <p className="font-semibold text-lg">
                    Employer Website:
                    <a
                      className="employer-website text-blue-700 underline underline-offset-2"
                      href={job.employer_website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {job.employer_name}
                    </a>
                  </p>{" "}
                </div>
                <div>
                  <span className="font-bold text-xl font-serif">
                    Description:{" "}
                  </span>
                  <p className="text-[#fefbfb] text-base mt-2 break-all ">
                    {job.job_description}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Link to={job.job_google_link} target="_blank">
                  <button className=" flex justify-center items-center text-center bg-gradient-to-r text-[#F5F5FA] from-[#58c46d] to-[#19aa02] p-4 m-2 rounded-md font-semibold mt-4  text-2xl">
                    Apply Now{" "}
                    <span className="text-sm ml-2 text-gray-50">
                      (Google link)
                    </span>
                  </button>
                </Link>
                <Link to={job.job_apply_link} target="_blank">
                  <button className=" flex justify-center items-center text-center bg-gradient-to-r text-[#F5F5FA] from-[#19aa02] to-[#58c46d] p-4 m-2 rounded-md font-semibold mt-4  text-2xl">
                    Apply Now{" "}
                    <span className="text-sm ml-2 text-gray-700">
                      (Company link)
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Parallax>
    </>
  );
};

export default JobInfo;
