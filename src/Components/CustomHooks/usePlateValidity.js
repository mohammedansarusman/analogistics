import { useSelector } from "react-redux";
export const usePlateValidity = (plate,record) => {
  const switchPlate = useSelector(store=>store.fleetRegistration.plateSwitch)
    const numberOfRecords = record && record.filter((x)=>x.plate===plate);
    if (plate.trim() === "") {
      return "Field should not be empty.";
    } else if (plate.length <= 5) {
      return "Text size should be greater than 5";
    } else if (numberOfRecords.length > 0 && switchPlate) {
        return "Number plate already exists";
    }else{
        return null;
    }   
  };
  