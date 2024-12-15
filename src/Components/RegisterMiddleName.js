import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMiddleName } from "../Store/registrationSlice";


const RegisterMiddleName = () => {
  const dispatch = useDispatch();
  const middleName = useSelector((store)=>store.registration.middleName);
  const handleName = (e) => {
    dispatch(addMiddleName(e.target.value));  // dispatch action to update the state in the store.
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
        className="block w-full text-black border-2 border-gray-300 pl-2"
      />
      <div className="h-[20px]">
      </div>
    </div>
  );
};

export default RegisterMiddleName;
