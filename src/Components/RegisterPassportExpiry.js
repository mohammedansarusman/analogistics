// parent component  - <DatePickerPassVisa />
// purpose of this component - the passport expiry field is created and its validation method.
 
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDateValidity} from './CustomHooks/useDateValidity'
import { addPassportExpiry, addValidPassportExpiry } from "../Store/registrationSlice";
import { useSelector, useDispatch } from "react-redux";
import { language } from "../Utils/constants";

const RegisterPassportExpiry = () => {
  const dispatch = useDispatch();
  const passportExpiry = useSelector((store)=>store.registration.passportExpiry);
  const flagPassport = useSelector((store)=>store.registration.validPassportExpiry);
  const mode = useSelector((store)=>store.navigation.mode);
  const lang = useSelector((store)=>store.navigation.lang);


  const handleDateChange = (date) => {
    date && dispatch(addPassportExpiry(date.getTime()));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidPassportExpiry(true));
  };
  const message = useDateValidity(passportExpiry)
  return (
    <div className="flex flex-col items-start w-full gap-1">
      <label htmlFor="passExpiry" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        {language[lang].passportExpiry}<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={passportExpiry}
        onChange={handleDateChange}
        value={passportExpiry}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        onBlur={handleBlur}
        className={`w-full bg-gray-800 focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black bg-white" : "focus:ring-gray-600 text-white bg-gray-800"}`}
        wrapperClassName="date-picker-style"
      />
      <div className='w-full h-[1px] bg-gray-500'></div>
      <div className="h-[20px]">
        {flagPassport && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterPassportExpiry;
