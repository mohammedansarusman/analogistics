import React from 'react'
import { useState } from 'react';
import { vehicleTypes } from '../../Utils/constants'
import Select from 'react-select';

const RegisterVehicleType = () => {
    
  const [selectedOption, setSelectedOption] = useState(null);  
  const handleChange = (e) => {
    console.log("result:",e)
    setSelectedOption(e);
  };
  return (
    <div className="w-full flex flex-col items-start gap-[5px] relative">
        <label htmlFor="vehicleType" className="font-bold opacity-80">
          Vehicle Type<span className="text-red-500">*</span>
        </label>
        
        <Select 
            options={vehicleTypes}
            className='w-full px-3 py-2 text-black text-start '
            placeholder="Search Vehicle Type"
            value={selectedOption}  // value prop should be an object of the selected option
            onChange={handleChange}
            styles={{
                control:(base,state) =>({
                    ...base,
                    borderColor: state.isFocused? 'black' : null,
                    boxShadow: state.isFocused? '0 0 0 2px rgba(0, 0, 0, 0.1)' : null,
                    // fontFamily: 'Poppins',
                    // fontSize: '14px',
                    borderRadius: '2px',
                }),
                menu:(base) => ({
                    ...base,
                    backgroundColor:'lightblue',
                })
            }}
        />
        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-gray-500'></div>
    </div>
  )
}

export default RegisterVehicleType