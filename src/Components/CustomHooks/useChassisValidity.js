export const useChassisValidity = (chassis) => {
  if (chassis.length < 17) {
    return "The size of chassis is not correct";
  } else if (chassis.trim === "") {
    return "Chassis number should not be empty";
  }
};
