import React from "react";
import styles from "./Button.module.scss";
import LoadingIcon from "../loadingIcon/LoadingIcon";
const Button = ({
  children,
  styleType = "primary",
  onClick = () => {},
  style = {},
  type = "",
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      data-testid="custom-button"
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
