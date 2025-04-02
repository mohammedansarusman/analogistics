import React from "react";
import { TbCarSuv } from "react-icons/tb";
import { useSelector } from "react-redux";
import { language } from "../Utils/constants";



const DashboardFleet = () => {
  const lang = useSelector(store=>store.navigation.lang)
  const noOfVehilces = useSelector((store)=>store.fleetRegistration.fleetRecord);
  return (
    <div className="h-[20%] bg-green-600 text-white flex flex-col justify-center px-[20px]">
      <div className="w-[100%] flex justify-end text-2xl">
        <h1>{language[lang].fleet}</h1>
      </div>
      <div className="w-[100%] flex justify-between items-center text-5xl font-bold">
        <TbCarSuv />
        <h1>{noOfVehilces.length}</h1>
      </div>
    </div>
  );
};

export default DashboardFleet;
