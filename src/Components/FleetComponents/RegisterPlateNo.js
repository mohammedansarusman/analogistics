import React from 'react'
import {useTextValidity} from '../CustomHooks/useTextValidity'
import { useSelector, useDispatch } from 'react-redux';
import { addPlateNo, addValidPlateNo } from '../../Store/fleetRegistrationSlice';


const RegisterPlateNo = () => {
  const dispatch = useDispatch();
  const plate = useSelector((store)=>store.fleetRegistration.plateNo);
  const flag = useSelector((store)=>store.fleetRegistration.validPlateNo);
  const handlePlate=(e)=>{
    dispatch(addPlateNo(e.target.value));
  };
  const handleBlur=()=>{
    dispatch(addValidPlateNo(true));
  };
  const message = useTextValidity(plate);


  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
        <label htmlFor="plateNo" className="font-bold opacity-80">
          Plate No<span className="text-red-500">*</span>
        </label>
        <input 
            type="text" 
            id="plateNo" 
            name="plateNo" 
            onChange={handlePlate}
            onBlur={handleBlur}
            value={plate}
            placeholder='DXB-12345-CC'
            className="w-full outline-4 outline-gray-500 bg-transparent" 
        />
        <div className='w-full h-[1px] bg-gray-500'></div>
        <div className="h-[20px]">
          {flag && <p className="text-red-500 text-xs">{message}</p>}
        </div>
    </div>
  )
}
export default RegisterPlateNo
