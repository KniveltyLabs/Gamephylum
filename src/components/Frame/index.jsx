import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from "../Header";

import "./frame.less";
const Frame = (props) => {
  useEffect(() => {
    if (document && props.history.location.pathname != '/home') {
      if (document?.documentElement || document?.body) {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      }
    }
  }, [props.history.location.pathname]);
  return (
    <div className="frame">
      <Header props={props} />
      <div>{props.children}</div>
    </div>
  );
};
export default withRouter(Frame);
