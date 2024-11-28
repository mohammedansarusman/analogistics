import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLightMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import logoImage from "../Images/fleetflow.webp"

const NavigationBar = () => {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="bg-slate-950 opacity-85 h-[100px] flex items-center ">
        <div className="w-[40%] flex items-center gap-3 px-5 ">
            <GiHamburgerMenu className="cursor-pointer text-white size-6 hover:bg-gray-500 lg:hidden"/>  
            <img alt = "logo-img" src = {logoImage} className="rounded-full w-[70px]"></img>
            <h1 className="hidden lg:block lg:text-3xl lg:text-white lg:font-semibold">FleetFlow</h1>
        </div>
        <div className="w-[60%] flex items-center justify-end gap-5 px-6">
            <ul className="hidden lg:text-white lg:flex lg:justify-evenly lg:w-[70%] lg:font-bold">
                <li>People</li>
                <li>Fleet</li>
                <li>Trip</li>
            </ul>
            <div className = "flex gap-5 justify-end lg:w-[30%]">
                <MdOutlineLightMode className="text-white size-6"/>
                <GrLanguage className="text-white size-6"/>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;