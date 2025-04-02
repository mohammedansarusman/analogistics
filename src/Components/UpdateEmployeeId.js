import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { language } from "../Utils/constants";

const UpdateEmployeeId = () => {
  const employeId = useSelector((store)=>store.registration.employeId);
  const mode = useSelector((store)=>store.navigation.mode);
  const lang = useSelector((store)=>store.navigation.lang);


  return (
    <div className="w-full flex flex-col items-start gap-1">
      <label htmlFor="empid" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        {language[lang].employeeId}<span className="text-red-500">*</span>
      </label>
      <p>{employeId}</p>
      <div className='w-full h-[1px] bg-gray-500'></div>
      <div className="h-[20px]">
      </div>
    </div>
  );
};

export default UpdateEmployeeId;
