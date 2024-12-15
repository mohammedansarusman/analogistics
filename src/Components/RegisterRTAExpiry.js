import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import {useDateValidity} from './CustomHooks/useDateValidity'

const RegisterRTAExpiry = () => {
  const [selectedDateRTA, setSelectedDateRTA] = useState(null);
  const [interactedName, setInteractedName] = useState(false);

  const handleDateChangeRTA = (date) => {
    setSelectedDateRTA(date);
  };
  const handleBlur = () => {
    setInteractedName(true);
  };
  const message = useDateValidity(selectedDateRTA)

  return (
    <div className="flex flex-col items-start w-1/2">
      <label for="rtaExpiry" className="">
        RTA Expiry
      </label>
      <DatePicker
        selected={selectedDateRTA}
        onChange={handleDateChangeRTA}
        onBlur = {handleBlur}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        className=" text-black border-2 border-gray-300"
      />
      <div className="h-[20px]">
        {interactedName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterRTAExpiry;
