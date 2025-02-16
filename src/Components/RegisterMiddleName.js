import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMiddleName } from "../Store/registrationSlice";


const RegisterMiddleName = () => {
  const dispatch = useDispatch();
  const middleName = useSelector((store)=>store.registration.middleName);
  const handleName = (e) => {
    dispatch(addMiddleName(e.target.value));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addMiddleName(middleName.toLowerCase().replace(/\b\w/g,(char) => char.toUpperCase())))
  };
  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
      <label htmlFor="middleName" className="block font-bold opacity-80">
        Middle Name
      </label>
      <input
        type="text"
        id="middleName"
        name="middleName"
        value={middleName}
        onChange={handleName}
        onBlur={handleBlur}
        className="w-full text-black border border-gray-300 border-1 outline-none pl-2 bg-white rounded-md h-[40px] focus:ring-1 focus:ring-gray-300 focus:ring-offset-4"
      />
      <div className="h-[20px]">
      </div>
    </div>
  );
};

export default RegisterMiddleName;
