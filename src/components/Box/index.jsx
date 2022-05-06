import React, { useState, useEffect } from "react";

import "./box.less";
const Box = ({ url, title, content }) => {
  useEffect(() => {}, []);
  return (
    <div className="box_gpl">
      <img src={url} alt="" />
      <h3>{title}</h3>
      <p className="content_p">{content}</p>
    </div>
  );
};
export default Box;
