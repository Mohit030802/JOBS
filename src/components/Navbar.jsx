import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='bg-[#E5E1E1] flex justify-between h-20 backdrop-filter  bg-opacity-0   absolute  z-20  top-0 left-0    w-full'>
                <div className=' flex justify-center items-center p-10 ml-16'>
                    <h1 className='text-5xl font-bold font-serif first-letter:text-green-700'>JOBS</h1>
                </div>
                <div className='flex justify-center items-center text-center'>
                    <ul className='flex space-x-6 font-semibold  font-serif  mr-16 text-xl'>
                        <Link to={'/'}>
                            <li className="hover:text-green-700 hover:cursor-pointer hover:underline hover:underline-offset-1">Home</li>
                        </Link>
                        <Link to={'/Estimate'}>
                            <li className="hover:text-green-700 hover:cursor-pointer hover:underline hover:underline-offset-1">Estimated Salary</li>
                        </Link>
                        {/* <Link to={'/Details'}>
                            <li className="hover:text-green-700 hover:cursor-pointer hover:underline hover:underline-offset-1">Details</li>
                        </Link> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
