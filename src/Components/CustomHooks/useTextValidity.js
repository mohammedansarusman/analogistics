export const useTextValidity = (plate) => {
  if (plate.trim() === "") {
    return "Field should not be empty.";
  } else if (plate.length <= 5) {
    return "Size should be greater than 5";
  }
};
