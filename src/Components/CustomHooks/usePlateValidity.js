import { useSelector } from "react-redux";
export const usePlateValidity = (plate, record) => {
  const switchPlate = useSelector(
    (store) => store.fleetRegistration.plateSwitch
  );
  const lang = useSelector((store) => store.navigation.lang);
  const numberOfRecords = record && record.filter((x) => x.plate === plate);
  if (plate.trim() === "") {
    return lang === "en"
      ? "Field should not be empty."
      : lang === "ma"
      ? "ഫീൽഡ് ശൂന്യമായിരിക്കരുത്."
      : "फ़ील्ड खाली नहीं होना चाहिए।";
  } else if (plate.length <= 5) {
    return lang === "en"
      ? "field size should be greater than 5"
      : lang === "ma"
      ? "ഫീൽഡിന്റെ വലുപ്പം 5ൽ കൂടുതലായിരിക്കണം."
      : "फ़ील्ड का आकार 5 से अधिक होना चाहिए।";
  } else if (numberOfRecords.length > 0 && switchPlate) {
    return lang === "en"
      ? "Number plate already exists"
      : lang === "ma"
      ? "നമ്പർ പ്ലേറ്റ് ഇതിനകം നിലവിലുണ്ട്."
      : "नंबर प्लेट पहले से मौजूद है।";
  } else {
    return null;
  }
};
