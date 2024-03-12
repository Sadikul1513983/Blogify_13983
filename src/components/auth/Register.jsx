/* eslint-disable no-unused-vars */
import TopBar from "../Blogs/TopBar";
import first from "./sv/first.svg";
import second from "./sv/second.svg";
import third from "./sv/third.svg";
import fourth from "./sv/fourth.svg";
import fifth from "./sv/fifth.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import createRegisterSlice from "../../feature/createRegister/createRegisterSlice";


const Register = () => {
  const [personFirstName,setPersonFirstName]=useState("")
  const [personLastName,setPersonLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState()
  const [isRegistration,setIsRegistration]=useState(false)



  const navigate = useNavigate();
  const dispatch = useDispatch()

  console.log("object",dispatch);

  return (
    <body className="bg-[#030317] text-white">
      <TopBar />
      <main>
        <section className="container">
          <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form action="" autoComplete="off">
              <div className="mb-6">
                <label htmlFor="firstName" className="block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={personFirstName}
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                  onChange={(e)=>{
                    setPersonFirstName(e.target.value)
                  }}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="lastName" className="block mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={personLastName}
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                  onChange={(e)=>setPersonLastName(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
                  onChange={(e)=>setPassword(e.target.value)}
                />

              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  onClick={()=>{
                    // navigate("/src/components/Blogs/BlogLanding.jsx")
                    dispatch(
                      createRegisterSlice({isRegistration,personFirstName,personLastName,email,password})
                    )
                  }}
                  className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                  Create Account
                </button>
              </div>
              <p className="text-center">
                Already have account?{" "}
                <Link
                  to="/"
                  className="text-indigo-600 hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="my-6 md:my-12 bg-[#030317]">
        <div className="container mx-auto pt-5 flex items-center justify-between">
          <ul className="flex items-center space-x-5">
            <li className="text-center">
              <Link
                className="text-white/50 hover:text-white transition-all duration-200"
                href="#"
              >
                <img src={first} />
              </Link>
            </li>
            <li className="text-center">
              <Link
                className="text-white/50 hover:text-white transition-all duration-200"
                href="#"
              >
                <img src={second} alt="second" />
              </Link>
            </li>
            <li className="text-center">
              <Link
                className="text-white/50 hover:text-white transition-all duration-200"
                href="#"
              >
                <img src={third} alt="third" />
              </Link>
            </li>
            <li className="text-center">
              <Link
                className="text-white/50 hover:text-white transition-all duration-200"
                href="#"
              >
                <img src={fourth} alt="fourth" />
              </Link>
            </li>
            <li className="text-center">
              <Link
                className="text-white/50 hover:text-white transition-all duration-200"
                href="#"
              >
                <img src={fifth} alt="fifth" />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </body>
  );
};

export default Register;
