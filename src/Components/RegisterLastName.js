import React from "react";
import { useNameValidity } from "./CustomHooks/useNameValidity";
import { useDispatch, useSelector } from "react-redux";
import { addLastName, addValidLastName } from "../Store/registrationSlice";

const RegisterLastName = () => {
  const dispatch = useDispatch();
  const flagLastName = useSelector((store)=>store.registration.validLastName)
  const lastName = useSelector((store)=>store.registration.lastName)
  const message = useNameValidity(lastName);
  const handleName = (e) => {
    dispatch(addLastName(e.target.value))
  };
  const handleBlur = () => {
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
        className="block w-full text-black border-2 border-gray-300 pl-2"
      />
      <div className="h-[20px]">
        {flagLastName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterLastName;
