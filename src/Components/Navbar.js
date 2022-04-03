import React from "react";
import "./Navbar.css";
import "./SideBar.css";
import {
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsChatRight, BsSearch } from "react-icons/bs";
import { useState } from "react";
import {
  MdOutlineFeaturedPlayList,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import DarkMode from "./DarkMode";
import SideBar from "./SideBar";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const cm = active ? "main_menu active shadow " : " main_menu ";
  return (
    <div className="content">
      <nav className="navbar">
        <div className="navbar_contatiner">
          <div className="emojy">
            <ul className="nav_ul">
              <li className="nav_li">
                <AiOutlineCalendar className="icon_f" />
              </li>
              <li className="nav_li">
                <BsChatRight className="icon_f" />
              </li>
              <li className="nav_li">
                <AiOutlineMail className="icon_f" />
              </li>
              <li>
                <MdOutlineFeaturedPlayList className="icon_f" />
              </li>
              <li className="nav_li">
                <AiOutlineStar className="icon_f2" />
              </li>
            </ul>
          </div>
          <ul className="right_nav">
            <li className="nav_items">
              <span className="nav_link">
                <BiMenu
                  className="icon_f5"
                  onClick={() => setActive(!active)}
                />
              </span>
            </li>

            <li className="nav_items">
              <a
                className="nav_link"
                href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
              >
                <img
                  src={require("../images/USA.png")}
                  alt="USA_logo"
                  className="small_logo"
                />
                <span className="small_text">English</span>
              </a>
            </li>
            <li className="nav_items">
              <a className="nav_link">
                <DarkMode className="icon_f" />
              </a>
            </li>
            <li className="nav_items">
              <span className="nav_link">
                <BsSearch className="icon_f" />
              </span>
            </li>
            <li className="nav_items">
              <span className="nav_link">
                <AiOutlineShoppingCart className="icon_f" />
                <span className="counter1">5</span>
              </span>
            </li>
            <li className="nav_items">
              <span className="nav_link">
                <MdOutlineNotificationsNone className="icon_f" />
                <span className="counter2">6</span>
              </span>
            </li>
            <li className="nav_items">
              <span className="nav_sapn">
                <div className="user_name">
                  <p className="user_p">John Doe</p>
                  <span className="user_span">admin</span>
                </div>
                <span className="user_profile">
                  <span>
                    <img
                      src={require("../images/userPhoto.png")}
                      alt="USA_logo"
                      className="small_logo2"
                    />
                  </span>
                  <span className="online_logo" />
                </span>
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <SideBar clas={cm}></SideBar>
    </div>
  );
};

export default Navbar;
