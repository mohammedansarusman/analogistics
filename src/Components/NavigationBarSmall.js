import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { changeBar } from '../Store/navigationSlice';
import { useDispatch } from 'react-redux';

// Parent componenet - <App />
const NavigationBarSmall = () => {
    const dispatch = useDispatch();
    const handleCloseButton =() =>{
        // Action to close the small navigation bar
        dispatch(changeBar(false));
    }
  return (
    <div className='w-[70%] h-[100%] bg-white relative left-0 top-0'>
        <div className='bg-slate-950 opacity-85 h-[70px] flex items-center justify-around text-white'>
            <h1 className="text-3xl font-semibold">FleetFlow</h1>
            <AiOutlineClose 
                size={26} 
                className='hover:bg-slate-700' 
                onClick = {handleCloseButton}
            />

        </div>

    </div>
  )
}

export default NavigationBarSmall