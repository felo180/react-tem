import React from "react";
import Cards from "./Cards";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./ContentBody.css";

const ContentBody = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="content_body">
      <section>
        <div className="row">
          <div className="colsm">
            <div className="ecom_header_item">
              <div className="res">27 Result Found</div>
              <div className="view_option">
                <li className={open ? "nav_item3 open" : "nav_item3"}>
                  <a
                    href="#0"
                    onClick={() => setOpen(!open)}
                    className="dis_flex "
                  >
                    <span className="text_trunc2">eCommerce</span>
                    <IoIosArrowForward className="icon_fu3" />
                  </a>
                  <a href="#0" className="sidebar_content2">
                    Featured
                  </a>
                  <a href="#0" className="sidebar_content2">
                    Lowest
                  </a>
                  <a href="#0" className="sidebar_content2">
                    Higest
                  </a>
                </li>

                {/*<div className="leftside">
                  <div className="radio_item">
                    <div className="licon">
                      <MdCalendarViewMonth className="icon_fu3" />
                    </div>
                    <div className="ricon">
                      <FiMenu className="icon_fu3" />
                    </div>
                  </div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cards />
    </div>
  );
};

export default ContentBody;
