import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import app from './fireBaseConfig';
import {getDatabase, ref, set, push} from 'firebase/database'

// import { useState } from "react";

import { addFirstName, addMiddleName, addLastName,
         addEmployeId, addPassportExpiry,addVisaExpiry,
         addOHCExpiry,addFireExpiry,} from "../Store/registrationSlice";

import { addPortExpiry,addRTAExpiry,
  addValidFirstName,addValidLastName,addValidEmployeId,
  addValidPassportExpiry,addValidVisaExpiry,addValidOHCExpiry,
  addValidRTAExpiry,  addValidFireExpiry, addValidPortExpiry } from "../Store/registrationSlice";

import React from "react";

const RegisterSaveClose = (props) => {
    const {dataMessage} = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const isFormValid = firstName && lastName && employeId && passportExpiry && visaExpiry &&
                        ohcExpiry && rtaExpiry && fireExpiry && portExpiry;

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
  const handleValidationMessage = () => {
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

  const handleSave = () => {
    
    if (isFormValid) {
      // Save data to the firebase realtime database
      const db = getDatabase(app);
      const employeeRef = push(ref(db,"register/employe"));
      set(employeeRef,{
        first: firstName,
        middle: middleName,
        last: lastName,
        id: employeId,
        passport: passportExpiry,
        visa: visaExpiry,
        ohc: ohcExpiry,
        rta: rtaExpiry,
        fire: fireExpiry,
        port: portExpiry,
      })
      
      dataMessage(true); // Show success message.
      setTimeout(() => {
        dataMessage(false);
      }, 3000);

      handleReset();
      handleValidationMessage();
    }
  };
  const handleClose = () => {
    // Reset form data and validation state.
      handleReset();
      //  reset validation message
      handleValidationMessage();
      navigate("/");
  };
  return (
    <div className="flex justify-center w-full gap-2">
      <button
        onClick={handleSave}
        className="bg-cyan-500 px-[20px] py-[10px] rounded-full text-white font-bold hover:bg-cyan-600"
      >
        Save
      </button>
      <button
        className="bg-cyan-500 px-[20px] py-[10px] rounded-full text-white font-bold hover:bg-cyan-600"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default RegisterSaveClose;
