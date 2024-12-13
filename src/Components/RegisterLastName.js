import React, { useState } from "react";
import { useNameValidity } from "./CustomHooks/useNameValidity";
import { useDispatch, useSelector } from "react-redux";
import { addLastName } from "../Store/registrationSlice";

const RegisterLastName = () => {
  const dispatch = useDispatch();
  const lastName = useSelector((store)=>store.registration.lastName)
  const [interactedName, setInteractedName] = useState(false);
  const message = useNameValidity(lastName);
  const handleName = (e) => {
    dispatch(addLastName(e.target.value))
  };
  const handleBlur = () => {
    setInteractedName(true);
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
        {interactedName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterLastName;
