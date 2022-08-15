import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import routerConfig from "./config";
import AllComponents from "../views/index";
const CRouter = () => {
  console.log(routerConfig)
  const createMenu = (r) => {
    const Component = r.component && AllComponents[r.component];
    
    return (
      <Route
        key={r.key}
        path={r.key}
        render={(props) => {
          return <Component {...props} />;
        }}
      ></Route>
    );
  };
  const createRoute = (key) => routerConfig[key].map(createMenu);
  return (
    <Switch>
      <Redirect from="/" to="/home" exact></Redirect>
      {Object.keys(routerConfig).map((key) => createRoute(key))}
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default CRouter;
