import app from "../fireBaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addEmployeeRecords, addFilterEmployeeRecords } from "../../Store/registrationSlice";


const useEmployeeData = () => {
  const dispatch = useDispatch();
  const deleteCount = useSelector((store)=>store.registration.deleteCount);
  const [loading, setLoading] = useState(true);
  const fetchData = async() =>{
    console.log("async called");
    console.log("deleteCount: " + deleteCount)
    const db = getDatabase(app);
    const employeeRef = ref(db, "register/employe");  
    const snapshot = await get(employeeRef);
    // snapshot.val() is Firebase-specific and retrieves the data at a database reference.
    // it is used to fetch employee data and then process it into an array using Object.values()
    try{
      if(snapshot.exists()){
        const empRecord = snapshot.val();
        const empArray = Object.entries(empRecord); // key and pair will convert as array
        
        const data = empArray.map((employees)=>{
          return {firebaseId: employees[0],...employees[1]};
        })   
          
        dispatch(addEmployeeRecords(data));  
        dispatch(addFilterEmployeeRecords(data));
      }else{
        dispatch(addEmployeeRecords([]));  
        dispatch(addFilterEmployeeRecords([]));
      }
    }catch(e){
      console.error("error in fetching data",e);
    }finally{
      setLoading(false);  // loading state will be false when data is fetched successfully or failed to fetch data
    }
      
  }
  useEffect(()=>{
    console.log("fetchData called, deleteCount:", deleteCount);
    fetchData();
  },[deleteCount]); 
  
  return loading;
};
export default useEmployeeData;
