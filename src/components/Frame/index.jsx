import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from "../Header";

import "./frame.less";
const Frame = (props) => {
  useEffect(() => {}, []);
  return (
    <div className="frame">
      <Header props={props} />
      <div>{props.children}</div>
    </div>
  );
};
export default withRouter(Frame);
