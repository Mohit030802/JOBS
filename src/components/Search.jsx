import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useGetJobsQuery } from '../Services/SearchApi';
const Search = () => {
    const [search, setSearch] = useState('')
    const { data: jobsList } = useGetJobsQuery(search)
    const [searchData, setSearchData] = useState(jobsList?.data)
    
    const handleSearch = () => {
        const serachFilter=jobsList?.data || []
        setSearchData(serachFilter)
        console.log(searchData)
       
    }

    return (
        <>
            <div className='bg-gray-100 min-h-[100vh]  max-w-full'>
                <div className='flex flex-col space-y-4 justify-center items-center h-[80vh]'>
                    <h1 className='text-6xl font-bold font-serif '><span className='text-green-700 text-8xl'>SEARCH</span> JOB</h1>
                    <div className='flex space-x-2 py-4 '>
                        <input type="text" placeholder="Search" value={search} className=' flex p-2 w-[40vw] rounded-2xl outline-none ring-1 ring-green-100 shadow-lg focus:ring-green-700' onChange={(e) => setSearch(e.target.value)} />
                        <button className='bg-green-700 p-2 rounded-xl text-white shadow-lg' onClick={handleSearch}><SearchIcon /></button>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center p-8'>
                {searchData?.map((job) => (
                    <div key={job.id} className='bg-white p-4 m-4 rounded-xl shadow-md max-w-xs'>
                        <h2 className='text-lg font-semibold'>{job.employer_name}</h2>
                        <p>{job.description}</p>
                        {/* You can display other job information here */}
                    </div>
                ))}
            </div>

            </div>

        </>
    )
}

export default Search
