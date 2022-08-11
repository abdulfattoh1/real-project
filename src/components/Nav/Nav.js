import React from "react";
import logo from "../../images/logo.png";
import { BsSearch } from "react-icons/bs";
import { IoIosLogIn } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import './Nav.scss'

function Nav() {
  return (
    <nav className="nav">
      <div className="navbar">
        <div className="nav__header">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <ul className="nav__links">
          <li>
            <a href="#!" className="nav__links_href">
              Home
            </a>
          </li>
          <li>
            <a href="#!" className="nav__links_href">
              Shop
            </a>
          </li>
          <li>
            <a href="#!" className="nav__links_href">
              Plant Care
            </a>
          </li>
          <li>
            <a href="#!" className="nav__links_href">
              Blogs
            </a>
          </li>
        </ul>
        <div className="nav__icons">
          <button className="nav__icons_search">
            <BsSearch />
          </button>
          <button className="nav__icons_shop">
            <FiShoppingCart />
            <span>0</span>
          </button>
          <button className="nav__icons_login">
            <span className="nav__icons_log">
              <IoIosLogIn />
            </span>
            Login
          </button>
        </div>
      </div>
      <hr />
    </nav>
  );
}

export default Nav;
