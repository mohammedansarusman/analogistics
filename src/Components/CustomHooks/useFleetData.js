import app from "../fireBaseConfig";
import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import {
  addFleetRecord,
  addFilterFleetRecord,
} from "../../Store/fleetRegistrationSlice";
import { useSelector, useDispatch } from "react-redux";

const useFleetData = () => {
  const dispatch = useDispatch();
  const deleteCount = useSelector((store) => store.registration.deleteCount);
  const [loading, setLoading] = useState(true);
  // Fetch fleet data from Firebase and update the Redux store
  // This function should be called whenever the fleet data is updated in Firebase
  const fetchData = async () => {
    const db = getDatabase(app);
    const fleetRef = ref(db, "register/fleet");
    const snapshot = await get(fleetRef);
    try {
      if (snapshot.exists()) {
        const fleetRecord = snapshot.val();
        const fleetArray = Object.entries(fleetRecord);
        const data = fleetArray.map((fleet) => {
          return { firebaseId: fleet[0], ...fleet[1] };
        });
        dispatch(addFleetRecord(data));
        dispatch(addFilterFleetRecord(data));
      } else {
        dispatch(addFleetRecord([]));
        dispatch(addFilterFleetRecord([]));
      }
    } catch (e) {
      console.error("error in fetching data", e);
    } finally {
      setLoading(false); // loading state will be false when data is fetched successfully or failed to fetch data
    }
  };
  useEffect(() => {
    fetchData();
  }, [deleteCount]);
  return loading;
};
export default useFleetData;
