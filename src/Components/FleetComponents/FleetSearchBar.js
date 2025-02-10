import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { addFilterFleetRecord } from '../../Store/fleetRegistrationSlice';
import { useDispatch } from'react-redux';


const FleetSearchBar = (props) => {
  const dispatch = useDispatch();
    const { fleetRecords } = props;
    const [plate, setPlate] = useState("");
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
    <div className='w-[90%] h-[50px] border-2 border-gray rounded-md flex justify-around items-center sm:w-1/2 lg:w-1/3'>
        <input 
          className='w-[90%] text-black border-0 focus:outline-none' 
          type='text' 
          placeholder='Search by plate number' 
          onChange={handleChange}
          value={plate}
        />
        <FaSearch onClick={handleSearch} className='cursor-pointer'/>
    </div>
  )
}

export default FleetSearchBar