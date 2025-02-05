import app from "../fireBaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { useEffect } from "react";
import { addFleetRecord, addFilterFleetRecord } from "../../Store/fleetRegistrationSlice";
import { useSelector, useDispatch } from "react-redux";


const useFleetData = () => {
    const dispatch = useDispatch();
    // Fetch fleet data from Firebase and update the Redux store
    // This function should be called whenever the fleet data is updated in Firebase
    const fetchData  = async() =>{
        const db = getDatabase(app);
        const fleetRef = ref(db, "register/fleet");  
        const snapshot = await get(fleetRef);
        if(snapshot.exists()){
            const fleetRecord = snapshot.val();
            const fleetArray = Object.entries(fleetRecord);
            const data = fleetArray.map((fleet)=>{
                return {firebaseId: fleet[0],...fleet[1]};
            });
            console.log("data", data);
            dispatch(addFleetRecord(data));
            dispatch(addFilterFleetRecord(data));
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
}
export default useFleetData;