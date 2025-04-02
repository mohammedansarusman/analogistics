import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDateValidity} from './CustomHooks/useDateValidity'
import { useDispatch, useSelector } from "react-redux";
import { addOHCExpiry, addValidOHCExpiry } from "../Store/registrationSlice";
import { language } from "../Utils/constants";
const RegisterOHCExpiry = () => {
  const dispatch = useDispatch();
  const flagOHC = useSelector((store)=>store.registration.validOHCExpiry)
  const ohcExpiry = useSelector((store)=>store.registration.ohcExpiry);
  const mode = useSelector((store)=>store.navigation.mode);
  const lang = useSelector((store)=>store.navigation.lang);

  const handleDateChangeOHC = (date) => {
    date && dispatch(addOHCExpiry(date.getTime()));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidOHCExpiry(true));
  };
  const message = useDateValidity(ohcExpiry);
  return (
    <div className="flex flex-col items-start w-full gap-1">
      <label htmlFor="ohcExpiry" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        {language[lang].ohcExpiry}<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={ohcExpiry}
        onChange={handleDateChangeOHC}
        value={ohcExpiry}
        onBlur={handleBlur}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        className={`w-full bg-gray-800 focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black bg-white" : "focus:ring-gray-600 text-white bg-gray-800"}`}
        wrapperClassName="date-picker-style"
      />
      <div className='w-full h-[1px] bg-gray-500'></div>
      <div className="h-[20px]">
        {flagOHC && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterOHCExpiry;
