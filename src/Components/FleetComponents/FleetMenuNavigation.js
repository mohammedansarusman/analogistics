import React from "react";
import { Link } from "react-router-dom";

const FleetMenuNavigation = () => {
  return (
    <div className="w-[90%] flex flex-col items-start text-sm gap-2 font-normal">
      <Link to="/fleet/register" className="w-full">
          <h1 className="w-[100%] text-left pl-2 py-1 hover:bg-gray-200 ">Register</h1>
      </Link>
      <Link to="/fleet/fleetList" className="w-full">
        <h1 className="w-[100%] text-left pl-2 py-1 hover:bg-gray-100  ">Fleet List </h1>
      </Link>
      {/* <h1 className="hover:bg-gray-100 w-[100%] text-left pl-2 py-1">Dummy</h1> */}
      {/* <h1 className="hover:bg-gray-100 w-[100%]text-left pl-2 py-1">Contact</h1> */}
    </div>
  );
};

export default FleetMenuNavigation;
