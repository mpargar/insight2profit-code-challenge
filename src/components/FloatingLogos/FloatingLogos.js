import distilleryLogo from "../../img/distillery.svg";
import insight2profitLogo from "../../img/insight2profit.svg";
import styles from "./FloatingLogos.module.scss";
const FloatingLogos = () => (
  <div className={styles.floatingLogosContainer}>
    <img src={distilleryLogo} className="logo" alt="Distillery logo" />
    <img
      src={insight2profitLogo}
      className="logo"
      alt="Insight 2 profit logo"
    />
  </div>
);

export default FloatingLogos;
