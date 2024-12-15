import React from "react";
import RegisterPassportExpiry from "./RegisterPassportExpiry";
import RegisterVisaExpiry from "./RegisterVisaExpiry";

const DatePickerPassVisa = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <div className="flex w-full">
        <RegisterPassportExpiry />
        <RegisterVisaExpiry />
      </div>
    </div>
  );
};
export default DatePickerPassVisa;
