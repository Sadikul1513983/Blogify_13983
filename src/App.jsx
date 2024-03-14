import { Route, Routes } from "react-router-dom";
import "./assets/styles/output.css";
import Login from "./auth/Login";
import PrivateRoutes from "./auth/PrivateRoutes";
import Register from "./auth/Register";
import { Footer, TopBar } from "./layout";
import { Blogs } from "./pages";
import Profile from "./pages/Profile/Profile";
import CreateBlogs from "./pages/create/CreateBlogs";
import { useState } from "react";
import SingleBlogs from "./pages/SingleBlogs";
import Search from "./pages/Search";

function App() {
  const [landingData, setLandingData] = useState([]);
  return (
    <body className="bg-[#030317] text-white">

    <main>
      <section className="container">
      <TopBar setLandingData={setLandingData} landingData={landingData} />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Blogs setLandingData={setLandingData} landingData={landingData}  />} path="/"  />
          <Route element={<Profile setLandingData={setLandingData} landingData={landingData} />} path="/profile" />
          <Route element={<CreateBlogs  />} path="/createBlog" />
          <Route element={<SingleBlogs  />} path="/singleBlog" />
          <Route element={<Search />} path="/search" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
      <Footer />
    </section>
    </main>
    </body>
  );
}

export default App;
