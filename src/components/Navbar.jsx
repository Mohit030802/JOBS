import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='bg-gray-200 flex justify-between h-20'>
                <div className=' flex justify-center items-center p-10 ml-16'>
                    <h1 className='text-5xl font-bold font-serif first-letter:text-green-700'>JOBS</h1>
                </div>
                <div className='flex justify-center items-center text-center'>
                    <ul className='flex space-x-6 font-semibold  font-serif  mr-16 text-xl'>
                        <li className="hover:text-green-700 hover:cursor-pointer">Home</li>
                        <li className="hover:text-green-700 hover:cursor-pointer">Estimated Salary</li>
                        <li className="hover:text-green-700 hover:cursor-pointer">Details</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
