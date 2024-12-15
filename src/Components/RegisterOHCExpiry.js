import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import {useDateValidity} from './CustomHooks/useDateValidity'
import { useDispatch, useSelector } from "react-redux";
import { addOHCExpiry } from "../Store/registrationSlice";

const RegisterOHCExpiry = () => {
  const dispatch = useDispatch();
  const ohcExpiry = useSelector((store)=>store.registration.ohcExpiry);
  const [interactedName, setInteractedName] = useState(false);

  const handleDateChangeOHC = (date) => {
    dispatch(addOHCExpiry(date));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    setInteractedName(true);
  };
  const message = useDateValidity(ohcExpiry);
  return (
    <div className="flex flex-col items-start w-1/2">
      <label for="ohcExpiry" className="font-bold opacity-80">
        OHC Expiry<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={ohcExpiry}
        onChange={handleDateChangeOHC}
        value={ohcExpiry}
        onBlur={handleBlur}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        className=" text-black border-2 border-gray-300 pl-2"
      />
      <div className="h-[20px]">
        {interactedName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterOHCExpiry;
