import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MenuNavigation = () => {
  const mode = useSelector(store=>store.navigation.mode)

  return (
    <div className="w-[90%] flex flex-col items-start text-sm gap-2 font-normal">
      <Link to="/people/register" className="w-full">
          <h1 className={`w-[100%] text-left pl-2 py-1  ${mode === "light" ? "hover:bg-gray-200" : "hover:bg-gray-500" }`}>Register</h1>
      </Link>
      <Link to="/people/employeeList" className="w-full">
        <h1 className={`w-[100%] text-left pl-2 py-1  ${mode === "light" ? "hover:bg-gray-200" : "hover:bg-gray-500" }`}>Employee List </h1>
      </Link>
      {/* <h1 className="hover:bg-gray-100 w-[100%] text-left pl-2 py-1">Dummy</h1>
      <h1 className="hover:bg-gray-100 w-[100%]text-left pl-2 py-1">Contact</h1> */}
    </div>
  );
};

export default MenuNavigation;
