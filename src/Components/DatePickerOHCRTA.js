
import React from "react";

import RegisterOHCExpiry from "./RegisterOHCExpiry";
import RegisterRTAExpiry from "./RegisterRTAExpiry";
const DatePickerOHCRTA = () => {

  return (
    <div className="w-full flex flex-col items-start">
      <div className="flex w-full">
        <RegisterOHCExpiry />
        <RegisterRTAExpiry />
      </div>
    </div>
  );
};

export default DatePickerOHCRTA;
