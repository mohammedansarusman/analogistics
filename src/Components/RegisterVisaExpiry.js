// parent component  - <DatePickerPassVisa />
// purpose of this component - the VISA EXPIRY FIELD is created and its validation method.


import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDateValidity} from './CustomHooks/useDateValidity'

const RegisterVisaExpiry = () => {
  const [selectedDateVisa, setSelectedDateVisa] = useState(null);
  const [interactedName, setInteractedName] = useState(false);
  const handleDateChangeVisa = (date) => {
    setSelectedDateVisa(date);
  };
  const handleBlur = () => {
    setInteractedName(true);
  };
  const message = useDateValidity(selectedDateVisa);
  return (
    <div className="flex flex-col items-start w-1/2">
      <label for="visaExpiry" className="font-bold opacity-80">
        Visa Expiry
      </label>
      <DatePicker
        selected={selectedDateVisa}
        onChange={handleDateChangeVisa}
        value = {selectedDateVisa}
        onBlur={handleBlur}
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
export default RegisterVisaExpiry;
