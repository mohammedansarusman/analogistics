import React from "react";
import gti from "../../Images/VwCars/gti.webp";
import golfr from "../../Images/VwCars/golfr.webp";
import tiguan from "../../Images/VwCars/tiguan.webp";
import troc from "../../Images/VwCars/troc.webp";
import amarok from "../../Images/VwCars/amarok.webp";
import teramont from "../../Images/VwCars/teramont.webp";
import touareg from "../../Images/VwCars/touareg.webp";

const VolkswagenCars = () => {
  const vw = [
    { logo: gti, name: "Golf 8 GTI" },
    { logo: golfr, name: "Golf R" },
    { logo: troc, name: "Touareg" },
    { logo: tiguan, name: "Tiguan" },
    { logo: touareg, name: "Touareg" },
    { logo: teramont, name: "Teramont" },
    { logo: amarok, name: "Amarok" },
  ];
  return (
    <div className="flex w-[90%] justify-around overflow-x-scroll">
      <div className="flex py-[10px] gap-5">
        {vw.map((item) => (
          <div className="flex flex-col">
            <div
              key={item.logo}
              className="w-[150px] h-[150px] flex items-center justify-center rounded-full transition-all duration-1000 hover:border-2 hover:border-gray-500"
            >
              <img
                alt="vw-cars"
                src={item.logo}
                className="w-[150px] h-[150px] rounded-full object-contain hover:scale-110 transition-all duration-700 "
              ></img>
            </div>
            <h1 className="text-gray-500">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolkswagenCars;
