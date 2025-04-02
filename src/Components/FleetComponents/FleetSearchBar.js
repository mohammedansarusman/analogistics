import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { addFilterFleetRecord } from '../../Store/fleetRegistrationSlice';
import { useDispatch, useSelector } from'react-redux';
import { language } from '../../Utils/constants';

const FleetSearchBar = (props) => {
  const dispatch = useDispatch();
    const { fleetRecords } = props;
    const [plate, setPlate] = useState("");
    const mode = useSelector(store=>store.navigation.mode);
    const lang = useSelector((store)=>store.navigation.lang);

    const handleChange = (e) => {
      setPlate(e.target.value);
    };
    const handleSearch = ()=>{
        const data = fleetRecords.filter(
          (record) => record.plate.toLowerCase().includes(plate.toLowerCase())
        )
        dispatch(addFilterFleetRecord(data));

    }
  return (
    <div className='w-[90%] h-[50px] border border-2 border-gray-500 rounded-md flex justify-around items-center sm:w-1/2 lg:w-1/3'>
        <input 
          className={`w-[80%] focus:outline-none ${ mode==="light" ? "text-black bg-white" : "text-white bg-gray-800" }`} 
          type='text' 
          placeholder={language[lang].placeHolderFleetList}
          onChange={handleChange}
          value={plate}
        />
        <FaSearch onClick={handleSearch} className={`cursor-pointer ${mode === "light" ? "text-black" : "text-gray-300" }`}/>
    </div>
  )
}

export default FleetSearchBar