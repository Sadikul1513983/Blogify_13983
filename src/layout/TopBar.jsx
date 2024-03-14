import { Link, useNavigate } from "react-router-dom";
import search from "../assets/icons/search.svg";
import logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { afterRegistration } from "../features/createRegister/createRegisterSlice";
import { useState } from "react";

const TopBar = () => {

  const [visible,setIsVisible]=useState(false)


  const usePortal = () => {
    setIsVisible(true); 
  }

  const profile = useSelector(
    (state) => state?.updateAction?.isAuthObject?.user
  );
  let isAuth = useSelector(
    (state) => state?.createRegister?.afterRegisterList?.isRegistration
  );


  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav className="container">
          <div>
            <Link to="./">
              <img className="w-32" src={logo} alt="lws" />
            </Link>
          </div>
          <div>
            <ul className="flex items-center space-x-5">
              <li>
                <Link
                  to="./createBlog"
                  className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                >
                  Write
                </Link>
              </li>
              {isAuth && (
                <li>
                  <Link
                    to="./search"
                    state={{visible}}
                    onClick={usePortal}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <img src={search} alt="Search" />
                    <span>Search</span>
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className="text-white/50 hover:text-white transition-all duration-200"
                  onClick={() => {
                    dispatch(afterRegistration({ isRegistration: false }));
                    navigate("/");
                  }}
                >
                  Login
                </Link>
              </li>
              {isAuth && (
                <li className="flex items-center">
                  <div className="avater-img bg-orange-600 text-white">
                    <span>{profile?.firstName.charAt(0)}</span>
                  </div>
                  <Link to="/profile">
                    {profile?.firstName ? (
                      <span className="text-white ml-2">{`${profile?.firstName}  ${profile?.lastName}`}</span>
                    ) : (
                      <span className="text-white ml-2">John Doe</span>
                    )}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default TopBar;
