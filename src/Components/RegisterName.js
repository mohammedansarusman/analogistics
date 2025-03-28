import React from "react";
import { useNameValidity } from "./CustomHooks/useNameValidity";
import { useSelector, useDispatch } from "react-redux";
import { addFirstName, addValidFirstName, addSaveFirstName } from "../Store/registrationSlice";

const RegisterName = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((store)=>store.registration.firstName);
  const mode = useSelector((store)=>store.navigation.mode);
  // validFirstName - is a redux state variable,the default value is false. the use of this-
  // state, when the useNameValidity custom hook will execute then return one message that will output in dom,
  // state became true.
  const flagFirstName = useSelector((store)=>store.registration.validFirstName);
  const message = useNameValidity(firstName);
  // save buttton will work once the saveFirstName state is true
  message === null ? dispatch(addSaveFirstName(true)) : dispatch(addSaveFirstName(false)); 
  

  const handleName = (e) => {
    dispatch(addFirstName(e.target.value));
  };
  const handleBlur = () => {
    dispatch(addFirstName(firstName.toLowerCase().replace(/\b\w/g,(char) => char.toUpperCase())));
    dispatch(addValidFirstName(true));  
  };


    return (
      <div className="w-full flex flex-col items-start gap-[5px]">
        <label htmlFor="firstName" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
          First Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleName}
          onBlur={handleBlur}
          className={`w-full  bg-transparent focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black" : "focus:ring-gray-600 text-white"}`}
        />
        <div className='w-full h-[1px] bg-gray-500'></div>
        <div className="h-[20px]">
          {flagFirstName && <p className="text-red-500 text-xs">{message}</p>}
        </div>
      </div>
    );
  };

  export default RegisterName;
