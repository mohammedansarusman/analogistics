import React from "react";
import useEmployeeData from "./CustomHooks/useEmployeeData";
import { useDispatch } from "react-redux";
import { changeBar } from "../Store/navigationSlice";
import {format} from 'date-fns'

const EmployeeList = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd-MM-yyyy");
  
  const dispatch = useDispatch();
  dispatch(changeBar(false));
  const employeeData = useEmployeeData();
  // const {first, last, middle, id} = employeeData;
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
          <div className="flex flex-col w-full items-center">
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
                <h1 className="text-md font-semibold">
                  {format(new Date(emp.passport),"dd-MM-yyyy")}
                </h1>
                <br></br>
                <h1 className="text-sm">OHC Expiry</h1>
                <h1 className="text-md font-semibold">{format(new Date(emp.ohc),"dd-MM-yyyy")}</h1>
                <br></br>
                <h1 className="text-sm">Fire & Safety Expiry</h1>
                <h1 className="text-md font-semibold">{format(new Date(emp.fire),"dd-MM-yyyy")}</h1>
              </div>
              <div className="flex flex-col items-end opacity-70">
                <h1 className="text-sm">Visa Expiry</h1>
                <h1 className="text-md font-semibold">{format(new Date(emp.visa),"dd-MM-yyyy")}</h1>
                <br></br>
                <h1 className="text-sm">RTA Expiry</h1>
                <h1 className="text-md font-semibold">{format(new Date(emp.rta),"dd-MM-yyyy")}</h1>
                <br></br>
                <h1 className="text-sm">Port Expiry</h1>
                <h1 className="text-md font-semibold">{format(new Date(emp.port),"dd-MM-yyyy")}</h1>
              </div>
            </div>
          </div>
          );
        })}
        {/* <h1>{employeeData}</h1> */}
        {console.log("data:", employeeData)}
      </div>
    </div>
  );
};

export default EmployeeList;
