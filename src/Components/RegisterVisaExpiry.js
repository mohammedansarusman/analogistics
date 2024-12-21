// parent component  - <DatePickerPassVisa />
// purpose of this component - the VISA EXPIRY FIELD is created and its validation method.
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDateValidity } from "./CustomHooks/useDateValidity";
import { addVisaExpiry, addValidVisaExpiry } from "../Store/registrationSlice";
import { useSelector, useDispatch } from "react-redux";

const RegisterVisaExpiry = () => {
  const dispatch = useDispatch();
  const visaExpiry = useSelector((store) => store.registration.visaExpiry);
  const flagVisa = useSelector((store) => store.registration.validVisaExpiry);

  const handleDateChangeVisa = (date) => {
    dispatch(addVisaExpiry(date.getTime())); // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidVisaExpiry(true));
  };
  const message = useDateValidity(visaExpiry);
  return (
    <div className="flex flex-col items-start w-1/2">
      <label htmlFor="visaExpiry" className="font-bold opacity-80">
        Visa Expiry<span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={visaExpiry}
        onChange={handleDateChangeVisa}
        value={visaExpiry}
        onBlur={handleBlur}
        dateFormat="dd-MM-yyyy"
        placeholderText="DD/MM/YYYY"
        className=" text-black border-2 border-gray-300 pl-2"
      />
      <div className="h-[20px]">
        {flagVisa && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};
export default RegisterVisaExpiry;
