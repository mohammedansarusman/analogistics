import React from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDeleteCount } from "../../Store/registrationSlice";
import { language } from "../../Utils/constants";

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
  const lang = useSelector(store=>store.navigation.lang);
  

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
    
  }

  const currentDate = new Date();
  return (
    <div className={`flex flex-col items-center py-2 mt-2  ${layout === 'grid' ? "md:w-[70%]" : "md:w-1/2 lg:w-1/3"}`}>
      <div className="w-[90%] bg-cyan-500 flex flex-col rounded-tl-lg rounded-tr-lg py-2">
        <div className="flex justify-between items-center px-2">
          <p className="font-light">{vehicle.label}</p>
          <p className="text-xl">{plate}</p>
        </div>
        <div className="flex justify-between items-center px-2">
          <p className="text-xl">{manufacturer}</p>
          <p className="font-light">{chassis}</p>
        </div>
      </div>
      <div className="w-[90%] bg-gray-100 flex py-2 mt-2 px-2 ">
        <div className="w-[50%] flex flex-col items-start opacity-70">
          <p className="text-sm">{language[lang].registrationExpiry}</p>
          <p className={`text-md font-semibold ${new Date(rta) > new Date(currentDate) ? "text-black": "text-red-500"}`}>
            {format(new Date(rta),"dd-MM-yyyy")}
          </p>
          <p className="text-sm">{language[lang].insuranceExpiry}</p>
          <p className={`text-md font-semibold ${new Date(insurance) > new Date(currentDate) ? "text-black": "text-red-500"}`}>
            {format(new Date(insurance),"dd-MM-yyyy")}
          </p>
        </div>
        <div className="w-[50%] flex flex-col items-end opacity-70">
          <p className="text-sm">{language[lang].advertisementExpiry}</p>
          <p className={`text-md font-semibold ${new Date(advertisement) > new Date(currentDate) ? "text-black": "text-red-500"}`}>
            {format(new Date(advertisement),"dd-MM-yyyy")}
          </p>
          <p className="text-sm">{language[lang].isoExpiry}</p>
          <p className={`text-md font-semibold ${new Date(iso) > new Date(currentDate) ? "text-black": "text-red-500"}`}>
            {format(new Date(iso),"dd-MM-yyyy")}
          </p>
        </div>
      </div>
      <div className = 'w-[90%] bg-gray-100 rounded-bl-lg rounded-br-lg'>
        <p className="text-sm opacity-70">{language[lang].spareKey}</p>
        <p className="font-semibold opacity-70">{spare}</p>
      </div>
      <div className="flex justify-between items-center w-[90%] h-[30px]  mt-3 mb-5 gap-2">
        <button
          className="w-full text-white text-sm font-semibold py-2 px-5 rounded-md bg-cyan-600 hover:bg-cyan-700"
          onClick={handleUpdate}
        >
          {language[lang].update}
        </button>
        <button
          className="w-full text-white text-sm font-semibold py-2 px-5 rounded-md bg-pink-800 hover:bg-red-900"
          onClick={handleDelete}
        >
          {language[lang].delete}
        </button>
      </div>
    </div>
  );
};

export default FleetDetails;
