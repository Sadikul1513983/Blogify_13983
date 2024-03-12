import first from "../svg/first.svg";
import second from "../svg/second.svg";
import third from "../svg/third.svg";
import fourth from "../svg/fourth.svg";
import fifth from "../svg/fifth.svg";
import lws from "../../assets/logo.svg";
import  "../styles/output.css";

const Footer = () => {
  return (
    <footer className="my-6 md:my-8 bg-[#030317]">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <img className="w-28" src={lws} alt="lws" />
        </a>
        <ul className="flex items-center space-x-5">
          <li className="text-center">
            <a
              className="text-white/50 hover:text-white transition-all duration-200"
              href="#"
            >
              <img src={first} alt="first" />
            </a>
          </li>
          <li className="text-center">
            <a
              className="text-white/50 hover:text-white transition-all duration-200"
              href="#"
            >
              <img src={second} alt="second" />
            </a>
          </li>
          <li className="text-center">
            <a
              className="text-white/50 hover:text-white transition-all duration-200"
              href="#"
            >
              <img src={third} alt="third" />
            </a>
          </li>
          <li className="text-center">
            <a
              className="text-white/50 hover:text-white transition-all duration-200"
              href="#"
            >
              <img src={fourth} alt="fourth" />
            </a>
          </li>
          <li className="text-center">
            <a
              className="text-white/50 hover:text-white transition-all duration-200"
              href="#"
            >
              <img src={fifth} alt="fifth" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
