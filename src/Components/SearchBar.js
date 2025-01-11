import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { addFilterEmployeeRecords } from '../Store/registrationSlice';

import { useDispatch } from 'react-redux';


const SearchBar = (props) => {
  const dispatch = useDispatch();
  const {employeeRecords} = props;
  const [fmlName, setFmlName] = useState("");
  const handleChange = (e) => {
    setFmlName(e.target.value);
  }
  const handleSearch = () => {
    const data = employeeRecords.filter(
                  (record) => record.first.toLowerCase().includes(fmlName.toLowerCase()) || 
                              record.middle.toLowerCase().includes(fmlName.toLocaleLowerCase()) ||  
                              record.last.toLowerCase().includes(fmlName.toLowerCase())
    )  
    dispatch(addFilterEmployeeRecords(data));  
  }
  return (
    <div className='w-[90%] h-[50px] border-2 border-gray rounded-md flex justify-around items-center'>
        <input 
          className='w-[80%] text-black border-0 focus:outline-none' 
          type='text' 
          placeholder='Search by Name'
          onChange={handleChange}
          value={fmlName}
        />
        <FaSearch onClick={handleSearch} className='cursor-pointer'/>
    </div>
  )
}

export default SearchBar