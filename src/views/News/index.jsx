import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Input, Table } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import newssearch from "../../assets/img/news/newssearch.png";
import hbox from "../../assets/img/news/hbox.png";

import "./news.less";

dayjs.extend(relativeTime);
const News = (props) => {
  const { t } = useTranslation();
  // 搜索框
  const [searchVal, setSearchVal] = useState("");
  // 列表的列名
  const columns = [
    {
      title: t("Data"),
      dataIndex: "time",
      render: (time) => <span>{dayjs(time * 1000).fromNow()}</span>,
    },
    {
      title: t("News "),
      dataIndex: "news",
    },
    {
      title: t("Address"),
      dataIndex: "address",
      className: "address",
      render: (url) => <img src={url} alt="" className="address_img" />,
    },
    {
      title: t("Source"),
      dataIndex: "source",
    },
  ];

  // 列表的数据
  const data = [
    {
      id: 1,
      time: "1647840535",
      news: "Fly to the Moon ",
      address: hbox,
      source: "CNJKNSJKBKbkda",
    },
    {
      id: 2,
      time: "1647640535",
      news: "Fly to the Moon ",
      address: hbox,
      source: "CNJKNSJKBKbkda",
    },
    {
      id: 3,
      time: "1647830535",
      news: "Fly to the Moon ",
      address: hbox,
      source: "CNJKNSJKBKbkda",
    },
    {
      id: 4,
      time: "1647840535",
      news: "Fly to the Moon ",
      address: hbox,
      source: "CNJKNSJKBKbkda",
    },
  ];
  useEffect(() => {}, []);
  const searchChange = ({ target: { value } }) => {
    setSearchVal(value);
  };
  return (
    <div className="news">
      <div className="search">
        <div className="search_img">
          <img src={newssearch} alt="" />
        </div>
        <Input
          placeholder={t("search by the title")}
          bordered={false}
          className="search_input"
          value={searchVal}
          onChange={searchChange}
        />
      </div>

      <div className="data_list">
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
          className="news_table"
          rowKey="id"
        />
      </div>
    </div>
  );
};
export default News;
