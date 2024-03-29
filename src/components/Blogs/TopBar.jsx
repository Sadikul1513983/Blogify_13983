import { Link } from "react-router-dom"
import search from "../../assets/icons/search.svg"
import logo from "../../assets/logo.svg"

const TopBar = () => {
  return (
    <div>
         <header>
      <nav className="container">
        <div>
          <Link to="./index.html">
            <img className="w-32" src={logo} alt="lws" />
          </Link>
        </div>
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="./createBlog.html"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            <li>
              <Link to="./search.html" className="flex items-center gap-2 cursor-pointer">
                <img src={search} alt="Search" />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-white/50 hover:text-white transition-all duration-200"
              >
                Login
              </Link>
            </li>
            <li className="flex items-center">
              <div className="avater-img bg-orange-600 text-white">
                <span>S</span>
              </div>
              <Link to="/profile">
                <span className="text-white ml-2">Saad Hasan</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default TopBar