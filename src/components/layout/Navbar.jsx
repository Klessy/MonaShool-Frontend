"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
// import MonaSchoolLogo from "../../assets/mona-logos.png";
import { navLink } from "../../data/data";

import "../styles/navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  // const [openDropdown, setOpenDropdown] = useState(null);

  const pathname = usePathname();

const dropdownRef = useRef();

  const handleClick = () => {
    setIsActive(true);
  };

useEffect(() => {
  const handler = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setLoginOpen(false);
    }
  };

  document.addEventListener("mousedown", handler);
  return () => document.removeEventListener("mousedown", handler);
}, []);

  return (
    <nav>

      <div>
        {/*================== Topbar Start ====================== */}
        <div className="topbar">
          <div className="topbar__address">
            <Link href="/contact#school-map" className="text-black mr-4">
              <i className="fas fa-map-marker-alt text-primary mr-2"></i>Find 
              Location
            </Link>
            <a href="tel: +2348103783162" className="text-black mr-4">
              <i className="fas fa-phone-alt text-primary mr-2"></i>
              +2349036422329
            </a>
            <a
              href="mailto: info@monaschool.com"
              className="text-black mr-4"
            >
              <i className="fas fa-envelope text-primary mr-2"></i>
              info@monaschool.ng
            </a>
          </div>
          <div className="topbar__social">
            <a
              href="#"
              className="btn btn-light btn-square border rounded-circle nav-fill me-3"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="btn btn-light btn-square border rounded-circle nav-fill me-3"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="btn btn-light btn-square border rounded-circle nav-fill me-3"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="btn btn-light btn-square border rounded-circle nav-fill me-0"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        {/*=================== Topbar End ========================*/}

      </div>
      <div className="nav__container">
        <div className="navbar__img">
          <Link
            href="/"
            onClick={() => window.scrollTo(0, 0)}
            className="thinktech-img"
          >
            <Image
              src="/mona-logos.png"
              alt="Mona School"
              width={200}
              height={60}
              className="thinktech-logo"
              
            />
          </Link>
        </div>
        <ul className="navbar__links">
          {navLink.map((links, index) => {
            const { id, name, path, } = links;
             const isActive = 
              path === "/"
              ? pathname === "/"
              : pathname.startsWith(path);
      
            // Normal Link
            return (
              <li key={id}>
                <Link
                  href={path}
                  className={`navbar-link
                  ${
                    isActive
                      ? "active-nav"
                      : ""
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
  <li className="login-dropdown">
  <span onClick={() => setLoginOpen(!loginOpen)} className="login-desktop">
    Login
  </span>

  {loginOpen && (
    <div className="dropdown" ref={dropdownRef}>
      
      <button
        className="close-dropdown"
        onClick={() => setLoginOpen(false)}
      >
        <MdOutlineClose />
      </button>

      <a href="https://portal.monaschool.ng/site/userlogin" onClick={() => setLoginOpen(false)}>
        Student
      </a>

      <a href="https://portal.monaschool.ng/site/login" onClick={() => setLoginOpen(false)}>
        Staff
      </a>

      <a href="https://portal.monaschool.ng/site/userlogin" onClick={() => setLoginOpen(false)}>
        Parents
      </a>

    </div>
  )}
</li>
          {/* <button className="nav__toggle-btn" onClick={ ()=> setIsNavShowing(prev => !prev)}>
        {
          isNavShowing ? <GiHamburgerMenu /> : <MdOutlineClose/>
        }
      </button> */}

          {/* MOBILE VIEW */}
          
          <div className="mobile-socials">
            <a href="tel: +2348076646400" className="mobile-item mr-2">
              <i className="fas fa-phone-alt mobile_icon text-black"></i>
            </a>
            <a
              href="mailto: info@monaschool.ng"
              className="mobile-item mr-2"
            >
              <i className="fas fa-envelope mobile_icon text-black"></i>
            </a>
          <button
            className="mobile-item"
            onClick={() => setIsNavShowing((prev) => !prev)}
          >
            <GiHamburgerMenu className="spin__right" />
          </button>
          </div>



        </ul>
      </div>
      <div className="mobile__navbar">
        <ul
          className={`mobile__links ${
            isNavShowing ? "show__nav" : "hide__nav"
          }`}
        >
          {navLink.map((links) => {
            const { id, name, path } = links;
            return (
              <li key={id}>
                <Link
                  href={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </Link>
              </li>
            );
          })}
          <button
            onClick={() => setIsNavShowing((prev) => !prev)}
            className="mobile-navbar__close"
          >
            <MdOutlineClose className="spin__left" />
          </button>

<li className={`login-dropdown ${loginOpen ? "open" : ""}`}>
  <div className="login-header"
  onClick={() => setLoginOpen(prev => !prev)}
  >
    <span className="mobile_login">Login</span>

    {/* MOBILE DROPDOWN TOGGLE */}
    <span
      // className="dropdown-toggle"
      onClick={() => setLoginOpen(!loginOpen)}
      className={`dropdown-toggle ${loginOpen ? "open" : ""}`}
    >
      {/* {loginOpen ? "▲" : "▼"} */}
      ▼
    </span>
  </div>

  {/* {loginOpen && ( */}
    <div className="dropdown">
      <button
        className="close-dropdown"
        onClick={() => setLoginOpen(false)}
      >
        <MdOutlineClose />
      </button>

      <a href="https://portal.monaschool.ng/site/userlogin" onClick={() => setLoginOpen(false)}>
        Student
      </a>

      <a href="https://portal.monaschool.ng/site/login" onClick={() => setLoginOpen(false)}>
        Staff
      </a>

      <a href="https://portal.monaschool.ng/site/userlogin" onClick={() => setLoginOpen(false)}>
        Parent
      </a>
    </div>
  {/* )} */}
</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
