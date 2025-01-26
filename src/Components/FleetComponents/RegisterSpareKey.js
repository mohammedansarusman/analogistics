import React from 'react'

const RegisterSpareKey = () => {
  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
        <label htmlFor="spareKey" className="font-bold opacity-80">
          Spare Key<span className="text-red-500">*</span>
        </label>
        <input 
            type="text" 
            id="spareKey" 
            name="spareKey" 
            placeholder='Available / Not available' 
            className="w-full outline-4 outline-gray-500 bg-transparent" 
        />
        <div className='w-full h-[1px] bg-gray-500'></div>
    </div>
  )
}

export default RegisterSpareKey