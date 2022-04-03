import React from "react";
import ContentBody from "./ContentBody";
import { BiHomeAlt } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { VscGear } from "react-icons/vsc";
import "./AppContent.css";
import menu from "./store-demo-data2.json";
import { useState } from "react";

const AppContent = () => {
  {
    /* const [items, setItems] = useState(menu);
  const filteredCate = (cateItem) => {
    const updatedItems = menu.filter((cueElem) => {
      return cueElem.brand === cateItem;
    });
    setItems(updatedItems);*/
  }
  return (
    <div className="app_content">
      <div className="content_wrapper">
        <div className="row">
          <div className="content_header">
            <div className="bread">
              <h2 className="content_header_title">Shop</h2>
              <ol className="breadcrumb">
                <li className="breadcrumb_item">
                  <BiHomeAlt className="icon_f3" />
                </li>
                <li className="breadcrumb_item">
                  <IoIosArrowForward className="icon_fu" />
                  <a
                    className="mn_head"
                    href="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/apps/e-commerce/shop"
                  >
                    ECommerce
                  </a>
                </li>
                <li className="breadcrumb_item">
                  <IoIosArrowForward className="icon_fn" />
                  <span className="gary_span">Shop</span>
                </li>
              </ol>
            </div>
            <div className="right_row">
              <span className="per_span">
                <VscGear />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebard_left">
        <div className="side">
          <div className="sidebar_shop">
            <div className="fl">
              <h6 className="fil">Filter</h6>
            </div>
            <div className="card2">
              <div className="card_body">
                <div className="multi_range">
                  <h6 className="side_h6">Multi Range</h6>
                  <div className="radio_group">
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>All</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label> = $10</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>$10 - $100</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>$100 - $500</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>= $500</label>
                    </div>
                  </div>
                </div>
                <div className="price_slider">
                  <h6 className="side_h6">Price Range</h6>
                  <input type="range" id="vol" name="vol" min="0" max="100" />
                </div>
                <div className="pro_cat">
                  <h6 className="side_h6">Categoris</h6>
                  <div className="radio_group">
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Appliances</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label> Audio</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Cameras & Camcorders</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Car Electronics & GPS</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label> Cell Phones</label>
                    </div>
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Computers & Tablets</label>
                    </div>
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Health, Fitness & Beauty</label>
                    </div>
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Office & School Supplies</label>
                    </div>
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>TV & Home Theater</label>
                    </div>
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Video Games</label>
                    </div>
                  </div>
                </div>
                <div className="prands">
                  <h6 className="side_h6">Brands</h6>
                  <div className="radio_group">
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Philips</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Samsung</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Vankyo Store</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>google</label>
                    </div>

                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Apple</label>
                    </div>
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>GE</label>
                    </div>
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Sony</label>
                    </div>
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Toshiba</label>
                    </div>
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>KitchenAid</label>
                    </div>
                    <div className="custome_radio">
                      <input type="radio" className="radio_input" />
                      <label>Whirlpool</label>
                    </div>
                  </div>
                </div>
                <div className="rates"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContentBody />
      {/*{items.map((menu) => {
        return ;
      })}*/}
    </div>
  );
};

export default AppContent;
