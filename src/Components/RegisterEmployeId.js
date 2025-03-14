import React from "react";
import { useIdValidity } from "./CustomHooks/useIdValidity";
import { useSelector, useDispatch } from "react-redux";
import { addEmployeId, addValidEmployeId, addSaveEmployeId } from "../Store/registrationSlice";

const RegisterEmployeId = (props) => {
    const dispatch = useDispatch();
    const employeId = useSelector((store)=>store.registration.employeId);
    const flagEmployeId = useSelector((store)=>store.registration.validEmployeId);
    const message = useIdValidity(employeId,props.data);
    message === null ? dispatch(addSaveEmployeId(true)): dispatch(addSaveEmployeId(false));
    const handleId = (e) => {
        dispatch(addEmployeId(e.target.value));  // dispatch action to update the state in the store.
    };
    const handleBlur = () => {
      dispatch(addValidEmployeId("true"));
    };

  return (
    <div className="w-full flex flex-col items-start gap-1">
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
        className="w-full text-black border border-gray-300 border-1 outline-none pl-2 bg-white rounded-md h-[40px] focus:ring-1 focus:ring-gray-300 focus:ring-offset-4"
      />
      <div className="h-[20px]">
        {flagEmployeId && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterEmployeId;
