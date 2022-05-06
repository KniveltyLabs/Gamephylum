import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Box from "../../components/Box";
import Footer from "../../components/Footer";

import mv from "../../assets/img/home/mv.webp";
import data1 from "../../assets/img/home/data1.png";
import data2 from "../../assets/img/home/data2.png";
import data3 from "../../assets/img/home/data3.png";

import "./home.less";
const Home = (props) => {
  const { t } = useTranslation();
  // research列表
  const [researchList, setResearchList] = useState([
    {
      id: 0,
      url: mv,
      title: "StarShark will listed on Binance",
      content:
        "StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon",
    },
    {
      id: 1,
      url: mv,
      title: "StarShark will listed on Binance",
      content:
        "StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon dajksdbk asdnaknd",
    },
    {
      id: 2,
      url: mv,
      title: "StarShark will listed on Binance",
      content:
        "StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon",
    },
  ]);
  // raiders 列表
  const [raidersList, setRaidersList] = useState([
    {
      id: 0,
      url: mv,
      title: "StarShark will listed on Binance",
      content:
        "StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon",
    },
    {
      id: 1,
      url: mv,
      title: "StarShark will listed on Binance",
      content:
        "StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon dajksdbk asdnaknd",
    },
    {
      id: 2,
      url: mv,
      title: "StarShark will listed on Binance",
      content:
        "StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon,StarShark to the moon",
    },
  ]);

  // tab数据
  const [tabList, setTabList] = useState([
    {
      id: 0,
      title: t("Discover the hot game"),
      content: t("Discover popular games"),
      viewLink: "https://www.baidu.com/",
      url: data1,
    },
    {
      id: 1,
      title: t("Learn about payback periods andyields for specific games"),
      content: t("Check the payback period"),
      viewLink: "https://www.baidu.com/",
      url: data2,
    },
    {
      id: 2,
      title: t("Track game data andmake the right investment decisions"),
      content: t("View the data charts"),
      viewLink: "https://www.baidu.com/",
      url: data3,
    },
  ]);
  // tab选中的数据
  const [tabActive, setTabActive] = useState(tabList[0]);
  useEffect(() => {}, []);
  const tabMouseEnter = (item) => {
    setTabActive(item);
  };
  const setView = (link) => {};
  return (
    <div className="home">
      <div className="banner">
        <div className="banner_con">
          <h1>{t("Open The GamePhylum")}</h1>
          <p>{t("Know Everything About GameFi")}</p>
        </div>
      </div>
      <div className="research">
        <h3>{t("Latest GameFi Research")}</h3>
        <div className="research_con">
          {researchList.map((item) => {
            return <Box {...item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="raiders">
        <h3>{t("Latest GameFi Raiders")}</h3>
        <div className="raiders_con">
          {raidersList.map((item) => {
            return <Box {...item} key={item.id} />;
          })}
        </div>
      </div>
      <div className="tab">
        <div className="tab_left">
          {tabList.map((item) => {
            return (
              <div
                key={item.id}
                className="tab_item"
                onMouseEnter={() => tabMouseEnter(item)}
              >
                <h3 className="title">{item.title}</h3>
                <p className="content">{item.content}</p>
                <Link className="view" to={item.viewLink}>
                  {t("View")}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="tab_right">
          <img src={tabActive.url} alt="" />
        </div>
      </div>
      <Footer props={props} />
    </div>
  );
};
export default Home;
