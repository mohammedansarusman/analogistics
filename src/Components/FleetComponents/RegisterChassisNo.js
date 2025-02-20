import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChassisNo, addValidChassisNo, addSaveChassisNo } from '../../Store/fleetRegistrationSlice'
import { useChassisValidity } from '../CustomHooks/useChassisValidity'

const RegisterChassisNo = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const chassisNo = useSelector((store)=>store.fleetRegistration.chassisNo);
  const flag = useSelector((store)=>store.fleetRegistration.validChassisNo);

  const handleChange = (e)=> dispatch(addChassisNo(e.target.value.toUpperCase()))
  const handleBlur = ()=> dispatch(addValidChassisNo(true))

  const message = useChassisValidity(chassisNo, data);
  message === null ? dispatch(addSaveChassisNo(true)) : dispatch(addSaveChassisNo(false));
  return (
    <div className="w-full flex flex-col items-start gap-[5px]">
        <label htmlFor="chassisNo" className="font-bold opacity-80">
          Chassis Number<span className="text-red-500">*</span>
        </label>
        <input 
            type="text" 
            id="chassisNo" 
            name="chassisNo" 
            onChange={ handleChange }
            onBlur={ handleBlur }
            value={chassisNo}
            placeholder='WVGCD1CA2RC570679'
            className="w-full outline-4 outline-gray-500 bg-transparent" 
        />
        <div className='w-full h-[1px] bg-gray-500'></div>
        <div className="h-[20px]">
          {flag && <p className="text-red-500 text-xs">{message}</p>}
        </div>
    </div>
  )
}

export default RegisterChassisNo