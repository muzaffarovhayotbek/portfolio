import React, { useState, useEffect, useRef } from "react";
import left from "../assets/left.svg";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
function MainLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 pt-2 pb-2 bg-[#1B1B1B] sm:pt-1.5 sm:pb-1.5 sm:pr-2">
        {/* <LeftBar></LeftBar> */}
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-2 p-1.5">
            <Link
              to="/"
              className="text-[22px] text-white leading-7 sm:text-[18px]"
              onClick={closeMenu}
            >
              HAYOTBEK.<span className="text-[#39965F]">UZ</span>
            </Link>
          </div>

          <div className="flex items-center gap-6 sm:gap-2">
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-[#39965F] text-white"
              >
                Bosh sahifa
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-[#39965F] text-white"
              >
                Haqida
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-[#39965F] text-white"
              >
                Bog'lanish
              </a>
              <a
                href="#projects"
                onClick={closeMenu}
                className="hover:text-[#39965F] text-white"
              >
                Loyihalar
              </a>
            </nav>

            <a
              href="https://github.com/muzaffarovhayotbek"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block hover:opacity-80 transition-all"
            >
              <img src={github} alt="GitHub" width={30} />
            </a>

            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Yopish" : "Ochish"}
              className="block md:hidden p-1"
            >
              {isMenuOpen ? (
                <IoMdClose className="w-8 h-8 text-white" />
              ) : (
                <img src={left} alt="Menu" className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute left-0 top-12 bg-[#1B1B1B] w-full shadow-lg z-50 border-t border-gray-700"
          >
            <ul className="flex flex-col p-4 gap-4 text-white sm:text-[16px]">
              <li>
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="flex items-center gap-2 hover:text-[#39965F] text-white"
                >
                  <FaHome className="w-5 h-5" />
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="flex items-center gap-2 hover:text-[#39965F] text-white"
                >
                  <FcAbout className="w-5 h-5" />
                  Haqida
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex items-center gap-2 hover:text-[#39965F] text-white"
                >
                  <MdContacts className="w-5 h-5" />
                  Bog'lanish
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="flex items-center gap-2 hover:text-[#39965F] text-white"
                >
                  <GrProjects className="w-5 h-5" />
                  Loyihalar
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-[#1B1B1B] text-white text-center py-2 sm:py-1">
        <h2 className="text-[22px] sm:text-[18px]">HAYOTBEK.UZ</h2>
      </footer>
    </div>
  );
}

export default MainLayout;
