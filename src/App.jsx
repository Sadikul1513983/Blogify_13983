import { Route, Routes } from "react-router-dom";
import "./assets/styles/output.css";
import Login from "./auth/Login";
import PrivateRoutes from "./auth/PrivateRoutes";
import Register from "./auth/Register";
import { Footer, TopBar } from "./layout";
import { Blogs } from "./pages";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <body className="bg-[#030317] text-white">

    <main>
      <section className="container">
      <TopBar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Blogs />} path="/"  />
          <Route element={<Profile />} path="/profile" />
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
