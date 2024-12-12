import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const DatePickerPassVisa = () => {
  const [selectedDatePassport, setSelectedDatePassport] = useState(null);
  const [selectedDateVisa, setSelectedDateVisa] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDatePassport(date);
  };
  const handleDateChangeVisa = (date) => {
    setSelectedDateVisa(date);
  };
  return (
    <div className="w-full flex flex-col items-start">
      <div className="flex w-full">
        <div className="flex flex-col items-start w-1/2">
          <label for="passExpiry" className="">
            Passport Expiry
          </label>
          <DatePicker
            selected={selectedDatePassport}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            className=" text-black border-2 border-gray-300"
          />
        </div>
        <div className="flex flex-col items-start w-1/2">
          <label for="visaExpiry" className="">
            Visa Expiry
          </label>
          <DatePicker
            selected={selectedDateVisa}
            onChange={handleDateChangeVisa}
            dateFormat="dd-MM-yyyy"
            className=" text-black border-2 border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerPassVisa;
