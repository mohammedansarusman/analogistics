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
import { changeDisplay, changeSort } from "../Store/navigationSlice";
import { SlGrid } from "react-icons/sl";
import { addFilterEmployeeRecords } from "../Store/registrationSlice";


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
  const displaySort = useSelector((store) => store.navigation.sortEmployees);
  
  useEffect(()=>{
    dispatch(changeBar(false));
  },[dispatch])

  const handleLayout = ()=>{
    display === "grid" ? dispatch(changeDisplay("list")) : dispatch(changeDisplay("grid"))
  }
  const handleSort = () =>{
    displaySort === "ascending" ? dispatch(changeSort('descending')) : dispatch(changeSort('ascending'))
    const updatedName = filteredData.map((person)=>({...person,fullName:person.first+" "+person.middle+" "+person.last}))
    displaySort === "descending" 
      ? updatedName.sort((a,b)=>a.fullName.localeCompare(b.fullName))
      : updatedName.sort((a,b)=>b.fullName.localeCompare(a.fullName))
    console.log(updatedName);
    dispatch(addFilterEmployeeRecords(updatedName));
  }

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
        {/* List or Grid  */}
        <div
          className="hidden text-gray-500 text-xl cursor-pointer p-2 
                     md:block 
                     lg:block
                     hover:font-bold hover:bg-gray-500 hover:p-2 hover:text-white hover:rounded-full
                     transition-all duration-500 ease-in-out"
          onClick={ handleLayout }
        >
          {display === "grid" ? <FaListUl /> : <SlGrid />}
        </div>
        {/* Sort Ascending and descending order of names */}
        <div
          className="text-gray-500 text-xl cursor-pointer p-2
                        hover:font-bold hover:bg-gray-500 hover:p-2 hover:text-white hover:rounded-full
                        transition-all duration-500 ease-in-out"
          onClick={handleSort}
        >
          {displaySort === 'ascending' ? <FaSortAmountDownAlt /> : <FaSortAmountUp />}
        </div>
      </div>

      <div
        className={`flex  justify-center items-center ${
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
