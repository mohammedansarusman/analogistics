import React from "react";
import porscheLogo from "../../Images/Brands/porsche.png";
import vwLogo from "../../Images/Brands/volkswagen.png";
import audiLogo from "../../Images/Brands/audi.png";

import PorscheCars from "./PorscheCars";
import VolkswagenCars from "./VolkswagenCars";
import AudiCars from "./AudiCars";
import { useSelector, useDispatch } from "react-redux";
const LandingComponent = () => {
  const brands = [porscheLogo, vwLogo, audiLogo];
  const dispatch = useDispatch();
  const porscheStatus = useSelector((store) => store.price.porscheFlag);
  const volkswagenStatus = useSelector((store) => store.price.volkswagenFlag);
  const audiStatus = useSelector((store) => store.price.audiFlag);
  const handleClick = (brand) => {
    console.log("brand:",brand);
  }
  return (
    <div className="w-full absolute left-0 top-[12.5%] lg:top-[12.3%] ">
      <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7 fixed z-10">
        <h1>Price Comparison</h1>
      </header>
      <div className="w-[100%] flex flex-col justify-start items-center pt-[100px] gap-1 cursor-pointer">
        <h1 className="text-gray-500">Select any brand</h1>
        {brands.map((item) => (
          <div
            onClick={()=>handleClick(item)}
            key={item}
            className="bg-green-400 w-[300px] h-[150px] flex items-center justify-center hover:bg-green-500 transition-all duration-1000"
          >
            <img alt="brand-logo" src={item} className="w-[150px]"></img>
          </div>
        ))}

        {(porscheStatus || volkswagenStatus || audiStatus) && (
          <h1 className="text-gray-500 mt-[20px]">
            Select any car model from the brand
          </h1>
        )}

        {porscheStatus && <PorscheCars />}
        {volkswagenStatus && <VolkswagenCars />}
        {audiStatus && <AudiCars />}
      </div>
    </div>
  );
};

export default LandingComponent;
