import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { useGetJobsQuery } from '../Services/SearchApi';
import { Parallax } from 'react-parallax';

import img1 from '../assets/img2.jpg'

const Search = () => {
    const ref = useRef()
    const [search, setSearch] = useState('')
    const { data: jobsList } = useGetJobsQuery(search)
    const [searchData, setSearchData] = useState(jobsList?.data)

    const handleSearch = () => {
        const serachFilter = jobsList?.data || []
        setSearchData(serachFilter)
        console.log(searchData)


    }

    return (
        <>
            <Parallax strength={600} bgImage={img1} blur={{ min: -5, max: 5 }} speed={10}>
                <div className='bg-cover    max-w-full' style={{ height: '100%' }}>


                    <div className='flex flex-col space-y-4 justify-center items-center h-[90vh]'>
                        <h1 className='text-6xl font-bold font-serif '><span className='text-green-700 text-8xl'>SEARCH</span> JOB.</h1>
                        <div className='flex space-x-2 py-4 '>
                            <input type="text" placeholder="Search" value={search} className=' flex p-2 w-[40vw] rounded-2xl outline-none ring-1 ring-green-100 shadow-lg focus:ring-green-700' onChange={(e) => setSearch(e.target.value)} />
                            <button className='bg-green-700 p-2 rounded-xl text-white shadow-lg' onClick={handleSearch}><SearchIcon /></button>
                        </div>
                    </div>

                    <p className='flex justify-center items-center text-6xl font-serif underline underline-offset-2'>Jobs Available...</p>
                    <div className='flex flex-wrap justify-center  p-8' id='result' >
                        {searchData?.map((job) => (

                            <div key={job.job_id}>

                                <div className="max-w-sm rounded-md items-stretch hover:scale-95 transition ease-linear duration-150 bg-[#F9F4F4] backdrop-filter backdrop-blur-lg  bg-opacity-80 h-[95%] overflow-hidden shadow-md p-4 m-4 py-2">

                                    <div className="px-6 py-4">
                                        <div className='flex justify-between items-center'>

                                            <div className="flex items-center justify-center mb-4 ">
                                                <img className="w-16 h-16 rounded-md " src={job.employer_logo} alt="Logo" />
                                            </div>
                                            <div className="font-bold text-xl font-serif mb-2">{job.employer_name}</div>
                                        </div>
                                        <p className="text-gray-700 text-base">
                                            <span className='font-bold'>Title: </span> {job.job_title}
                                        </p>
                                        <p className="text-gray-700 text-base">
                                            <span className='font-bold'>Location: </span> {job.job_city}, {job.job_state} {job.job_country}
                                        </p>
                                        <hr className="my-4 border-gray-500"></hr>
                                        <p className="text-gray-600 text-base mt-2">
                                            <span className='font-bold'>Description: </span> {job.job_description.length > 250 ?
                                                `${job.job_description.substring(0, 250)}...` : job.job_description
                                            }
                                        </p>
                                    </div>
                                    <div className="px-6 py-4 p-2">
                                        <span className="inline-block bg-green-200 rounded-full m-1 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 font-playfair">
                                            <p>{job.job_employment_type}</p>
                                        </span>
                                        <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                            <p>{job.job_publisher}</p>
                                        </span>
                                    </div>
                                    <div className="px-6 py-4 flex justify-between" >
                                        <Link to={job.job_google_link} target="_blank">
                                            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full" >
                                                Apply
                                            </button>
                                        </Link>
                                        <Link to={`/jobInfo/${job.job_id}`} target='_blank'>
                                            <p className='flex justify-center items-center hover:text-blue-500 hover:underline hover:underline-offset-1 hover:cursor-pointer'>Know More</p>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </Parallax>

        </>
    )
}

export default Search
