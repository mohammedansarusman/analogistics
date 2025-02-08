import React, { useEffect } from "react";
import useFleetData from "../CustomHooks/useFleetData";
import { useSelector } from "react-redux";
import FleetDetails from "./FleetDetails";
const FleetList = () => {
      // Fetch fleet data from Firebase and update the Redux store
      // This function should be called whenever the fleet data is updated in Firebase
      const fleetData = useSelector((store)=>store.fleetRegistration.fleetRecord)
      useFleetData();
      if (!fleetData){
        return null
      }

  return (
    <div className="w-full absolute left-0">
      <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7">
        <h1>Fleet List</h1>
      </header>
      <div className="w-[100%] md:bg-red-500 lg:bg-green-600 xl:bg-blue-600 md:flex md:flex-wrap ">
        {/* Display fleet data */}
        {
          fleetData.map(
            (fleet) => <FleetDetails key = { fleet.plate } data = { fleet }/> 
          )
        }
      </div>
    </div>
  );
};

export default FleetList;
