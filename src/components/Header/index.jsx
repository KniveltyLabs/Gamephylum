import React, { useState, useEffect,useCallbackState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, Dropdown, Space, Drawer } from "antd";
import { GlobalOutlined, BarsOutlined } from "@ant-design/icons";
import logo from "../../assets/img/logo.png";
import arrow from "../../assets/img/header/arrow.png";

import "./header.less";
const { SubMenu } = Menu;
const Header = ({ props }) => {
  const { t, i18n } = useTranslation();
  const [languageType, setLanguageType] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const [menu1, setMenu] = useState([
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
  const languageChange = (
    <Menu>
      <Menu.Item
        key="en"
        onClick={() => {
          setLang("en");
        }}
      >
        <div>{t("EN")}</div>
      </Menu.Item>
      <Menu.Item
        key="cn"
        onClick={() => {
          setLang("cn");
        }}
      >
        <div>{t("CN")}</div>
      </Menu.Item>
    </Menu>
  );
  // activeMenu
  const [activeMenu, setActiveMenu] = useState(props.location.pathname);
  // activeMenuPrefix
  const [activeMenuPrefix, setActiveMenuPrefix] = useState("");

  useEffect(() => {
    setActiveMenu(props.location.pathname);
    setLanguageTitle();
    if (props.location.pathname.indexOf("/data") == 0) {
      setActiveMenuPrefix("/data");
    }
    if (props.location.pathname.indexOf("/research") == 0) {
      setActiveMenuPrefix("/research");
    }
  }, [props.location.pathname,languageType]);
  const setLanguageTitle = () => {
    let newMenu = [
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
    ];
    setMenu(newMenu);
  };
  const setLang = (key) => {
    setLanguageType(key);
    i18n.changeLanguage(key);
    localStorage.setItem("lang", key);
  };
  const setLink = (key) => {
    setActiveMenu(key);
    if (key.indexOf("/data") == 0) {
      setActiveMenuPrefix("/data");
    } else if (key.indexOf("/research") == 0) {
      setActiveMenuPrefix("/research");
    } else {
      setActiveMenuPrefix("");
    }
  };
  const showDrawerFn = () => {
    setShowDrawer(true);
  };

  const onClose = () => {
    setShowDrawer(false);
  };
  const handleClick = ({ key }) => {
    props.history.push(key);
    setLink(key);
    onClose();
  };
  return (
    <div className="header">
      <div className="header_con">
        <div className="logo">
          <img  src={logo} alt="" />
        </div>
        <div className="menu">
          {menu1.map((item) => {
            return !item.children ? (
              <div
                key={item.id}
                className={
                  activeMenu === item.key
                    ? "menu_item pc_menu menu_item_active"
                    : "menu_item pc_menu"
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
                    ? "menu_item pc_menu menu_item_active"
                    : "menu_item pc_menu"
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
          <div className="menu_item" style={{display:"none"}}>
            <Dropdown overlay={languageChange} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <GlobalOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="menu_item mob_menu">
            <BarsOutlined onClick={showDrawerFn} />
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={showDrawer}
        width={200}
      >
        <Menu
          onClick={handleClick}
          style={{ width: "100%" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          {menu1.map((item) => {
            return !item.children ? (
              <Menu.Item key={item.key}>
                <span>{item.title}</span>
              </Menu.Item>
            ) : (
              <SubMenu
                key={item.id}
                title={
                  <span>
                    <span>{item.title}</span>
                  </span>
                }
              >
                <Menu.ItemGroup>
                  {item.children.map((n) => {
                    return <Menu.Item key={n.key}>{n.title}</Menu.Item>;
                  })}
                </Menu.ItemGroup>
              </SubMenu>
            );
          })}
        </Menu>
      </Drawer>
    </div>
  );
};
export default Header;
