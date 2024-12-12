import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const DatePickerOHCRTA = () => {
  const [selectedDateOHC, setSelectedDateOHC] = useState(null);
  const [selectedDateRTA, setSelectedDateRTA] = useState(null);
  const handleDateChangeOHC = (date) => {
    setSelectedDateOHC(date);
  };

  const handleDateChangeRTA = (date) => {
    setSelectedDateRTA(date);
  };
  return (
    <div className="w-full flex flex-col items-start">
      <div className="flex w-full">
        <div className="flex flex-col items-start w-1/2">
          <label for="ohcExpiry" className="">
            OHC Expiry
          </label>
          <DatePicker
            selected={selectedDateOHC}
            onChange={handleDateChangeOHC}
            dateFormat="dd-MM-yyyy"
            className=" text-black border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col items-start w-1/2">
          <label for="rtaExpiry" className="">
            RTA Expiry
          </label>
          <DatePicker
            selected={selectedDateRTA}
            onChange={handleDateChangeRTA}
            dateFormat="dd-MM-yyyy"
            className=" text-black border-2 border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerOHCRTA;
