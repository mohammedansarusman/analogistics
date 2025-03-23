import React from "react";
import { changeBar } from "../Store/navigationSlice";
import { useDispatch, useSelector } from "react-redux";
import RegisterName from "./RegisterName";
import RegisterMiddleName from "./RegisterMiddleName";
import RegisterLastName from "./RegisterLastName";
import RegisterEmployeId from "./RegisterEmployeId";
import RegisterSuccessMessage from "./RegisterSuccessMessage";
import { useState } from "react";
import RegisterSaveClose from "./RegisterSaveClose";
import useEmployeeData from './CustomHooks/useEmployeeData'
import { useLocation } from "react-router-dom";
import RegisterPassportExpiry from "./RegisterPassportExpiry";
import RegisterVisaExpiry from "./RegisterVisaExpiry";
import RegisterOHCExpiry from "./RegisterOHCExpiry";
import RegisterRTAExpiry from "./RegisterRTAExpiry";
import RegisterFireSafety from "./RegisterFireSafety";
import RegisterPortExpiry from "./RegisterPortExpiry";
// 


const PeopleRegister = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  // the reason behind calling  useEmployeeData here is to use check the employee id in the <RegisterEmployeeId /> component
  useEmployeeData();
  const employeeData = useSelector(
    (store) => store.registration.employeeRecords
  );
  const mode = useSelector(store=>store.navigation.mode);
  const [message, setMessage] = useState(false);
  dispatch(changeBar(false));
  return (
    <div className={`w-full min-h-screen absolute left-0 top-[100px] ${mode === "light" ? "bg-white" : "bg-gray-800"}`}>
      <div className="w-full flex flex-col items-center relative">
        {message && <RegisterSuccessMessage />}
        <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7 fixed z-10">
          <h1>Employee Registration</h1>
        </header>
        <div className="flex flex-col items-start w-[90%] border-2 border-cyan-500 p-5 rounded-xl mt-[100px] ">
          <div className="w-full lg:flex lg:justify-between">
            <div className="lg:w-[45%]">
              <RegisterName />
            </div>
            <div className="lg:w-[45%]">
              <RegisterMiddleName />
            </div>
          </div>
          <div className="w-full lg:flex lg:justify-between">
            <div className="lg:w-[45%]">
              <RegisterLastName />
            </div>
            <div className="lg:w-[45%]">
              <RegisterEmployeId data={employeeData} />
            </div>
          </div>
          <div className="w-full lg:flex lg:justify-between">
            <div className="lg:w-[45%]">
              <RegisterPassportExpiry />
            </div>
            <div className="lg:w-[45%]">
              <RegisterVisaExpiry />
            </div>
          </div>
          <div className="w-full lg:flex lg:justify-between">
            <div className="lg:w-[45%]">
              <RegisterOHCExpiry />
            </div>
            <div className="lg:w-[45%]">
              <RegisterRTAExpiry />
            </div>
          </div>
          <div className="w-full lg:flex lg:justify-between">
            <div className="lg:w-[45%]">
              <RegisterFireSafety />
            </div>
            <div className="lg:w-[45%]">
              <RegisterPortExpiry />
            </div>
          </div>
          <RegisterSaveClose dataMessage={setMessage} />
        </div>
      </div>
    </div>
  );
};

export default PeopleRegister;
