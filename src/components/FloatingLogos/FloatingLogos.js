import React from "react";
import distilleryLogo from "../../img/distillery.svg";
import insight2profitLogo from "../../img/insight2profit.svg";
import styles from "./FloatingLogos.module.scss";
import {DISTILLERY_LOGO_ALT, INSIGHT2PROFIT_LOGO_ALT} from "./FloatingLogosContants";
const FloatingLogos = () => (
  <div className={styles.floatingLogosContainer}>
    <img src={distilleryLogo} className="logo" alt={DISTILLERY_LOGO_ALT} />
    <img
      src={insight2profitLogo}
      className="logo"
      alt={INSIGHT2PROFIT_LOGO_ALT}
    />
  </div>
);

export default FloatingLogos;
