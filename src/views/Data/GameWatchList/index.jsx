import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Pagination, Table } from "antd";
import comsoon from "../../../assets/img/comsoon1.png";
import "./gamewatchlist.less";
const GameWatchList = (props) => {
  const { t } = useTranslation();

  const columns = [
    {
      title: "",
      render: () => <img src="" alt="" />,
      align: "center",
    },
    {
      title: t("Asset"),
      dataIndex: "asset",
      align: "center",
      // render: (time) => <span>{time}</span>,
    },
    {
      title: t("PRICE"),
      dataIndex: "price",
      render: (price) => <span>{price}$</span>,
      align: "center",
    },
    {
      title: t("CHANGE VS USD"),
      dataIndex: "change24",
      render: (num, { change24amp }) => (
        <span>
          +{num}%{change24amp ? 0 : 1}
        </span>
      ),
      align: "center",
    },
    {
      title: t("7 DAY TREND"),
      dataIndex: "day7",
      align: "center",
    },
    {
      title: t("REPORTED MARKET CAP"),
      dataIndex: "reported",
      render: (num) => <span>+{num}%</span>,
      align: "center",
    },
    {
      title: t("CHANGE VS USD(MTD)"),
      dataIndex: "changemtd",
      render: (num) => <span>+{num}%</span>,
      align: "center",
    },
    {
      title: t("CHANGE VS USD(QTD)"),
      dataIndex: "changeqtd",
      render: (num) => <span>+{num}%</span>,
      align: "center",
    },
    {
      title: t("CHANGE VS USD(YTD)"),
      dataIndex: "changeytd",
      render: (num) => <span>+{num}%</span>,
      align: "center",
    },
  ];

  const data = [
    {
      id: 1,
      asset: "StarSharks(SSS)",
      price: "8",
      change24: "10",
      change24amp: false,
      day7: "data",
      reported: "10",
      changemtd: "10",
      changeqtd: "10",
      changeytd: "10",
    },
  ];
  useEffect(() => {}, []);
  return (
    <div className="gamewatchlist" style={{height:"calc(100vh - 0.8rem)"}}>
      <div style={{height:"100%",display:"flex",alignItems: "center",
      justifyContent: "center"}}>
        <img width="50%" src={comsoon} alt="" />
      </div>
      {/* <div className="table">
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
          className="gamewatchlist_table"
          rowKey="id"
          scroll={{ x: "100%" }}
        />
      </div> */}
    </div>
  );
};
export default GameWatchList;
