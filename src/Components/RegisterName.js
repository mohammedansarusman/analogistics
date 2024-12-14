import React, { useState } from "react";
import { useNameValidity } from "./CustomHooks/useNameValidity";

const RegisterName = () => {
  const [empName, setEmpName] = useState("");
  const [interactedName, setInteractedName] = useState(false);
  const message = useNameValidity(empName);
  const handleName = (e) => {
    setEmpName(e.target.value);
  };
  const handleBlur = () => {
    setInteractedName(true);
  };

  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
      <label htmlFor="firstName" className="block font-bold opacity-80">
        First Name<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={empName}
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

export default RegisterName;
