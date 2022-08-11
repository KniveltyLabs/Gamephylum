import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Box from "../../components/Box";
import Footer from "../../components/Footer";
import axios from "axios";
import mv from "../../assets/img/home/mv.webp";
import data1 from "../../assets/img/home/data1.png";
import data2 from "../../assets/img/home/data2.png";
import data3 from "../../assets/img/home/data3.png";
import { getArticleList, getArticleCategory,text1 } from "../../axios/api";
import "./home.less";
const Home = (props) => {
  const { t } = useTranslation();
  const [researchList, setResearchList] = useState([]);
  const [raidersList, setRaidersList] = useState([]);
  const [tabList, setTabList] = useState([
    {
      id: 0,
      title: t("Discover the Popular game"),
      content: t("Discover popular games"),
      viewLink: "/data/gameassetscreener",
      url: data1,
    },
    {
      id: 1,
      title: t("Learn about payback periods andyields for specific games"),
      content: t("Check the payback period"),
      viewLink: "/data/gamechartexplore/period/stepN",
      url: data2,
    },
    {
      id: 2,
      title: t("Track game data andmake the right investment decisions"),
      content: t("View the data charts"),
      viewLink: "/data/gamechartexplore/dashboard/1",
      url: data3,
    },
  ]);
  const [tabActive, setTabActive] = useState(tabList[0]);
  useMemo(() => {
    getArticleCategory().then(async (res) => {
      let num = 0;
      for (var i in res) {
        if  (num<2){
         await getArticleList({ category_id: res[i].id, page: 1 }).then((res) => {
            if (res.total > 0) {
              console.log(num)
              if(num===0)setResearchList(res.data.slice(0, 3));
              if(num===1)setRaidersList(res.data.slice(0, 3));
              num++
            }
          });
        }
      }
    });
  }, []);
  useEffect(() => {
    // text1({contractName:"BASToken"})
    
  }, []);
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
            return <Box {...item} key={item.id} history={props.history} />;
          })}
        </div>
      </div>
      <div className="raiders">
        <h3>{t("Latest GameFi Raiders")}</h3>
        <div className="raiders_con">
          {raidersList.map((item) => {
            return <Box {...item} key={item.id} history={props.history} />;
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
