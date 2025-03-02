import React from "react";
import carerra1 from "../../Images/PorscheCars/718.jpg";
import carerra2 from "../../Images/PorscheCars/911.jpg";
import cayenne from "../../Images/PorscheCars/cayenne.jpg";
import macan from "../../Images/PorscheCars/macan.jpg";
import panamera from "../../Images/PorscheCars/panamera.jpg";
import taycan from "../../Images/PorscheCars/taycan.jpg";
const PorscheCars = () => {
  const porscheCars = [carerra1, carerra2, cayenne, macan, panamera, taycan];
  return (
    <div className="flex w-[90%] justify-around overflow-x-scroll px-4">
      <div className="flex py-[10px]  gap-5">
        {porscheCars.map((item) => (
          <div
            key={item}
            className="w-[120px] h-[120px] flex items-center justify-center rounded-full transition-all duration-1000"
          >
            <img
              alt="porsche-cars"
              src={item}
              className="w-[120px] h-[120px] object-fill rounded-full hover:scale-110 transition-all duration-700 "
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PorscheCars;
