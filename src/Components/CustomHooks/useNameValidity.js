import { useSelector } from "react-redux";
export const useNameValidity = (empName) => {
  const lang = useSelector((store) => store.navigation.lang);

  if (empName.length > 20) {
    return lang === "en"
      ? "Name size should not exceed 20 characters."
      : lang === "ma"
      ? "പേരിന്റെ വലുപ്പം 20 അക്ഷരങ്ങളെ കവിയരുത്."
      : "नाम का आकार 20 अक्षरों से अधिक नहीं होना चाहिए।";
  } else if (empName.trim === null || empName.length === 0) {
    return lang === "en"
      ? "Name size should not be empty."
      : lang === "ma"
      ? "പേരിന്റെ വലുപ്പം ശൂന്യമായിരിക്കരുത്"
      : "नाम का आकार खाली नहीं होना चाहिए।";
  } else if (!/^[a-zA-Z\s]+$/.test(empName)) {
    return lang === "en"
     ? "Name should only contain alphabetic characters."
     : lang === "ma"
     ? "പേരിൽ അക്ഷരങ്ങൾ മാത്രം ഉണ്ടായിരിക്കണം"
     : "नाम में केवल वर्णमाला के अक्षर होने चाहिए।"
  } else {
    return null;
  }
};

