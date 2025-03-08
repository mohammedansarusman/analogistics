import React from "react";
import { endLocations } from "../../Utils/constants";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { setEnd } from "../../Store/priceSlice";

const EndPointDropDown = () => {
  const end = useSelector((store) => store.price.end);
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    dispatch(setEnd(e));
  };

  return (
    <div className="w-[80%]">
      <label htmlFor="startingPoint" className="font-bold opacity-80">
        End Point<span className="text-red-500">*</span>
      </label>
      <Select
        options={endLocations}
        className="w-full px-1 py-2 text-black text-start "
        placeholder="Select End Point"
        value={end}
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

export default EndPointDropDown;
