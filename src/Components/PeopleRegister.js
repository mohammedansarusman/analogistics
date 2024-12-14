import React, { useState } from "react";
import { changeBar } from "../Store/navigationSlice";
import { useDispatch } from "react-redux";
// import { addDays, isWeekend } from 'date-fns'
import DatePickerPassVisa from "./DatePickerPassVisa";
import DatePickerOHCRTA from "./DatePickerOHCRTA";
import DatePickerFirePort from "./DatePickerFirePort";
import RegisterName from "./RegisterName";
import RegisterMiddleName from "./RegisterMiddleName";
import RegisterLastName from "./RegisterLastName";

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
          <div className="w-full flex flex-col items-start">
            <label htmlFor="empid" className="block font-bold opacity-80">
              Employee ID
            </label>
            <input
              type="text"
              id="empid"
              name="empid"
              className="block w-full text-black border-2 border-gray-300 pl-2"
            />
          </div>
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
