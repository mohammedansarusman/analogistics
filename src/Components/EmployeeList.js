import React, { useEffect } from "react";
import useEmployeeData from "./CustomHooks/useEmployeeData";
import { useDispatch, useSelector } from "react-redux";
import { changeBar } from "../Store/navigationSlice";
import EmployeeDetails from "./EmployeeDetails";
import SearchBar from "./SearchBar";
import ContenLoading from "./ContenLoading";
import { FaListUl } from "react-icons/fa";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import { changeDisplay } from "../Store/navigationSlice";
import { SlGrid } from "react-icons/sl";


const EmployeeList = () => {
  const dispatch = useDispatch();
  useEmployeeData();
  const employeeData = useSelector(
    (store) => store.registration.employeeRecords
  );
  const filteredData = useSelector(
    (store) => store.registration.filterEmployeeRecords
  );
  const deleteCount = useSelector((store) => store.registration.deleteCount);
  const display = useSelector((store) => store.navigation.displayEmployees);
  useEffect(()=>{
    dispatch(changeBar(false));
  },[dispatch])

  if (employeeData === "" || employeeData.length === 0) {
    return <ContenLoading />;
  }

  return (
    <div className="w-full absolute left-0">
      <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7">
        <h1>Employee List</h1>
      </header>
      <div className="w-full flex justify-center items-center px-5 md:gap-4 lg:justify-end lg:gap-5  lg:items-center py-2">
        <div className="w-full flex justify-center lg:w-[30%]">
          <SearchBar employeeRecords={employeeData} />
        </div>
        <div
          className="hidden text-gray-500 text-xl cursor-pointer p-2 
                        md:block 
                        lg:block
                        hover:font-bold hover:bg-gray-500 hover:p-2 hover:text-white hover:rounded-full
                       transition-all duration-500 ease-in-out"
          onClick={() =>
            display === "grid"
              ? dispatch(changeDisplay("list"))
              : dispatch(changeDisplay("grid"))
          }
        >
          {display === "grid" ? <FaListUl /> : <SlGrid />}
          {/* <FaListUl /> */}
          {/* <SlGrid /> */}
        </div>
        <div
          className="text-gray-500 text-xl cursor-pointer p-2
                        hover:font-bold hover:bg-gray-500 hover:p-2 hover:text-white hover:rounded-full
                        transition-all duration-500 ease-in-out"
        >
          <FaSortAmountUp />
        </div>
        {/* <FaSortAmountDownAlt /> */}
      </div>

      <div
        className={`flex  justify-center items-center bg-red-200 ${
          display === "list" ? "flex-col" : "flex-wrap"
        }`}
      >
        {filteredData.length === 0 ? (
          <div className="w-[100%] h-[50px] text-black flex justify-center items-center">
            <h1>No records found</h1>
          </div>
        ) : null}
        {filteredData.map((emp) => {
          return (
            <div
              className={`flex flex-col w-full items-center ${
                display === "grid" ? "md:w-[40%] lg:w-[30%]" : "md:w-[80%]"
              }`}
              key={emp.firebaseId}
            >
              <EmployeeDetails data={emp} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeList;
