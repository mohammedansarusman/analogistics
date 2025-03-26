import React from "react";
import { IoIosPeople } from "react-icons/io";
import { useSelector } from "react-redux";
import { language } from "../Utils/constants";


const DashboardEmployees = () => {
  const noOfEmployees = useSelector((store)=>store.registration.employeeRecords);
  const lang = useSelector(store=>store.navigation.lang)

  return (
    <div className="h-[20%] bg-violet-600 text-white flex flex-col justify-center px-[20px]">
      <div className="w-[100%] flex justify-end text-xl">
        <h1>{language[lang].employees}</h1>
      </div>
      <div className="w-[100%] flex justify-between items-center text-5xl font-bold">
      <IoIosPeople />
      <h1 className="">{noOfEmployees.length}</h1>
      </div>
    </div>
  );
};

export default DashboardEmployees;
