import { useRef, useState } from "react";
import logo from "../../assets/logo.svg";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Projects", href: "#Projects", current: false },
  { name: "Tech", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
const url = "#";
const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const onClick = () => setMenuActive(!isMenuActive);
  return (
    <div className="fixed w-full flex justify-between px-6 md:py-8 md:px-16 2xl:px-36 py-6 lg:py-12 items-center bg-black z-10">
      <a href={url}>
        <img src={logo} alt=""></img>
      </a>
      <button onClick={onClick} className={`relative group is md:hidden ${
          isMenuActive ? "active" : "inactive"
        }`}>
        <div className="relative flex overflow-hidden items-center justify-center w-[20px] h-[20px] transform transition-all duration-200 ">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-[.active]:translate-y-6 delay-100"></div>
            <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-[.active]:translate-y-6 delay-75"></div>
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-[.active]:translate-y-6"></div>
            <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-[.active]:translate-x-0 flex w-0 group-[.active]:w-12">
              <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-[.active]:rotate-45"></div>
              <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-[.active]:-rotate-45"></div>
            </div>
          </div>
        </div>
      </button>
      <nav        
        className={`menu ${
          isMenuActive ? "active" : "inactive"
        } absolute flex [&.active]:translate-y-0 transition-all duration-500 max-md:translate-y-full max-md:top-[73px] max-md:left-0 max-md:h-[calc(100vh-73px)] md:relative max-md:w-full group z-10`}
      >
        <ul className="max-md:gap-y-14 gap-x-12 text-2xl text-white  max-md:w-full  max-md:py-12 max-md:h-full max-md:px-6 max-md:flex-col max-md:text-center max-md:bg-black flex">
          {navigation.map((item, index) => (
            <li key={index} className="max-md:text-[22px] leading-[26px]">
              <a
                className="hover:border-white border-b-2 border-transparent transition-colors pb-1"
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
