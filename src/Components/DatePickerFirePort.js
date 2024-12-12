import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


const DatePickerFirePort = () => {
  const [selectedDateFireNSafety, setSelectedDateFireNSafety] = useState(null);
  const [selectedDatePort, setSelectedDatePort] = useState(null);

  const handleDateChangeFireNSafety = (date) => {
    setSelectedDateFireNSafety(date);
  };
  const handleDateChangePort = (date) => {
    setSelectedDatePort(date);
  };
  return (
    <div className="w-full flex flex-col items-start">
      <div className="flex w-full">
        <div className="flex flex-col items-start w-1/2">
          <label for="fireNsafetyExpiry" className="">
            Fire & Safety Expiry
          </label>
          <DatePicker
            selected={selectedDateFireNSafety}
            onChange={handleDateChangeFireNSafety}
            dateFormat="MM-dd-yyyy"
            className=" text-black border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col items-start w-1/2">
          <label for="portExpiry" className="">
            Port Expiry
          </label>
          <DatePicker
            selected={selectedDatePort}
            onChange={handleDateChangePort}
            dateFormat="MM-dd-yyyy"
            className=" text-black border-2 border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerFirePort;
