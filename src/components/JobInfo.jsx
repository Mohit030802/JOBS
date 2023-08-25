import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetJobsDetailsQuery } from '../Services/SearchApi'

const JobInfo = () => {
  const { job_id } = useParams()
  const { data: jobInfo } = useGetJobsDetailsQuery(job_id)
  const jobDetail = jobInfo?.data


  return (
    <>
      <div className='  '>
        <div className='flex justify-center items-center text-6xl font-serif underline underline-offset-2 p-2  m-4'>
          <h1>
            Job Details...
          </h1>
        </div>
        {
          jobDetail?.map((job) => (
            <div key={job.job_id} className='flex'>
              <div className='bg-[#F9F4F4] w-[100vw] p-4 rounded-lg m-4'>
                <div className='flex justify-center items-center space-x-4'>
                  <img className='mt-2 rounded-xl w-20 h-20' src={job.employer_logo} alt="" />
                  <h1 className='text-black font-bold text-5xl'>{job.employer_name}</h1>
                </div>
                <hr className="m-8 border-2  border-gray-800"></hr>
                <div className='grid grid-cols-2'>
                  <div className='space-y-4 m-4'>
                    <h2 className='text-2xl font-bold font-serif'>Info:</h2>
                    <p className='font-semibold text-lg'>Company Type: <span class="company-type font-normal text-md text-gray-700">{job.employer_company_type?job.employer_company_type:"null"}</span></p>
                    <p className='font-semibold text-lg'>Publisher: <span class="publisher font-normal text-md  bg-blue-800 p-2 rounded-xl text-[#F9F4F4]"> {job.job_publisher}</span></p>
                    <p className='font-semibold text-lg'>Quality Score: <span class="quality-score font-normal text-md  bg-green-800 p-2 rounded-xl text-[#F9F4F4]">{(job.job_apply_quality_score) * 100} %</span></p>
                    <p className='font-semibold text-lg'>Remote: <span class="remote font-normal text-md text-gray-700">{job.job_is_remote ? 'YES' : 'No'}</span></p>
                    <p className='font-semibold text-lg'>Posted at: <span class="posted-at font-normal text-md text-gray-700">{new Date(job.job_posted_at_datetime_utc).toLocaleDateString()}</span></p>
                    <p className='font-semibold text-lg'>Location: <span class="location font-normal text-md text-gray-700">{job.job_city}, {job.job_state} {job.job_countrys}</span></p>
                    <p className='font-semibold text-lg'>Experience <span className='text-sm text-gray-500'>(min) </span>: <span class="experience font-normal text-md text-gray-700">{(job.job_required_experience.required_experience_in_months)/12} yrs</span></p>
                    <p className='font-semibold text-lg'>Skills Required:</p>
                    <ul class="skills"></ul>
                    <p className='font-semibold text-lg'>Minimum Salary: <span class="min-salary font-normal text-md text-gray-700">{job.job_min_salary?job_min_salary:'Not mentioned'}</span></p>
                    <p className='font-semibold text-lg'>Maximum Salary: <span class="min-salary font-normal text-md text-gray-700">{job.max?job_min_salary:'Not mentioned'}</span></p>
                    <p className='font-semibold text-lg'>Qualifications:</p>
                    <ul class="qualifications"></ul>
                    <p className='font-semibold text-lg'>Responsibility:</p>
                    <ul class="responsibility"></ul>
                    <p className='font-semibold text-lg'>
                      Employer Website:
                      <a className="employer-website text-blue-700 underline underline-offset-2" href={job.employer_website} target="_blank" rel="noopener noreferrer">
                        {job.employer_name}
                      </a>
                    </p>                  </div>
                  <div>
                    <span className='font-bold text-xl font-serif'>Description: </span>
                    <p className='text-gray-500 text-base mt-2'>{job.job_description}</p>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <Link to={job.job_google_link} target='_blank'>
                    <button className=' flex justify-center items-center text-center bg-gradient-to-r text-[#F5F5FA] from-[#58c46d] to-[#19aa02] p-4 m-2 rounded-md font-semibold mt-4  text-2xl'>
                      Apply Now <span className='text-sm ml-2 text-gray-50'>(Google link)</span>
                    </button>
                  </Link>
                  <Link to={job.job_apply_link} target='_blank'>
                    <button className=' flex justify-center items-center text-center bg-gradient-to-r text-[#F5F5FA] from-[#19aa02] to-[#58c46d] p-4 m-2 rounded-md font-semibold mt-4  text-2xl'>
                      Apply Now <span className='text-sm ml-2 text-gray-700'>(Company link)</span>
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          ))
        }

      </div>
    </>
  )
}

export default JobInfo
