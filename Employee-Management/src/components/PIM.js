import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
const PIM = () => {
  return (
    <div className='h-[84vh]'>
      <div className=' pl-20 bg-blue-500 text black text-3xl w-full'>
        <div className="bg-white shadow w-full">
          <nav className="flex justify-center items-center px-5 py-1">
            <div className="flex items-center space-x-6">
              <Link>
                <div to='/add' className="text-black rounded-full px-3 py-1 bg-gray-200 hover:text-blue-800 font-semibold text-sm transition duration-150 ease-in-out">Configuration</div>

              </Link>
              <Link className="text-black rounded-full px-3 py-1 bg-gray-200 hover:text-blue-800 font-semibold text-sm transition duration-150 ease-in-out">Employee List</Link>
              <Link to='/pim/addemployee' className="text-black rounded-full px-3 py-1 bg-gray-200 hover:text-blue-800 font-semibold text-sm transition duration-150 ease-in-out">Add Employee</Link>
              <Link className="text-black rounded-full px-3 py-1 bg-gray-200 hover:text-blue-800 font-semibold text-sm transition duration-150 ease-in-out">Reports</Link>
            </div>
          </nav>
        </div>
      </div>


      {/* <div className="flex h-[79vh] bg-gray-100">
        <div className="bg-white w-60 md:ml-32 p-8">
          <div className="mb-8">
            <h2 className="text-center text-2xl font-semibold">Employee Name</h2>
          </div>

          <nav className="space-y-2">
            <Link  className="block px-4 py-2 rounded hover:bg-gray-100">Personal Details</Link>
            <Link  className="block px-4 py-2 rounded hover:bg-gray-100">Personal Details</Link>
            <Link  className="block px-4 py-2 rounded hover:bg-gray-100">Personal Details</Link>
            <Link   className="block px-4 py-2 rounded hover:bg-gray-100">Personal Details</Link>
          </nav>
        </div>
      </div> */}





      <Outlet />
    </div>
  )
}

export default PIM