import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { addFilterEmployeeRecords } from '../Store/registrationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { language } from "../Utils/constants";


// parent component
const SearchBar = (props) => {
  const dispatch = useDispatch();
  const {employeeRecords} = props;
  const [fmlName, setFmlName] = useState("");
  const mode = useSelector(store=>store.navigation.mode);
  const lang = useSelector((store)=>store.navigation.lang);


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
    <div className='w-[90%] h-[50px] border border-2 border-gray-500 rounded-md flex justify-around items-center'>
        <input 
          className={`w-[80%] focus:outline-none ${ mode==="light" ? "text-black bg-white" : "text-white bg-gray-800" }`} 
          type='text' 
          placeholder={language[lang].searchEmployee}
          onChange={handleChange}
          value={fmlName}
        />
        <FaSearch onClick={handleSearch} className={`cursor-pointer ${mode === "light" ? "text-black" : "text-gray-300" }`}/>
    </div>
  )
}

export default SearchBar