import React from "react";
import { FaIdCard } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
import { FcInspection } from "react-icons/fc";
import { useSelector } from "react-redux";


const DashboardFleetSummary = () => {
  const currentDate = new Date();
  const data = useSelector((store) => store.fleetRegistration.fleetRecord);
  console.log("data: ",data)
  const noExpiryMulkiya = data.filter((record)=>{
    return new Date(record.rta) < new Date(currentDate);
  });
  const noExpiryInsurance = data.filter((record)=>{
    return new Date(record.insurance) < new Date(currentDate);
  });
  const noExpiryAdvertisement = data.filter((record)=>{
    return new Date(record.advertisement) < new Date(currentDate);
  });
  const noExpiryISO = data.filter((record)=>{
    return new Date(record.iso) < new Date(currentDate);
  });

  return (
    <div className=" bg-gray-200 h-[80%] justify-center px-[20px] text-gray-500 flex flex-col py-2">
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Registration Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <FaIdCard />
        <h1>{noExpiryMulkiya.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Insurance Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <FaCarCrash />
        <h1>{noExpiryInsurance.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>Advertisement Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <RiAdvertisementLine />
        <h1>{noExpiryAdvertisement.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>ISO Expiry</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <FcInspection />
        <h1>{noExpiryISO.length}</h1>
      </div>
    </div>
  );
};

export default DashboardFleetSummary;
