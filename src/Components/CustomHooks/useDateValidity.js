import { useSelector } from "react-redux";
export const useDateValidity = (date) => {
  const lang = useSelector((store) => store.navigation.lang);
  if (date === null) {
    return lang === "en"
      ? "Date should not be empty."
      : lang === "ma"
      ? "തീയതി ശൂന്യമായിരിക്കരുത്."
      : "तारीख खाली नहीं होनी चाहिए।"
  }
};
