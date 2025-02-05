import app from "../fireBaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addEmployeeRecords, addFilterEmployeeRecords } from "../../Store/registrationSlice";


const useEmployeeData = () => {
  const dispatch = useDispatch();
  const deleteCount = useSelector((store)=>store.registration.deleteCount);
  const fetchData = async() =>{
      const db = getDatabase(app);
      const employeeRef = ref(db, "register/employe");  
      const snapshot = await get(employeeRef);
      // snapshot.val() is Firebase-specific and retrieves the data at a database reference.
      // it is used to fetch employee data and then process it into an array using Object.values()
      if(snapshot.exists()){
        const empRecord = snapshot.val();
        const empArray = Object.entries(empRecord); // key and pair will convert as array
        const data = empArray.map((employees)=>{
          return {firebaseId: employees[0],...employees[1]};
        })   
        dispatch(addEmployeeRecords(data));  
        dispatch(addFilterEmployeeRecords(data));
      }
  }
  useEffect(()=>{
    fetchData();
  },[deleteCount]); 
  
  
};
export default useEmployeeData;
