import './App.css';
import NavigationBar from './Components/NavigationBar';
import { useSelector, useDispatch } from 'react-redux';
import NavigationBarSmall from './Components/NavigationBarSmall';
import { changeBar } from './Store/navigationSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Login from "./Login";

function App() {
  const dispatch = useDispatch();

  // the initial value of redux state variable 'bar' is false
  // changeBar action is uing to update 'bar' state
  // bar means a side window will pop-up if the size of screen is small and click the hamburger button
  const toggleBar = useSelector((store)=>store.navigation.bar)

  // the initial value of redux state variable 'sign' is true
  const flag = useSelector((store)=>store.navigation.sign);

  useEffect(()=>{
    const handleSize = ()=>{
      window.innerWidth>=1024 && dispatch(changeBar(false))
    }
    window.addEventListener('resize',handleSize);
    return()=>{window.removeEventListener('resize',handleSize)}
  },[dispatch])
  
  // useEffect(()=>{
  //   navigate('/dashboard')
  // },[])
  
  return (
    <div className={`App w-full relative'}`}>
      {/* intitial value of flag is true so login page will open */}
      {/* Once the login successfull then the flag value become false then login window will close and open navigation and dashboard */}
      {flag && <Login />}  
      {!flag && <NavigationBar />}
      {/* Here the hamburger menubar clicked then navigation bar will pop-up */}
      {/* toggleBar is controlling from NavigationBarSmall */}
      {!flag && toggleBar && <NavigationBarSmall />} 
      {!flag && <Outlet />}
    </div>
  );
}

export default App;
