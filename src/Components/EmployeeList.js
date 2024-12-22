import React from 'react'
import useEmployeeData from "./CustomHooks/useEmployeeData"

const EmployeeList = () => {
    const employeeData = useEmployeeData();
    if(employeeData==="" || employeeData.length===0)  {
      return null;
    } 
    return (
    <div className="w-full absolute left-0">
        <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7">
          <h1>Employee List</h1>
        </header>
        <div className="w-full flex flex-col items-center py-5 relative">
          {/* <h1>{employeeData}</h1> */}
          {console.log("data:",employeeData)}
        </div>
    </div>
    
  )
}



export default EmployeeList