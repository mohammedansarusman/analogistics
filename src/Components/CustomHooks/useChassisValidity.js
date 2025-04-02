import { useSelector } from "react-redux";
export const useChassisValidity = (chassis, records) => {
  const switchChassis = useSelector((store) => store.fleetRegistration.chassisSwitch);
  const lang = useSelector(store=>store.navigation.lang);
  const numberOfRecords =
    records && records.filter((record) => record.chassis === chassis);
  if (chassis.length !== 17) {
    return lang === "en" 
      ? "The size of chassis is not correct"
      : lang === "ma"
      ? "ചാസിസ് നമ്പറിന്റെ നീളം ശരിയല്ല"
      : "चेसिस नंबर की लंबाई सही नहीं है।";

  } else if (chassis.trim === "") {
    return "Chassis number should not be empty";
  } else if (numberOfRecords.length > 0 && switchChassis) {
    return "Chassis number already exists";
  } else {
    return null;
  }
};
