import React, { useState } from "react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <p className="text-black">Sabir</p>
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
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            First Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Second Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Third Link
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Fourth Link
          </a>
        </div>
      </div>
    </nav>
  );
}
export default App;
