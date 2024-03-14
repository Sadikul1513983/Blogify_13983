import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authenticateUser } from "../features/auth/authRegistration";
import { afterRegistration } from "../features/createRegister/createRegisterSlice";

const Login = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin =async  (email, password, e) => {
    e.preventDefault();
    try {
      let response = await dispatch(
        authenticateUser({email, password })
      );
      if(response?.type === "authentication/authenticateUser/fulfilled"){
        navigate("/",{state:response})
        dispatch(afterRegistration({ isRegistration: true }));
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      alert("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form action="">
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputEmail}
            className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => {
              setInputEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            value={password}
            type="password"
            id="password"
            name="password"
            className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            onClick={(e) => {
              handleLogin(inputEmail, password, e);
            }}
          >
            Login
          </button>
        </div>
        <p className="text-center">
          {"Don't have an account?"}{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
