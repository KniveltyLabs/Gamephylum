import React, { useState, useEffect } from "react";
const Dashboard = (props) => {
  useEffect(() => {}, []);
  return <div>Starsharks{props.match.params.ids}</div>;
};
export default Dashboard;
