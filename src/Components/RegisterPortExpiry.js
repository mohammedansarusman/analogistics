import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import {useDateValidity} from './CustomHooks/useDateValidity'
import { addPortExpiry } from "../Store/registrationSlice";
import { useSelector, useDispatch } from "react-redux";


const RegisterPortExpiry = () => {
  const dispatch = useDispatch();
  const portExpiry = useSelector((store)=>store.registration.portExpiry);
  const handleDateChangePort = (date) => {
    dispatch(addPortExpiry(date));  // dispatch action to update the state in the store.
  };
  const [interactedName, setInteractedName] = useState(false);
  const handleBlur = () => {
    setInteractedName(true);
  };
  const message = useDateValidity(portExpiry)


  return (
    <div className="flex flex-col items-start w-1/2">
      <label for="portExpiry" className="font-bold opacity-80">
        Port Expiry<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={portExpiry}
        onChange={handleDateChangePort}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        value={portExpiry}
        onBlur={handleBlur}
        className=" text-black border-2 border-gray-300 pl-2"
      />
      <div className="h-[20px]">
        {interactedName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterPortExpiry;