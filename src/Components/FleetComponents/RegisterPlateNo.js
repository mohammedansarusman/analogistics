import React from 'react'
import {usePlateValidity} from '../CustomHooks/usePlateValidity'
import { useSelector, useDispatch } from 'react-redux';
import { addPlateNo, addValidPlateNo, addSavePlateNo } from '../../Store/fleetRegistrationSlice';


const RegisterPlateNo = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const plate = useSelector((store)=>store.fleetRegistration.plateNo);
  const flag = useSelector((store)=>store.fleetRegistration.validPlateNo);
  const mode = useSelector((store)=>store.navigation.mode);
  
  const handlePlate=(e)=>{
    dispatch(addPlateNo(e.target.value.toUpperCase()));
  };
  const handleBlur=()=>{
    dispatch(addValidPlateNo(true));
  };
  const message = usePlateValidity(plate,data);
  message === null? dispatch(addSavePlateNo(true)): dispatch(addSavePlateNo(false));
  

  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
        <label htmlFor="plateNo" className={`font-bold opacity-80 ${mode === 'light' ? "text-black" : "text-gray-200"}`}>
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
            className={`w-full  bg-transparent focus:outline-none focus:ring-2 ${mode === "light" ? " focus:ring-gray-400 text-black" : "focus:ring-gray-600 text-white"}`}

        />
        <div className='w-full h-[1px] bg-gray-500'></div>
        <div className="h-[20px]">
          {flag && <p className="text-red-500 text-xs">{message}</p>}
        </div>
    </div>
  )
}
export default RegisterPlateNo
