import './App.css';
import NavigationBar from './Components/NavigationBar';
import { useSelector, useDispatch } from 'react-redux';
import NavigationBarSmall from './Components/NavigationBarSmall';
import { changeBar } from './Store/navigationSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from "./Login";


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
    <div className={`App w-full min-h-screen relative  ${toggleBar ? 'bg-gray-300' : 'bg-white'}`}>
      <Login />
      {/* <NavigationBar /> */}
      {/* Here the hamburger menubar clicked then navigation bar will pop-up */}
      {/* {toggleBar && <NavigationBarSmall />}  */}
      {/* <Dashboard /> */}
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
