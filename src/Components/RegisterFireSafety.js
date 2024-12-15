// parent component - <DatePickerFirePort />
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useDateValidity } from "./CustomHooks/useDateValidity";
import { addFireExpiry } from "../Store/registrationSlice";
import { useSelector, useDispatch } from "react-redux";

const RegisterFireSafety = () => {
  const dispatch = useDispatch();
  const fireExpiry = useSelector((store) => store.registration.fireExpiry);
  const [interactedName, setInteractedName] = useState(false);

  const handleDateChangeFireNSafety = (date) => {
    dispatch(addFireExpiry(date)); // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    setInteractedName(true);
  };
  const message = useDateValidity(fireExpiry);

  return (
    <div className="flex flex-col items-start w-1/2">
      <label for="fireNsafetyExpiry" className="font-bold opacity-80">
        Fire & Safety Expiry<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={fireExpiry}
        onChange={handleDateChangeFireNSafety}
        value={fireExpiry}
        onBlur={handleBlur}
        placeholderText="DD/MM/YYYY"
        dateFormat="dd-MM-yyyy"
        className=" text-black border-2 border-gray-300 pl-2"
      />
      <div className="h-[20px]">
        {interactedName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterFireSafety;
