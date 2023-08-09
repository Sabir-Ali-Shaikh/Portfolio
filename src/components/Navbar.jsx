import React, { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    {
      to: "home",
      navName: "Home",
    },
    {
      to: "about",
      navName: "About Me",
    },
    {
      to: "skills",
      navName: "Skills",
    },
    {
      to: "work",
      navName: "Project",
    },

    {
      to: "contact",
      navName: "Contact",
    },
  ];
  return (
    <>
      <nav className="flex items-center justify-between  text-white bg-[#000000] flex-wrap p-6 sticky top-0  border-b border-gray-200 z-10 backdrop-filter backdrop-blur-lg ">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
          <p>Sabir</p>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <GiHamburgerMenu
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            />
            <GiCancel
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            />
          </button>
        </div>

        <div
          className={`w-full block lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm ">
            {navigationLinks.map((val) => {
              return (
                <Link
                  to={val.to}
                  className="block mt-4 cursor-pointer lg:inline-block lg:mt-0 text-white-200 mr-4"
                  smooth={true}
                  duration={500}
                >
                  {val.navName}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
      <div className=" hidden md:flex fixed top-[35%] flex-col left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-8rem] hover:ml-[0rem] duration-300 bg-blue-600">
            <a
              className="flex justify-between mr-1 items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sabiralishaikh007/"
              target="_"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px]  flex justify-between items-center ml-[-8rem] hover:ml-[0rem] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between mr-1 items-center w-full text-gray-300"
              href="https://github.com/Sabir-Ali-Shaikh"
              target="_"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-8rem] hover:ml-[0rem] duration-300 bg-[#333333]">
            <a
              className="flex justify-between mr-1 items-center w-full text-gray-300"
              href="mailto:sa80651@gmail.com"
              target="_"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
