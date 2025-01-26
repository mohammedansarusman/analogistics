import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSpareKey, addValidSpareKey } from "../../Store/fleetRegistrationSlice";
import { useTextValidity } from "../CustomHooks/useTextValidity";

const RegisterSpareKey = () => {
  const dispatch = useDispatch();
  const spareKey = useSelector((store) => store.fleetRegistration.spareKey);
  const flag = useSelector((store) => store.fleetRegistration.validSpareKey);
  const handleChange = (e) => dispatch(addSpareKey(e.target.value));
  const handleBlur = () => dispatch(addValidSpareKey(true));
  const message = useTextValidity(spareKey);
  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
      <label htmlFor="spareKey" className="font-bold opacity-80">
        Spare Key<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="spareKey"
        name="spareKey"
        placeholder="Available / Not available"
        onChange={handleChange}
        value={spareKey}
        onBlur={ handleBlur }
        className="w-full outline-4 outline-gray-500 bg-transparent"
      />
      <div className="w-full h-[1px] bg-gray-500"></div>
      <div className="h-[20px]">
        {flag && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterSpareKey;
