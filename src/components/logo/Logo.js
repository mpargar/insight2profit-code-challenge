import React from "react";
import style from "./Logo.module.scss";
import logo from "../../img/logo.svg";
import { APP_TITLE, LOGO_ALT } from "./LogoConstants";
const Logo = () => (
  <div className={style.logoContainer}>
    <img src={logo} className="logo" alt={LOGO_ALT} />
    <h1>{APP_TITLE}</h1>
  </div>
);
export default Logo;
