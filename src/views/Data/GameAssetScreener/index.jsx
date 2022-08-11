import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Pagination, Table } from "antd";
import { getAssetscreener } from "../../../axios/api";
import hbox from "../../../assets/img/news/hbox.png";
import "./gameassetscreener.less";
const GameAssetScreener = (props) => {
  const { t } = useTranslation();
  const columns = [
    {
      title: "#",
      render: (text, record, index) => `${index + 1}`,
      align: "center",
    },
    {
      title: t("Token"),
      dataIndex: "name",
      align: "left",
      render: (name, record) => {
        return (
          <div style={{display:"flex",alignItems:"center"}}>
            <img
              width={24}
              height={24}
              style={{ borderRadius: "50%", marginRight: "5px" }}
              src={record.imgurl}
              alt=""
            />
            <div>
              <div>{name}</div>
              <div style={{fontSize:"12px",color:"#ccc"}}>{record.abbreviate}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: t("PRICE"),
      dataIndex: "current_price",
      render: (currentPrice) => <span>${currentPrice}</span>,
      align: "center",
      sorter: (a, b) => a.current_price - b.current_price,
    },
    {
      title: t("CHANGE VS USD"),
      dataIndex: "change_oned",
      render: (num) => (
        <span style={{ color: num * 1 < 0 ? "#e96975" : "#32be88" }}>
          {num}%
        </span>
      ),
      align: "center",
      sorter: (a, b) => a.change_oned - b.change_oned,
    },
    {
      title: t("7 DAY TREND"),
      dataIndex: "change_sevend",
      align: "center",
      render: (num) => (
        <span style={{ color: num * 1 < 0 ? "#e96975" : "#32be88" }}>
          {num}%
        </span>
      ),
      sorter: (a, b) => a.change_sevend - b.change_sevend,
    },
    {
      title: t("24H Volume"),
      dataIndex: "volumeoneday",
      render: (num) => (
        <span>${moneyFormat((Math.round(num * 100) / 100).toFixed(0))}</span>
      ),
      align: "center",
      sorter: (a, b) => a.volumeoneday - b.volumeoneday,
    },
    {
      title: t("Market Cap"),
      dataIndex: "market_cap",
      render: (num) => (
        <span>${moneyFormat((Math.round(num * 100) / 100).toFixed(0))}</span>
      ),
      align: "center",
      sorter: (a, b) => a.market_cap - b.market_cap,
    },
    {
      title: t("Last 7 Days"),
      dataIndex: "price7dimage",
      render: (price7dimage) => <img src={price7dimage} alt="" />,
      align: "center",
    },
  ];

  // list data
  const [tableData, setTableData] = useState([]);
  const [pagination, setPagination] = useState();
  useEffect(() => {
    getList(1);
  }, []);
  const getList = (page = 1) => {
    getAssetscreener({
      page: page,
      current: page,
      pageSize: 50,
      sort: -6,
      tags: ["726"],
      language: "en",
    }).then((res) => {
      // console.log(res);
      let _data = res.data;
      setPagination({
        size: "small",
        total: res.total,
        pageSize: 50,
        showSizeChanger: false,
      });
      _data.forEach((item) => {
        if (item.current_price * 1 < 1) {
          item.current_price = (item.current_price * 1).toFixed(6);
        } else if (item.current_price * 1 < 10) {
          item.current_price = (item.current_price * 1).toFixed(4);
        } else {
          item.current_price = (item.current_price * 1).toFixed(2);
        }
        item.change_sevend = (item.change_sevend * 100).toFixed(2);
        item.change_oned = (item.change_oned * 100).toFixed(2);
      });
      setTableData([..._data]);
    });
  };
  const moneyFormat = (num) => {
    return String(num).replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  };
  const onChange = (pagination) => {
    getList(pagination.current);
  };
  return (
    <div className="gameassetscreener">
      <div className="ball_list">
        {tableData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                item.change_oned < 0 ? "ball red_ball" : "ball  blue_ball"
              }
            >
              <img src={item.imgurl} alt="" />
              <div>{item.abbreviate}</div>
              <div>{item.change_oned}%</div>
            </div>
          );
        })}
      </div>
      <div className="table">
        <Table
          columns={columns}
          dataSource={tableData}
          bordered
          pagination={pagination}
          className="gameassetscreener_table"
          rowKey="cid"
          onChange={onChange}
          scroll={{ x: "100%" }}
          onRow={record => {
            return {
              onClick: event => {
                props.history.push(`/data/assetscreenerdetails/${record.id}`)
              },
            };
          }}
        />
      </div>
    </div>
  );
};
export default GameAssetScreener;
