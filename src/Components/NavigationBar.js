import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import logoImage from "../Images/fleetflow.webp"
import { useDispatch } from "react-redux";
import { changeBar } from "../Store/navigationSlice";
// Parent componenet - <App />


const NavigationBar = () => {
  const dispatch = useDispatch();
  
  const handleHamburgerButton = () => {
    console.log("clicked hamburger button")
    dispatch(changeBar(true))    
  }
  
  return (
    // {/* Navigation bar */}
    <div className="bg-slate-950 opacity-85 h-[100px] flex items-center fixed w-[100%]">
      <div className="w-[40%] flex items-center gap-3 px-5 ">
        <GiHamburgerMenu
          className="cursor-pointer text-white size-6 hover:bg-gray-500 lg:hidden"
          onClick= {handleHamburgerButton}
        />
        <img alt="logo-img" src={logoImage} className="rounded-full w-[70px]"></img>
        <h1 className="hidden lg:block lg:text-3xl lg:text-white lg:font-semibold">FleetFlow</h1>
      </div>
      <div className="w-[60%] flex items-center justify-end gap-5 px-6">
        <ul className="hidden lg:text-white lg:flex lg:justify-evenly lg:w-[70%] lg:font-bold">
          <li>Home</li>
          <li>People</li>
          <li>Fleet</li>
          <li>Trip</li>
        </ul>
        <div className="flex gap-5 justify-end lg:w-[30%]">
          <MdOutlineLightMode className="text-white size-6" />
          <GrLanguage className="text-white size-6" />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;