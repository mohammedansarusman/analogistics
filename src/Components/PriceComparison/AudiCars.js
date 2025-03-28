import React, {useState} from "react";
import a5 from "../../Images/AudiCars/a5.webp";
import q6 from "../../Images/AudiCars/q6.webp";
import rs3 from "../../Images/AudiCars/rs3.webp";
import rsEtron from "../../Images/AudiCars/rsEtron.webp";
import rsq8 from "../../Images/AudiCars/rsq8.webp";
import sq6 from "../../Images/AudiCars/sq6.webp";
import { useDispatch, useSelector } from "react-redux";
import { setType, setTruckSize } from "../../Store/priceSlice";
const AudiCars = () => {
  const dispatch = useDispatch();
  const [model,setModel] = useState(null);
  const mode = useSelector(store=>store.navigation.mode);

  const audi = [
    { logo: a5, name: "A5 Sedan" },
    { logo: q6, name: "Q6 e-tron" },
    { logo: rs3, name: "RS 3 Sedan" },
    { logo: rsEtron, name: "RS e-tron" },
    { logo: rsq8, name: "RS Q8" },
    { logo: sq6, name: "SQ6 e-tron" },
  ];
  const handleClick =(index,item)=>{
    if(item.name === "RS 3 Sedan" || item.name === "RS e-tron"){
      dispatch(setTruckSize("Flat Bed Truck Required"))
    }else{
      dispatch(setTruckSize("Standard Truck Required"))
    }
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
        {audi.map((item,index) => (
          <div key={index}className="flex flex-col">
               
            <div
              onClick={()=>handleClick(index,item)}
              className={`w-[150px] h-[150px] flex items-center justify-center rounded-full 
              transition-all duration-1000 
              ${model === index ? "border-2 border-gray-500" : "border-2 border-transparent"}`}
            >
              <img
                alt="audi-cars"
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

export default AudiCars;
