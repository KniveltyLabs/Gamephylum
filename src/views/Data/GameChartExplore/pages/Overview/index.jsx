import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
import {
  ExclamationCircleOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import ReactEcharts from "echarts-for-react";
import { getNFTList } from "../../../../../axios/api";
import "./overview.less";
const Overview = (props) => {
  const { t, i18n } = useTranslation();
  const [echartsOption, setechartsOption] = useState({
    tooltip: {
      trigger: "axis", 
      axisPointer: {
        type: "shadow", 
      },
    },
    xAxis: {
      type: "category",
      data: ["2.1", "2.2", "2.3", "2.4", "2.5"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 0, 224, 218, 135, 147, 260],
        type: "line",
      },
      {
        data: [150, 230, 0, 218, 135, 147, 260],
        type: "line",
      },
      {
        data: [150, 230, 224, 0, 135, 147, 260],
        type: "line",
      },
      {
        data: [150, 230, 224, 218, 0, 147, 260],
        type: "line",
      },
    ],
  });
  const [columns, setColumns] = useState([
    {
      title: t("NFT Collection"),
      dataIndex: "nft_platform",
      width: 150,
      fixed: "left",
    },
    {
      title: t("Lowest sale"),
      dataIndex: "floor_price",
      sorter: {
        compare: (a, b) => a.floor_price - b.floor_price,
        multiple: 3,
      },
      showSorterTooltip: false,
      width: 150,
    },
    {
      title: t("Average"),
      dataIndex: "average_price",
      sorter: {
        compare: (a, b) => a.average_price - b.average_price,
        multiple: 2,
      },
      showSorterTooltip: false,
      width: 150,
    },
    {
      title: t("Volume"),
      dataIndex: "total_value",
      sorter: {
        compare: (a, b) => a.total_value - b.total_value,
        multiple: 1,
      },
      showSorterTooltip: false,
      width: 200,
    },
    {
      title: t("Sales"),
      dataIndex: "count",
      sorter: {
        compare: (a, b) => a.count - b.count,
        multiple: 1,
      },
      showSorterTooltip: false,
      width: 150,
    },
    {
      title: t("Highest Price"),
      dataIndex: "highest_price",
      sorter: {
        compare: (a, b) => a.highest_price - b.highest_price,
        multiple: 1,
      },
      showSorterTooltip: false,
      width: 150,
    },
    {
      title: t("Total Supply"),
      dataIndex: "total_supply",
      sorter: {
        compare: (a, b) => a.total_supply - b.total_supply,
        multiple: 1,
      },
      showSorterTooltip: false,
      width: 150,
    },
  ]);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    size: "small",
    total: 100,
    pageSize: 10,
    showSizeChanger: false,
  });
  useEffect(() => {
    getNFTList().then((res) => {
      setData([...res]);
    });
  }, []);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  const tableOnclick = ({ key }) => {
    props.history.push(`/data/gamechartexplore/paradise/${key}`);
  };
  return (
    <div className="over_view">
      {/* <div className="over_view_title">{t("StarSharks")}</div> */}
      <div className="table_box">
        <div className="table_title flex flex_between">
          <div>
            {t("24H Game NFT Top List (BSC)")} <ExclamationCircleOutlined />
          </div>
          <div>
            <FieldTimeOutlined />
            {t("5min ago")}
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          pagination={false}
          scroll={{ x: 840 }}
          onRow={(record) => {
            return {
              onClick: (event) => {
                tableOnclick(record);
              }, 
            };
          }}
        />
      </div>
      {/* <div className="echart_box">
        <div className="echart_title">Top 5 GameNFT Collection</div>
        <ReactEcharts
          option={echartsOption}
          notMerge={true}
          lazyUpdate={true}
          style={{ width: "100%", height: "3.5rem" }}
        />
      </div> */}
    </div>
  );
};
export default Overview;
