import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDateValidity} from './CustomHooks/useDateValidity'
import { addRTAExpiry, addValidRTAExpiry } from "../Store/registrationSlice";
import { useSelector, useDispatch } from "react-redux";

const RegisterRTAExpiry = () => {
  const dispatch = useDispatch();
  const rtaExpiry = useSelector((store)=>store.registration.rtaExpiry);
  const flagRTA = useSelector((store)=>store.registration.validRTAExpiry)
  const mode = useSelector((store)=>store.navigation.mode);

  const handleDateChangeRTA = (date) => {
    date && dispatch(addRTAExpiry(date.getTime()));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidRTAExpiry(true));
  };
  const message = useDateValidity(rtaExpiry);

  return (
    <div className="flex flex-col items-start w-full gap-1">
      <label for="rtaExpiry" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        RTA Expiry<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={rtaExpiry}
        onChange={handleDateChangeRTA}
        onBlur = {handleBlur}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        value = { rtaExpiry}
        className={`w-full bg-gray-800 focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black bg-white" : "focus:ring-gray-600 text-white bg-gray-800"}`}
        wrapperClassName="date-picker-style"
      />
      <div className='w-full h-[1px] bg-gray-500'></div>
      <div className="h-[20px]">
        {flagRTA && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterRTAExpiry;
