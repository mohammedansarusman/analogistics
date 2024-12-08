import React from 'react'
import { changeBar } from '../Store/navigationSlice'
import { useDispatch } from 'react-redux'

const PeopleRegister = () => {
  const dispatch = useDispatch();
  dispatch(changeBar(false));
  return (
    <div className='bg-white w-[100%] h-[500px] absolute left-0'></div>
  )
}

export default PeopleRegister