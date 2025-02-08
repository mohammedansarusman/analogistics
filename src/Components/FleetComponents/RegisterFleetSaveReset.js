import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {getDatabase, ref, set, push} from 'firebase/database';
import { useEffect } from "react";
import React from "react";
import app from "../fireBaseConfig";


import { 
    addPlateNo, addChassisNo,
    addVehicleType, addManufacturer,
    addRegistrationExpiry, addInsuranceExpiry,
    addAdvertisementExpiry, addISOExpiry,
    addSpareKey, 
} from "../../Store/fleetRegistrationSlice";

import {
    addValidPlateNo, addValidChassisNo, 
    addValidVehicleType, addValidManufacturer,
    addValidRegistrationExpiry, addValidInsuranceExpiry,
    addValidAdvertisementExpiry, addValidISOExpiry,
    addValidSpareKey
} from "../../Store/fleetRegistrationSlice";

const RegisterFleetSaveReset = (props) => {
  
  const {dataMessage} = props;
  useEffect(()=>{
    return()=>{
      setTimeout(() => {
        dataMessage(false);
      }, 3000);
    }

  },[dataMessage])
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const plate = useSelector((store)=>store.fleetRegistration.plateNo);
  const chassis = useSelector((store)=>store.fleetRegistration.chassisNo);
  const vehicle = useSelector((store)=>store.fleetRegistration.vehicleType);
  const manufacturer = useSelector((store)=>store.fleetRegistration.manufacturer);
  const rta = useSelector((store)=>store.fleetRegistration.registrationExpiry);
  const insurance = useSelector((store)=>store.fleetRegistration.insuranceExpiry);   
  const advertisement = useSelector((store)=>store.fleetRegistration.advertisementExpiry);
  const iso = useSelector((store)=>store.fleetRegistration.ISOExpiry);
  const spare = useSelector((store)=>store.fleetRegistration.spareKey);

  const isFormValid = plate && chassis && vehicle && manufacturer && rta && insurance && advertisement && iso && spare;
  
  const handleReset = () => {
    dispatch(addPlateNo(""));
    dispatch(addChassisNo(""));
    dispatch(addVehicleType(""));
    dispatch(addManufacturer(""));
    dispatch(addRegistrationExpiry(null));
    dispatch(addInsuranceExpiry(null));
    dispatch(addAdvertisementExpiry(null));
    dispatch(addISOExpiry(null));
    dispatch(addSpareKey(""));
  };
  const handleValidationMessage = () => {
    dispatch(addValidPlateNo(false));
    dispatch(addValidChassisNo(false));
    dispatch(addValidVehicleType(false));
    dispatch(addValidManufacturer(false));
    dispatch(addValidRegistrationExpiry(false));
    dispatch(addValidInsuranceExpiry(false));
    dispatch(addValidAdvertisementExpiry(false));
    dispatch(addValidISOExpiry(false));
    dispatch(addValidSpareKey(false));
    
  }

  const handleSave = () => {
    
    if (isFormValid) {
      // Save data to the firebase realtime database
      const db = getDatabase(app);
      const fleetRef = push(ref(db,"register/fleet"));
      set(fleetRef,{
        plate: plate,
        chassis: chassis,
        vehicle: vehicle,
        manufacturer: manufacturer,
        rta: rta,
        insurance: insurance,
        advertisement: advertisement,
        iso: iso,
        spare: spare,
      })
      
      dataMessage(true); // Show success message.
      setTimeout(() => {
        dataMessage(false);
      }, 3000);
      
      handleReset();
      handleValidationMessage();
      
    }
  };
  const handleClose = () => {
    // Reset form data and validation state.
      handleReset();
      //  reset validation message to blank
      handleValidationMessage();
      navigate("/");
  };

  return (
    <div className="flex justify-center w-full gap-2">
      <button
        onClick={handleSave}
        className="bg-cyan-500 px-[20px] py-[10px] rounded-full text-white font-bold hover:bg-cyan-600"
      >
        Save
      </button>
      <button
        className="bg-cyan-500 px-[20px] py-[10px] rounded-full text-white font-bold hover:bg-cyan-600"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};

export default RegisterFleetSaveReset;
