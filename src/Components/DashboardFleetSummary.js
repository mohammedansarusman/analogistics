import React from "react";
import { FaIdCard } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
import { FcInspection } from "react-icons/fc";





const DashboardFleetSummary = () => {
  return (
    <div className="w-[85%] h-[400px] bg-gray-200 justify-center px-2 text-gray-500 flex flex-col py-2">
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Registration Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <FaIdCard />
        <h1>{20}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Insurance Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <FaCarCrash />
        <h1>{20}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Advertisement Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <RiAdvertisementLine />
        <h1>{20}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>ISO Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <FcInspection />
        <h1>{20}</h1>
      </div>
    </div>
  );
};

export default DashboardFleetSummary;
