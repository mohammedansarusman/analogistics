import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDateValidity } from "../CustomHooks/useDateValidity";
import { useSelector, useDispatch } from "react-redux";
import './fleetStyle.css'
import {
  addRegistrationExpiry,
  addValidRegistrationExpiry,
} from "../../Store/fleetRegistrationSlice";

const RegisterRegistrationExpiry = () => {
  const selectedDate = useSelector(
    (store) => store.fleetRegistration.registrationExpiry
  );
  const flag = useSelector(
    (store) => store.fleetRegistration.validRegistrationExpiry
  );
  const message = useDateValidity(selectedDate);
  const dispatch = useDispatch();
  const handleDateChange = (date) => {
    dispatch(addRegistrationExpiry(date));
  };
  const handleBlur = () => {
    dispatch(addValidRegistrationExpiry(true));
  };
  return (
    <div className="flex flex-col items-start w-full gap-1">
      <label htmlFor="registrationExpiry" className="font-bold opacity-80">
        Registration Expiry<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        onBlur={handleBlur}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        className=" text-black  pl-2 w-full"
        wrapperClassName="date-picker-style"
      />
      <div className="w-full h-[1px] bg-gray-500"></div>

      <div className="h-[20px]">
        {flag && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterRegistrationExpiry;