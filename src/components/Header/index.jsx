import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/img/logo.png";
import arrow from "../../assets/img/header/arrow.png";

import "./header.less";
const Header = ({ props }) => {
  const { t } = useTranslation();
  // 菜单
  const [menu] = useState([
    {
      id: 0,
      key: "/home",
      title: t("Home"),
    },
    {
      id: 1,
      title: t("Data"),
      key: "/data",
      children: [
        {
          id: 10,
          key: "/data/gameassetscreener",
          title: t("Game Asset Screener"),
        },
        {
          id: 11,
          key: "/data/gamewatchlist",
          title: t("Game Watch List"),
        },
        {
          id: 12,
          key: "/data/gamechartexplore",
          title: t("Game Chart Explore"),
        },
      ],
    },
    {
      id: 2,
      title: "Research",
      key: "/research",
      children: [
        {
          id: 20,
          key: "/research/gamefiprojectreserch",
          title: t("GameFi Project Reserch"),
        },
        {
          id: 21,
          key: "/research/gamefimacroresearch",
          title: t("GameFi Macro Research"),
        },
      ],
    },
    {
      id: 3,
      key: "/news",
      title: t("News"),
    },
    {
      id: 4,
      key: "/dao",
      title: t("Dao"),
    },
  ]);
  // 选中的菜单
  const [activeMenu, setActiveMenu] = useState(props.location.pathname);
  // 选中的菜单前缀
  const [activeMenuPrefix, setActiveMenuPrefix] = useState("");

  useEffect(() => {
    setActiveMenu(props.location.pathname);
    if (props.location.pathname.indexOf("/data") == 0) {
      setActiveMenuPrefix("/data");
    }
    if (props.location.pathname.indexOf("/research") == 0) {
      setActiveMenuPrefix("/research");
    }
  }, [props.location.pathname]);
  // 设置语言翻译
  // const setLang = (key) => {
  //   i18n.changeLanguage(key);
  //   localStorage.setItem("lang", key);
  // };
  const setLink = (key) => {
    setActiveMenu(key);
  };

  return (
    <div className="header">
      <div className="header_con">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          {menu.map((item) => {
            return !item.children ? (
              <div
                key={item.id}
                className={
                  activeMenu === item.key
                    ? "menu_item menu_item_active"
                    : "menu_item"
                }
                onClick={() => setLink(item.key)}
              >
                <Link to={item.key}>
                  <span className="item_title">{item.title}</span>
                  <div className="xian"></div>
                </Link>
              </div>
            ) : (
              <div
                key={item.id}
                className={
                  activeMenuPrefix === item.key
                    ? "menu_item menu_item_active"
                    : "menu_item"
                }
              >
                <div className="menu_item_one">
                  <span className="menu_item_title">{item.title}</span>
                  <span className="menu_item_arrow">
                    <img src={arrow} alt="" />
                  </span>
                </div>
                <div className="xian"></div>
                <div className="menu_item_children">
                  {item.children.map((n) => {
                    return (
                      <Link
                        to={n.key}
                        key={n.key}
                        onClick={() => setLink(n.key)}
                        className={
                          activeMenu === n.key
                            ? "menu_item_children_active"
                            : ""
                        }
                      >
                        <span className="item_title">{n.title}</span>
                        {/* <span className="xian"></span> */}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Header;
