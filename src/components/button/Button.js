import React from "react";
import styles from "./Button.module.scss";
const Button = ({
  children,
  styleType,
  onClick = () => {},
  style = {},
  type = "",
}) => {
  return (
    <button
      className={`${styles.button} ${styles[styleType]}`}
      onClick={onClick}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
