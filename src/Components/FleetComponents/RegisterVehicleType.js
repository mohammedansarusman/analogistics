import React, { useEffect } from "react";
import { englishVehicleTypes, hindiVehicleTypes, malayalamVehicleTypes } from "../../Utils/constants";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../../Utils/constants";
import {useVehicleTypeValidity} from '../CustomHooks/useVehicleTypeValidity'
import {
  addVehicleType,
  addValidVehicleType,
} from "../../Store/fleetRegistrationSlice";

const RegisterVehicleType = () => {
  const dispatch = useDispatch();
  const vehicleType = useSelector((store) => store.fleetRegistration.vehicleType);
  const flag = useSelector((store) => store.fleetRegistration.validVehicleType);
  const mode = useSelector((store)=>store.navigation.mode);
  const lang = useSelector((store)=>store.navigation.lang);

  const handleBlur = () => {
    dispatch(addValidVehicleType(true));
  };
  const handleChange = (e) => {
    // 'e' contains value and label - value:"lightTruck" and key:"Light Truck"
    dispatch(addVehicleType(e));
  };
  const message = useVehicleTypeValidity(vehicleType);
  // useEffect(() => {
  //   dispatch(addVehicleType(null)); // Reset the selected value
  // }, [lang, dispatch]);


  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
      <label htmlFor="vehicleType" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
        {language[lang].vehicleType}<span className="text-red-500">*</span>
      </label>

      <Select
        options={englishVehicleTypes}
        className={`w-full px-1 py-2 text-black text-start `}
        placeholder={language[lang].placeholderFleet}
        value={vehicleType} // value prop should be an object of the selected option
        onChange={handleChange}
        onBlur={handleBlur}
        styles={{
          control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? "black" : null,
            boxShadow: state.isFocused ? "0 0 0 2px rgba(0, 0, 0, 0.1)" : null,
            // fontFamily: 'Poppins',
            // fontSize: '14px',
            borderRadius: "2px",
            backgroundColor:mode === "light" ? "white" : "#1F2937",
          }),
          singleValue: (base) => ({
            ...base,
            color: mode === "light" ? "black" : "white", 
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "lightblue",
          }),
        }}
      />
      <div className="w-full h-[1px] bg-gray-500"></div>
      <div className="h-[20px]">
          {flag && <p className="text-red-500 text-xs">{message}</p>}
        </div>
    </div>
  );
};

export default RegisterVehicleType;
