import React from "react";
import { useNameValidity } from "./CustomHooks/useNameValidity";
import { useSelector, useDispatch } from "react-redux";
import { addFirstName, addValidFirstName } from "../Store/registrationSlice";

const RegisterName = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((store)=>store.registration.firstName);
  const flagFirstName = useSelector((store)=>store.registration.validFirstName);
  const message = useNameValidity(firstName);
  

  const handleName = (e) => {
    dispatch(addFirstName(e.target.value));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidFirstName(true));  
  };


    return (
      <div className="w-full flex flex-col items-start gap-[5px]">
        <label htmlFor="firstName" className="block font-bold opacity-80">
          First Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleName}
          onBlur={handleBlur}
          className="block w-full text-black border-2 border-gray-300 pl-2 bg-white"
        />
        <div className="h-[20px]">
          {flagFirstName && <p className="text-red-500 text-xs">{message}</p>}
        </div>
      </div>
    );
  };

  export default RegisterName;
