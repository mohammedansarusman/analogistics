import './App.css';
import NavigationBar from './Components/NavigationBar';
import { useSelector } from 'react-redux';
import NavigationBarSmall from './Components/NavigationBarSmall';



function App() {
  const toggleBar = useSelector((store)=>store.navigation.bar)
  return (
    <div className={`App w-full h-[100vh] absolute ${toggleBar ? 'bg-gray-300' : 'bg-white'}`}>
      <NavigationBar />
      {toggleBar && <NavigationBarSmall />}
    </div>
  );
}

export default App;
