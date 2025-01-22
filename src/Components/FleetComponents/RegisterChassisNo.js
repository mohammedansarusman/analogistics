import React from 'react'

const RegisterChassisNo = () => {
  return (
    <div className="w-full flex flex-col items-start gap-[5px] relative">
        <label htmlFor="chassisNo" className="font-bold opacity-80">
          Chassis Number<span className="text-red-500">*</span>
        </label>
        <input 
            type="text" 
            id="chassisNo" 
            name="chassisNo" 
            placeholder='WVGCD1CA2RC570679'
            className="w-full outline-4 outline-gray-500 bg-transparent" 
        />
        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-gray-500'></div>
    </div>
  )
}

export default RegisterChassisNo