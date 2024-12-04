import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";


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
    <div className='w-[70%] h-[100%] bg-white relative left-0 top-0 flex flex-col'>
        <div className='bg-slate-950 opacity-85 h-[70px] flex items-center justify-around text-white'>
            <h1 className="text-3xl font-semibold">FleetFlow</h1>
            <AiOutlineClose 
                size={26} 
                className='hover:bg-slate-700' 
                onClick = {handleCloseButton}
            />
        </div>
        <div className='flex flex-col items-center pt-7 text-gray-500 text-md gap-2 font-semibold'>
            <div className="w-[90%] flex justify-start py-1 pl-2 rounded-md hover:bg-gray-100">
                <h1>Home</h1>
            </div>
            <div className="w-[90%] flex justify-between items-center py-1 pl-2 rounded-md hover:bg-gray-100">
                <h1>People</h1>
                <MdKeyboardArrowRight size={20}/>
            </div>
            <div className="w-[90%] flex justify-between items-center py-1 pl-2 rounded-md hover:bg-gray-100">
                <h1>Fleet</h1>
                <MdKeyboardArrowRight size={20}/>
            </div>
            <div className="w-[90%] flex justify-between items-center py-1 pl-2 rounded-md hover:bg-gray-100">
                <h1>Trip</h1>
                <MdKeyboardArrowRight size={20}/>
            </div>
        </div>
        

    </div>
  )
}

export default NavigationBarSmall