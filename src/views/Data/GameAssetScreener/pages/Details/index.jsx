import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Pagination, Table, Menu, Dropdown,Image } from "antd";
import {
  getPhylumAssetDetails,
  getGameTokenDetails,
} from "../../../../../axios/api";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";
import "./details.less";
const { SubMenu } = Menu;
const AssetScreenerDetails = (props) => {
  const { t } = useTranslation();

  // list data
  const [InvestorData, setInvestorData] = useState([]);
  const [infoData, setinfoData] = useState({});
  const [linkData,setLinkData] = useState([])
  const CommunityMenu = (
    <Menu>
      <Menu.Item key="Twitter" onClick={() => goHref("Twitter")}>
        <div>{t("Twitter")}</div>
      </Menu.Item>
      <Menu.Item key="Discord" onClick={() =>  goHref("Discord")}>
        <div>{t("Discord")}</div>
      </Menu.Item>
      <Menu.Item key="Telegram" onClick={() =>  goHref("Telegram")}>
        <div>{t("Telegram")}</div>
      </Menu.Item>
    </Menu>
  );
  const ResourceMenu = (
    <Menu>
      <Menu.Item key="Medium" onClick={() =>  goHref("Medium")}>
        <div>{t("Medium")}</div>
      </Menu.Item>
      <Menu.Item key="White Paper" onClick={() =>  goHref("White Paper")}>
        <div>{t("White Paper")}</div>
      </Menu.Item>
      <Menu.Item key="GamePhyLum Research" onClick={() =>  goHref("GamePhyLum Research")}>
        <div>{t("GamePhyLum Research")}</div>
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    // qi-dao
    // props.match.params.name
    getGameTokenDetails({ id: props.match.params.id }).then((res) => {
      setinfoData(res);
      getPhylumAssetDetails({ assets: res.name }).then((res1) => {
        setInvestorData(res1.organizations)
        setLinkData(res1.links)
        console.log(res1.links)
      });
    });
  }, []);
  const goHref = (key) =>{
    linkData.forEach(item=>{
      if(item.name === key){
        window.open(item.link)
      }
      if(item.name==="Whitepaper" && key==="White Paper"){
        window.open(item.link)
      }
    })
  }
  return (
    <div className="assetscreener_details">
      <div className="top_big_box">
      <div className="top_box">
        <img className="img" src={infoData.imgurl} alt="" />
        <div className="msg_box">
          <div className="title_box">
            <div className="name">{infoData.name}</div>
            <div className="current_price">{infoData.current_price}$</div>
            <div>
              (
              <span
                style={{
                  color:
                    parseFloat(infoData.change_oned) * 1 < 0
                      ? "#e96975"
                      : "#32be88",
                }}
              >
                {(parseFloat(infoData.change_oned) * 100).toFixed(2)}%
              </span>
              )
            </div>
          </div>
          <div className="project_intro">
            {t("Project Intro")} xxxxxxxxxxxx(briefly)
          </div>
        </div>
      </div>
      <div className="tabs">
        <div>{t("Website")}</div>
        <div>
          <Dropdown overlay={CommunityMenu} trigger={["hover"]}>
            <span onClick={(e) => e.preventDefault()}>
              {t("Community")} <DownOutlined />
            </span>
          </Dropdown>
        </div>
        <div>
          <Dropdown overlay={ResourceMenu} trigger={["hover"]}>
            <span onClick={(e) => e.preventDefault()}>
              {t("Resource")} <DownOutlined />
            </span>
          </Dropdown>
        </div>
      </div>
      </div>
      <div className="tabs">
        <div>{t("Investor")}</div>
        <div>{t("Research")}</div>
        <div>{t("Market")}</div>
      </div>
      <div className="investor_box">
        {
          InvestorData.map((item)=>{
            
            return item.avatar ? (
              <div className="img">
                <Image
              width={100}
              height={100}
              preview={false}
              src={item.avatar}
              fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
            />
              </div>
            )  : ""
          }) 
        }
      </div>
    </div>
  );
};
export default AssetScreenerDetails;
