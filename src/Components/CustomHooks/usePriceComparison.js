import { useSelector } from "react-redux";
import { dataset } from "../../Utils/constants";

const usePriceComparison = () =>{
    
    const truckStatus = useSelector((store)=>store.price.truckSize);
    const start = useSelector((store)=>store.price.start);
    const end = useSelector((store)=>store.price.end);
    const data = useSelector((store)=>store.price.data);
    console.log("custom hook renedered");
    // console.log("truck status changed", truckStatus);
    // console.log("start", start);
    console.log("end", end);
    // console.log("data-",dataset);
    const filteredResult = dataset.filter((data)=>data.start === start.value && data.end === end.value && data.truckType === truckStatus)
    console.log("filtered result", filteredResult);

    // perform calculations and return results
    //...
}
export default usePriceComparison