import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { Input } from "antd";
import comsoon from "../../../../../assets/img/comsoon1.png";
import "./period.less";
const echarts_title = [
  "Trend of Minimum Investment Amount",
  "7 days Payback period trend",
  "Daily Minimum Return Trend",
  "Monthly Return period trend",
];
const Period = (props) => {
  const { t, i18n } = useTranslation();
  const [searchVal, setSearchVal] = useState("");
  const [echartsOption, setEchartsOption] = useState([
    {
      tooltip: {
        trigger: "axis", 
        axisPointer: {
          type: "shadow", 
        },
      },

      xAxis: {
        type: "category",
        data: ["2.1", "2.2", "2.3", "2.4", "2.5"],
        name: t(echarts_title[0]),
        nameLocation: "middle",
        nameTextStyle: {
          color: "#ffffff",
          padding: [20, 0, 0, 0],
        },
      },

      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135],
          type: "line",
        },
      ],
    },
    {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow", 
        },
      },
      xAxis: {
        type: "category",
        data: ["2.1", "2.2", "2.3", "2.4", "2.5"],
        name: t(echarts_title[1]),
        nameLocation: "middle",
        nameTextStyle: {
          color: "#ffffff",
          padding: [20, 0, 0, 0],
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    },
    {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow", 
        },
      },
      xAxis: {
        type: "category",
        data: ["2.1", "2.2", "2.3", "2.4", "2.5"],
        name: t(echarts_title[2]),
        nameLocation: "middle",
        nameTextStyle: {
          color: "#ffffff",
          padding: [20, 0, 0, 0],
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    },
    {
      tooltip: {
        trigger: "axis", 
        axisPointer: {
          type: "shadow", 
        },
      },
      xAxis: {
        type: "category",
        data: ["2.1", "2.2", "2.3", "2.4", "2.5"],
        name: t(echarts_title[3]),
        nameLocation: "middle",
        nameTextStyle: {
          color: "#ffffff",
          padding: [20, 0, 0, 0],
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    },
  ]);
  useEffect(() => {
    if (props.match.params.ids == 1) {
      //done
     
    }
    if (props.match.params.ids == 2) {
      //done
      
    }
    return () => {
      console.log(333);
    };
  }, [props.location.pathname]);
  const searchChange = ({ target: { value } }) => {
    setSearchVal(value);
  };
  const onEvents = () => {
    //
  };

  return (
    <div className="period_box">
      <div style={{textAlgin:"center",textAlign:"center",paddingTop:".5rem"}}>
        <img width={"80%"} src={comsoon} alt="" />
      </div>
      {/* <div className="search">
        <Input
          placeholder={t("Search The Project")}
          bordered={false}
          className="search_input"
          value={searchVal}
          onChange={searchChange}
        />
      </div>
      <div className="flex flex_between">
        {echartsOption.map((option, index) => {
          return (
            <div
              className="echarts_box flex flex_column flex_center"
              key={index}
            >
              <ReactEcharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                onEvents={onEvents}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          );
        })}
      </div> */}
    </div>
  );
};
export default Period;
