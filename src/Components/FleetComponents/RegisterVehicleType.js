import React from "react";
import { vehicleTypes } from "../../Utils/constants";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {useVehicleTypeValidity} from '../CustomHooks/useVehicleTypeValidity'
import {
  addVehicleType,
  addValidVehicleType,
} from "../../Store/fleetRegistrationSlice";

const RegisterVehicleType = () => {
  const dispatch = useDispatch();
  const vehicleType = useSelector((store) => store.fleetRegistration.vehicleType);
  const flag = useSelector((store) => store.fleetRegistration.validVehicleType);
  const handleBlur = () => {
    dispatch(addValidVehicleType(true));
  };
  const handleChange = (e) => {
    dispatch(addVehicleType(e));
  };
  const message = useVehicleTypeValidity(vehicleType);
  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
      <label htmlFor="vehicleType" className="font-bold opacity-80">
        Vehicle Type<span className="text-red-500">*</span>
      </label>

      <Select
        options={vehicleTypes}
        className="w-full px-1 py-2 text-black text-start "
        placeholder="Search Vehicle Type"
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
