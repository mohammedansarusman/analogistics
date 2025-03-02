import React from "react";
import gti from "../../Images/VwCars/gti.webp";
import golfr from "../../Images/VwCars/golfr.webp";
import tiguan from "../../Images/VwCars/tiguan.webp";
import troc from "../../Images/VwCars/troc.webp";
import amarok from "../../Images/VwCars/amarok.webp";
import teramont from "../../Images/VwCars/teramont.webp";
import touareg from "../../Images/VwCars/touareg.webp";

const VolkswagenCars = () => {
  const vwCars = [gti, golfr, troc, tiguan, touareg, teramont, amarok];
  return (
    <div className="flex w-[90%] justify-around overflow-x-scroll">
      <div className="flex py-[10px] gap-5">
        {vwCars.map((item) => (
          <div
            key={item}
            className="w-[150px] h-[150px] flex items-center justify-center rounded-full transition-all duration-1000"
          >
            <img
              alt="vw-cars"
              src={item}
              className="w-[150px] h-[150px] rounded-full object-contain hover:scale-110 transition-all duration-700 "
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolkswagenCars;
