import { useSelector } from "react-redux";
import { dataset } from "../../Utils/constants";

const usePriceComparison = () =>{
    
    const truckStatus = useSelector((store)=>store.price.truckSize);
    const start = useSelector((store)=>store.price.start);
    const end = useSelector((store)=>store.price.end);
    const data = useSelector((store)=>store.price.data);
    const filteredResult = dataset.filter((data)=>data.start === start.value && data.end === end.value && data.truckType === truckStatus)
    return filteredResult; 
}
export default usePriceComparison