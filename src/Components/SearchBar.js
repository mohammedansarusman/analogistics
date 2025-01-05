import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";


const SearchBar = (props) => {
  const {employeeRecords} = props;
  const [fmlName, setFmlName] = useState("");
  console.log("props",props);
  const handleChange = (e) => {
    setFmlName(e.target.value);
    
  }
  const handleSearch = () => {
    const data = employeeRecords.filter(
                  (record) => record.first.toLowerCase().includes(fmlName.toLowerCase()) || 
                              record.middle.toLowerCase().includes(fmlName.toLocaleLowerCase()) ||  
                              record.last.toLowerCase().includes(fmlName.toLowerCase())
    )  
    console.log("Search result",data);
    console.log("hello");
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
        <FaSearch onClick={handleSearch}/>
    </div>
  )
}

export default SearchBar