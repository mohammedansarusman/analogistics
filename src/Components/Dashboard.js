import React from "react";
import DashboardEmployees from "./DashboardEmployees";
import DashboardFleet from "./DashboardFleet";
import DashboardEmployeesSummary from "./DashboardEmployeesSummary";
import DashboardFleetSummary from "./DashboardFleetSummary";
import useEmployeeData from "./CustomHooks/useEmployeeData";
import useFleetData from "./CustomHooks/useFleetData";


const Dashboard = () => {
  useEmployeeData();
  useFleetData();
  return (
    <div className="w-full h-full absolute left-0 top-0 flex flex-col items-center pt-[100px]">
      <div className="w-full flex flex-col items-center">
        <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7 fixed">
          <h1>D A S H B O A R D</h1>
        </header>
      </div>
      <div
        className="w-full flex flex-col mt-[100px] gap-2 justify-center p-[50px]
       sm:w-[80%] 
       lg:flex lg:flex-row lg:w-[85%]"
      >
        <div className="lg:w-1/2  bg-gray-500">
          <DashboardEmployees />
          <DashboardEmployeesSummary />
        </div>
        <div className=" lg:w-1/2 bg-gray-600">
          <DashboardFleet />
          <DashboardFleetSummary />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
