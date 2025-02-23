import './App.css';
import NavigationBar from './Components/NavigationBar';
import { useSelector, useDispatch } from 'react-redux';
import NavigationBarSmall from './Components/NavigationBarSmall';
import { changeBar } from './Store/navigationSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './Components/Dashboard';


function App() {
  const dispatch = useDispatch();
  const toggleBar = useSelector((store)=>store.navigation.bar)
  useEffect(()=>{
    const handleSize = ()=>{
      window.innerWidth>=1024 && dispatch(changeBar(false))
    }
    window.addEventListener('resize',handleSize);
    return()=>{window.addEventListener('resize',handleSize)}
  },[])
  
  return (
    <div className={`App w-full h-[100vh]  ${toggleBar ? 'bg-gray-300' : 'bg-white'}`}>
      <NavigationBar />
      {/* Here the hamburger menubar clicked then navigation bar will pop-up */}
      {toggleBar && <NavigationBarSmall />} 
      <Dashboard />
      <Outlet />  {/* This component will render the route component based on the current URL */}
    </div>
  );
}

export default App;
