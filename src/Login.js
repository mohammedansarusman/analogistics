import { FaUser } from "react-icons/fa";

const Login = () => {
  return (
    <main className="bg-cyan-100 w-full h-[100vh] flex justify-center items-center">
      <div className="bg-white w-[500px] h-5/6 rounded-lg py-[5%] flex flex-col items-center">
        <header>
            <h1 className="text-xl text-center font-semibold text-gray-600">FleetFlow</h1>
            <h1 className="text-2xl text-center font-bold text-gray-600">Welcome Back</h1>
            <p className="font-light">Enter your user name and password to access your account</p>
        </header>
        <section className="w-3/4  flex flex-col">
            <label className="text-left" htmlFor="username">User Name</label>
            <div className="flex w-[100%] h-[40px] rounded-lg outline-1 outline-gray-400 outline">
                {/* user name Logo */}
                <div className="w-1/6 rounded-l-lg flex justify-center items-center text-blue-600 outline outline-1 outline-gray-400">
                    <FaUser />
                </div>
                <div className="w-5/6 flex justify-center items-center rounded-r-lg">
                    <input type="text" name="username" id="username" placeholder="Enter user name" className="w-[100%] h-full px-2"/>
                </div>
            </div>
            <label className="text-left" htmlFor="password">Password</label>
            <div className="flex w-[100%] h-[40px] rounded-lg border-2 border-gray-400">
                {/* Password Logo */}
                <div className="w-1/6 rounded-l-lg flex justify-center items-center text-blue-600 border-r-2 border-gray-400">
                    <FaUser />
                </div>
                <div className="w-5/6 flex justify-center items-center rounded-r-lg">
                    <input type="password" name="password" id="password" placeholder="***********" className="w-[100%] h-full px-2 rounded-r-lg"/>
                </div>
            </div>
            {/* <input type="password" name="password" id="password" placeholder="Enter password"/> */}
        </section>
      </div>
    </main>
  );
};
export default Login;
