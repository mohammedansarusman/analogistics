// parent component - <DatePickerFirePort />
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDateValidity } from "./CustomHooks/useDateValidity";
import { addFireExpiry, addValidFireExpiry } from "../Store/registrationSlice";
import { useSelector, useDispatch } from "react-redux";

const RegisterFireSafety = () => {
  const dispatch = useDispatch();

  const fireExpiry = useSelector((store) => store.registration.fireExpiry);
  const flagFire = useSelector((store) => store.registration.validFireExpiry);

  const handleDateChangeFireNSafety = (date) => {
    date && dispatch(addFireExpiry(date.getTime())); // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidFireExpiry(true));
  };
  const message = useDateValidity(fireExpiry);

  return (
    <div className="flex flex-col items-start w-1/2 gap-1">
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
        className="w-full text-black border border-gray-300 border-1 outline-none pl-2 bg-white rounded-md h-[40px] focus:ring-1 focus:ring-gray-300 focus:ring-offset-4"
      />
      <div className="h-[20px]">
        {flagFire && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterFireSafety;
