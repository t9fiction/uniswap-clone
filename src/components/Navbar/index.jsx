"use client";
import React, { useContext, useEffect, useState } from "react";
import Style from "./Navbar.module.css";
import images from "./../../assests";
import { Model, TokenList } from "..";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ];
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          {/* Logo Image */}
          <div className={Style.NavBar_box_left_img}>
            <Image src={images.uniswap} width={50} height={50} alt="logo" />
          </div>
          {/* Eng Logo image */}

          {/* Menu Items */}
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
                key={i + 1}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
              // <div key={index}>
              //   <a href={item.link}>{item.name}</a>
              // </div>
            ))}
          </div>
        </div>
        {/* Middle Section */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} width={20} height={20} alt="search" />
            </div>
            {/* Input Section */}
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>
        {/* Right Section */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Image src={images.ether} width={30} height={30} alt="network" />
            </div>
            <p>Network Name</p>
          </div>
            <button className="" onClick={() => setOpenModel(true)}>
              Address
            </button>
          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect" />
          )}
        </div>
      </div>

      {/* Tokenlist Components */}
      {openTokenBox && (
        <TokenList setOpenTokenBox={setOpenTokenBox} tokenData="Hey" />
      )}
    </div>
  );
};

export default Navbar;
