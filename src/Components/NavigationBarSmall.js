import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { changeBar } from "../Store/navigationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import MenuNavigation from "./MenuNavigation";
import { Link } from "react-router-dom";
import FleetMenuNavigation from "./FleetComponents/FleetMenuNavigation";
import OthersNavigation from "./OthersNavigation";
import { language } from "../Utils/constants";


// Parent componenet - <App />
const NavigationBarSmall = () => {
  const [peopleMenu, setPeopleMenu] = useState(false);
  const [fleetMenu, setFleetMenu] = useState(false);
  const [tripMenu, setTripMenu] = useState(false);
  const mode = useSelector((store) => store.navigation.mode);
  const lang = useSelector((store) => store.navigation.lang);

  const dispatch = useDispatch();
  const handleCloseButton = () => {
    // Action to close the small navigation bar
    dispatch(changeBar(false));
  };
  const handlePeople = () => {
    setPeopleMenu(!peopleMenu);
    setFleetMenu(false);
    setTripMenu(false);
  };
  const handleFleet = () => {
    setFleetMenu(!fleetMenu);
    setPeopleMenu(false);
    setTripMenu(false);
  };
  const handleTrip = () => {
    setTripMenu(!tripMenu);
    setPeopleMenu(false);
    setFleetMenu(false);
    // dispatch(changeBar(false));

  };
  const handleHome = () => {
    setTripMenu(false);
    setPeopleMenu(false);
    setFleetMenu(false);
    dispatch(changeBar(false));
  };
  return (
    <div className={`w-[350px] h-[100%] fixed left-0 top-0 flex flex-col z-40 ${mode === "light" ? "bg-white" : "bg-gray-800"}`}>
      {/* Header in side navigation bar */}
      <div className="bg-gray-700 h-[70px] flex items-center justify-around text-white">
        <h1 className="text-3xl font-semibold">FleetFlow</h1>
        {/* CLOSE BUTTON X */}
        <AiOutlineClose
          size={26}
          className="hover:bg-slate-700"
          onClick={handleCloseButton}
        />
      </div>
      <div className="flex flex-col items-center pt-7 text-gray-500 text-md gap-2 font-semibold">
        {/* Home menu in side navigation bar */}
        <div
          className={`w-[90%] flex justify-start py-1 pl-2 rounded-md ${mode === "light" ? "hover:bg-gray-100" : "hover:bg-gray-600 hover:text-white"}`}
          onClick={handleHome}
        >
          <Link to="/dashboard/">
            <h1>{language[lang].home}</h1>
          </Link>
        </div>
        {/* People menu in side navigation bar */}
        <div
          className={`w-[90%] flex justify-between items-center py-1 pl-2 rounded-md hover:bg-gray-100 cursor-pointer ${mode === "light" ? "hover:bg-gray-100" : "hover:bg-gray-600 hover:text-white"}`}
          onClick={handlePeople}
        >
          <h1>{language[lang].people}</h1>
          {!peopleMenu ? (
            <MdKeyboardArrowRight size={20} />
          ) : (
            <MdKeyboardArrowDown size={20} />
          )}
        </div>
        {peopleMenu && <MenuNavigation />}
        {/* Fleet menu in side navigation bar */}
        <div
          className={`w-[90%] flex justify-between items-center py-1 pl-2 rounded-md hover:bg-gray-100 cursor-pointer ${mode === "light" ? "hover:bg-gray-100" : "hover:bg-gray-600 hover:text-white"}`}
          onClick={handleFleet}
        >
          <h1>{language[lang].fleet}</h1>
          {!fleetMenu ? (
            <MdKeyboardArrowRight size={20} />
          ) : (
            <MdKeyboardArrowDown size={20} />
          )}
        </div>
        {fleetMenu && <FleetMenuNavigation />}
        {/* Trip menu in side navigation bar */}
        <div
          className={`w-[90%] flex justify-between items-center py-1 pl-2 rounded-md hover:bg-gray-100 cursor-pointer ${mode === "light" ? "hover:bg-gray-100" : "hover:bg-gray-600 hover:text-white"}`}
          onClick={handleTrip}
        >
          <h1>{language[lang].trip}</h1>
          {!tripMenu ? (
            <MdKeyboardArrowRight size={20} />
          ) : (
            <MdKeyboardArrowDown size={20} />
          )}
        </div>
        {tripMenu && <OthersNavigation />}
      </div>
    </div>
  );
};

export default NavigationBarSmall;
