import React from "react";
import { changeBar } from "../Store/navigationSlice";
import { useDispatch, useSelector } from "react-redux";
import DatePickerPassVisa from "./DatePickerPassVisa";
import DatePickerOHCRTA from "./DatePickerOHCRTA";
import DatePickerFirePort from "./DatePickerFirePort";
import RegisterName from "./RegisterName";
import RegisterMiddleName from "./RegisterMiddleName";
import RegisterLastName from "./RegisterLastName";
import RegisterEmployeId from "./RegisterEmployeId";
import RegisterSuccessMessage from "./RegisterSuccessMessage";
import { useState } from "react";
import RegisterSaveClose from "./RegisterSaveClose";
import useEmployeeData from './CustomHooks/useEmployeeData'

const PeopleRegister = () => {
  const dispatch = useDispatch();
  // the reason behind calling  useEmployeeData here is to use check the employee id in the <RegisterEmployeeId /> component
  useEmployeeData();
  const employeeData = useSelector(
    (store) => store.registration.employeeRecords
  );
  const [message, setMessage] = useState(false);
  dispatch(changeBar(false));
  return (
    <div className="w-full absolute left-0">
      <div className="w-full flex flex-col items-center pb-5 relative">
        { message &&  <RegisterSuccessMessage /> }
        <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7">
          <h1>Employee Registration</h1>
        </header>
        <div
          className="flex flex-col items-start w-[90%]  border-2 border-cyan-500 p-5 rounded-xl mt-[30px]"
        >
          <div className="w-full lg:flex lg:gap-5 lg:items-center">
            {/* First name field */}
            <RegisterName />
            {/* Middle name field */}
            <RegisterMiddleName />
          </div>
          <div className="w-full lg:flex lg:gap-5 lg:items-center">
            {/* Laste Name field */}
            <RegisterLastName />
            {/* Employee id field */}
            <RegisterEmployeId data = {employeeData}/>
          </div>
          {/* passport and visa expiry date picker component */}
          <DatePickerPassVisa />
          {/* OHC and RTA expiry */}
          <DatePickerOHCRTA />
          {/* Fire and Safety and Port Expiry */}
          <DatePickerFirePort />
          {/* Save and Close Button */}
          <RegisterSaveClose dataMessage = {setMessage} /> 
        </div>
      </div>
    </div>
  );
};

export default PeopleRegister;
