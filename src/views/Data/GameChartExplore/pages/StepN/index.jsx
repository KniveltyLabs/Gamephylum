import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { Select, Table } from "antd";
import { getSysConfigGetRate,getQuotation ,getShopPrice} from "../../../../../axios/api";
import "./stepn.less";
const { Option } = Select;

const StepN = (props) => {
  const { t, i18n } = useTranslation();
  const [selectVal, setSelectVal] = useState("floorPrice");
  const [minKey, setMinKey] = useState("");
  const [FloorPrice, setFloorPrice] = useState(0);//1275
  const [FloorPriceUncommon, setFloorPriceUncommon] = useState(5000);
  const [GSTPrice, setGSTPrice] = useState(0);
  const [GMTPrice, setGMTPrice] = useState(0);
  const columns = useMemo(function () {
    let table_header = [
      {
        title: "Sneakers level",
        width: 150,
        dataIndex: "title",
        key: "title",
        fixed: "left",
      },
      {
        title: "Lv1",
        width: 120,
        dataIndex: "lv1",
        key: "lv1",
        render: (text) => {
          if (minKey === "lv1") return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv2",
        width: 120,
        dataIndex: "lv2",
        key: "lv2",
        render: (text) => {
          if (minKey === "lv2") return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv3",
        width: 120,
        dataIndex: "lv3",
        key: "lv3",
        render: (text) => {
          if (minKey === "lv3") return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv4",
        width: 120,
        dataIndex: "lv4",
        key: "lv4",
        render: (text) => {
          if (minKey === "lv4") return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv5",
        width: 120,
        dataIndex: "lv5",
        key: "lv5",
        render: (text) => {
          if (minKey === "lv5") return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv6",
        width: 120,
        dataIndex: "lv6",
        key: "lv6",
        render: (text) => {
          if (minKey === "lv6") return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv7",
        width: 120,
        dataIndex: "lv7",
        key: "lv7",
        render: (text) => {
          if (minKey === "lv7") return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv8",
        width: 120,
        dataIndex: "lv8",
        key: "lv8",
        render: (text) => {
          if (minKey === "lv8") return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv9",
        width: 120,
        dataIndex: "lv9",
        key: "lv9",
        render: (text) => {
          if (minKey === "lv9") return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv10",
        width: 120,
        dataIndex: "lv10",
        key: "lv10",
        render: (text) => {
          if (minKey === "lv10")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv11",
        width: 120,
        dataIndex: "lv11",
        key: "lv11",
        render: (text) => {
          if (minKey === "lv11")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv12",
        width: 120,
        dataIndex: "lv12",
        key: "lv12",
        render: (text) => {
          if (minKey === "lv12")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv13",
        width: 120,
        dataIndex: "lv13",
        key: "lv13",
        render: (text) => {
          if (minKey === "lv13")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv14",
        width: 120,
        dataIndex: "lv14",
        key: "lv14",
        render: (text) => {
          if (minKey === "lv14")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv15",
        width: 120,
        dataIndex: "lv15",
        key: "lv15",
        render: (text) => {
          if (minKey === "lv15")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv16",
        width: 120,
        dataIndex: "lv16",
        key: "lv16",
        render: (text) => {
          if (minKey === "lv16")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv17",
        width: 120,
        dataIndex: "lv17",
        key: "lv17",
        render: (text) => {
          if (minKey === "lv17")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv18",
        width: 120,
        dataIndex: "lv18",
        key: "lv18",
        render: (text) => {
          if (minKey === "lv18")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv19",
        width: 120,
        dataIndex: "lv19",
        key: "lv19",
        render: (text) => {
          if (minKey === "lv19")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
      {
        title: "Lv20",
        width: 120,
        dataIndex: "lv20",
        key: "lv20",
        render: (text) => {
          if (minKey === "lv20")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      },
    ];
    if (selectVal === "1Green8Grey") {
      let obj = {
        title: "lv20-lv28",
        width: 120,
        dataIndex: "lv21",
        key: "lv21",
        render: (text) => {
          if (minKey === "lv21")
            return <div className="min_active">{text}</div>;
          return <div>{text}</div>;
        },
      };
      table_header = [...table_header, obj];
    }
    return table_header;
  });
  const data = useMemo(
    function () {
      let table_data = [
        {
          title: t("Total Cost(GST)"),
          key: 1,
          lv1: 1,
          lv2: 3,
          lv3: 10,
          lv4: 6,
          lv5: 20,
          lv6: 26,
          lv7: 33,
          lv8: 41,
          lv9: 50,
          lv10: 80,
          lv11: 91,
          lv12: 103,
          lv13: 116,
          lv14: 130,
          lv15: 145,
          lv16: 161,
          lv17: 178,
          lv18: 196,
          lv19: 215,
          lv20: 275,
        },
        {
          title: t("Total Cost(GMT)"),
          key: 2,
          lv1: 0,
          lv2: 0,
          lv3: 0,
          lv4: 0,
          lv5: 10,
          lv6: 10,
          lv7: 10,
          lv8: 10,
          lv9: 10,
          lv10: 30,
          lv11: 40,
          lv12: 40,
          lv13: 40,
          lv14: 40,
          lv15: 40,
          lv16: 40,
          lv17: 40,
          lv18: 40,
          lv19: 40,
          lv20: 100,
        },
      ];
      if (selectVal === "1Green8Grey") {
        let obj = {
          lv21: 471,
        };
        let obj1 = {
          lv21: 100,
        };
        table_data[0] = { ...table_data[0], ...obj };
        table_data[1] = { ...table_data[1], ...obj1 };
      }
      let obj = {
        title: t("Total Cost(USD)"),
        key: 3,
      };
      let for_num = 20;
      if (selectVal === "1Green8Grey") {
        for_num = 21;
      }
      for (var i = 1; i <= for_num; i++) {
        obj["lv" + i] =
          Math.round(
            (table_data[0]["lv" + i] * GSTPrice +
              table_data[1]["lv" + i] * GMTPrice) *
              100
          ) / 100;
      }
      table_data = [...table_data, obj];
      console.log(table_data);
      return table_data;
    },
    [selectVal,,GSTPrice,GMTPrice,FloorPrice]
  );
  const data2 = useMemo(
    function () {
      console.log(FloorPrice)
      let table_data = [];
      let table_data1 = [
        {
          title: t("GST per day"),
          key: "GSTPerDay",
          lv1: 7.01,
          lv2: 8,
          lv3: 9.69,
          lv4: 8.89,
          lv5: 10.43,
          lv6: 10.78,
          lv7: 11.45,
          lv8: 12.08,
          lv9: 12.69,
          lv10: 13.26,
          lv11: 13.81,
          lv12: 14.34,
          lv13: 14.85,
          lv14: 14.85,
          lv15: 15.34,
          lv16: 15.82,
          lv17: 16.29,
          lv18: 16.74,
          lv19: 17.18,
          lv20: 17.6,
        },
        {
          title: t("Limit per level"),
          key: "LimitPerLevel",
          lv1: 10,
          lv2: 15,
          lv3: 25,
          lv4: 20,
          lv5: 30,
          lv6: 35,
          lv7: 40,
          lv8: 45,
          lv9: 50,
          lv10: 60,
          lv11: 70,
          lv12: 80,
          lv13: 90,
          lv14: 100,
          lv15: 110,
          lv16: 120,
          lv17: 130,
          lv18: 140,
          lv19: 150,
          lv20: 160,
        },
        {
          title: t("Durability per day"),
          key: "DurabilityPerDay",
          lv1: 6,
          lv2: 6,
          lv3: 6,
          lv4: 6,
          lv5: 6,
          lv6: 5,
          lv7: 5,
          lv8: 5,
          lv9: 5,
          lv10: 5,
          lv11: 5,
          lv12: 5,
          lv13: 5,
          lv14: 4,
          lv15: 4,
          lv16: 4,
          lv17: 4,
          lv18: 4,
          lv19: 4,
          lv20: 4,
        },
        {
          title: t("Repair Cost"),
          key: "RepairCost",
          lv1: 1.86,
          lv2: 1.92,
          lv3: 2.1,
          lv4: 1.98,
          lv5: 2.16,
          lv6: 1.85,
          lv7: 1.9,
          lv8: 2,
          lv9: 2.05,
          lv10: 2.1,
          lv11: 2.2,
          lv12: 2.3,
          lv13: 2.4,
          lv14: 2,
          lv15: 2.08,
          lv16: 2.16,
          lv17: 2.24,
          lv18: 2.32,
          lv19: 2.4,
          lv20: 2.48,
        },
        {
          title: t("Income GST"),
          key: 2,
        },
        {
          title: t("Income GST($USD)"),
        },
        {
          title: t("Consider Level up time by days"),
          key: "LevelDays",
          lv1: 1,
          lv2: 1,
          lv3: 1,
          lv4: 1,
          lv5: 1,
          lv6: 1,
          lv7: 2,
          lv8: 2,
          lv9: 2,
          lv10: 3,
          lv11: 3,
          lv12: 4,
          lv13: 4,
          lv14: 5,
          lv15: 6,
          lv16: 6,
          lv17: 7,
          lv18: 8,
          lv19: 9,
          lv20: 10,
        },
        {
          title: t("PBT"),
          key: "PBT",
        },
        {
          title: t("ROI(Monthly)"),
          key: "ROI",
        },
      ];
      let table_data2 = [
        {
          title: t("GST per day"),
          key: "GSTPerDay",
          lv1: 10,
          lv2: 15,
          lv3: 25,
          lv4: 20,
          lv5: 30,
          lv6: 32.31,
          lv7: 34.08,
          lv8: 35.76,
          lv9: 37.36,
          lv10: 38.9,
          lv11: 40.39,
          lv12: 41.82,
          lv13: 43.2,
          lv14: 44.54,
          lv15: 45.19,
          lv16: 46.47,
          lv17: 47.72,
          lv18: 48.94,
          lv19: 49.33,
          lv20: 50.51,
        },
        {
          title: t("Limit per level"),
          key: "LimitPerLevel",
          lv1: 10,
          lv2: 15,
          lv3: 25,
          lv4: 20,
          lv5: 30,
          lv6: 35,
          lv7: 40,
          lv8: 45,
          lv9: 50,
          lv10: 60,
          lv11: 70,
          lv12: 80,
          lv13: 90,
          lv14: 100,
          lv15: 110,
          lv16: 120,
          lv17: 130,
          lv18: 140,
          lv19: 150,
          lv20: 160,
        },
        {
          title: t("Durability per day"),
          key: "DurabilityPerDay",
          lv1: 7,
          lv2: 6,
          lv3: 7,
          lv4: 6,
          lv5: 9,
          lv6: 9,
          lv7: 9,
          lv8: 9,
          lv9: 9,
          lv10: 9,
          lv11: 9,
          lv12: 9,
          lv13: 9,
          lv14: 9,
          lv15: 8,
          lv16: 8,
          lv17: 8,
          lv18: 8,
          lv19: 7,
          lv20: 7,
        },
        {
          title: t("Repair Cost"),
          key: "RepairCost",
          lv1: 2.87,
          lv2: 2.58,
          lv3: 3.22,
          lv4: 2.7,
          lv5: 4.32,
          lv6: 4.5,
          lv7: 4.59,
          lv8: 4.77,
          lv9: 4.95,
          lv10: 5.13,
          lv11: 5.4,
          lv12: 5.58,
          lv13: 5.76,
          lv14: 5.94,
          lv15: 5.52,
          lv16: 5.68,
          lv17: 5.92,
          lv18: 6.16,
          lv19: 5.6,
          lv20: 5.8,
        },
        {
          title: t("Income GST"),
          key: 2,
        },
        {
          title: t("Income GST($USD)"),
        },
        {
          title: t("Consider Level up time by days"),
          key: "LevelDays",
          lv1: 1,
          lv2: 1,
          lv3: 1,
          lv4: 1,
          lv5: 1,
          lv6: 1,
          lv7: 2,
          lv8: 2,
          lv9: 2,
          lv10: 3,
          lv11: 3,
          lv12: 4,
          lv13: 4,
          lv14: 5,
          lv15: 6,
          lv16: 6,
          lv17: 7,
          lv18: 8,
          lv19: 9,
          lv20: 10,
        },
        {
          title: t("PBT"),
          key: "PBT",
        },
        {
          title: t("ROI(Monthly)"),
          key: "ROI",
        },
      ];
      let table_data3 = [
        {
          title: t("Income GST"),
          key: "GST",
          lv1: 4.26,
          lv2: 9.84,
          lv3: 15.05,
          lv4: 20.4,
          lv5: 25.68,
          lv6: 30.5,
          lv7: 35.92,
          lv8: 40.76,
          lv9: 45.6,
          lv10: 54.87,
          lv11: 65.6,
          lv12: 73.18,
          lv13: 81.04,
          lv14: 85.42,
          lv15: 87.76,
          lv16: 90.19,
          lv17: 92.38,
          lv18: 94.5,
          lv19: 96.55,
          lv20: 98.55,
          lv21: 113.35,
        },
        {
          title: t("Income GST($USD)"),
        },
        {
          title: t("Consider Level up time by days"),
          key: "LevelDays",
          lv1: 1,
          lv2: 1,
          lv3: 1,
          lv4: 1,
          lv5: 1,
          lv6: 1,
          lv7: 2,
          lv8: 2,
          lv9: 2,
          lv10: 3,
          lv11: 3,
          lv12: 4,
          lv13: 4,
          lv14: 5,
          lv15: 6,
          lv16: 6,
          lv17: 7,
          lv18: 8,
          lv19: 9,
          lv20: 10,
          lv21: 20,
        },
        {
          title: t("PBT"),
          key: "PBT",
        },
        {
          title: t("ROI(Monthly)"),
          key: "ROI",
        },
      ];
      if (selectVal === "floorPrice") {
        table_data = table_data1;
      }
      if (selectVal === "1Green2Grey") {
        table_data = table_data2;
      }
      if (selectVal === "1Green8Grey") {
        table_data = table_data3;
      }
      let IncomeGST = {
        title: t("Income GST"),
        key: "GST",
      };
      let IncomeGSTUSD = {
        title: t("Income GST($USD)"),
        key: "GSTUSD",
      };
      let PBT = {
        title: t("PBT"),
        key: "PBT",
      };
      let ROI = {
        title: t("ROI(Monthly)"),
        key: "ROI(Monthly)",
      };
      let for_num = 20;
      if (selectVal === "1Green8Grey") {
        for_num = 21;
      }
      for (var i = 1; i <= for_num; i++) {
        if (selectVal !== "1Green8Grey") {
          IncomeGST["lv" + i] =
            Math.round(
              (table_data[0]["lv" + i] - table_data[3]["lv" + i]) * 100
            ) / 100;
          IncomeGSTUSD["lv" + i] =
            Math.round(IncomeGST["lv" + i] * GSTPrice * 10000) / 10000;
        } else {
          IncomeGSTUSD["lv" + i] =
            Math.round(table_data[0]["lv" + i] * GSTPrice * 10000) / 10000;
        }

        if (selectVal === "floorPrice") {
          PBT["lv" + i] =
            Math.round(
              ((FloorPrice +
                data[2]["lv" + i] -
                (table_data[6]["lv" + i] - 1) * IncomeGSTUSD["lv" + i]) /
                IncomeGSTUSD["lv" + i] +
                table_data[6]["lv" + i] -
                1) *
                100000000
            ) / 100000000;
          ROI["lv" + i] =
            Math.round(
              ((IncomeGSTUSD["lv" + i] * 30) /
                (FloorPrice + data[2]["lv" + i])) *
                10000
            ) /
              100 +
            "%";
        }
        if (selectVal === "1Green2Grey") {
          PBT["lv" + i] =
            Math.round(
              ((FloorPrice * 2 +
                FloorPriceUncommon +
                data[2]["lv" + i] -
                (table_data[6]["lv" + i] - 1) * IncomeGSTUSD["lv" + i]) /
                IncomeGSTUSD["lv" + i] +
                table_data[6]["lv" + i] -
                1) *
                100000000
            ) / 100000000;
          ROI["lv" + i] =
            Math.round(
              ((IncomeGSTUSD["lv" + i] * 30) /
                (FloorPrice * 2 + FloorPriceUncommon + data[2]["lv" + i])) *
                10000
            ) /
              100 +
            "%";
        }
        if (selectVal === "1Green8Grey") {
          PBT["lv" + i] =
            Math.round(
              ((FloorPrice * 8 +
                FloorPriceUncommon +
                data[2]["lv" + i] -
                (table_data[2]["lv" + i] - 1) * IncomeGSTUSD["lv" + i]) /
                IncomeGSTUSD["lv" + i] +
                table_data[2]["lv" + i] -
                1) *
                100000000
            ) / 100000000;
          ROI["lv" + i] =
            Math.round(
              ((IncomeGSTUSD["lv" + i] * 30) /
                (FloorPrice * 8 + FloorPriceUncommon + data[2]["lv" + i])) *
                10000
            ) /
              100 +
            "%";
        }
      }
      if (selectVal !== "1Green8Grey") {
        table_data[4] = IncomeGST;
        table_data[5] = IncomeGSTUSD;
        table_data[7] = PBT;
        table_data[8] = ROI;
      } else {
        table_data[1] = IncomeGSTUSD;
        table_data[3] = PBT;
        table_data[4] = ROI;
      }

      let sortArr = [];
      for (var key in PBT) {
        if (key !== "title" && key !== "key") sortArr.push(PBT[key]);
      }
      let compare = function (x, y) {
        if (x < y) {
          return -1;
        } else if (x > y) {
          return 1;
        } else {
          return 0;
        }
      };
      let newArr = sortArr.sort(compare);
      for (var key in PBT) {
        if (PBT[key] === newArr[0]) setMinKey(key);
      }

      return table_data;
    },
    [selectVal,GSTPrice,GMTPrice,FloorPrice]
  );
  useEffect(() => {
    getSysConfigGetRate().then((res) => {
      let gst = (parseInt(res.GST*100)/100).toFixed(2);
      let gmt = (parseInt(res.GMT*100)/100).toFixed(2);
      setGSTPrice(gst);
      setGMTPrice(gmt);
    });
    getShopPrice({name:"price"}).then(res=>{
      setFloorPrice(res*1)
    })
    
    // getQuotation("contractName=Sharknft&type=1&page=1&limit=5&startTime=&endTime=");
  }, [props.location.pathname]);
  const onEvents = () => {
    //
  };
  const handleChange = (value) => {
    setSelectVal(value);
  };
  return (
    <div className="step_box">
      <div className="top flex flex_align_center flex_between">
        <div className="left_flex flex flex_align_center">
          <div>{t("Choose combination")} :</div>
          <div className="select_box">
            <Select
              defaultValue={selectVal}
              style={{ width: 150 }}
              onChange={handleChange}
            >
              <Option value="floorPrice">{t("Floor Price")}</Option>
              <Option value="1Green2Grey">{t("1 Green 2 Grey")}</Option>
              <Option value="1Green8Grey">{t("1 Green 8 Grey")}</Option>
            </Select>
          </div>
        </div>
        <div className="left_flex">
          {t("GST Price")} : {GSTPrice} $
        </div>
        <div className="left_flex">
          {t("GMT Price")} : {GMTPrice} $
        </div>
      </div>
      <div>
        <div className="table_title">{t("Level up guidence")}</div>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1500 }}
          pagination={false}
          bordered={false}
        />
      </div>
      <div>
        <div className="table_title">
          <div>{t("Daily Earning")}</div>
          <div className="sm_title">
            {t("(Optimized pointby using STEPN GUIDE)")}
          </div>
        </div>
        <div className="flex table_sm_title">
          <div className="mr_20">* 9.2/5.9/2.6/8.3 (#243963638 assume)</div>
          <div>* Daily Energy 2 </div>
        </div>
        <Table
          columns={columns}
          dataSource={data2}
          scroll={{ x: 1500 }}
          pagination={false}
        />
      </div>
    </div>
  );
};
export default StepN;
