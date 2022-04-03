import React from "react";
import { useState } from "react";
import "./SideBar.css";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineEye,
  AiOutlinePlusCircle,
  AiFillPieChart,
  AiOutlineMenu,
  AiOutlineEyeInvisible,
  AiOutlineClose,
} from "react-icons/ai";
import { BsChatRight, BsCart, BsMap } from "react-icons/bs";
import {
  MdOutlineFeaturedPlayList,
  MdOutlineContactPage,
  MdSupport,
} from "react-icons/md";
import { FaFileInvoice, FaPenNib, FaElementor } from "react-icons/fa";
import { FiCreditCard, FiShield } from "react-icons/fi";
import { IoWaterOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { CgBox, CgViewComfortable, CgFileDocument } from "react-icons/cg";
import { ImPagebreak } from "react-icons/im";
import { SiHackthebox } from "react-icons/si";
import { GrValidate } from "react-icons/gr";
import { BiTable } from "react-icons/bi";
// <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/logo.svg"></img>
const SideBar = (props) => {
  const [open, setOpen] = useState(false);
  {
    /*
Fail Try to make Hide Button

 const [hide, sethide] = useState(false);
  const cd = props.clas;

  const ss = hide ? "hide" : "";
  const hideHandler = () => {
    sethide(!hide);
  };

*/
  }

  return (
    <div className={props.clas}>
      <div className="navbar_header shadow_bottom">
        <ul className="main_ul">
          <li className="li_logo">
            <a href="#0" className="link_ref">
              <span className="vuexy_logo">
                <img
                  src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/logo.svg"
                  alt="logo"
                  href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
                />
              </span>
              <h2 className="vuexy_text"> Vuexy</h2>
              {/*<AiOutlineClose onClick={hideHandler} className="men_icon" /> */}
            </a>
          </li>
          <li></li>
        </ul>
      </div>
      <ul className="main_ul_contatiner">
        <ul className="navigator">
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <AiOutlineHome className="icon_f" />
              <span className="text_trunc">Dashbords</span>
              <span className="nums">2</span>
            </a>
          </li>
          <li className="nav_header text_trunc">
            <span className="spa_header">App & pages</span>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <AiOutlineMail className="icon_f" />
              <span className="text_trunc">Email</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <BsChatRight className="icon_f" />
              <span className="text_trunc">Chat</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <MdOutlineFeaturedPlayList className="icon_f" />
              <span className="text_trunc">Todo</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <AiOutlineCalendar className="icon_f" />
              <span className="text_trunc">calendar</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <FaFileInvoice className="icon_f" />
              <span className="text_trunc">Invoice</span>
            </a>
          </li>
          <li className={open ? "nav_item2 open" : "nav_item2"}>
            <a href="#0" onClick={() => setOpen(!open)} className="dis_flex ">
              <BsCart className="icon_f" />
              <span className="text_trunc">eCommerce</span>
              <IoIosArrowForward className="icon_fu" />
            </a>
            <a href="#0" className="sidebar_content">
              Shop
            </a>
            <a href="#0" className="sidebar_content">
              Details
            </a>
            <a href="#0" className="sidebar_content">
              Wishlist
            </a>
            <a href="#0" className="sidebar_content">
              Checkout
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <AiOutlineUser className="icon_f" />
              <span className="text_trunc">User</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <MdOutlineContactPage className="icon_f" />
              <span className="text_trunc">Pages</span>
            </a>
          </li>
          <li className="nav_header text_trunc">
            <span className="spa_header">USER INTERFACE</span>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <FaPenNib className="icon_f" />
              <span className="text_trunc">Typrography</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <IoWaterOutline className="icon_f" />
              <span className="text_trunc">Colors</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <AiOutlineEye className="icon_f" />
              <span className="text_trunc">Feather</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <FiCreditCard className="icon_f" />
              <span className="text_trunc">Cards</span>
              <span className="nums2">new</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <CgBox className="icon_f" />
              <span className="text_trunc">Components</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <AiOutlinePlusCircle className="icon_f" />
              <span className="text_trunc">Extensions</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <ImPagebreak className="icon_f" />
              <span className="text_trunc">Pagelayout</span>
            </a>
          </li>
          <li className="nav_header text_trunc">
            <span className="spa_header">FORMS & TABLES</span>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <FaElementor className="icon_f" />
              <span className="text_trunc">Forms elements</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <FaElementor className="icon_f" />
              <span className="text_trunc">Form Layout</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <SiHackthebox className="icon_f" />
              <span className="text_trunc">Form Wizard</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <GrValidate className="icon_f" />
              <span className="text_trunc">Form Validation</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <FaElementor className="icon_f" />
              <span className="text_trunc">Form Repeater</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <CgViewComfortable className="icon_f" />
              <span className="text_trunc">BS Table</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <BiTable className="icon_f" />
              <span className="text_trunc">Good Table</span>
            </a>
          </li>
          <li className="nav_header text_trunc">
            <span className="spa_header">CHARTS & MAPS</span>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <AiFillPieChart className="icon_f" />
              <span className="text_trunc">Charts</span>
              <span className="nums3">3</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <BsMap className="icon_f" />
              <span className="text_trunc">Leaflet</span>
            </a>
          </li>
          <li className="nav_header text_trunc">
            <span className="spa_header">OTHERS</span>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <FiShield className="icon_f" />
              <span className="text_trunc">Access Control</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <AiOutlineMenu className="icon_f" />
              <span className="text_trunc">Menu Level</span>
            </a>
          </li>
          <li className="nav_item disable_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <AiOutlineEyeInvisible className="icon_f" />
              <span className="text_trunc">Disabled Menu</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <MdSupport className="icon_f" />
              <span className="text_trunc">Raise Support</span>
            </a>
          </li>
          <li className="nav_item">
            <a
              className="dis_flex "
              href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
            >
              <CgFileDocument className="icon_f" />
              <span className="text_trunc">Documentation</span>
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default SideBar;
