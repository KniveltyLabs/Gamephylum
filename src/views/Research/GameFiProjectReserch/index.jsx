import React, { useState, useEffect, useMemo, useRef } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, Empty, Select } from "antd";
import Box from "../../../components/Box";
import { getArticleCategory, getArticleList } from "../../../axios/api";
import "./gamefiprojectreserch.less";
const { Option, OptGroup } = Select;
const { SubMenu } = Menu;
const GameFiProjectReserch = (props) => {
  const { t } = useTranslation();
  const dom = useRef();
  const [menu, setMenu] = useState([]);
  const [activeRouter, setActiveRouter] = useState("");
  const [openKeys, setOpenKeys] = useState(["1"]);
  const [researchList, setResearchList] = useState([]);
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useMemo(() => {
    getArticleCategory().then((res) => {
      let arr = [];
      for (var i in res) {
        arr.push(res[i]);
      }
      console.log(arr);
      setMenu([...arr]);
    });
  }, []);
  useEffect(() => {}, [props.location.pathname]);
  const getPage = (key) => {
    console.log(key);
    setActiveRouter(key + "");
    getList(key);
  };
  const handleOnScroll = () => {
    if (dom) {
      const contentScrollTop = dom.current.scrollTop; 
      const clientHeight = dom.current.clientHeight; 
      const scrollHeight = dom.current.scrollHeight; 
      if (contentScrollTop + clientHeight >= scrollHeight) {
        if (isLoading) return;
        if (pageData.current_page < pageData.last_page) {
          let page = pageData.current_page * 1 + 1;
          getList(activeRouter, page);
          setIsLoading(true);
        }
      }
    }
  };
  const onOpenChange = (openKeys) => {
    setOpenKeys([...openKeys]);
  };
  const getList = (id, page = 1) => {
    if (isLoading) return;
    getArticleList({ category_id: id, page: page }).then((res) => {
      if (res.total > 0) {
        if(page === 1){
          setResearchList([ ...res.data]);
        }else{
          setResearchList([...researchList, ...res.data]);
        }
        
        setPageData({
          current_page: res.current_page,
          last_page: res.last_page,
          total: res.total,
        });
        setIsLoading(false);
      } else if (page === 1) {
        setResearchList([]);
      }
    });
  };
  const handleChange = (value) => {
    setActiveRouter(value + "");
    getList(value);
  };
  return (
    <div className="gamechartexplore">
      <div className="menu">
        <Menu
          theme="dark"
          openKeys={openKeys}
          selectedKeys={activeRouter}
          onOpenChange={onOpenChange}
          mode="inline"
          className="game_menu"
        >
          {menu.map((item) => {
            return (
              <SubMenu key={item.id} title={item.name}>
                {item.category.map((ind) => {
                  return (
                    <Menu.Item key={ind.id} onClick={() => getPage(ind.id)}>
                      {ind.name}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
        <div className="menu_xian"></div>
      </div>
      <div className="children">
        <div style={{display:activeRouter?"none":"block"}}>
        <div className="project_title">{t("Search The Project")}</div>
        <div className="selecr_box">
          <div>{t("Select The Project Name")}</div>
        <Select
          style={{ width: "100%",marginTop:".2rem",backgroundColor:"#0E2133" }}
          onChange={handleChange}
          placeholder="Project Name"
        >
          {menu.map((item) => {
            return (
              <OptGroup key={item.name} title={item.name}>
                {item.category.map((ind) => {
                  return (
                    <Option key={ind.id} value={ind.id}>{ind.name}</Option>
                  );
                })}
              
            </OptGroup>
            );
          })}
          
        </Select>
        </div>
        
        </div>
        <div
          className="project_box"
          style={{display:activeRouter?"block":"none"}}
          ref={dom}
          onScrollCapture={() => handleOnScroll()}
        >
          <div className="research">
            <div className="research_con">
              {researchList.length > 0 ? (
                researchList.map((item) => {
                  return (
                    <Box {...item} key={item.id} history={props.history} />
                  );
                })
              ) : (
                <div className="flex flex_center flex_box">
                  <Empty />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GameFiProjectReserch;
