import './App.css';
import NavigationBar from './Components/NavigationBar';
import { useSelector, useDispatch } from 'react-redux';
import NavigationBarSmall from './Components/NavigationBarSmall';
import { changeBar } from './Store/navigationSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import Dashboard from './Components/Dashboard';
import Login from "./Login";
import { useNavigate } from 'react-router-dom';




function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const toggleBar = useSelector((store)=>store.navigation.bar)
  const flag = useSelector((store)=>store.navigation.sign);
  useEffect(()=>{
    const handleSize = ()=>{
      window.innerWidth>=1024 && dispatch(changeBar(false))
    }
    window.addEventListener('resize',handleSize);
    return()=>{window.removeEventListener('resize',handleSize)}
  },[dispatch])
  useEffect(()=>{
    navigate('/dashboard')
  },[])
  
  return (
    <div className={`App w-full relative'}`}>
      {flag && <Login />}
      {!flag && <NavigationBar />}
      {/* Here the hamburger menubar clicked then navigation bar will pop-up */}
      {!flag && toggleBar && <NavigationBarSmall />} 
      {!flag && <Outlet />}
    </div>
  );
}

export default App;
