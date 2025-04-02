import React, { useEffect } from "react";
import { useIdValidity } from "./CustomHooks/useIdValidity";
import { useSelector, useDispatch } from "react-redux";
import { addEmployeId, addValidEmployeId, addSaveEmployeId } from "../Store/registrationSlice";
import { language } from "../Utils/constants";

const RegisterEmployeId = (props) => {
  const dispatch = useDispatch();
  const employeId = useSelector((store)=>store.registration.employeId);
  const flagEmployeId = useSelector((store)=>store.registration.validEmployeId);
  const mode = useSelector((store)=>store.navigation.mode);
  const lang = useSelector((store)=>store.navigation.lang);

  const message = useIdValidity(employeId,props.data);
  console.log("message:-",message);
  useEffect(()=>{
    message === null ? dispatch(addSaveEmployeId(true)): dispatch(addSaveEmployeId(false));
  },[message])
  const handleId = (e) => {
    dispatch(addEmployeId(e.target.value));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addValidEmployeId(true));
  };

  return (
    <div className="w-full flex flex-col items-start gap-1">
      <label htmlFor="empid" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        {language[lang].employeeId}<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="empid"
        name="empid"
        value={employeId}
        onChange={handleId}
        onBlur={handleBlur}
        placeholder="e00000"
        className={`w-full  bg-transparent focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black" : "focus:ring-gray-600 text-white"}`}

      />
      <div className='w-full h-[1px] bg-gray-500'></div>
      <div className="h-[20px]">
        {flagEmployeId && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterEmployeId;
