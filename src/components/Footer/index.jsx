import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/img/logo.png";
import discord from "../../assets/img/footer/discord.png";
import telegram from "../../assets/img/footer/telegram.png";
import twitter from "../../assets/img/footer/twitter.png";

import "./footer.less";
const Footer = ({ props }) => {
  const { t } = useTranslation();
  useEffect(() => {}, []);
  return (
    <div className="footer">
      <div className="footer_con">
        <div className="footer_left">
          <img src={logo} alt="" />
          <div className="footer_text">
            {t("CamePhylum is a data analysis")}
          </div>
        </div>
        <div className="footer_right">
          <h2>{t("Join The GamePhylum Community")}</h2>
          <div className="icon">
            <img src={telegram} alt="" />
            <span>Telegram</span>
          </div>
          <div className="icon">
            <img src={twitter} alt="" />
            <span>Twitter</span>
          </div>
          <div className="icon">
            <img src={discord} alt="" />
            <span>Discord</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
