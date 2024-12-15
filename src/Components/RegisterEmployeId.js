import React,{useState} from "react";
import { useIdValidity } from "./CustomHooks/useIdValidity";

const RegisterEmployeId = () => {
    const [empId, setEmpId] = useState("");
    const [interactedName, setInteractedName] = useState(false);
    const message = useIdValidity(empId);
    const handleId = (e) => {
        setEmpId(e.target.value);
    };
    const handleBlur = () => {
        setInteractedName(true);
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
        value={empId}
        onChange={handleId}
        onBlur={handleBlur}
        placeholder="e00000"
        className="block w-full text-black border-2 border-gray-300 pl-2"
      />
      <div className="h-[20px]">
        {interactedName && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterEmployeId;
