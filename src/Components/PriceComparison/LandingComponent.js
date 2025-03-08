import React from "react";
import porscheLogo from "../../Images/Brands/porsche.png";
import vwLogo from "../../Images/Brands/volkswagen.png";
import audiLogo from "../../Images/Brands/audi.png";
import PriceAnalysis from "./PriceAnalysis";

import PorscheCars from "./PorscheCars";
import VolkswagenCars from "./VolkswagenCars";
import AudiCars from "./AudiCars";
import { useSelector, useDispatch } from "react-redux";
import { setPorscheFlag, setVolkswagenFlag, setAudiFlag, setBrand, setType, setTruckSize } from "../../Store/priceSlice";
import { useState } from "react";
const LandingComponent = () => {
  const [brandIndex, setBrandIndex] = useState(null);
  const brands = [
    {logo:porscheLogo, name:"porsche"},
    {logo:vwLogo, name:"vw"},
    {logo:audiLogo, name:"audi"}
  ];
  const handleClick =(brandName,i)=>{
    setBrandIndex(i);
    if(brandName==="porsche"){
      dispatch(setPorscheFlag(true));
      dispatch(setVolkswagenFlag(false));
      dispatch(setAudiFlag(false));
      dispatch(setBrand(brandName));
      dispatch(setType(null));
      dispatch(setTruckSize(null));

    }else if(brandName==="vw"){
      dispatch(setPorscheFlag(false));
      dispatch(setVolkswagenFlag(true));
      dispatch(setAudiFlag(false));
      dispatch(setBrand(brandName));
      dispatch(setType(null));
      dispatch(setTruckSize(null));

    }else{
      dispatch(setPorscheFlag(false));
      dispatch(setVolkswagenFlag(false));
      dispatch(setAudiFlag(true));
      dispatch(setBrand(brandName));
      dispatch(setType(null));
      dispatch(setTruckSize(null));

    }

  }
  
  const dispatch = useDispatch();
  const porscheStatus = useSelector((store) => store.price.porscheFlag);
  const volkswagenStatus = useSelector((store) => store.price.volkswagenFlag);
  const audiStatus = useSelector((store) => store.price.audiFlag);

  return (
    <div className="w-full absolute left-0 top-[12.5%] lg:top-[12.3%] ">
      <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7 fixed z-10">
        <h1>Price Comparison</h1>
      </header>
      <div className="w-[100%] flex flex-col justify-start items-center pt-[100px] gap-1 cursor-pointer">
        <h1 className="text-gray-500">Select any brand</h1>
        {brands.map((brand,index) => (
          <div
            onClick={()=>handleClick(brand.name,index)}
            key={brand.name}
            className={`${index === brandIndex ? "bg-red-400" : "bg-gray-500"} w-[300px] h-[150px] flex items-center justify-center transition-all duration-1000`}
          >
            {console.log("logo:",brand.logo)}
            <img 
              alt={brand.name} 
              src={brand.logo} 
              className="w-[150px] ">
            </img>
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
        {(porscheStatus || volkswagenStatus || audiStatus) && <PriceAnalysis />}

      </div>
      {/* <footer className="w-full h-[30px] text-3xl bg-gray-500 text-white flex justify-center items-center py-7 fixed bottom-0 z-10"></footer> */}
    </div>
  );
};

export default LandingComponent;
