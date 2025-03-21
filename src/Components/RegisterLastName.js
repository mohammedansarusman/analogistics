import React from "react";
import { useNameValidity } from "./CustomHooks/useNameValidity";
import { useDispatch, useSelector } from "react-redux";
import { addLastName, addValidLastName, addSaveLastName } from "../Store/registrationSlice";

const RegisterLastName = () => {
  const dispatch = useDispatch();
  const flagLastName = useSelector((store)=>store.registration.validLastName)
  const lastName = useSelector((store)=>store.registration.lastName)
  const message = useNameValidity(lastName);
  message === null ? dispatch(addSaveLastName(true)) : dispatch(addSaveLastName(false)); 
  
  const handleName = (e) => {
    dispatch(addLastName(e.target.value))
  };
  const handleBlur = () => {
    dispatch(addLastName(lastName.toLowerCase().replace(/\b\w/g,(char) => char.toUpperCase())))
    dispatch(addValidLastName(true));
  };

  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
      <label htmlFor="lastName" className="block font-bold opacity-80">
        Last Name<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={handleName}
        onBlur={handleBlur}
        className="w-full outline-4 outline-gray-500 bg-transparent" 
      />
      <div className='w-full h-[1px] bg-gray-500'></div>
      <div className="h-[20px]">
        {flagLastName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterLastName;
