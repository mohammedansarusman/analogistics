import React from "react";
import useEmployeeData from "./CustomHooks/useEmployeeData";
import { useDispatch } from "react-redux";
import { changeBar } from "../Store/navigationSlice";
import EmployeeDetails from "./EmployeeDetails";

const EmployeeList = () => {
  // const currentDate = new Date();
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
      <div className="flex flex-col items-center">
          {
            employeeData.map((emp) => {
              return (
                <div className="flex flex-col w-full items-center lg:w-[80%]" key={emp.firebaseId}>
                  <EmployeeDetails data={emp} />
                </div>
              )
            })
          }
      </div>
    </div>
  )
}


export default EmployeeList;
