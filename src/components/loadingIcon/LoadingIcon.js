import React from "react";
import loadingIcon from "../../img/white-balance-sunny.svg";
import styles from "./LoadingIcon.module.scss";
const LoadingIcon = () => {
  return (
    <img className={styles.rotate} src={loadingIcon} alt="Sun loading icon" />
  );
};
export default LoadingIcon;
