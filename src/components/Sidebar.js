import { useState } from "react";
import { FaChartArea, FaChartArea, FaEnvelope, FaBullhorn, FaCircle, FaRegCircle, FaFolderOpen, FaEnvelope, FaUser, FaCalendarAlt, FaSearch, FaChartBar, FaFolder, FaCog } from "react-icons/fa";
import { IconContext } from "react-icons";
import control from '../assets/control.png';
import { Link } from "react-router-dom";
const Sidebar = () => {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex z-20">
            <div
                className={`${open ? "w-60" : "w-20"} bg-white h-screen p-4 pt-8 z-30 absolute rounded-br-lg rounded-tr-lg duration-300 border-r`}
            >
                <IconContext.Provider value={{ className: "react-icons text-black" }}>
                    <img
                        src={control}
                        className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />
                    <div className="flex gap-x-4 items-center">
                        <FaRegCircle
                            className={`cursor-pointer text-orange-400 duration-500 ${open && "rotate-[360deg]"}`}
                        />
                        <h1
                            className={`text-black origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                                }`}
                        >
                            Orange <span className="text-green-400">HRM</span>
                        </h1>
                    </div>
                    <ul className="pt-6">
                        {/* Dashboard */}
                        <Link >
                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <FaUser className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    Admin
                                </span>
                            </li>
                        </Link>

                        {/* Inbox */}
                        <Link to="/pim">

                            <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                                <FaEnvelope className="w-5 h-5" />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    PIM
                                </span>
                            </li>
                        </Link>
                        {/* Accounts */}
                        <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                            <FaUser className="w-5 h-5" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Leave
                            </span>
                        </li>
                        {/* Schedule */}
                        <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                            <FaCalendarAlt className="w-5 h-5" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Time
                            </span>
                        </li>
                        {/* Search */}
                        <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                            <FaSearch className="w-5 h-5" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                My Info
                            </span>
                        </li>
                        {/* Analytics */}
                        <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                            <FaChartArea className="w-5 h-5" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Dashboard
                            </span>
                        </li>
                        {/* Files */}
                        <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                            <FaFolderOpen className="w-5 h-5" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Directory
                            </span>
                        </li>
                        {/* Settings */}
                        <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                            <FaCog className="w-5 h-5" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Maintanace
                            </span>
                        </li>
                        <li className="flex items-center p-2 cursor-pointer text-black text-sm gap-x-4 mt-2 
              transition duration-200 ease-in-out transform hover:scale-105 
              bg-light-white hover:bg-gradient-to-r from-orange-500 to-orange-100 active:bg-gradient-to-r
              rounded-r-full">
                            <FaBullhorn className="w-5 h-5" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Buzz
                            </span>
                        </li>
                    </ul>
                </IconContext.Provider>
            </div>
        </div>
    );
};

export default Sidebar;
