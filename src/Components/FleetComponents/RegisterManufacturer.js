import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addManufacturer,
  addValidManufacturer,
} from "../../Store/fleetRegistrationSlice";
import { useTextValidity } from "../CustomHooks/useTextValidity";

const RegisterManufacturer = () => {
  const dispatch = useDispatch();
  const manufacturer = useSelector(
    (store) => store.fleetRegistration.manufacturer
  );
  const flag = useSelector(
    (store) => store.fleetRegistration.validManufacturer
  );
  const handleChange = (e) => dispatch(addManufacturer(e.target.value));
  const handleBlur = () => dispatch(addValidManufacturer(true));
  const message = useTextValidity(manufacturer);
  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
      <label htmlFor="manufacture" className="font-bold opacity-80">
        Manufacturer<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="manufacturer"
        name="manufacturer"
        placeholder="Tata / Ashokleyland..."
        onChange={handleChange}
        value={manufacturer}
        onBlur={handleBlur}
        className="w-full outline-4 outline-gray-500 bg-transparent"
      />
      <div className="w-full h-[1px] bg-gray-500"></div>
      <div className="h-[20px]">
        {flag && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterManufacturer;
