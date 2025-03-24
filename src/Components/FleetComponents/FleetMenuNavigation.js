import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const FleetMenuNavigation = () => {
  const mode = useSelector(store=>store.navigation.mode)

  return (
    <div className="w-[90%] flex flex-col items-start text-sm gap-2 font-normal">
      <Link to="/fleet/register" className="w-full">
          <h1 className={`w-[100%] text-left pl-2 py-1  ${mode === "light" ? "hover:bg-gray-200" : "hover:bg-gray-500 hover:text-white" }`}>Register</h1>
      </Link>
      <Link to="/fleet/fleetList" className="w-full">
        <h1 className={`w-[100%] text-left pl-2 py-1  ${mode === "light" ? "hover:bg-gray-200" : "hover:bg-gray-500 hover:text-white" }`}>Fleet List </h1>
      </Link>
    </div>
  );
};

export default FleetMenuNavigation;
