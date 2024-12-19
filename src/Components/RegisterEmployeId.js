import React from "react";
import { useIdValidity } from "./CustomHooks/useIdValidity";
import { useSelector, useDispatch } from "react-redux";
import { addEmployeId, addValidEmployeId } from "../Store/registrationSlice";

const RegisterEmployeId = () => {
    const dispatch = useDispatch();
    const employeId = useSelector((store)=>store.registration.employeId);
    const flagEmployeId = useSelector((store)=>store.registration.validEmployeId);
    const message = useIdValidity(employeId);
    const handleId = (e) => {
        dispatch(addEmployeId(e.target.value));  // dispatch action to update the state in the store.
    };
    const handleBlur = () => {
      dispatch(addValidEmployeId("true"));
    };

  return (
    <div className="w-full flex flex-col items-start">
      <label htmlFor="empid" className="block font-bold opacity-80">
        Employee ID<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="empid"
        name="empid"
        value={employeId}
        onChange={handleId}
        onBlur={handleBlur}
        placeholder="e00000"
        className="block w-full text-black border-2 border-gray-300 pl-2"
      />
      <div className="h-[20px]">
        {flagEmployeId && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterEmployeId;
