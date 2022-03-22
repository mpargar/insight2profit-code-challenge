import React from "react";
import styles from "./Button.module.scss";
import LoadingIcon from "../loadingIcon/LoadingIcon";
const Button = ({
  children,
  styleType,
  onClick = () => {},
  style = {},
  type = "",
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[styleType]}`}
      onClick={onClick}
      style={style}
      type={type}
      disabled={disabled || loading}
    >
      {loading ? <LoadingIcon /> : children}
    </button>
  );
};

export default Button;
