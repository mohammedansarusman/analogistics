import React from "react";
import { BsFillPassportFill } from "react-icons/bs";
import { LiaCcVisa } from "react-icons/lia";
import { TbRibbonHealth } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiShipFill } from "react-icons/ri";

const DashboardEmployeesSummary = () => {
  return (
    <div className="w-[85%] h-[400px] bg-gray-200 justify-center px-2 text-gray-500 flex flex-col py-2">
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Expiring Passport</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <BsFillPassportFill />
        <h1>{20}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Visa Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <LiaCcVisa />
        <h1>{20}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>OHC Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <TbRibbonHealth />
        <h1>{20}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>ODP Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <MdOutlineHealthAndSafety />
        <h1>{20}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Port Pass Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <RiShipFill />
        <h1>{20}</h1>
      </div>
    </div>
  );
};

export default DashboardEmployeesSummary;
