// parent component  - <DatePickerPassVisa />
// purpose of this component - the passport expiry field is created and its validation method.
 
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDateValidity} from './CustomHooks/useDateValidity'


const RegisterPassportExpiry = () => {
  const [selectedDatePassport, setSelectedDatePassport] = useState(null);
  const [interactedName, setInteractedName] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDatePassport(date);
  };
  const handleBlur = () => {
    setInteractedName(true);
  };
  const message = useDateValidity(selectedDatePassport)
  return (
    <div className="flex flex-col items-start w-1/2">
      <label for="passExpiry" className="font-bold opacity-80">
        Passport Expiry
      </label>
      <DatePicker
        selected={selectedDatePassport}
        onChange={handleDateChange}
        value={selectedDatePassport}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        onBlur={handleBlur}
        className=" text-black border-2 border-gray-300"
      />
      <div className="h-[20px]">
        {interactedName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterPassportExpiry;
