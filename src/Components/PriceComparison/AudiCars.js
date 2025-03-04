import React from "react";
import a5 from "../../Images/AudiCars/a5.webp";
import q6 from "../../Images/AudiCars/q6.webp";
import rs3 from "../../Images/AudiCars/rs3.webp";
import rsEtron from "../../Images/AudiCars/rsEtron.webp";
import rsq8 from "../../Images/AudiCars/rsq8.webp";
import sq6 from "../../Images/AudiCars/sq6.webp";
const AudiCars = () => {
  const audi = [
    { logo: a5, name: "A5 Sedan" },
    { logo: q6, name: "Q6 e-tron" },
    { logo: rs3, name: "RS 3 Sedan" },
    { logo: rsEtron, name: "RS e-tron" },
    { logo: rsq8, name: "RS Q8" },
    { logo: sq6, name: "SQ6 e-tron" },
  ];
  return (
    <div className="flex w-[90%] justify-around overflow-x-scroll">
      <div className="flex py-[10px] gap-5">
        {audi.map((item) => (
          <div className="flex flex-col">
            <div
              key={item.name}
              className="w-[150px] h-[150px] flex items-center justify-center rounded-full transition-all duration-1000 hover:border-2 hover:border-gray-500"
            >
              <img
                alt="audi-cars"
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

export default AudiCars;
