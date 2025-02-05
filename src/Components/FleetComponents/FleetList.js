import React, { useEffect } from "react";
import useFleetData from "../CustomHooks/useFleetData";
const FleetList = () => {
      // Fetch fleet data from Firebase and update the Redux store
      // This function should be called whenever the fleet data is updated in Firebase
      useFleetData();

  return (
    <div className="w-full absolute left-0">
      <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7">
        <h1>Fleet List</h1>
      </header>
    </div>
  );
};

export default FleetList;
