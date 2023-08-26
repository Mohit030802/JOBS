import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useGetEstimateSalaryQuery } from '../Services/SearchApi';
const Estimate = () => {
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState('');

  const { data: salaryInfo } = useGetEstimateSalaryQuery({
    job_title: job,
    location: location,
    radius: radius,
  });
  const [searchResult, setSearchResult] = useState(salaryInfo?.data);
  

  const handleSearch = () => {
      const searchRes=salaryInfo?.data || [];
      setSearchResult(searchRes);
      console.log(searchResult);
      console.log(salaryInfo?.data)
  }
  const handleBlur = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === 'job') {
      setJob(inputValue);
    } else if (inputName === 'location') {
      setLocation(inputValue);
    } else if (inputName === 'radius') {
      setRadius(inputValue);
    }
  }
  return (
    <div>
      <div className='bg-[#EBE6E6] min-h-[100vh]  max-w-full'>
        <div className='flex flex-col space-y-4 justify-center items-center h-[90vh]'>
          <h1 className='text-6xl font-bold font-serif '><span className='text-green-700 text-8xl'>Estimate </span> Salary</h1>
          <div className='flex space-x-2 py-4 w-[100%] justify-center items-center'>
            <div className='flex'>

              <input type="text" placeholder="Enter Job Name" name='job' className=' flex p-2 w-[20vw] rounded-2xl outline-none ring-1 ring-green-100 shadow-lg focus:ring-green-700' onBlur={handleBlur} />
              <input type="text" placeholder="Enter Job Location" name='location' className=' flex p-2 w-[20vw] rounded-2xl outline-none ring-1 ring-green-100 shadow-lg focus:ring-green-700' onBlur={handleBlur} />
              <input type="number" placeholder="Enter Job Radius" name='radius' className=' flex p-2 w-[20vw] rounded-2xl outline-none ring-1 ring-green-100 shadow-lg focus:ring-green-700' onBlur={handleBlur} />
            </div>
            <button className='bg-green-700 p-2 rounded-xl text-white shadow-lg' onClick={handleSearch}><SearchIcon /></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Estimate
