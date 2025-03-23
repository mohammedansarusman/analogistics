import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDateValidity } from "../CustomHooks/useDateValidity";
import { useSelector, useDispatch } from "react-redux";
import './fleetStyle.css';
import {
  addInsuranceExpiry,
  addValidInsuranceExpiry,
} from "../../Store/fleetRegistrationSlice";

const RegisterInsuranceExpiry = () => {
  const selectedDate = useSelector(
    (store) => store.fleetRegistration.insuranceExpiry
  );
  const flag = useSelector(
    (store) => store.fleetRegistration.validInsuranceExpiry
  );
  const mode = useSelector((store)=>store.navigation.mode);

  const message = useDateValidity(selectedDate);
  const dispatch = useDispatch();
  const handleDateChange = (date) => {
    date && dispatch(addInsuranceExpiry(date.getTime()));
  };
  const handleBlur = () => {
    dispatch(addValidInsuranceExpiry(true));
  };
  return (
    <div className="flex flex-col items-start w-full gap-1">
      <label htmlFor="insuranceExpiry" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        Insurance Expiry<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        onBlur={handleBlur}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        className={`w-full bg-gray-800 focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black bg-white" : "focus:ring-gray-600 text-white bg-gray-800"}`}
        wrapperClassName="date-picker-style"
      />
      <div className="w-full h-[1px] bg-gray-500"></div>

      <div className="h-[20px]">
        {flag && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterInsuranceExpiry;
