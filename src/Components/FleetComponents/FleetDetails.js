import React from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDeleteCount } from "../../Store/registrationSlice";

import { 
  addPlateNo, addVehicleType, addManufacturer, addRegistrationExpiry, addInsuranceExpiry,
  addAdvertisementExpiry, addISOExpiry, addChassisNo, addSpareKey, addFireBaseId, 
  addPlateSwitch, addChassisSwitch
 } from "../../Store/fleetRegistrationSlice";
 
 import app from "../fireBaseConfig";
 import { getDatabase, ref, remove } from "firebase/database";

const FleetDetails = (props) => {
  const dispatch = useDispatch();
  const layout = useSelector((store) => store.navigation.displayFleet);
  const deleteCount = useSelector(store=>store.registration.deleteCount);
  const navigate = useNavigate();
  

  const { chassis,insurance,iso,
    manufacturer,plate,rta,
    spare,vehicle,advertisement, firebaseId
  } = props.data;
  
  const handleUpdate = () => {
    dispatch(addPlateNo(plate));
    dispatch(addVehicleType(vehicle));
    dispatch(addManufacturer(manufacturer));
    dispatch(addRegistrationExpiry(rta));
    dispatch(addInsuranceExpiry(insurance));
    dispatch(addAdvertisementExpiry(advertisement));
    dispatch(addISOExpiry(iso));
    dispatch(addChassisNo(chassis));
    dispatch(addSpareKey(spare));
    dispatch(addFireBaseId(firebaseId));
    dispatch(addPlateSwitch(false));
    dispatch(addChassisSwitch(false));
    navigate("/fleet/update/");
  } 

  const handleDelete = () => {
    dispatch(addDeleteCount(deleteCount+1));
    const db = getDatabase(app);
    const fleetRef = ref(db, `register/fleet/${firebaseId}`);
    remove(fleetRef);
    console.log("firebase db",firebaseId);
    console.log("delete count in fleetdetails", deleteCount)
  }

  const currentDate = new Date();
  return (
    <div className={`flex flex-col items-center py-2 mt-2  ${layout === 'grid' ? "md:w-[70%]" : "md:w-1/2 lg:w-1/3"}`}>
      <div className="w-[90%] bg-cyan-500 flex flex-col rounded-tl-lg rounded-tr-lg">
        <div className="flex justify-between items-center px-2">
          <p className="font-light">{vehicle.label}</p>
          <p className="text-xl">{plate}</p>
        </div>
        <div className="flex justify-between items-center px-2">
          <p className="text-xl">{manufacturer}</p>
          <p className="font-light">{chassis}</p>
        </div>
      </div>
      <div className="w-[90%] bg-gray-200 flex py-2 mt-2 px-2 ">
        <div className="w-[50%] flex flex-col items-start">
          <p className="text-sm">Registration</p>
          <p className={`text-md font-semibold ${new Date(rta) > new Date(currentDate) ? "text-black": "text-red-500"}`}>
            {format(new Date(rta),"dd-MM-yyyy")}
          </p>
          <p className="text-sm">Insurance</p>
          <p className={`text-md font-semibold ${new Date(insurance) > new Date(currentDate) ? "text-black": "text-red-500"}`}>
            {format(new Date(insurance),"dd-MM-yyyy")}
          </p>
        </div>
        <div className="w-[50%] flex flex-col items-end">
          <p className="text-sm">Advertisement</p>
          <p className={`text-md font-semibold ${new Date(advertisement) > new Date(currentDate) ? "text-black": "text-red-500"}`}>
            {format(new Date(advertisement),"dd-MM-yyyy")}
          </p>
          <p className="text-sm">ISO</p>
          <p className={`text-md font-semibold ${new Date(iso) > new Date(currentDate) ? "text-black": "text-red-500"}`}>
            {format(new Date(iso),"dd-MM-yyyy")}
          </p>
        </div>
      </div>
      <div className = 'w-[90%] bg-gray-200 rounded-bl-lg rounded-br-lg'>
        <p className="text-sm">Spare Key</p>
        <p className="font-semibold">{spare}</p>
      </div>
      <div className="flex justify-between items-center w-[90%] h-[30px]  mt-3 mb-5 gap-2">
        <button
          className="w-full text-white text-sm font-semibold py-2 px-5 rounded-md bg-cyan-600 hover:bg-cyan-700"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="w-full text-white text-sm font-semibold py-2 px-5 rounded-md bg-pink-800 hover:bg-red-900"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FleetDetails;
