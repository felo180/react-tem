import React from "react";
import {
  AiOutlineStar,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import products from "./store-demo-data2.json";
import { useState } from "react";
import "./Cards.css";
import "./SearchBar.css";

const Cards = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <div className="e_searchbar">
        <div className="row2">
          <div className="pader">
            <div className="search_row">
              <input
                placeholder="Search Procduct"
                className="search_product"
                onChange={(e) => setQuery(e.target.value)}
              />

              <div className="icon_flex">
                <BsSearch className="icon_f" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="grid_viwe">
        {products
          .filter((users) => users.name.toLowerCase().includes(query))
          .map((users) => {
            return (
              <div key={users.id} className="card">
                <div className="item_img">
                  <img src={users.img} alt="USA_logo" className="card_img" />
                </div>
                <div className="card_body">
                  <div className="item_wrapperr">
                    <div className="items_ratting">
                      <ul className="un_styled">
                        <li className="rating_item">
                          <AiFillStar className="n_rate" />
                        </li>
                        <li className="rating_item">
                          <AiFillStar className="n_rate" />
                        </li>
                        <li className="rating_item">
                          <AiFillStar className="n_rate" />
                        </li>
                        <li className="rating_item">
                          <AiFillStar className="n_rate" />
                        </li>
                        <li className="rating_item">
                          <AiOutlineStar className="b_rate" />
                        </li>
                      </ul>
                    </div>
                    <h6>{users.price}</h6>
                  </div>
                  <h6 className="item_name">
                    <a href="#0" className="text_body">
                      {users.name}
                    </a>
                  </h6>
                  <p className="item_description">{users.discription}</p>
                </div>
                <div className="items_option">
                  <a href="#0" className="l_btn">
                    <AiOutlineHeart className="a_icon" />
                    <span>WishList</span>
                  </a>
                  <a href="#0" className="d_btn">
                    <AiOutlineShoppingCart className="a_icon" />
                    <span>View In Cart</span>
                  </a>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Cards;
