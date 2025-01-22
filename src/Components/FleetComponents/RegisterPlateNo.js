import React from 'react'

const RegisterPlateNo = () => {
  return (
    <div className="w-full flex flex-col items-start gap-[5px] relative">
        <label htmlFor="plateNo" className="font-bold opacity-80">
          Plate No<span className="text-red-500">*</span>
        </label>
        <input 
            type="text" 
            id="plateNo" 
            name="plateNo" 
            placeholder='DXB-12345-CC'
            className="w-full outline-4 outline-gray-500 bg-transparent" 
        />
        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-gray-500'></div>
    </div>
  )
}
export default RegisterPlateNo
