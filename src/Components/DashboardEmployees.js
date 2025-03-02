import React from "react";
import { IoIosPeople } from "react-icons/io";


const DashboardEmployees = () => {
  return (
    <div className="h-[100px] bg-violet-600 text-white flex flex-col justify-center px-2">
      <div className="w-[100%] flex justify-end text-2xl">
        <h1>Employees</h1>
      </div>
      <div className="w-[100%] flex justify-between items-center text-5xl font-bold">
      <IoIosPeople />
      <h1 className="">{20}</h1>
      </div>
    </div>
  );
};

export default DashboardEmployees;
