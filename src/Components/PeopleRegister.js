import React from "react";
import { changeBar } from "../Store/navigationSlice";
import { useDispatch, useSelector } from "react-redux";
// import { addDays, isWeekend } from 'date-fns'
import DatePickerPassVisa from "./DatePickerPassVisa";
import DatePickerOHCRTA from "./DatePickerOHCRTA";
import DatePickerFirePort from "./DatePickerFirePort";
import RegisterName from "./RegisterName";
import RegisterMiddleName from "./RegisterMiddleName";
import RegisterLastName from "./RegisterLastName";
import RegisterEmployeId from "./RegisterEmployeId";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addFirstName, addMiddleName, addLastName, addEmployeId,
         addPassportExpiry, addVisaExpiry,addOHCExpiry,addFireExpiry,} from "../Store/registrationSlice";

import { addPortExpiry, addRTAExpiry, addValidFirstName, addValidLastName, 
         addValidEmployeId, addValidPassportExpiry, addValidVisaExpiry, addValidOHCExpiry,
         addValidRTAExpiry, addValidFireExpiry, addValidPortExpiry } from "../Store/registrationSlice";
const PeopleRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState(false);

  const firstName = useSelector((store) => store.registration.firstName);
  const middleName = useSelector((store) => store.registration.middleName);
  const lastName = useSelector((store) => store.registration.lastName);
  const employeId = useSelector((store) => store.registration.employeId);
  const passportExpiry = useSelector(
    (store) => store.registration.passportExpiry
  );
  const visaExpiry = useSelector((store) => store.registration.visaExpiry);
  const ohcExpiry = useSelector((store) => store.registration.ohcExpiry);
  const rtaExpiry = useSelector((store) => store.registration.rtaExpiry);
  const fireExpiry = useSelector((store) => store.registration.fireExpiry);
  const portExpiry = useSelector((store) => store.registration.portExpiry);
  const isFormValid =
    firstName &&
    middleName &&
    lastName &&
    employeId &&
    passportExpiry &&
    visaExpiry &&
    ohcExpiry &&
    rtaExpiry &&
    fireExpiry &&
    portExpiry;

  dispatch(changeBar(false));
  const handleReset = () => {
    dispatch(addFirstName(""));
    dispatch(addMiddleName(""));
    dispatch(addLastName(""));
    dispatch(addEmployeId(""));
    dispatch(addPassportExpiry(null));
    dispatch(addVisaExpiry(null));
    dispatch(addOHCExpiry(null));
    dispatch(addFireExpiry(null));
    dispatch(addPortExpiry(null));
    dispatch(addRTAExpiry(null));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setMessage(true); // Show success message.
      setTimeout(() => {
        setMessage(false);

      }, 3000);
      handleReset();
      dispatch(addValidFirstName(false));
      dispatch(addValidLastName(false));
      dispatch(addValidEmployeId(false));
      dispatch(addValidPassportExpiry(false));
      dispatch(addValidVisaExpiry(false));
      dispatch(addValidOHCExpiry(false));
      dispatch(addValidRTAExpiry(false));
      dispatch(addValidFireExpiry(false));
      dispatch(addValidPortExpiry(false));

    }
  };
  const handleClose = () => {
    navigate("/");
  };
  return (
    <div className="w-[100%] absolute left-0">
      <div className="flex flex-col items-center pb-5 relative">
        {message && (
          <div className="h-[50px] bg-gray-400 absolute right-1/2 bottom-1/2 transition-transform translate-x-1/2 translate-y-1/2 opacity-90 flex justify-center items-center text-white">
            <h1>Employe details saved successfully...</h1>
          </div>
        )}
        <header className="w-full h-[70px] text-3xl bg-cyan-500 text-white flex justify-center items-center ">
          <h1>Employee Registration</h1>
        </header>
        <div
          className="flex flex-col items-start w-[90%]  border-2 border-cyan-500 p-5 rounded-xl mt-[50px]"
        >
          {/* First name field */}
          <RegisterName />
          {/* Middle name field */}
          <RegisterMiddleName />
          {/* Laste Name field */}
          <RegisterLastName />
          {/* Employee id field */}
          <RegisterEmployeId />
          {/* passport and visa expiry date picker component */}
          <DatePickerPassVisa />
          {/* OHC and RTA expiry */}
          <DatePickerOHCRTA />
          {/* Fire and Safety and Port Expiry */}
          <DatePickerFirePort />
          <div className="flex justify-center w-full gap-2">
            <button
              onClick={handleSave}
              className="bg-cyan-500 px-[20px] py-[10px] rounded-full text-white font-bold"
            >
              Save
            </button>
            <button
              className="bg-cyan-500 px-[20px] py-[10px] rounded-full text-white font-bold"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleRegister;
