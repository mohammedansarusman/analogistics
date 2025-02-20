export const useTextValidity = (manufacturer) => {
  if (manufacturer.trim() === "") {
    return "Field should not be empty.";
  } else if (manufacturer.length <= 5) {
    return "Text size should be greater than 5";
  } else {
    return null;
  }
};
