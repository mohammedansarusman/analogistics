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

  const handleDateChangeRTA = (date) => {
    date && dispatch(addRTAExpiry(date.getTime()));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidRTAExpiry(true));
  };
  const message = useDateValidity(rtaExpiry);

  return (
    <div className="flex flex-col items-start w-1/2 gap-1">
      <label for="rtaExpiry" className="font-bold opacity-80">
        RTA Expiry<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={rtaExpiry}
        onChange={handleDateChangeRTA}
        onBlur = {handleBlur}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        value = { rtaExpiry}
        className="w-full text-black border border-gray-300 border-1 outline-none pl-2 bg-white rounded-md h-[40px] focus:ring-1 focus:ring-gray-300 focus:ring-offset-4"
      />
      <div className="h-[20px]">
        {flagRTA && <p className="text-red-500 text-xs">{message}</p>}
        {/* if any message from custom hook that can see here */}
      </div>
    </div>
  );
};

export default RegisterRTAExpiry;
