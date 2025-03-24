import React, { useState } from "react";
import gti from "../../Images/VwCars/gti.webp";
import golfr from "../../Images/VwCars/golfr.webp";
import tiguan from "../../Images/VwCars/tiguan.webp";
import troc from "../../Images/VwCars/troc.webp";
import amarok from "../../Images/VwCars/amarok.webp";
import teramont from "../../Images/VwCars/teramont.webp";
import touareg from "../../Images/VwCars/touareg.webp";
import { useDispatch, useSelector } from "react-redux";
import { setType, setTruckSize } from "../../Store/priceSlice";
const VolkswagenCars = () => {
  const dispatch = useDispatch();
  const [model,setModel] = useState(null)
  const mode = useSelector(store=>store.navigation.mode);

  const vw = [
    { logo: gti, name: "Golf 8 GTI" },
    { logo: golfr, name: "Golf R" },
    { logo: troc, name: "Touareg" },
    { logo: tiguan, name: "Tiguan" },
    { logo: touareg, name: "Touareg" },
    { logo: teramont, name: "Teramont" },
    { logo: amarok, name: "Amarok" },
  ];
  const handleClick =(index,item)=>{
    dispatch(setTruckSize("Standard Truck Required"))
    setModel(index);
    dispatch(setType(item.name));
    setModel(index);
    window.scrollBy({
      top:window.innerHeight*0.99,
      behavior:"smooth",
    });
  }
  return (
    <div className="flex w-[90%] justify-around overflow-x-scroll">
      <div className="flex py-[10px] gap-5">
        {vw.map((item,index) => (
          <div className="flex flex-col">
            <div
              onClick={()=>handleClick(index,item)}
              key={item.logo}
              className={`w-[150px] h-[150px] flex items-center justify-center rounded-full 
              transition-all duration-1000 
              ${model === index ? "border-2 border-gray-500" : "border-2 border-transparent"}`}
            >
              <img
                alt="vw-cars"
                src={item.logo}
                className="w-[150px] h-[150px] rounded-full object-contain hover:scale-110 transition-all duration-700 "
              ></img>
            </div>
            <h1 className={`${mode === 'light' ? "text-gray-500" : "text-white"}`}>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolkswagenCars;
