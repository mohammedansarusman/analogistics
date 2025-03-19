import React from "react";
import { BsFillPassportFill } from "react-icons/bs";
import { LiaCcVisa } from "react-icons/lia";
import { TbRibbonHealth } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiShipFill } from "react-icons/ri";
import { FaFireExtinguisher, FaFirefoxBrowser } from "react-icons/fa";
import { useSelector } from "react-redux";

const DashboardEmployeesSummary = () => {
  const currentDate = new Date();
  const data = useSelector((store) => store.registration.employeeRecords);
  const noExpiryPassport = data.filter((record) => {
    return new Date(record.passport) < new Date(currentDate);
  });
  const noExpiryVisa = data.filter((record) => {
    return new Date(record.visa) < new Date(currentDate);
  });
  const noExpiryOHC = data.filter((record) => {
    return new Date(record.ohc) < new Date(currentDate);
  });
  const noExpiryRTA = data.filter((record) => {
    return new Date(record.rta) < new Date(currentDate);
  });
  const noExpiryFire = data.filter((record) => {
    return new Date(record.fire) < new Date(currentDate);
  });
  const noExpiryPort = data.filter((record) => {
    return new Date(record.port) < new Date(currentDate);
  });

  return (
    <div className=" bg-gray-200 h-[80%] px-[20px] py-[20px] text-gray-500 flex flex-col justify-center">
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Passport Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <BsFillPassportFill />
        <h1>{noExpiryPassport.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Visa Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <LiaCcVisa />
        <h1>{noExpiryVisa.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>OHC Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <TbRibbonHealth />
        <h1>{noExpiryOHC.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>ODP Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <MdOutlineHealthAndSafety />
        <h1>{noExpiryRTA.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Fire & Safety Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <FaFireExtinguisher />
        <h1>{noExpiryFire.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Port Pass Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <RiShipFill />
        <h1>{noExpiryPort.length}</h1>
      </div>
    </div>
  );
};

export default DashboardEmployeesSummary;
