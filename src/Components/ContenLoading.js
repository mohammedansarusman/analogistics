// Parent component is <EmployeeList />
// This component is used to display the shimmer effect on the employee list
import React from 'react'

const ContenLoading = () => {
  return (
    <div className = 'w-[100%] h-[100vh] absolute left-0  bg-gray-200 flex justify-center pt-[10%] bg-opacity-20 '>
        <div className='w-[300px] h-[100px] flex flex-col items-center justify-center bg-white shadow-md shadow-gray-400 rounded-md'>
            <h1 className='text-black font-normal'>Content Loading..</h1>
            <h1 className='text-black font-normal'>Please wait for a moment...</h1>
        </div>
    </div>
  )
}
export default ContenLoading
