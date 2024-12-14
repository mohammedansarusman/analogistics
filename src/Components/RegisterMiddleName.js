import React, { useState } from "react";

const RegisterMiddleName = () => {
  const [middleName, setMiddleName] = useState("");
  const handleName = (e) => {
    setMiddleName(e.target.value);
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
        // onBlur={handleBlur}
        className="block w-full text-black border-2 border-gray-300 pl-2"
      />
      <div className="h-[20px]">
        {/* {interactedName && <p className="text-red-500 text-xs">{message}</p>} */}
      </div>
    </div>
  );
};

export default RegisterMiddleName;
