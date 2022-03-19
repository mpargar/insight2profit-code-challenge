import React from "react";
import style from "./Logo.module.scss";
import logo from "../../img/logo.svg";
const Logo = () => (
  <div className={style.logoContainer}>
    <img src={logo} className="logo" alt="Distillery logo" />
    <h1>The wheater app</h1>
  </div>
);
export default Logo;
