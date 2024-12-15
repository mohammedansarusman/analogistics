// parent component  - <DatePickerPassVisa />
// purpose of this component - the passport expiry field is created and its validation method.
 
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDateValidity} from './CustomHooks/useDateValidity'
import { addPassportExpiry } from "../Store/registrationSlice";
import { useSelector, useDispatch } from "react-redux";

const RegisterPassportExpiry = () => {
  const dispatch = useDispatch();
  const passportExpiry = useSelector((store)=>store.registration.passportExpiry);
  const [interactedName, setInteractedName] = useState(false);

  const handleDateChange = (date) => {
    dispatch(addPassportExpiry(date));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    setInteractedName(true);
  };
  const message = useDateValidity(passportExpiry)
  return (
    <div className="flex flex-col items-start w-1/2">
      <label for="passExpiry" className="font-bold opacity-80">
        Passport Expiry<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={passportExpiry}
        onChange={handleDateChange}
        value={passportExpiry}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        onBlur={handleBlur}
        className=" text-black border-2 border-gray-300 pl-2"
      />
      <div className="h-[20px]">
        {interactedName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterPassportExpiry;
