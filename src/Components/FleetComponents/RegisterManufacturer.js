import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addManufacturer,
  addValidManufacturer, addSaveManufacturer
} from "../../Store/fleetRegistrationSlice";
import { useTextValidity } from "../CustomHooks/useTextValidity";
import { language } from "../../Utils/constants";

const RegisterManufacturer = () => {
  const dispatch = useDispatch();
  const manufacturer = useSelector(
    (store) => store.fleetRegistration.manufacturer
  );
  const flag = useSelector(
    (store) => store.fleetRegistration.validManufacturer
  );
  const mode = useSelector((store)=>store.navigation.mode);
  const lang = useSelector((store)=>store.navigation.lang);

  const handleChange = (e) => dispatch(addManufacturer(e.target.value.toUpperCase()));
  const handleBlur = () => dispatch(addValidManufacturer(true));
  const message = useTextValidity(manufacturer);
  message === null? dispatch(addSaveManufacturer(true)) : dispatch(addSaveManufacturer(false));

  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
      <label htmlFor="manufacture" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        {language[lang].manufacturer}<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="manufacturer"
        name="manufacturer"
        placeholder="Tata / Ashokleyland..."
        onChange={handleChange}
        value={manufacturer}
        onBlur={handleBlur}
        className={`w-full  bg-transparent focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black" : "focus:ring-gray-600 text-white"}`}

      />
      <div className="w-full h-[1px] bg-gray-500"></div>
      <div className="h-[20px]">
        {flag && <p className="text-red-500 text-xs">{message}</p>}
      </div>
    </div>
  );
};

export default RegisterManufacturer;
