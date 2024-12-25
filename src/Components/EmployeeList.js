import React from "react";
import useEmployeeData from "./CustomHooks/useEmployeeData";
import { useDispatch } from "react-redux";
import { changeBar } from "../Store/navigationSlice";
import {format} from 'date-fns'

const EmployeeList = () => {
  const currentDate = new Date();
  // const formattedDate = format(currentDate, "dd-MM-yyyy");
  
  const dispatch = useDispatch();
  dispatch(changeBar(false));
  const employeeData = useEmployeeData();
  if (employeeData === "" || employeeData.length === 0) {
    return null;
  }
  return (
    <div className="w-full absolute left-0">
      <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7">
        <h1>Employee List</h1>
      </header>
      <div className="w-full flex flex-col items-center py-5 relative">
        {employeeData.map((emp) => {
          return (
          <div className="flex flex-col w-full items-center lg:w-[80%]">
            <div
              key={emp.id}
              className="w-[90%] h-[30px] bg-cyan-100 p-5 flex justify-between items-center mt-2 hover:bg-cyan-200"
            >
              <h1 className="font-thin">{emp.id}</h1>
              <h1 className="font-bold opacity-70">
                {emp.first + " " + emp.middle + " " + emp.last}
              </h1>
            </div>
            <div className="w-[90%]  bg-gray-100 p-5 flex justify-between items-center mt-2">
              <div className="flex flex-col items-start opacity-70">
                <h1 className="text-sm">Passport Expiry</h1>
                <h1 className={`text-md font-semibold ${new Date(emp.passport) > new Date(currentDate) ? "text-black" : "text-red-500" }`}>
                  {format(new Date(emp.passport),"dd-MM-yyyy")}
                </h1>
                <br></br>
                <h1 className="text-sm">OHC Expiry</h1>
                <h1 className={`text-md font-semibold ${new Date(emp.ohc) > new Date(currentDate) ? "text-black" : "text-red-500" }`}>
                  {format(new Date(emp.ohc),"dd-MM-yyyy")}
                </h1>
                <br></br>
                <h1 className="text-sm">Fire & Safety Expiry</h1>
                <h1 className={`text-md font-semibold ${new Date(emp.fire) > new Date(currentDate) ? "text-black" : "text-red-500" }`}>
                  {format(new Date(emp.fire),"dd-MM-yyyy")}
                </h1>
              </div>
              <div className="flex flex-col items-end opacity-70">
                <h1 className="text-sm">Visa Expiry</h1>
                <h1 className={`text-md font-semibold ${new Date(emp.visa) > new Date(currentDate) ? "text-black" : "text-red-500" }`}>
                  {format(new Date(emp.visa),"dd-MM-yyyy")}
                </h1>
                <br></br>
                <h1 className="text-sm">RTA Expiry</h1>
                <h1 className={`text-md font-semibold ${new Date(emp.rta) > new Date(currentDate) ? "text-black" : "text-red-500" }`}>
                  {format(new Date(emp.rta),"dd-MM-yyyy")}
                </h1>
                <br></br>
                <h1 className="text-sm">Port Expiry</h1>
                <h1 className={`text-md font-semibold ${new Date(emp.port) > new Date(currentDate) ? "text-black" : "text-red-500" }`}>
                  {format(new Date(emp.port),"dd-MM-yyyy")}
                </h1>
              </div>
            </div>
            {/* Action Button - update and delete options */}
            <div className="flex justify-between items-center w-[90%] h-[30px]  mt-3 mb-5 gap-2">
              <button className="w-full text-white text-sm font-semibold py-2 px-5 rounded-md bg-cyan-600 hover:bg-cyan-700">
                Update
              </button>
              <button className="w-full text-white text-sm font-semibold py-2 px-5 rounded-md bg-red-600 hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeList;
