import React, {useEffect} from "react";
import porscheLogo from "../../Images/Brands/porsche.png";
import vwLogo from "../../Images/Brands/volkswagen.png";
import audiLogo from "../../Images/Brands/audi.png";
import PriceAnalysis from "./PriceAnalysis";

import PorscheCars from "./PorscheCars";
import VolkswagenCars from "./VolkswagenCars";
import AudiCars from "./AudiCars";
import { useSelector, useDispatch } from "react-redux";
import {
  setPorscheFlag,
  setVolkswagenFlag,
  setAudiFlag,
  setBrand,
  setType,
  setTruckSize,
  setStart,
  setEnd,
} from "../../Store/priceSlice";
import { useState } from "react";
import { changeBar } from "../../Store/navigationSlice";
import { language } from "../../Utils/constants";
const LandingComponent = () => {
  const mode = useSelector(store=>store.navigation.mode);
  const [brandIndex, setBrandIndex] = useState(null);
  const lang = useSelector(store=>store.navigation.lang);
  const brands = [
    { logo: porscheLogo, name: "porsche" },
    { logo: vwLogo, name: "vw" },
    { logo: audiLogo, name: "audi" },
  ];
  const handleClick = (brandName, i) => {
    setBrandIndex(i);
    if (brandName === "porsche") {
      dispatch(setPorscheFlag(true));
      dispatch(setVolkswagenFlag(false));
      dispatch(setAudiFlag(false));
      dispatch(setBrand(brandName));
      dispatch(setType(null));
      dispatch(setTruckSize(null));
      dispatch(setStart(""));
      dispatch(setEnd(""));
    } else if (brandName === "vw") {
      dispatch(setPorscheFlag(false));
      dispatch(setVolkswagenFlag(true));
      dispatch(setAudiFlag(false));
      dispatch(setBrand(brandName));
      dispatch(setType(null));
      dispatch(setTruckSize(null));
      dispatch(setStart(""));
      dispatch(setEnd(""));
    } else {
      dispatch(setPorscheFlag(false));
      dispatch(setVolkswagenFlag(false));
      dispatch(setAudiFlag(true));
      dispatch(setBrand(brandName));
      dispatch(setType(null));
      dispatch(setTruckSize(null));
      dispatch(setStart(""));
      dispatch(setEnd(""));
    }
  };

  const dispatch = useDispatch();
  const porscheStatus = useSelector((store) => store.price.porscheFlag);
  const volkswagenStatus = useSelector((store) => store.price.volkswagenFlag);
  const audiStatus = useSelector((store) => store.price.audiFlag);
  dispatch(changeBar(false));


  useEffect(()=>{
    return () =>{
      dispatch(setStart(""));
      dispatch(setEnd(""));
      dispatch(setBrand(null));
      dispatch(setType(null));
      dispatch(setTruckSize(null));
      dispatch(setPorscheFlag(false));
      dispatch(setVolkswagenFlag(false));
      dispatch(setAudiFlag(false));
    }
  },[])
  return (
    <div className={`w-full min-h-screen absolute left-0 top-[100px] pb-[50px] ${mode === "light" ? "bg-white" : "bg-gray-800"}`}>
      <header className="w-full h-[30px] text-3xl bg-cyan-500 text-white flex justify-center items-center py-7 fixed z-10">
        <h1>{language[lang].priceComparison}</h1>
      </header>
      <div className="w-[100%] flex flex-col justify-start items-center pt-[100px] gap-1 cursor-pointer">
        <h1 className={`${mode === "light" ? "text-gray-500" : "text-white"} font-semibold text-xl`}>
          {language[lang].selectBrand}
        </h1>
        <div className="flex flex-col gap-2 md:flex md:flex-row md:w-full md:justify-center md:gap-2">
        {brands.map((brand, index) => (
            <div
              onClick={() => handleClick(brand.name, index)}
              key={brand.name}
              className={`${
                index === brandIndex ? "bg-red-400" : "bg-gray-500"
              } w-[300px] h-[150px] flex items-center justify-center transition-all duration-1000`}
            >
              <img
                alt={brand.name}
                src={brand.logo}
                className="w-[150px] "
              ></img>
            </div>
        ))}
       </div>


        {(porscheStatus || volkswagenStatus || audiStatus) && (
          <h1 className={`${ mode === "light" ? "text-gray-500" : "text-white"} mt-[20px] text-xl font-semibold`}>
            {language[lang].selectType}
          </h1>
        )}

        {porscheStatus && <PorscheCars />}
        {volkswagenStatus && <VolkswagenCars />}
        {audiStatus && <AudiCars />}
        {(porscheStatus || volkswagenStatus || audiStatus) && <PriceAnalysis />}
      </div>
    </div>
  );
};

export default LandingComponent;
