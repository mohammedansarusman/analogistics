// parent component is <App />
import { useRef } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { user } from "../src/Utils/constants"
import { useDispatch } from "react-redux";
import { setSign } from "./Store/navigationSlice";


const Login = () => {
  const dispatch = useDispatch();
  const userrefer = useRef(null);
  const passwordRefer = useRef(null);
  const handleClick = () => {
    if (userrefer.current.value === user.name && passwordRefer.current.value === user.pass) {
      dispatch(setSign(false));  /* the flag in App.js will change as false and navigation bar will open */
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <main className="bg-cyan-900 w-full min-h-screen flex justify-center items-center">
      <div className="bg-white w-[500px] min-h-[500px] rounded-lg py-[5%] flex flex-col items-center justify-center gap-10">
        <header>
            <h1 className="text-xl text-center font-semibold text-gray-600">FleetFlow</h1>
            <h1 className="text-2xl text-center font-bold text-gray-600">Welcome Back</h1>
            <p className="font-light">Enter your user name and password to access your account</p>
        </header>
        <form className="w-3/4  flex flex-col">
            <label className="text-left" htmlFor="username" id="username">User Name</label>
            <div className="flex w-[100%] h-[40px] rounded-lg border-[1px] border-gray-400">
                {/* user name Logo */}
                <div className="w-1/6 rounded-l-lg flex justify-center items-center text-blue-600 border-r-[1px] border-gray-400">
                    <FaUser />
                </div>
                <div className="w-5/6 flex justify-center items-center rounded-r-lg">
                    <input ref = {userrefer} type="text" name="username" id="username" autoComplete="username" placeholder="Enter user name" className="w-[100%] h-full px-2 rounded-r-lg"/>
                </div>
            </div>
            <label className="text-left" htmlFor="password" id="password">Password</label>
            <div className="flex w-[100%] h-[40px] rounded-lg border-[1px] border-gray-400">
                {/* Password Logo */}
                <div className="w-1/6 rounded-l-lg flex justify-center items-center text-blue-600 border-r-[1px] border-gray-400">
                  <FaLock />
                </div>
                <div className="w-5/6 flex justify-center items-center rounded-r-lg">
                    <input 
                      ref = {passwordRefer} 
                      type="password" 
                      name="password" id="password" autoComplete="current-password"
                      placeholder="***********" 
                      className="w-[100%] h-full px-2 rounded-r-lg"/>
                </div>
            </div>
        </form>
        <button 
          className="w-[150px] h-[50px] bg-blue-500 text-white font-semibold text-xl rounded-full mt-5"
          onClick={handleClick}
        >Login
        </button>
      </div>
    </main>
  );
};
export default Login;
