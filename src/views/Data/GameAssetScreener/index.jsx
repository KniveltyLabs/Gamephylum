import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Pagination, Table } from "antd";

import "./gameassetscreener.less";
const GameAssetScreener = (props) => {
  const { t } = useTranslation();

  // 列表的列名
  const columns = [
    {
      title: "#",
      render: (text, record, index) => `${index + 1}`,
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

  // 列表的数据
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
    <div className="gameassetscreener">
      <div className="table">
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
          className="gameassetscreener_table"
          rowKey="id"
        />
      </div>
    </div>
  );
};
export default GameAssetScreener;
