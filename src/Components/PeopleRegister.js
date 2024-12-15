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

const PeopleRegister = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const firstName = useSelector((store)=>store.registration.firstName);
  const middleName = useSelector((store)=>store.registration.middleName);
  const lastName = useSelector((store)=>store.registration.lastName);
  const employeId = useSelector((store)=>store.registration.employeId);
  const passportExpiry = useSelector((store)=>store.registration.passportExpiry);
  const visaExpiry = useSelector((store)=>store.registration.visaExpiry);
  const ohcExpiry = useSelector((store)=>store.registration.ohcExpiry);
  const rtaExpiry = useSelector((store)=>store.registration.rtaExpiry);
  const fireExpiry = useSelector((store)=>store.registration.fireExpiry);
  const portExpiry = useSelector((store)=>store.registration.portExpiry);
  const isFormValid = firstName && middleName && lastName && employeId && passportExpiry && visaExpiry && ohcExpiry && rtaExpiry && fireExpiry && portExpiry


  dispatch(changeBar(false));
  const handleSave = (e) => {
    e.preventDefault();
    if(isFormValid){
      // Perform form submission logic here.
      // For example, send data to a server or save it in a database.
      console.log('Form submitted successfully');
      navigate('/') // Navigate to dashboard after form submission.
    }else{
      console.log("form is not valid");
    }
    
  }  
  return (
    <div className="w-[100%] absolute left-0">
      <div className="flex flex-col items-center pb-5">
        <header className="w-full h-[70px] text-3xl bg-cyan-500 text-white flex justify-center items-center ">
          <h1>Employee Registration</h1>
        </header>
        <form 
          className="flex flex-col items-start w-[90%]  border-2 border-cyan-500 p-5 rounded-xl mt-[50px]"
          onSubmit={handleSave}
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
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default PeopleRegister;
