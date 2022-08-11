import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Statistic, Select, Input, Progress } from "antd";

import boxbg from "../../assets/img/dao/boxbg.png";
import listline from "../../assets/img/dao/listline.png";
import huomiao from "../../assets/img/dao/huomiao.png";
import claimimg from "../../assets/img/dao/claimimg.png";
import comsoon from "../../assets/img/comsoon1.png";

import "./dao.less";
const { Option } = Select;
const Dao = (props) => {
  const { t } = useTranslation();
  // GPT TVL
  const [gpttvlNum, setGpttvlNum] = useState(18518181581);
  // Average Staking Period
  const [averageNum, setAverageNum] = useState(3);
  // Staking Period select list
  const [periodList, setPeriodList] = useState([
    {
      id: 0,
      title: t("1 Month"),
    },
    {
      id: 1,
      title: t("3 Month"),
    },
    {
      id: 2,
      title: t("6 Month"),
    },
    {
      id: 3,
      title: t("1 Year"),
    },
    {
      id: 4,
      title: t("2 Year"),
    },
    {
      id: 5,
      title: t("3 Year"),
    },
  ]);
  // Period active
  const [periodActive, setPeriodActive] = useState(periodList[0].id);
  // GPT
  const [optVal, setOptVal] = useState("");
  // Claim My Reward 
  const [claimNum, setClaimNum] = useState(100);
  // My Staking
  const [myStakingNum, setMyStakingNum] = useState(200);
  useEffect(() => {}, []);
  const periodChange = (key) => {
    setPeriodActive(key);
  };
  const gptChange = ({ target: { value } }) => {
    setOptVal(value);
  };
  return (
    <div className="dao" style={{height:"calc(100vh - 0.8rem)"}}>
      <div style={{height:"100%",display:"flex",alignItems: "center",
      justifyContent: "center"}}>
        <img width="50%" src={comsoon} alt="" />
      </div>
      {/* <div className="banner">
        <div className="banner_con">
          <p className="contribute">{t("Contribute to the GamePhylumDAO")}</p>
          <p className="text">{t("Get the DAOMember NFT")}</p>
          <p className="text">{t("Earn GPT")}</p>
          <div className="list">
            <div className="list_line">
              <img src={listline} alt="" />
              <span>{t("Make the Game Data Dashboards")}</span>
            </div>
            <div className="list_line">
              <img src={listline} alt="" />
              <span>{t("Write the Game Research Report")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dao_curr">
        <div className="left_box">
          <img src={boxbg} alt="" className="box_img" />
          <div className="btn">
            <button className="become">{t("Become DaoMember")}</button>
            <button>{t("Start Contribute")}</button>
          </div>
          <div className="illustrate">
            <div className="title">
              <span className="question">? </span>
              <span>{t("Illustrate")}:</span>
            </div>
            <p className="text">{t("Submit your information")}</p>
          </div>
        </div>
        <div className="right_box">
          <img src={boxbg} alt="" className="box_img" />
          <div className="btn">
            <button>{t("Verify DAOMember NFT")}</button>
          </div>
          <div className="illustrate">
            <div className="title">
              <span className="question">? </span>
              <span>{t("Illustrate")}:</span>
            </div>
            <p className="text">{t("Verify the DAOMember")}</p>
          </div>
        </div>
      </div>
      <div className="staking">
        <div className="title">
          <img src={huomiao} alt="" />
          <span>{t("Staking")}</span>
        </div>
        <div className="staking_text">{t("Staking GPT")}</div>
        <div className="staking_num">
          <div className="box">
            <Statistic
              title={t("GPT TVL")}
              value={gpttvlNum}
              className="staking_stat"
            />
          </div>
          <div className="box">
            <Statistic
              title={t("Average Staking Period")}
              value={averageNum}
              suffix={t("years")}
              className="staking_stat"
            />
          </div>
        </div>
        <div className="tu">
          <div className="left">
            <div className="tu_top">
              <div className="choose">
                <div className="one_line">
                  <div className="title">{t("Staking Period")}</div>
                  <div className="select">
                    <Select
                      className="period_select"
                      onChange={periodChange}
                      value={periodActive}
                    >
                      {periodList.map((item) => {
                        return (
                          <Option
                            value={item.id}
                            key={item.id}
                            className="period_option"
                          >
                            {item.title}
                          </Option>
                        );
                      })}
                    </Select>
                  </div>
                </div>
                <div className="two_line">
                  <div className="title">{t("GPT")}</div>
                  <div className="input">
                    <Input
                      suffix={<div className="max">Max</div>}
                      className="gpt_input"
                      value={optVal}
                      onChange={gptChange}
                    />
                  </div>
                </div>
                <div className="therr_line">
                  <img src={huomiao} alt="" />
                  <div className="btn">{t("Stake GPT")}</div>
                </div>
              </div>
              <div className="apr_chart">
                <div className="jingdu">
                  <Progress
                    type="circle"
                    percent={75}
                    className="jingdu_quan"
                  />
                </div>
                <div className="apr">APR</div>
              </div>
            </div>
            <div className="tu_bom">
              <div className="title_bom">
                <span className="question">? </span>
                <span>{t("Illustrate")}:</span>
              </div>
              <p className="text">{t("By staking")}</p>
            </div>
          </div>
          <div className="right">
            <div className="claim">
              <p className="claim_title">{t("Claim My Reward")}</p>
              <img src={claimimg} alt="" className="claim_img" />
              <div className="claim_num">
                {claimNum} {t("GPT")}
              </div>
              <button className="claim_btn">{t("Claim")}</button>
            </div>
            <div className="my_staking">
              <p className="claim_title">{t("Claim My Reward")}</p>
              <img src={claimimg} alt="" className="claim_img" />
              <div className="claim_num">
                {myStakingNum} {t("GPT")}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Dao;
