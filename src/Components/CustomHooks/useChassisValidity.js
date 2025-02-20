export const useChassisValidity = (chassis, records) => {
  const numberOfRecords =
    records && records.filter((record) => record.chassis === chassis);
  console.log("no:", numberOfRecords);
  if (chassis.length < 17) {
    return "The size of chassis is not correct";
  } else if (chassis.trim === "") {
    return "Chassis number should not be empty";
  } else if (numberOfRecords.length > 0) {
    return "Chassis number already exists";
  } else {
    return null;
  }
};
