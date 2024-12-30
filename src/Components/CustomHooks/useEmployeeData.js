import app from "../fireBaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { useState, useEffect } from "react";

const useEmployeeData = () => {
    const [empData, setEmpData] = useState([]);
    
    const fetchData = async() =>{
        const db = getDatabase(app);
        const employeeRef = ref(db, "register/employe");  
        const snapshot = await get(employeeRef);
        // snapshot.val() is Firebase-specific and retrieves the data at a database reference.
        // it is used to fetch employee data and then process it into an array using Object.values()
        if(snapshot.exists()){
            const empRecord = snapshot.val();
            const empArray = Object.entries(empRecord); // key and pair will convert as array
            // console.log(empArray);
            const data = empArray.map((employees)=>{
              return {firebaseId: employees[0],...employees[1]};
            })   
            setEmpData(data);
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
