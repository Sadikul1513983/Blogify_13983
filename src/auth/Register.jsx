/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  afterRegistration,
  setRegistrationAction,
} from "../features/createRegister/createRegisterSlice";

const Register = () => {
  const [personFirstName, setPersonFirstName] = useState("");
  const [personLastName, setPersonLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(afterRegistration({ isRegistration: false }));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      personFirstName === "" ||
      personLastName === "" ||
      email === "" ||
      password === ""
    ) {
      return alert("Please fill in all fields");
    }
  
    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: personFirstName,
          lastName: personLastName,
          email: email,
          password: password,
        }),
      });
  
      if (response.ok) {
        console.log("Registration successful");
        navigate("/");
        setEmail("");
        setPersonFirstName("");
        setPersonLastName("");
        setPassword("");
        dispatch(setRegistrationAction({ personFirstName, personLastName, email, password }));
      } else {
        const errorData = await response.json();
        console.error("Failed to register:", errorData);
        alert("Failed to register. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
      alert("An error occurred during registration. Please try again later.");
    }
  };
  
  

  return (
    <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit}>
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
            onChange={(e) => {
              setPersonFirstName(e.target.value);
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
            onChange={(e) => setPersonLastName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
          >
            Create Account
          </button>
        </div>
        <p className="text-center">
          Already have account?{" "}
          <Link to="/" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
