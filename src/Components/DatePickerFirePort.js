import React from "react";
import RegisterFireSafety from './RegisterFireSafety'
import RegisterPortExpiry from "./RegisterPortExpiry";

const DatePickerFirePort = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="flex w-full">
        <RegisterFireSafety />
        <RegisterPortExpiry />
      </div>
    </div>
  );
};

export default DatePickerFirePort;
