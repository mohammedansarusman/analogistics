import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

import { GrLanguage } from "react-icons/gr";
import logoImage from "../Images/fleetflow.webp"
import { useDispatch } from "react-redux";
import { changeBar } from "../Store/navigationSlice";
import { useState } from "react";
import MenuNavigation from "./MenuNavigation";
import { Link } from "react-router-dom";
// Parent componenet - <App />


const NavigationBar = () => {
  const [showDropdown, setShowDropdown] = useState({people:false, fleet:false, trip:false});
  const dispatch = useDispatch();

  const handleHamburgerButton = () => {
    dispatch(changeBar(true))
  }
  const handlePeople = () => {
    setShowDropdown({
      people:!showDropdown.people,
      fleet: false,
      trip: false,
    })
  }
  const handleFleet = () => {
    setShowDropdown({
      people: false,
      fleet:!showDropdown.fleet,
      trip: false,
    })
  }
  const handleTrip = () => {
    setShowDropdown({
      people: false,
      fleet: false,
      trip:!showDropdown.trip,
    })
  }
  const handleMouseLeave = () => {
    setShowDropdown({
      people: false,
      fleet: false,
      trip: false,
    })
  }

  return (
    // {/* Navigation bar */}
    <div className="bg-slate-950 opacity-85 h-[100px] flex items-center relative z-10 w-[100%]">
      <div className="w-[40%] flex items-center gap-3 px-5 ">
        {/* render if the screen width is small */}
        <GiHamburgerMenu
          className="cursor-pointer text-white size-6 hover:bg-gray-500 lg:hidden"
          onClick={handleHamburgerButton}
        />
        <img alt="logo-img" src={logoImage} className="rounded-full w-[70px]"></img>
        <h1 className="hidden lg:block lg:text-3xl lg:text-white lg:font-semibold">FleetFlow</h1>
      </div>
      <nav className="w-[60%] flex items-center justify-end gap-5 px-6 py-3">
        <div className="hidden lg:text-white lg:flex lg:justify-evenly lg:w-[70%] lg:font-bold">
          <Link to="/">
            <div className="p-2 hover:text-cyan-500">Home</div>
          </Link> 
          <div 
            onMouseEnter={handlePeople}
            onMouseLeave={handleMouseLeave}
            className="flex hover:text-cyan-500 relative cursor-pointer p-2">People <IoMdArrowDropdown size={25} />
            { showDropdown.people && 
              <div className="bg-white absolute 
                                top-10 left-1/2 transform -translate-x-1/2 
                                w-[150px] h-[200px] rounded-lg shadow-xl shadow-gray-300
                                text-black pt-4 flex justify-center
                                ">
                <MenuNavigation />
              </div>}
          </div>
          <div 
            onMouseEnter = { handleFleet}
            onMouseLeave={handleMouseLeave}
            className="flex items-center hover:text-cyan-500 relative cursor-pointer p-2 ">Fleet <IoMdArrowDropdown size={25} 
          />
            { showDropdown.fleet && 
              <div className="bg-white absolute 
                                top-10 left-1/2 transform -translate-x-1/2 
                                w-[150px] h-[200px] rounded-lg shadow-xl shadow-gray-300
                                text-black pt-4 flex justify-center
                              ">
                  <MenuNavigation />                
                </div> }
          </div>
          <div 
            onMouseEnter={ handleTrip }
            onMouseLeave={handleMouseLeave}
            className="flex items-center hover:text-cyan-500 relative p-2">Trip <IoMdArrowDropdown size={25} />
            { showDropdown.trip && 
              <div className="bg-white absolute 
                                top-10 left-1/2 transform -translate-x-1/2 
                                w-[150px] h-[200px] rounded-lg shadow-xl shadow-gray-300
                                text-black pt-4 flex justify-center
                                ">
                    <MenuNavigation />              
              </div> }
          </div>
        </div>
        <div className="flex gap-5 justify-end lg:w-[30%]">
          <MdOutlineLightMode className="text-white size-6" />
          <GrLanguage className="text-white size-6" />
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;