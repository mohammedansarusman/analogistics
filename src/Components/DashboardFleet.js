import React from "react";
import { TbCarSuv } from "react-icons/tb";


const DashboardFleet = () => {
  return (
    <div className="h-[100px] bg-green-600 text-white flex flex-col justify-center px-2">
      <div className="w-[100%] flex justify-end text-2xl">
        <h1>Fleet</h1>
      </div>
      <div className="w-[100%] flex justify-between items-center text-5xl font-bold">
        <TbCarSuv />
        <h1>{20}</h1>
      </div>
    </div>
  );
};

export default DashboardFleet;
