import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import RegisterFleetSaveReset from "./RegisterFleetSaveReset";
import useFleetData from '../CustomHooks/useFleetData'
import RegisterSuccessMessage from "../RegisterSuccessMessage";

const FleetRegister = () => {
  const dispatch = useDispatch();
  const mode = useSelector(store=>store.navigation.mode);
  const records = useSelector((store)=>store.fleetRegistration.fleetRecord)

  const [message, setMessage] = useState(false);
  // the reason behind calling  useFleetData here is to check the plate no/chassis is already existing in firebase
  useFleetData(); 
  dispatch(changeBar(false)); // the side navigation bar will close once the fleet registration click.
  return (
    <div className={`w-full min-h-screen absolute left-0 top-[100px] ${mode === "light" ? "bg-white" : "bg-gray-800"}`}>
      <div className="w-full flex flex-col items-center relative">
        { message &&  <RegisterSuccessMessage /> }
        {/* Heading - FLEET REGISTRATION */}
        <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7 fixed z-10">
          <h1>Fleet Registration</h1>
        </header>
        {/* Fleet registration  form - plate , chassis, vehicle type etc .. */}
        <div className="flex flex-col items-start w-[90%]  border-2 border-cyan-500 p-5 rounded-xl mt-[100px] ">
          <div className="w-full lg:flex lg:justify-between">
            <div className="lg:w-[45%]">
              {/* Plate number */}
              <RegisterPlateNo data = { records }/>
            </div>
            <div className="lg:w-[45%]">
              {/* Chassis number */}
              <RegisterChassisNo data = { records }/> 
            </div>
          </div>
          <div className="w-full lg:flex lg:justify-between">
            <div className="lg:w-[45%]">
              {/* Vehicle type */}
              <RegisterVehicleType />
            </div>
            <div className="lg:w-[45%]">
              {/* Manufacturer */}
              <RegisterManufacturer />
            </div>
          </div>
          <div className="w-full lg:flex lg:justify-between">
            <div className="lg:w-[45%]">
              {/* Registration Expiry */}
              <RegisterRegistrationExpiry />
            </div>
            <div className="lg:w-[45%]">
              {/* Insurance Expiry */}
              <RegisterInsuranceExpiry />
            </div>
          </div>
          <div className="w-full lg:flex lg:justify-between">
            <div className="lg:w-[45%]">
              {/* Advertisement Expiry */}
              <RegisterAdvertisementExpiry />
            </div>
            <div className="lg:w-[45%]">
              {/* ISO certification Expiry */}
              <RegisterISOExpiry />
            </div>
          </div>
          <div className="w-full lg:flex lg:justify-start">
            <div className="lg:w-[45%]">
              {/* Spare key availability */}
              <RegisterSpareKey />
            </div>
          </div>
          
          {/* Save and close button */}
          <RegisterFleetSaveReset dataMessage={setMessage} />
        </div>
      </div>
    </div>
  );
};

export default FleetRegister;
