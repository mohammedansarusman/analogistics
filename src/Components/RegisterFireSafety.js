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
  const mode = useSelector((store)=>store.navigation.mode);

  const handleDateChangeFireNSafety = (date) => {
    date && dispatch(addFireExpiry(date.getTime())); // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidFireExpiry(true));
  };
  const message = useDateValidity(fireExpiry);

  return (
    <div className="flex flex-col items-start w-full gap-1">
      <label for="fireNsafetyExpiry" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        Fire & Safety Expiry<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={fireExpiry}
        onChange={handleDateChangeFireNSafety}
        value={fireExpiry}
        onBlur={handleBlur}
        placeholderText="DD/MM/YYYY"
        dateFormat="dd-MM-yyyy"
        className={`w-full bg-gray-800 focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black bg-white" : "focus:ring-gray-600 text-white bg-gray-800"}`}
        wrapperClassName="date-picker-style"
      />
      <div className='w-full h-[1px] bg-gray-500'></div>
      <div className="h-[20px]">
        {flagFire && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterFireSafety;
