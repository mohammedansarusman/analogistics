import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDateValidity} from './CustomHooks/useDateValidity'
import { addPortExpiry, addValidPortExpiry } from "../Store/registrationSlice";
import { useSelector, useDispatch } from "react-redux";


const RegisterPortExpiry = () => {
  
  const dispatch = useDispatch();
  const portExpiry = useSelector((store)=>store.registration.portExpiry);
  const flagPort = useSelector((store)=>store.registration.validPortExpiry)

  const handleDateChangePort = (date) => {
    date && dispatch(addPortExpiry(date.getTime()));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidPortExpiry(true));
  };
  const message = useDateValidity(portExpiry)


  return (
    <div className="flex flex-col items-start w-full gap-1">
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
        className=" text-black w-full"
        wrapperClassName="date-picker-style"
      />
      <div className='w-full h-[1px] bg-gray-500'></div>
      <div className="h-[20px]">
        {flagPort && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterPortExpiry;
