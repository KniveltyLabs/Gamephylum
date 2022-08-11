import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Input, Table, Image ,Button } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import newssearch from "../../assets/img/news/newssearch.png";
import hbox from "../../assets/img/news/hbox.png";
import { getNewsLists } from "../../axios/api";
import "./news.less";
// dayjs(updatetime * 1000).fromNow()
dayjs.extend(relativeTime);
const News = (props) => {
  const { t } = useTranslation();
  const [searchVal, setSearchVal] = useState("");
  const columns = [
    {
      title: t("Data"),
      dataIndex: "updatetime",
      width: 150,
      fixed: true,
      render: (updatetime) => <span>{dayjs(updatetime * 1000).fromNow()}</span>,
    },
    {
      title: t("Title "),
      dataIndex: "title",
    },
    {
      title: t("Operation"),
      width: 100,
      render: () => <Button type="link" >
       {t("To view ")}
    </Button>,
    },
  ];
  const [pagination, setPagination] = useState({
    size: "small",
    total: 0,
    pageSize: 0,
    current: 1,
    showSizeChanger: false,
  });
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    getNewsList();
  }, []);
  const searchChange = ({ target: { value } }) => {
    setSearchVal(value);
    getNewsLists();
  };
  const pressEnterInput = ({ target: { value } }) => {
    console.log(value);
    setSearchVal(value);
    getNewsList();
  };
  const getNewsList = () => {
    getNewsLists({ serach: searchVal }).then((res) => {
      console.log(res);
      setDataList(res.data);
    });
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
          onPressEnter={pressEnterInput}
        />
      </div>

      <div className="data_list">
        <Table
          columns={columns}
          dataSource={dataList}
          bordered
          pagination={false}
          className="news_table"
          rowKey="id"
          onRow={(record) => {
            return {
              onClick: (event) => {
                props.history.push(`/details/new/${record.id}`);
              }, 
            };
          }}
        />
      </div>
    </div>
  );
};
export default News;
