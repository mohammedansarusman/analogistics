import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDateValidity} from './CustomHooks/useDateValidity'
import { useDispatch, useSelector } from "react-redux";
import { addOHCExpiry, addValidOHCExpiry } from "../Store/registrationSlice";

const RegisterOHCExpiry = () => {
  const dispatch = useDispatch();
  const flagOHC = useSelector((store)=>store.registration.validOHCExpiry)
  const ohcExpiry = useSelector((store)=>store.registration.ohcExpiry);

  const handleDateChangeOHC = (date) => {
    date && dispatch(addOHCExpiry(date.getTime()));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidOHCExpiry(true));
  };
  const message = useDateValidity(ohcExpiry);
  return (
    <div className="flex flex-col items-start w-1/2 gap-1">
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
        className="w-full text-black border border-gray-300 border-1 outline-none pl-2 bg-white rounded-md h-[40px] focus:ring-1 focus:ring-gray-300 focus:ring-offset-4"
      />
      <div className="h-[20px]">
        {flagOHC && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterOHCExpiry;
