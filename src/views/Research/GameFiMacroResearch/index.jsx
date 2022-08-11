import React, { useState, useEffect, useRef } from "react";
import Box from "../../../components/Box";
import { useTranslation } from "react-i18next";
import "./gamefimacroresearch.less";
import mv from "../../../assets/img/home/mv.webp";
import { getMacroLists } from "../../../axios/api";
const GameFiMacroResearch = (props) => {
  const { t } = useTranslation();
  const dom = useRef(); //监听需要监听滚动条的dom
  const [researchList, setResearchList] = useState([]);
  const [pageData, setPageData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getList();
  }, []);
  //监听dom滚动条
  const handleOnScroll = () => {
    if (dom) {
      const contentScrollTop = dom.current.scrollTop;
      const clientHeight = dom.current.clientHeight; 
      const scrollHeight = dom.current.scrollHeight; 
      if (contentScrollTop + clientHeight >= scrollHeight) {
        if (isLoading) return;
        if (pageData.current_page < pageData.last_page) {
          let page = pageData.current_page * 1 + 1;
          getList(page);
          setIsLoading(true);
        }
      }
    }
  };
  const getList = (page = 1) => {
    if (isLoading) return;
    getMacroLists({ page: page }).then((res) => {
      if (res.total > 0) {
        setResearchList([...researchList, ...res.data]);
        setPageData({
          current_page: res.current_page,
          last_page: res.last_page,
          total: res.total,
        });
        setIsLoading(false);
      }
    });
  };
  
  return (
    <div
      className="macro_box"
      ref={dom}
      onScrollCapture={() => handleOnScroll()}
    >
      <div className="research">
        <div className="research_con">
          {researchList.map((item) => {
            return <Box {...item} key={item.id} history={props.history} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default GameFiMacroResearch;
