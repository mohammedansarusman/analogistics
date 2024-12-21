import React from "react";
import { changeBar } from "../Store/navigationSlice";
import { useDispatch } from "react-redux";
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

const PeopleRegister = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(false);
  dispatch(changeBar(false));
  return (
    <div className="w-[100%] absolute left-0">
      <div className="flex flex-col items-center pb-5 relative">
        { message &&  <RegisterSuccessMessage /> }
        <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7">
          <h1>Employee Registration</h1>
        </header>
        <div
          className="flex flex-col items-start w-[90%]  border-2 border-cyan-500 p-5 rounded-xl mt-[30px]"
        >
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
          {/* Save and Close Button */}
          <RegisterSaveClose dataMessage = {setMessage} />
        </div>
      </div>
    </div>
  );
};

export default PeopleRegister;
