import React from "react";
import { changeBar } from "../Store/navigationSlice";
import { useDispatch } from "react-redux";
// import { addDays, isWeekend } from 'date-fns'
import DatePickerPassVisa from "./DatePickerPassVisa";
import DatePickerOHCRTA from "./DatePickerOHCRTA";
import DatePickerFirePort from "./DatePickerFirePort";
import RegisterName from "./RegisterName";
import RegisterMiddleName from "./RegisterMiddleName";
import RegisterLastName from "./RegisterLastName";
import RegisterEmployeId from "./RegisterEmployeId";

const PeopleRegister = () => {
  const dispatch = useDispatch();
  dispatch(changeBar(false));
  return (
    <div className="w-[100%] absolute left-0">
      <div className="flex flex-col items-center pb-5">
        <header className="w-full h-[70px] text-3xl bg-cyan-500 text-white flex justify-center items-center ">
          <h1>Employee Registration</h1>
        </header>
        <form className="flex flex-col items-start w-[90%]  border-2 border-cyan-500 p-5 rounded-xl mt-[50px]">
          {/* First name field */}
          <RegisterName />
          {/* Middle name field */}
          <RegisterMiddleName />
          {/* Laste Name field */}
          <RegisterLastName />
          {/* Employee id field */}
          <RegisterEmployeId />
          {/* passport and visa expiry date picker component */}
          <DatePickerPassVisa />
          {/* OHC and RTA expiry */}
          <DatePickerOHCRTA />
          {/* Fire and Safety and Port Expiry */}
          <DatePickerFirePort />
        </form>
      </div>
    </div>
  );
};

export default PeopleRegister;
