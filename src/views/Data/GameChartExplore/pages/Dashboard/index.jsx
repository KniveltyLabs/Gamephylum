import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReactEcharts from "echarts-for-react";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { Table, Select } from "antd";
import {
  ExclamationCircleOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import comsoon from "../../../../../assets/img/comsoon1.png";
import "./dashboard.less";
dayjs.extend(weekOfYear);
const { Option } = Select;
const Dashboard = (props) => {
  const { t } = useTranslation();
  const [tabType, setTabType] = useState(1);
  const [tabType1, setTabType1] = useState(1);
  const [sellType, setSellType] = useState(1);
  const [sellGroup, setSellGroup] = useState(true);
  const [buyType, setBuyType] = useState(1);
  const [buyGroup, setBuyGroup] = useState(true);
  const [columns, setColumns] = useState([
    {
      title: t("Address"),
      dataIndex: "address",
      width: 150,
      fixed: "left",
      render: (text) => (
        <div className="address_name" title={text}>
          {text}
        </div>
      ),
    },
    {
      title: t("Balance"),
      dataIndex: "balance",
      sorter: {
        compare: (a, b) => a.balance - b.balance,
        multiple: 3,
      },
      showSorterTooltip: false,
    },
    {
      title: t("ChangeOne"),
      dataIndex: "changeOne",
      sorter: {
        compare: (a, b) => a.changeOne - b.changeOne,
        multiple: 2,
      },
      showSorterTooltip: false,
    },
    {
      title: t("ChangeSeven"),
      dataIndex: "changeSeven",
      sorter: {
        compare: (a, b) => a.changeSeven - b.changeSeven,
        multiple: 1,
      },
      showSorterTooltip: false,
    },
    {
      title: t("Received"),
      dataIndex: "received",
      sorter: {
        compare: (a, b) => a.received - b.received,
        multiple: 1,
      },
      showSorterTooltip: false,
    },
    // {
    //   title: t("#Wallets"),
    //   dataIndex: "english",
    //   sorter: {
    //     compare: (a, b) => a.english - b.english,
    //     multiple: 1,
    //   },
    //   showSorterTooltip: false,
    //   width: 150,
    // },
    // {
    //   title: t("Deployed"),
    //   dataIndex: "english",
    //   sorter: {
    //     compare: (a, b) => a.english - b.english,
    //     multiple: 1,
    //   },
    //   showSorterTooltip: false,
    //   width: 150,
    // },
  ]);
  const [columns2, setColumns2] = useState([
    {
      title: t("Address"),
      dataIndex: "address",
      width: 400,
      fixed: "left",
      render: (text) => (
        <div className="address_name" title={text}>
          {text}
        </div>
      ),
    },
    {
      title: t("Balance"),
      dataIndex: "balance",
      sorter: {
        compare: (a, b) => a.balance - b.balance,
        multiple: 3,
      },
      showSorterTooltip: false,
    },
    {
      title: t("Received"),
      dataIndex: "received",
      sorter: {
        compare: (a, b) => a.received - b.received,
        multiple: 1,
      },
      showSorterTooltip: false,
    },
  ]);
  const [columns3, setColumns3] = useState([
    {
      title: t("Address"),
      dataIndex: "formAddress",
      width: 400,
      fixed: "left",
      render: (text) => (
        <div className="formAddress" title={text}>
          {text}
        </div>
      ),
    },
    {
      title: t("Time"),
      dataIndex: "transactionTime",
      sorter: {
        compare: (a, b) => a.transactionTime - b.transactionTime,
        multiple: 3,
      },
      render: (text) => dayjs(text*1000).format("YYYY-MM-DD hh:mm:ss"),
      showSorterTooltip: false,
    },
    {
      title: t("Num"),
      dataIndex: "num",
      sorter: {
        compare: (a, b) => a.num - b.num,
        multiple: 1,
      },
      showSorterTooltip: false,
    },
  ]);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [pagination, setPagination] = useState({
    size: "small",
    total: 100,
    pageSize: 10,
    current: 1,
    showSizeChanger: false,
  });
  const [pagination2, setPagination2] = useState({
    size: "small",
    total: 100,
    current: 1,
    showSizeChanger: false,
  });
  const [pagination3, setPagination3] = useState({
    size: "small",
    total: 0,
    current: 1,
    showSizeChanger: false,
  });
  const [pagination4, setPagination4] = useState({
    size: "small",
    total: 0,
    pageSize: 10,
    current: 1,
    showSizeChanger: false,
  });
  const [trunOveXData, settrunOveXData] = useState([]);
  const [trunOveYData, settrunOveYData] = useState([]);
  const [echartsOption, setEchartsOption] = useState({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
    },

    xAxis: {
      type: "category",
      data: [
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
      ],
    },

    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          150, 230, 224, 218, 135, 150, 230, 224, 218, 135, 150, 230, 224, 218,
          135,
        ],
        type: "line",
        // itemStyle:{
        //   color:""
        // }
      },
    ],
    backgroundColor: "#fff",
  });
  const [echartsOptionBar, setEchartsOptionBar] = useState({
    tooltip: {
      trigger: "axis", 
      axisPointer: {
        type: "shadow", 
      },
    },

    xAxis: {
      type: "category",
      data: [
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
        "2022-5-5",
      ],
    },

    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          150, 230, 224, 218, 135, 150, 230, 224, 218, 135, 150, 230, 224, 218,
          135,
        ],
        type: "line",

        // itemStyle:{
        //   color:""
        // }
      },
    ],
    backgroundColor: "#fff",
  });
  const [echartsOptionPie, setEchartsOptionPie] = useState({
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: "#fff",
          borderWidth: 1,
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
    backgroundColor: "#fff",
  });
  const [turnOver, setturnOver] = useState({});
  const [distoryOutPutraio, setDistoryOutPutraio] = useState({});
  const [activeAddressGrowth, setactiveAddressGrowth] = useState({});
  const [transaction, settransaction] = useState({});

  useEffect(() => {
    getData(props.match.params.ids, 1);
  }, [props.location.pathname]);
  const getData = (ids, type, limit = 30) => {
    ids = ids * 1;
    let startTime = "";
    let endTime = "";
    let contractName = "";
    if (ids === 1) {
      contractName = "Sharknft";
    }
    if (ids === 2) {
      contractName = "Sharknft";
    }
    if (ids === 3) {
      contractName = "ProfileNFT";
      getLogTopBalance();
      getLogTopMasonryList();
      getProduceDestroyList();
      getBuyerList();
      getSellerList();
    }
    fetch(`http://java.gamephylum.xyz/quotation/get`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `contractName=${contractName}&type=${type}&page=1&limit=${limit}&startTime=${startTime}&endTime=${endTime}`,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let res_data = data.data.records.reverse();
        console.log(res_data);
        setChartsOptions(res_data, type);
      });
  };
  const setTabsType = (type) => {
    setTabType1(type);
    getProduceDestroyList(type);
  };
  const getProduceDestroyList = (type = 1) => {
    let start_time_week =
      Date.parse(
        dayjs().startOf("week").add(1, "day").format("YYYY-MM-DD") + " 00:00:00"
      ) / 1000;
    let end_time_week =
      Date.parse(
        dayjs().endOf("week").add(1, "day").format("YYYY-MM-DD") + " 23:59:59"
      ) / 1000;
    let start_time_month =
      Date.parse(
        dayjs().startOf("month").add(0, "day").format("YYYY-MM-DD") +
          " 00:00:00"
      ) / 1000;
    let end_time_month =
      Date.parse(
        dayjs().endOf("month").add(1, "day").format("YYYY-MM-DD") + " 00:00:00"
      ) / 1000;
    let start_time_day =
      Date.parse(dayjs().format("YYYY-MM-DD") + " 00:00:00") / 1000;
    let end_time_day =
      Date.parse(dayjs().format("YYYY-MM-DD") + " 23:59:59") / 1000;
    // ${type==1? start_time_day :type==2? start_time_week :start_time_month }
    // ${type==1? end_time_day :type==2? end_time_week :end_time_month}
    fetch(`http://java.gamephylum.xyz/log/getProduceDestroy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `contractName=BASToken&type=${type}&startTime=&endTime=&limit=10`,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setChartsOptionData(data.data.records, type);
      });
  };
  const getLogTopBalance = (page = 1, limit = 10) => {
    fetch(`http://java.gamephylum.xyz/log/topBalances`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `contractName=BASToken&page=${page}&limit=${limit}`,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let res_data = data.data.records;
        res_data.forEach((item) => {
          item.balance = item.balance.toFixed(4);
          item.changeOne = item.changeOne.toFixed(4);
          item.changeSeven = item.changeSeven.toFixed(4);
          item.received = item.received.toFixed(4);
        });
        // console.log(res_data);
        setData(res_data);
        setPagination({
          size: "small",
          total: data.data.total,
          pageSize: 10,
          showSizeChanger: false,
        });
      });
  };
  const getLogTopMasonryList = (page = 1, limit = 10) => {
    fetch(`http://java.gamephylum.xyz/log/masonryList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `contractName=BASToken&page=${page}&limit=${limit}`,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let res_data = data.data.records;
        res_data.forEach((item) => {
          item.balance = item.balance.toFixed(4);
          item.received = item.received.toFixed(4);
        });
        // console.log(res_data);
        setData2(res_data);
        setPagination2({
          size: "small",
          total: data.data.total,
          pageSize: 10,
          showSizeChanger: false,
        });
      });
  };
  const getBuyerList = (page = 1, limit = 10, type, group) => {
    fetch(`http://java.gamephylum.xyz/log/buyerList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `contractName=BASToken&page=${page}&limit=${limit}&type=${
        type ? type : buyType
      }&group=${group ? group : buyGroup}`,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let res_data = data.data.records;
        setData4(res_data);
        setPagination4({
          size: "small",
          total: data.data.total,
          pageSize: 10,
          showSizeChanger: false,
        });
      });
  };
  const getSellerList = (page = 1, limit = 10, type, group) => {
    fetch(`http://java.gamephylum.xyz/log/sellerList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `contractName=BASToken&page=${page}&limit=${limit}&type=${
        type ? type : sellType
      }&group=${group ? group : sellGroup}`,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let res_data = data.data.records;
        setData3(res_data);
        setPagination3({
          size: "small",
          total: data.data.total,
          pageSize: 10,
          showSizeChanger: false,
        });
      });
  };
  const setChartsOptionData = (data, type) => {
    let xData1 = [];
    let xData2 = [];
    let yData = [];
    data.forEach((item) => {
      xData1.push(item.destroy);
      xData2.push(item.produce);
      yData.push(
        dayjs(item.transactionTime * 1000).format(
          type == 1 ? "YYYY-MM-DD  HH:mm" : "YYYY-MM-DD"
        )
      );
    });
    setDistoryOutPutraio({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
      },
      legend: {
        data: ["Destroy", "Produce"],
        textStyle: { color: "#fff" },
      },
      xAxis: {
        type: "category",
        data: yData,
      },

      yAxis: {
        type: "value",
      },
      grid: [
        {
          left: "10%",
        },
      ],
      series: [
        {
          data: xData1,
          type: "line",
          name: "Destroy",
          smooth: true,
        },
        {
          data: xData2,
          type: "line",
          name: "Produce",
          smooth: true,
        },
      ],
      backgroundColor: "#06192b",
    });
  };
  const setChartsOptions = (res_data, type) => {
    let xData = [];
    let xDataActive = [];
    let xDataTransaction = [];
    let yData = [];
    res_data.forEach((item) => {
      xData.push(item.turnover);
      xDataActive.push(item.active);
      xDataTransaction.push(item.transaction);
      if (type === 1 || type === 3) {
        yData.push(
          dayjs(item.transactionTime * 1000).format(
            type === 1 ? "YYYY-MM-DD  HH:mm" : "YYYY-MM-DD"
          )
        );
      } else {
        yData.push(
          dayjs(item.transactionTime * 1000).format("YYYY-MM-DD") +
            " " +
            dayjs(item.transactionTime * 1000).week() +
            "week"
        );
      }
    });
    setturnOver({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },

      xAxis: {
        type: "category",
        data: yData,
      },

      yAxis: {
        type: "value",
      },
      grid: [
        {
          left: "20%",
        },
      ],
      series: [
        {
          data: xData,
          type: "line",
          smooth: true,
          // itemStyle:{
          //   color:""
          // }
        },
      ],
      backgroundColor: "#06192b",
    });
    setactiveAddressGrowth({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },

      xAxis: {
        type: "category",
        data: yData,
      },
      grid: [
        {
          left: "20%",
        },
      ],
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: xDataActive,
          type: "line",
          smooth: true,
        },
      ],
      backgroundColor: "#06192b",
    });
    settransaction({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },

      xAxis: {
        type: "category",
        data: yData,
      },
      grid: [
        {
          left: "20%", 
        },
      ],
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: xDataTransaction,
          type: "line",
          smooth: true,
        },
      ],
      backgroundColor: "#06192b",
    });
  };
  const setTabTypeFn = (type) => {
    console.log(type);
    setTabType(type);
    getData(props.match.params.ids, type);
  };
  const onChange = (pagination) => {
    getLogTopBalance(pagination.current);
  };
  const onChange2 = (pagination) => {
    getLogTopMasonryList(pagination.current);
  };
  const onChange3 = (pagination) => {
    getSellerList(pagination.current);
  };
  const onChange4 = (pagination) => {
    getBuyerList(pagination.current);
  };
  const handleChangeGroup1 = (value) => {
    setBuyGroup(value);
    setPagination4({
      size: "small",
      total: 0,
      pageSize: 10,
      current: 1,
      showSizeChanger: false,
    });
    getBuyerList(1,10,"",value)
  };
  const handleChangeGroup2 = (value) => {
    setSellGroup(value);
    setPagination3({
      size: "small",
      total: 0,
      pageSize: 10,
      current: 1,
      showSizeChanger: false,
    });
    getSellerList(1,10,"",value)
  };
  const setBuyTypeFn = (type) => {
    setBuyType(type);
    setPagination4({
      size: "small",
      total: 0,
      pageSize: 10,
      current: 1,
      showSizeChanger: false,
    });
    getBuyerList(1,10,type)
  };
  const setSellTypeFn = (type) => {
    setSellType(type);
    setPagination3({
      size: "small",
      total: 0,
      pageSize: 10,
      current: 1,
      showSizeChanger: false,
    });
    getSellerList(1,10,type)
  };
  return (
    <div className="dashboard_box">
      <div className="dashboard_title">
        {props.match.params.ids == 1
          ? t("StarSharks")
          : props.match.params.ids == 2
          ? t("Axie Inifity")
          : t("Dracoo Master")}
      </div>
      <div
        style={{
          textAlgin: "center",
          textAlign: "center",
          paddingTop: ".5rem",
          display:
            props.match.params.ids == 1 || props.match.params.ids == 3
              ? "none"
              : "block",
        }}
      >
        <img width={"80%"} src={comsoon} alt="" />
      </div>
      <div
        className="tab flex"
        style={{
          display:
            props.match.params.ids == 1 || props.match.params.ids == 3
              ? "flex"
              : "none",
        }}
      >
        <div
          className={tabType === 1 ? "active" : ""}
          onClick={() => setTabTypeFn(1)}
        >
          {t("15 minutes")}
        </div>
        <div
          className={tabType === 2 ? "active" : ""}
          onClick={() => setTabTypeFn(2)}
        >
          {t("Week")}
        </div>
        <div
          className={tabType === 3 ? "active" : ""}
          onClick={() => setTabTypeFn(3)}
        >
          {t("Month")}
        </div>
      </div>

      <div
        style={{
          display:
            props.match.params.ids == 1 || props.match.params.ids == 3
              ? "block"
              : "none",
        }}
      >
        <div className="item flex flex_between">
          <div className="echarts_box">
            <div className="echarts_title">{t("NFT Volume")}</div>
            <ReactEcharts
              option={turnOver}
              notMerge={true}
              lazyUpdate={true}
              style={{ width: "100%", height: "2.93rem" }}
            />
          </div>
          <div className="echarts_box">
            <div className="echarts_title">{t("NFT Active")}</div>
            <ReactEcharts
              option={activeAddressGrowth}
              notMerge={true}
              lazyUpdate={true}
              style={{ width: "100%", height: "2.93rem" }}
            />
          </div>
        </div>
        <div className="item">
          <div className="echarts_box">
            <div className="echarts_title">{t("NFT Transaction")}</div>
            <ReactEcharts
              option={transaction}
              notMerge={true}
              lazyUpdate={true}
              style={{ width: "100%", height: "2.93rem" }}
            />
          </div>
        </div>
        <div className="item flex flex_between" style={{ display: "none" }}>
          <div className="echarts_box">
            <div className="echarts_title">
              {t("Daily Withdrawal SEAAmount")}
            </div>
            <ReactEcharts
              option={echartsOption}
              notMerge={true}
              lazyUpdate={true}
              style={{ width: "100%", height: "2.93rem" }}
            />
          </div>
          <div className="echarts_box">
            <div className="echarts_title">
              {t("Daily Consumption (SEA) Quantity")}
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
      <div className="item" style={{ display: "none" }}>
        <div className="echarts_box_big">
          <div className="echarts_title">{t("Daily Withdrawal SEAAmount")}</div>
          <ReactEcharts
            option={echartsOptionBar}
            notMerge={true}
            lazyUpdate={true}
            style={{ width: "100%", height: "2.93rem" }}
          />
        </div>
      </div>
      <div className="item flex flex_between box" style={{ display: "none" }}>
        <div className="echarts_box">
          <div className="echarts_title">{t("Daily Withdrawal SEAAmount")}</div>
          <ReactEcharts
            option={echartsOptionPie}
            notMerge={true}
            lazyUpdate={true}
            style={{ width: "100%", height: "3.5rem" }}
          />
        </div>
        <div
          className="echarts_box"
          style={{
            display:
              props.match.params.ids == 1 || props.match.params.ids == 3
                ? "flex"
                : "none",
          }}
        >
          <div className="echarts_title">{t("Daily Withdrawal SEAAmount")}</div>
          <ReactEcharts
            option={echartsOptionPie}
            notMerge={true}
            lazyUpdate={true}
            style={{ width: "100%", height: "3.5rem" }}
          />
        </div>
      </div>
      <div className="item" style={{display:props.match.params.ids==3 ? "block" : "none"}}>
        <div className="echarts_box_big">
          <div className="echarts_title">
            {t("Ratio of destruction to output")}
          </div>
          <div className="tab_box">
            <div
              className={tabType1 === 1 ? "active" : ""}
              onClick={() => setTabsType(1)}
            >
              Day
            </div>
            <div
              className={tabType1 === 2 ? "active" : ""}
              onClick={() => setTabsType(2)}
            >
              Week
            </div>
            <div
              className={tabType1 === 3 ? "active" : ""}
              onClick={() => setTabsType(3)}
            >
              Month
            </div>
          </div>
          <ReactEcharts
            option={distoryOutPutraio}
            notMerge={true}
            lazyUpdate={true}
            style={{ width: "100%", height: "2.93rem" }}
          />
        </div>
      </div>
      <div className="table_box" style={{display:props.match.params.ids==3 ? "block" : "none", marginTop: ".2rem"}}>
        <div className="table_title flex flex_between">
          <div>
            {t("Top Balances")} <ExclamationCircleOutlined />
          </div>
          <div>
            <FieldTimeOutlined />
            {t("5min ago")}
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={pagination}
          rowKey="id"
          onChange={onChange}
          scroll={{ x: 840 }}
        />
      </div>
      <div className="table_box" style={{display:props.match.params.ids==3 ? "block" : "none", marginTop: ".2rem"}}>
        <div className="table_title flex flex_between">
          <div>
            {t("Top Diamond Hands")} <ExclamationCircleOutlined />
          </div>
          <div>
            <FieldTimeOutlined />
            {t("5min ago")}
          </div>
        </div>
        <Table
          columns={columns2}
          dataSource={data2}
          pagination={pagination2}
          rowKey="id"
          onChange={onChange2}
          scroll={{ x: 840 }}
        />
      </div>
      <div className="table_box" style={{display:props.match.params.ids==3 ? "block" : "none", marginTop: ".2rem"}}>
        <div className="table_title flex flex_between">
          <div>
            {t("Top Seller Ranking")} <ExclamationCircleOutlined />
          </div>
          <div className="flex flex_align_center">
            <div className="select_box">
              <Select
                defaultValue={true}
                style={{
                  width: 120,
                }}
                onChange={handleChangeGroup2}
              >
                <Option value={true}>Merge</Option>
                <Option value={false}>Not Merge</Option>
              </Select>
            </div>
            <div className="item_tab flex flex_align_center">
              <span
                className={sellType === 1 ? "active" : ""}
                onClick={() => setSellTypeFn(1)}
              >
                {t("5min")}
              </span>
              <span
                className={sellType === 2 ? "active" : ""}
                onClick={() => setSellTypeFn(2)}
              >
                {t("One Day")}
              </span>
              <span
                className={sellType === 3 ? "active" : ""}
                onClick={() => setSellTypeFn(3)}
              >
                {t("One Week")}
              </span>
              <span
                className={sellType === 4 ? "active" : ""}
                onClick={() => setSellTypeFn(4)}
              >
                {t("One Month")}
              </span>
              <span
                className={sellType === 5 ? "active" : ""}
                onClick={() => setSellTypeFn(5)}
              >
                {t("All")}
              </span>
            </div>
          </div>
        </div>
        <Table
          columns={columns3}
          dataSource={data3}
          pagination={pagination3}
          rowKey="id"
          onChange={onChange3}
          scroll={{ x: 840 }}
        />
      </div>
      <div className="table_box"  style={{display:props.match.params.ids==3 ? "block" : "none", marginTop: ".2rem"}}>
        <div className="table_title flex flex_between">
          <div>
            {t("Top Buyer Ranking")} <ExclamationCircleOutlined />
          </div>
          <div className="flex flex_align_center">
            <div className="select_box">
              <Select
                defaultValue={true}
                style={{
                  width: 120,
                }}
                onChange={handleChangeGroup1}
              >
                <Option value={true}>Merge</Option>
                <Option value={false}>Not Merge</Option>
              </Select>
            </div>
            <div className="item_tab flex flex_align_center">
              <span
                className={buyType === 1 ? "active" : ""}
                onClick={() => setBuyTypeFn(1)}
              >
                {t("5min")}
              </span>
              <span
                className={buyType === 2 ? "active" : ""}
                onClick={() => setBuyTypeFn(2)}
              >
                {t("One Day")}
              </span>
              <span
                className={buyType === 3 ? "active" : ""}
                onClick={() => setBuyTypeFn(3)}
              >
                {t("One Week")}
              </span>
              <span
                className={buyType === 4 ? "active" : ""}
                onClick={() => setBuyTypeFn(4)}
              >
                {t("One Month")}
              </span>
              <span
                className={buyType === 5 ? "active" : ""}
                onClick={() => setBuyTypeFn(5)}
              >
                {t("All")}
              </span>
            </div>
          </div>
        </div>
        <Table
          columns={columns3}
          dataSource={data4}
          pagination={pagination4}
          rowKey="id"
          onChange={onChange4}
          scroll={{ x: 840 }}
        />
      </div>
    </div>
  );
};
export default Dashboard;
