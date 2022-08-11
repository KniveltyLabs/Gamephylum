import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactEcharts from "echarts-for-react";
import {
  ExclamationCircleOutlined,
  ArrowDownOutlined,
  FieldTimeOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import comsoon from "../../../../../assets/img/comsoon1.png";
import "./paradise.less";
const Paradise = (props) => {
  const { t, i18n } = useTranslation();
  const [echartsOption, setEchartsOption] = useState({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },

    legend: {
      data: ["Evaporation", "Temperature"],
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Precipitation",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value} ml",
        },
      },
      {
        type: "value",
        name: "Temperature",
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: "{value} °C",
        },
        axisLine: { lineStyle: { color: "#fff" } },
      },
    ],
    series: [
      {
        name: "Evaporation",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " ml";
          },
        },
        itemStyle: {
          normal: {
            color: "#03BECA",
          },
        },
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
        ],
      },
      {
        name: "Temperature",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + " °C";
          },
        },
        itemStyle: {
          normal: {
            color: "#2440b3",
          },
        },
        data: [
          2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        ],
      },
    ],
  });
  useEffect(() => {
    

  }, []);
 
 const getData = () =>{
  
 }
  return (
    <div className="paradise_box">
      <div className="title">{ props.match.params.ids == 1 ? t("Sharks") : (props.match.params.ids == 2 ?t("Axie") : t("Dracoo") )}</div>

      <div style={{textAlgin:"center",textAlign:"center",paddingTop:".5rem"}}>
        <img width={"80%"} src={comsoon} alt="" />
      </div>
      {/* <div className="item_box flex flex_between" onClick={getData}>
        <div className="item flex flex_column flex_center flex_align_center">
          <div className="item_title">{t("Collection Name")}</div>
          <div className="item_data">Sharks</div>
        </div>
        <div className="item flex flex_column flex_center flex_align_center">
          <div className="item_title">{t("Deployed")}</div>
          <div className="item_data">58h ago</div>
        </div>
        <div className="item flex flex_column flex_center flex_align_center">
          <div className="item_title">{t("NFTs in Circulation")}</div>
          <div className="item_data">4,824</div>
        </div>
        <div className="item flex flex_column flex_center flex_align_center">
          <div className="item_title">{t("Useful Links")}</div>
          <div className="item_data link">Etherscan</div>
          <div className="item_data link">Opensea</div>
        </div>
      </div>
      <div className="echarts">
        <div className="item flex flex_between">
          <div className="echarts_box">
            <div className="echarts_title flex flex_between">
              <div>{t("Average Price & Volume")}</div>
              <div className="time">
                <FieldTimeOutlined />
                &nbsp;
                {t("5min ago")}
              </div>
            </div>
            <ReactEcharts
              option={echartsOption}
              notMerge={true}
              lazyUpdate={true}
              style={{ width: "100%", height: "2.93rem" }}
            />
          </div>
          <div className="echarts_box">
            <div className="echarts_title flex flex_between">
              <div>
                {t("Price Range")}&nbsp;
                <ExclamationCircleOutlined />
              </div>
              <div className="time">
                <FieldTimeOutlined />
                &nbsp;
                {t("5min ago")}
              </div>
            </div>
            <ReactEcharts
              option={echartsOption}
              notMerge={true}
              lazyUpdate={true}
              style={{ width: "100%", height: "2.93rem" }}
            />
          </div>
        </div>
      </div>
      <div className="item_box item_big_box  flex flex_between">
        <div className="item flex flex_column flex_center flex_align_center">
          <div className="item_title">{t("Min Price")}</div>
          <div className="item_data">.25 ETH</div>
          <div className="item_data text">
            <ArrowDownOutlined /> 0 was - ETH last day
          </div>
        </div>
        <div className="item flex flex_column flex_center flex_align_center">
          <div className="item_title">{t("Average Price")}</div>
          <div className="item_data">58h ago</div>
          <div className="item_data text">
            <ArrowUpOutlined /> 0 was - ETH last day
          </div>
        </div>
        <div className="item flex flex_column flex_center flex_align_center">
          <div className="item_title">{t("Max Price")}</div>
          <div className="item_data text">4,824</div>
          <div className="item_data text">
            <ArrowUpOutlined /> 0 was - ETH last day
          </div>
        </div>
        <div className="item flex flex_column flex_center flex_align_center">
          <div className="item_title">{t("Floor Price")}</div>
          <div className="item_data">Etherscan</div>
          <div className="item_data text">
            <ArrowUpOutlined /> 0 was - ETH last day
          </div>
        </div>
        <div className="item flex flex_column flex_center flex_align_center">
          <div className="item_title">{t("Volume")}</div>
          <div className="item_data ">Etherscan</div>
          <div className="item_data text">
            <ArrowUpOutlined /> 0 was - ETH last day
          </div>
        </div>
        <div className="item flex flex_column flex_center flex_align_center">
          <div className="item_title">{t("Transactions")}</div>
          <div className="item_data ">Etherscan</div>
          <div className="item_data text">
            <ArrowUpOutlined /> 0 was - ETH last day
          </div>
        </div>
      </div>
      <div className="echarts">
        <div className="item flex flex_between">
          <div className="echarts_box">
            <div className="echarts_title flex flex_between">
              <div>{t("Average Price & Volume")}</div>
              <div className="time">
                <FieldTimeOutlined />
                &nbsp;
                {t("5min ago")}
              </div>
            </div>
            <ReactEcharts
              option={echartsOption}
              notMerge={true}
              lazyUpdate={true}
              style={{ width: "100%", height: "2.93rem" }}
            />
          </div>
          <div className="echarts_box">
            <div className="echarts_title flex flex_between">
              <div>
                {t("Price Range")}&nbsp;
                <ExclamationCircleOutlined />
              </div>
              <div className="time">
                <FieldTimeOutlined />
                &nbsp;
                {t("5min ago")}
              </div>
            </div>
            <ReactEcharts
              option={echartsOption}
              notMerge={true}
              lazyUpdate={true}
              style={{ width: "100%", height: "2.93rem" }}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Paradise;
