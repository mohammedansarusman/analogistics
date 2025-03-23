import React, {useState} from "react";
import carerra1 from "../../Images/PorscheCars/718.jpg";
import carerra2 from "../../Images/PorscheCars/911.jpg";
import cayenne from "../../Images/PorscheCars/cayenne.jpg";
import macan from "../../Images/PorscheCars/macan.jpg";
import panamera from "../../Images/PorscheCars/panamera.jpg";
import taycan from "../../Images/PorscheCars/taycan.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setType,setTruckSize } from "../../Store/priceSlice";

const PorscheCars = () => {
  const dispatch = useDispatch();
  const [model,setModel] = useState(null)
  const mode = useSelector(store=>store.navigation.mode);

  const porsche = [
    { logo: carerra1, name: "718" },
    { logo: carerra2, name: "911" },
    { logo: cayenne, name: "Cayenne" },
    { logo: macan, name: "Macan" },
    { logo: panamera, name: "Panamera" },
    { logo: taycan, name: "Taycan" },
  ];
  const handleClick =(index,item)=>{
    if(item.name === "Taycan" || item.name === "911" || item.name === "718"){
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
    <div className="flex w-[90%] justify-around overflow-x-scroll px-4">
      <div className="flex py-[10px]  gap-5">
        {porsche.map((item,index) => (
          <div className="flex flex-col" key={item.name}>
            <div
              onClick={()=>handleClick(index,item)}
              className={`w-[120px] h-[120px] flex items-center justify-center rounded-full 
              transition-all duration-1000 
              ${model === index ? "border-2 border-gray-500" : "border-2 border-transparent"}`}

            >
              <img
                alt="porsche-cars"
                src={item.logo}
                className="w-[100px] h-[100px] object-full rounded-full hover:scale-110 transition-all duration-700 "
              ></img>
            </div>
            <h1 className={`${mode === 'light' ? "text-gray-500" : "text-white"}`}>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PorscheCars;
