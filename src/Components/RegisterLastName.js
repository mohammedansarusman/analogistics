import React from "react";
import { useNameValidity } from "./CustomHooks/useNameValidity";
import { useDispatch, useSelector } from "react-redux";
import { addLastName, addValidLastName, addSaveLastName } from "../Store/registrationSlice";
import { language } from "../Utils/constants";
import { useEffect } from "react";

const RegisterLastName = () => {
  const dispatch = useDispatch();
  const flagLastName = useSelector((store)=>store.registration.validLastName)
  const lastName = useSelector((store)=>store.registration.lastName)
  const mode = useSelector((store)=>store.navigation.mode);
  const lang = useSelector((store)=>store.navigation.lang);

  const message = useNameValidity(lastName);
  useEffect(()=>{
    message === null ? dispatch(addSaveLastName(true)) : dispatch(addSaveLastName(false)); 
  },[message]);
  
  const handleName = (e) => {
    dispatch(addLastName(e.target.value))
  };
  const handleBlur = () => {
    dispatch(addLastName(lastName.toLowerCase().replace(/\b\w/g,(char) => char.toUpperCase())))
    dispatch(addValidLastName(true));
  };

  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
      <label htmlFor="lastName" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        {language[lang].lastName}<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={handleName}
        onBlur={handleBlur}
        className={`w-full  bg-transparent focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black" : "focus:ring-gray-600 text-white"}`}
      />
      <div className='w-full h-[1px] bg-gray-500'></div>
      <div className="h-[20px]">
        {flagLastName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterLastName;
