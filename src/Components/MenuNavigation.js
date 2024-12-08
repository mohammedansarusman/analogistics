import React from "react";
import { Link } from "react-router-dom";

const MenuNavigation = () => {
  return (
    <div className="w-[90%] flex flex-col items-start text-sm gap-2 font-normal">
      <h1 className="hover:bg-gray-100 w-[100%] text-left pl-2 py-1">
        <Link to="/people/register">Register</Link>
      </h1>
      <h1 className="hover:bg-gray-100 w-[100%] text-left pl-2 py-1">Edit</h1>
      <h1 className="hover:bg-gray-100 w-[100%] text-left pl-2 py-1">Delete</h1>
      <h1 className="hover:bg-gray-100 w-[100%]text-left pl-2 py-1">View</h1>
    </div>
  );
};

export default MenuNavigation;
