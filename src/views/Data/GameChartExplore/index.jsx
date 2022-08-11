import React, { useState, useEffect, useMemo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from "antd";
import Dashboard from "./pages/Dashboard";
import Paradise from "./pages/Paradise";
import Overview from "./pages/Overview";
import Period from "./pages/Period";
import StepN from "./pages/StepN";

import "./gamechartexplore.less";

const { SubMenu } = Menu;
const GameChartExplore = (props) => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState([
    {
      id: 1,
      title: t("Game Project Dashboard"),
      children: [
        {
          id: 11,
          title: t("StarSharks"),
          key: "/data/gamechartexplore/dashboard/1",
        },
        {
          id: 12,
          title: t("Axie Inifity"),
          key: "/data/gamechartexplore/dashboard/2",
        },
        {
          id: 13,
          title: t("Dracoo Master"),
          key: "/data/gamechartexplore/dashboard/3",
        },
      ],
    },
    {
      id: 2,
      title: t("Game NFT Paradise"),
      children: [
        {
          id: 21,
          title: t("Game NFT Overview"),
          key: "/data/gamechartexplore/paradise/overview",
        },
        {
          id: 22,
          title: t("Sharks"),
          key: "/data/gamechartexplore/paradise/1",
        },
        {
          id: 23,
          title: t("Axie"),
          key: "/data/gamechartexplore/paradise/2",
        },
        {
          id: 24,
          title: t("Dracoo"),
          key: "/data/gamechartexplore/paradise/3",
        },
      ],
    },
    {
      id: 3,
      title: t("Game Payback Period"),
      children: [
        {
          id: 34,
          title: t("StepN"),
          key: "/data/gamechartexplore/period/stepN",
        },
        {
          id: 31,
          title: t("StarSharks"),
          key: "/data/gamechartexplore/period/1",
        },
        {
          id: 32,
          title: t("Axie Inifity"),
          key: "/data/gamechartexplore/period/2",
        },
        {
          id: 33,
          title: t("Dracoo Master"),
          key: "/data/gamechartexplore/period/3",
        },
        
      ],
    },
  ]);
  // activeRouter
  const [activeRouter, setActiveRouter] = useState(["11"]);
  // openKeys
  const [openKeys, setOpenKeys] = useState(["1"]);
  const setRouter = () => {
    console.log("propsprops", props);
    let path = props.location.pathname;
    if (path === "/data/gamechartexplore") {
      setActiveRouter(["11"]);
      setOpenKeys(["1"]);
      return;
    }
    menu.forEach((item) => {
      item.children.forEach((n) => {
        if (n.key === path) {
          setActiveRouter([n.id + ""]);
          setOpenKeys([item.id + ""]);
        }
      });
    });
  };
  useMemo(() => {
    setRouter();
  }, []);
  useEffect(() => {
    setRouter();
  }, [props.location.pathname]);
  const getPage = (key) => {
    console.log(key)
    props.history.push(key);
  };

  const onOpenChange = (openKeys) => {
    setOpenKeys([...openKeys]);
  };

  return (
    <div className="gamechartexplore">
      <div className="menu">
        <Menu
          theme="dark"
          openKeys={openKeys}
          selectedKeys={activeRouter}
          onOpenChange={onOpenChange}
          mode="inline"
          className="game_menu"
        >
          {menu.map((item) => {
            return (
              <SubMenu key={item.id} title={item.title}>
                {item.children.map((ind) => {
                  return (
                    <Menu.Item key={ind.id} onClick={() => getPage(ind.key)}>
                      {ind.title}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          })}
        </Menu>
        <div className="menu_xian"></div>
      </div>
      <div className="children">
        <Switch>
          <Redirect
            from="/data/gamechartexplore"
            to="/data/gamechartexplore/dashboard/1"
            exact
          ></Redirect>
          <Route
            path="/data/gamechartexplore/dashboard/:ids"
            component={Dashboard}
          ></Route>
          <Route
            path="/data/gamechartexplore/paradise/overview"
            component={Overview}
          ></Route>
          <Route
            path="/data/gamechartexplore/paradise/:ids"
            component={Paradise}
          ></Route>
          <Route
            path="/data/gamechartexplore/period/stepN"
            component={StepN}
          ></Route>
          <Route
            path="/data/gamechartexplore/period/:ids"
            component={Period}
          ></Route>
          
        </Switch>
      </div>
    </div>
  );
};
export default GameChartExplore;
