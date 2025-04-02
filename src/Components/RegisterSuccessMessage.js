import React from 'react'
import { language } from '../Utils/constants'
import { useSelector } from 'react-redux'

const RegisterSuccessMessage = () => {
  const lang = useSelector(store=>store.navigation.lang)
  return (
    <div className="h-[50px] bg-cyan-500  absolute right-1/2 bottom-1/2 transition-transform translate-x-1/2 translate-y-1/2 
                    flex justify-center items-center text-white z-10 px-3">
        <h1>{language[lang].successMessage}</h1>
    </div>
  )
}

export default RegisterSuccessMessage