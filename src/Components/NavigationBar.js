import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

import { GrLanguage } from "react-icons/gr";
import logoImage from "../Images/fleetflow.webp"
import { useDispatch, useSelector } from "react-redux";
import { changeBar } from "../Store/navigationSlice";
import { useState } from "react";
import MenuNavigation from "./MenuNavigation";
import FleetMenuNavigation from "./FleetComponents/FleetMenuNavigation";
import { Link } from "react-router-dom";
import { setSign } from "../Store/navigationSlice";
import OthersNavigation from "./OthersNavigation";
import { setMode } from "../Store/navigationSlice";
import { MdDarkMode } from "react-icons/md";
import { language } from "../Utils/constants";



// Parent componenet - <App />


const NavigationBar = () => {
  const mode = useSelector(store=>store.navigation.mode)
  const lang = useSelector(store=>store.navigation.lang)
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
  const handleButton = () =>{
    dispatch(setSign(true));
  }
  const handleMode = () =>{
    dispatch(setMode(mode === "light"? "dark" : "light"));
  }
  return (
    // {/* Navigation bar */}
    <div className="bg-gray-800 h-[100px] flex items-center fixed z-30 w-[100%]">
      <div className="w-[40%] flex items-center gap-3 px-5 ">
        {/* render if the screen width is small, mention lg:hidden in below code */}
        <GiHamburgerMenu
          className="cursor-pointer text-white size-6 hover:bg-gray-500 lg:hidden"
          onClick={handleHamburgerButton}
        />
        <img alt="logo-img" src={logoImage} className="rounded-full w-[70px]"></img>
        <h1 className="hidden lg:block lg:text-3xl lg:text-white lg:font-semibold">FleetFlow</h1>
      </div>
      <nav className="w-[60%] flex items-center justify-end gap-5 px-6 py-3">
        <div className="hidden lg:text-white lg:flex lg:justify-evenly lg:w-[70%] lg:font-bold">
          <Link to="/dashboard">
            <div className="p-2 hover:text-cyan-500">{language[lang].home}</div>
          </Link> 
          {/* People menu from Navigation bar */}
          <div 
            onMouseEnter={handlePeople}
            onMouseLeave={handleMouseLeave}
            className="flex hover:text-cyan-500 relative cursor-pointer p-2">{language[lang].people}<IoMdArrowDropdown size={25} />
            { showDropdown.people && 
              <div className={`${mode === 'light' ? "bg-white shadow-gray-600" : "bg-gray-600 text-white shadow-black"} absolute 
              top-10 left-1/2 transform -translate-x-1/2 
              w-[150px] h-[200px] rounded-lg
              text-black pt-4 flex justify-center 
              shadow-xl 
            `}>
                <MenuNavigation />
              </div>}
          </div>
          {/* Fleet menu from Navigation bar */}
          <div 
            onMouseEnter = { handleFleet}
            onMouseLeave={handleMouseLeave}
            className="flex items-center hover:text-cyan-500 relative cursor-pointer p-2 ">{language[lang].fleet} <IoMdArrowDropdown size={25} 
          />
            { showDropdown.fleet && 
              <div className={`${mode === 'light' ? "bg-white shadow-gray-600" : "bg-gray-600 text-white shadow-black"} absolute 
                                top-10 left-1/2 transform -translate-x-1/2 
                                w-[150px] h-[200px] rounded-lg
                                text-black pt-4 flex justify-center 
                                shadow-xl 
                              `}>
                  <FleetMenuNavigation />              
                </div> }
          </div>
          <div 
            onMouseEnter={ handleTrip }
            onMouseLeave={handleMouseLeave}
            className="flex items-center hover:text-cyan-500 relative p-2">{language[lang].trip}<IoMdArrowDropdown size={25} />
            { showDropdown.trip && 
              <div className={`${mode === 'light' ? "bg-white shadow-gray-600" : "bg-gray-600 text-white shadow-black"} absolute 
                                top-10 left-1/2 transform -translate-x-1/2 
                                w-[150px] h-[200px] rounded-lg
                                text-black pt-4 flex justify-center 
                                shadow-xl 
                              `}>
                  <OthersNavigation />
              </div> }
          </div>
        </div>
        <div className="flex gap-[16px] justify-center items-center sm:gap-2 lg:w-[30%] lg:gap-[20px]">
          <button 
            className="text-white font-semibold px-[10px] text-sm hover:text-cyan-500 py-[10px] bg-slate-700 rounded-full"
            onClick={handleButton}
          >
            {language[lang].signout}
          </button>
          <div 
            className="cursor-pointer" 
            onClick={handleMode}
          >
            {mode === "light" ? <MdOutlineLightMode className="text-white size-6" />: <MdDarkMode className="text-white size-6" />}
          </div>
          <GrLanguage className="text-white size-6" />
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;