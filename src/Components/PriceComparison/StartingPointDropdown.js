import React from "react";
import { startingLocations } from "../../Utils/constants";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { setStart } from "../../Store/priceSlice";
import { language } from "../../Utils/constants";

const StartingPointDropdown = () => {
  const start = useSelector((store) => store.price.start);
  const lang =  useSelector((store) =>store.navigation.lang);
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    dispatch(setStart(e));
  };

  return (
    <div className="w-[80%]">
      <label htmlFor="startingPoint" className="font-bold opacity-80">
        {language[lang].startPoint}<span className="text-red-500">*</span>
      </label>
      <Select
        options={startingLocations}
        className="w-full px-1 py-2 text-black text-start "
        placeholder="Select Start Point"
        value={start}
        onChange={handleChange}
        // onBlur={handleBlur}
        styles={{
          control: (base, state) => ({
            ...base,
            borderColor: state.isFocused ? "black" : null,
            boxShadow: state.isFocused ? "0 0 0 2px rgba(0, 0, 0, 0.1)" : null,
            borderRadius: "2px",
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "lightblue",
          }),
        }}
      />
    </div>
  );
};

export default StartingPointDropdown;
