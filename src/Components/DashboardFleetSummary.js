import React from "react";
import { FaIdCard } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { RiAdvertisementLine } from "react-icons/ri";
import { FcInspection } from "react-icons/fc";
import { useSelector } from "react-redux";
import { language } from "../Utils/constants";


const DashboardFleetSummary = () => {
  const lang = useSelector(store=>store.navigation.lang)
  const currentDate = new Date();
  const data = useSelector((store) => store.fleetRegistration.fleetRecord);
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
  const mode = useSelector(store=>store.navigation.mode);


  return (
    <div className={`${mode === 'light' ? "bg-gray-200" : "bg-gray-600 text-white"} h-[80%] px-[20px] py-[20px] text-gray-500 flex flex-col justify-center`}>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>{language[lang].registrationExpiry}</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <FaIdCard />
        <h1>{noExpiryMulkiya.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>{language[lang].insuranceExpiry}</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <FaCarCrash />
        <h1>{noExpiryInsurance.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>{language[lang].advertisementExpiry}</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <RiAdvertisementLine />
        <h1>{noExpiryAdvertisement.length}</h1>
      </div>
      <div className="w-[100%] flex justify-end text-xl">
        <h1>{language[lang].isoExpiry}</h1>
      </div>
      <div className="w-[100%] flex justify-between text-4xl">
        <FcInspection />
        <h1>{noExpiryISO.length}</h1>
      </div>
    </div>
  );
};

export default DashboardFleetSummary;
