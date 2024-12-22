import app from "../fireBaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import React from 'react'
import { useState, useEffect } from "react";

const useEmployeeData = () => {
    const [empData, setEmpData] = useState([]);
    
    const fetchData = async() =>{
        const db = getDatabase(app);
        const employeeRef = ref(db, "register/employe");  
        const snapshot = await get(employeeRef);
        if(snapshot.exists()){
            setEmpData(Object.values(snapshot.val()));
        }else{
            setEmpData("");
        }  
    }
    useEffect(()=>{
      fetchData();
    },[]);  // Only re-fetch when the component mounts or when the state changes.
  
  return empData;
};
export default useEmployeeData;
