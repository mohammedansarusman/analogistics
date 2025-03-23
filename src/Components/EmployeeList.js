import React, { useEffect } from "react";
import useEmployeeData from "./CustomHooks/useEmployeeData";
import { useDispatch, useSelector } from "react-redux";
import { changeBar } from "../Store/navigationSlice";
import EmployeeDetails from "./EmployeeDetails";
import SearchBar from "./SearchBar";
import ContenLoading from "./ContenLoading";
import { FaListUl } from "react-icons/fa";
import { SlGrid } from "react-icons/sl";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import { changeDisplay, changeSort } from "../Store/navigationSlice";
import { addFilterEmployeeRecords } from "../Store/registrationSlice";


const EmployeeList = () => {
  const dispatch = useDispatch();
  const result = useEmployeeData();
  const employeeData = useSelector(
    (store) => store.registration.employeeRecords
  );
  const filteredData = useSelector(
    (store) => store.registration.filterEmployeeRecords
  );
  const deleteCount = useSelector((store) => store.registration.deleteCount);
  const display = useSelector((store) => store.navigation.displayEmployees);
  const displaySort = useSelector((store) => store.navigation.sortEmployees);
  const mode = useSelector(store=>store.navigation.mode);
  
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
    dispatch(addFilterEmployeeRecords(updatedName));
  }
  
  if (result) {
    return <ContenLoading />;
  }
  


  return (
    <div className={`w-full min-h-screen absolute left-0 top-[100px] ${mode === "light" ? "bg-white" : "bg-gray-800"}`}>
      <header className="w-full h-[60px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7 fixed z-10">
        <h1>Employee List</h1>
      </header>
      <div className="w-full flex justify-center items-center px-5 pt-[70px] md:gap-4 lg:justify-end lg:gap-5  lg:items-center py-2">
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
          {display === "grid" ? 
            <FaListUl className={`${mode === 'light' ? "text-gray-600" : "text-gray-300"}`}/> : 
            <SlGrid className={`${mode === 'light' ? "text-gray-600" : "text-gray-300"}`}/>
          }
        </div>
        {/* Sort Ascending and descending order of names */}
        <div
          className="text-gray-500 text-xl cursor-pointer p-2
                        hover:font-bold hover:bg-gray-500 hover:p-2 hover:text-white hover:rounded-full
                        transition-all duration-500 ease-in-out"
          onClick={handleSort}
        >
          {displaySort === 'ascending' ? 
            <FaSortAmountDownAlt className={`${mode === 'light' ? "text-gray-600" : "text-gray-300"}`}/> : 
            <FaSortAmountUp className={`${mode === 'light' ? "text-gray-600" : "text-gray-300"}`}/>
          }
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
