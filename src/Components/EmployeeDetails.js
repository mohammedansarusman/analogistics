import React from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFirstName } from "../Store/registrationSlice";
import { addMiddleName } from "../Store/registrationSlice";
import { addLastName } from "../Store/registrationSlice";
import { addEmployeId } from "../Store/registrationSlice";
import { addPassportExpiry } from "../Store/registrationSlice";
import { addVisaExpiry } from "../Store/registrationSlice";
import { addOHCExpiry } from "../Store/registrationSlice";
import { addRTAExpiry } from "../Store/registrationSlice";
import { addPortExpiry } from "../Store/registrationSlice";
import { addFireExpiry } from "../Store/registrationSlice";
import { addFireBaseId } from "../Store/registrationSlice";
import { addDeleteCount, addEmpidSwitch } from "../Store/registrationSlice";
import app from "./fireBaseConfig";
import { getDatabase, ref, remove } from "firebase/database";
import { language } from "../Utils/constants";

const EmployeeDetails = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lang = useSelector((store)=>store.navigation.lang);
  const {first,middle,last,id,passport,
    ohc,fire,visa,rta,port,firebaseId,
  } = props.data;
  const currentDate = new Date();
  const handleUpdate = () => {
    dispatch(addFirstName(first));
    dispatch(addMiddleName(middle));
    dispatch(addLastName(last));
    dispatch(addEmployeId(id));
    dispatch(addPassportExpiry(passport));
    dispatch(addVisaExpiry(visa));
    dispatch(addOHCExpiry(ohc));
    dispatch(addRTAExpiry(rta));
    dispatch(addPortExpiry(port));
    dispatch(addFireExpiry(fire));
    dispatch(addFireBaseId(firebaseId));
    dispatch(addEmpidSwitch(false));
    navigate("/people/update/");
  };
  const handleDelete = () => {
    dispatch(addDeleteCount((prevState) => prevState + 1));
    const db = getDatabase(app);
    const employeeRef = ref(db, `register/employe/${firebaseId}`);
    remove(employeeRef);
    
    // navigate('/people/list/');
  };

  return (
    <div className="w-full flex flex-col items-center py-5 relative">
      <div className="w-[90%] h-[30px] bg-cyan-500 p-5 flex justify-between items-center mt-2 ">
        <h1 className="font-thin">{id}</h1>
        <h1 className="font-bold opacity-70">
          {first + " " + middle + " " + last}
        </h1>
      </div>
      <div className="w-[90%]  bg-gray-100 p-5 flex justify-between items-center mt-2">
        {/* pass + ohc + fire */}
        <div className="flex flex-col items-start opacity-70">
          <h1 className="text-sm">{language[lang].passportExpiry}</h1>
          <h1
            className={`text-md font-semibold ${
              new Date(passport) > new Date(currentDate)
                ? "text-black"
                : "text-red-500"
            }`}
          >
            {format(new Date(passport), "dd-MM-yyyy")}
          </h1>
          <br></br>
          <h1 className="text-sm">{language[lang].ohcExpiry}</h1>
          <h1
            className={`text-md font-semibold ${
              new Date(ohc) > new Date(currentDate)
                ? "text-black"
                : "text-red-500"
            }`}
          >
            {format(new Date(ohc), "dd-MM-yyyy")}
          </h1>
          <br></br>
          <h1 className="text-sm">{language[lang].fireSafetyExpiry}</h1>
          <h1
            className={`text-md font-semibold ${
              new Date(fire) > new Date(currentDate)
                ? "text-black"
                : "text-red-500"
            }`}
          >
            {format(new Date(fire), "dd-MM-yyyy")}
          </h1>
        </div>
        {/* visa + rta + port on another column */}
        <div className="flex flex-col items-end opacity-70">
          <h1 className="text-sm">{language[lang].visaExpiry}</h1>
          <h1
            className={`text-md font-semibold ${
              new Date(visa) > new Date(currentDate)
                ? "text-black"
                : "text-red-500"
            }`}
          >
            {format(new Date(visa), "dd-MM-yyyy")}
          </h1>
          <br></br>
          <h1 className="text-sm">{language[lang].odpExpiry}</h1>
          <h1
            className={`text-md font-semibold ${
              new Date(rta) > new Date(currentDate)
                ? "text-black"
                : "text-red-500"
            }`}
          >
            {format(new Date(rta), "dd-MM-yyyy")}
          </h1>
          <br></br>
          <h1 className="text-sm">{language[lang].portPassExpiry}</h1>
          <h1
            className={`text-md font-semibold ${
              new Date(port) > new Date(currentDate)
                ? "text-black"
                : "text-red-500"
            }`}
          >
            {format(new Date(port), "dd-MM-yyyy")}
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center w-[90%] h-[30px]  mt-3 mb-5 gap-2">
        <button
          className="w-full text-white text-sm font-semibold py-2 px-5 rounded-md bg-cyan-600 hover:bg-cyan-700"
          onClick={handleUpdate}
        >
          {language[lang].update}
        </button>
        <button
          className="w-full text-white text-sm font-semibold py-2 px-5 rounded-md bg-pink-800 hover:bg-pink-900"
          onClick={handleDelete}
        >
          {language[lang].delete}
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
