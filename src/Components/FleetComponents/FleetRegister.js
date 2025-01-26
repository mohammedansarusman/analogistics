import React from "react";
import { useDispatch } from "react-redux";
import { changeBar } from "../../Store/navigationSlice";
import RegisterPlateNo from "./RegisterPlateNo";
import RegisterChassisNo from "./RegisterChassisNo";
import RegisterVehicleType from "./RegisterVehicleType";
import RegisterManufacturer from "./RegisterManufacturer";
import RegisterRegistrationExpiry from "./RegisterRegistrationExpiry";
import RegisterInsuranceExpiry from "./RegisterInsuranceExpiry";
import RegisterAdvertisementExpiry from "./RegisterAdvertisementExpiry";
import RegisterISOExpiry from "./RegisterISOExpiry";
import RegisterSpareKey from "./RegisterSpareKey";

const FleetRegister = () => {
  const dispatch = useDispatch();
  dispatch(changeBar(false)); // the side navigation bar will close once the fleet registration click.
  return (
    <div className="w-full absolute left-0">
      <div className="w-full flex flex-col items-center pb-5 relative">
        {/* Heading - FLEET REGISTRATION */}
        <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7">
          <h1>Fleet Registration</h1>
        </header>
        {/* Fleet registration  form - plate , chassis, vehicle type etc .. */}
        <div className="flex flex-col items-start w-[90%]  border-2 border-cyan-500 p-5 rounded-xl mt-[30px]">
          {/* Plate number */}
          <RegisterPlateNo />

          {/* Chassis number */}
          <RegisterChassisNo />

          {/* Vehicle type */}
          <RegisterVehicleType />

          {/* Manufacturer */}
          <RegisterManufacturer />

          {/* Registration Expiry */}
          <RegisterRegistrationExpiry />

          {/* Insurance Expiry */}
          <RegisterInsuranceExpiry />

          {/* Advertisement Expiry */}
          <RegisterAdvertisementExpiry />

          {/* ISO certification Expiry */}
          <RegisterISOExpiry />

          {/* Spare key availability */}
          <RegisterSpareKey />
          

          {/* Save and close button */}

          
        </div>
      </div>
    </div>
  );
};

export default FleetRegister;
