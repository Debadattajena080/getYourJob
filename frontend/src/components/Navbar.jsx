import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`/search?query=${searchTerm}`);
      
      if (response.ok) {
        const searchData = await response.json();
        console.log("Search results:", searchData);
      } else {
        console.error("Error in search response:", response.status);
      }
    } catch (error) {
      console.error("Error during search:", error);
    }
  
    console.log("Searching for:", searchTerm); 
  };
  
  return (
    <nav className="flex items-center justify-between flex-wrap bg-primaryGray py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 mr-16">
          <span className="font-semibold text-xl tracking-tight text-white">
            JOBS
          </span>
        </div>
      </div>
      <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="relative mx-auto text-gray-600 lg:block hidden ">
          <div className="relative">
            <input
              type="search"
              name="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-primaryGrayDark h-10 px-5 pr-10 rounded-full text-sm focus:outline-none text-white w-80"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-3 mr-4"
              onClick={handleSearch}
            >
              <IoIosSearch className="text-xl text-white" />
            </button>
          </div>
        </div>

        <div className="flex text-white text-2xl justify-between space-x-6">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-primaryGrayDark border-black rounded-full flex items-center justify-center">
              <GoPerson />
            </div>
          </div>
          <div className="relative inline-flex items-center ">
            <div className="w-12 h-12 bg-primaryGrayDark border-black rounded-full flex items-center justify-center">
              <div
                className="absolute bottom-auto left-auto right-1 top-2 z-10 -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 
              scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-primaryRed w-6 h-6 flex items-center 
              justify-center text-xs font-bold leading-none text-white"
              >
                12
              </div>

              <IoMdNotificationsOutline className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
