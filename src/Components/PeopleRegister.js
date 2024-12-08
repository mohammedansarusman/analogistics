import React from 'react'
import { changeBar } from '../Store/navigationSlice'
import { useDispatch } from 'react-redux'

const PeopleRegister = () => {
  const dispatch = useDispatch();
  dispatch(changeBar(false));
  return (
    <div className='w-[100%] h-[500px] absolute left-0'>
      <div className='flex flex-col items-center'>
        <header className="w-full h-[70px] text-3xl bg-cyan-500 text-white flex justify-center items-center ">
          <h1>Employee Registration</h1>
        </header>
        <form className='flex flex-col items-start w-[90%]  border-2 border-gray-300 p-5 rounded-xl gap-2'>
          <div className='w-full flex flex-col items-start'>
            <label for='firstName' className='block'>First Name</label>
            <input type="text" id='firstName' name="firstName" className='block w-full text-black bg-blue-300' />
          </div>
          <div className='w-full flex flex-col items-start'>
            <label for='middleName' className='block'>Middle Name</label> 
            <input type="text" id='middleName' name="middleName" className='block w-full text-black' />
          </div>
          <label for='lastName' className='block'>Last Name</label>
          <input type="text" id='lastName' name="lastName" className='block w-full text-black' />
          <label for='empid' className='block'>Employee ID</label>
          <input type="text" id='empid' name="empid" className='block w-full text-black' />


        </form>
      </div>

    </div>
  )
}

export default PeopleRegister