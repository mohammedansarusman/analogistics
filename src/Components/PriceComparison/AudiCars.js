import React from "react";
import a5 from "../../Images/AudiCars/a5.webp";
import q6 from "../../Images/AudiCars/q6.webp";
import rs3 from "../../Images/AudiCars/rs3.webp";
import rsEtron from "../../Images/AudiCars/rsEtron.webp";
import rsq8 from "../../Images/AudiCars/rsq8.webp";
import sq6 from "../../Images/AudiCars/sq6.webp";
const AudiCars = () => {
  const audiCars = [a5, q6, rs3, rsEtron, rsq8, sq6];
  return (
    <div className="flex w-[90%] justify-around overflow-x-scroll">
      <div className="flex py-[10px] gap-5">
        {audiCars.map((item) => (
          <div
            key={item}
            // onClick={handleClick}
            className="w-[150px] h-[150px] flex items-center justify-center rounded-full transition-all duration-1000"
          >
            <img
              alt="audi-cars"
              src={item}
              className="w-[150px] h-[150px] rounded-full object-contain hover:scale-110 transition-all duration-700 "
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudiCars;
