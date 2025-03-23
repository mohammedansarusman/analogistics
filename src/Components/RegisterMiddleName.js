import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMiddleName } from "../Store/registrationSlice";


const RegisterMiddleName = () => {
  const firstName = useSelector((store)=>store.registration.firstName);

  const dispatch = useDispatch();
  const mode = useSelector((store)=>store.navigation.mode);
  const middleName = useSelector((store)=>store.registration.middleName);
  const handleName = (e) => {
    dispatch(addMiddleName(e.target.value));  // dispatch action to update the state in the store.
  };
  const handleBlur = () => {
    dispatch(addMiddleName(middleName.toLowerCase().replace(/\b\w/g,(char) => char.toUpperCase())))
  };
  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
      {console.log("first name-",firstName)}
      <label htmlFor="middleName" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        Middle Name
      </label>
      <input
        type="text"
        id="middleName"
        name="middleName"
        value={middleName}
        onChange={handleName}
        onBlur={handleBlur}
        className={`w-full  bg-transparent focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black" : "focus:ring-gray-600 text-white"}`}

      />
      <div className='w-full h-[1px] bg-gray-500'></div>
      <div className="h-[20px]">
      </div>
    </div>
  );
};

export default RegisterMiddleName;
