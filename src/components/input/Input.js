import React from "react";
import styles from "./Input.module.scss";
const Input = ({
  id,
  value,
  onChange = () => {},
  placeholder = "",
  type = "text",
  disabled = false,
  postponeComponent,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={value ? styles.active : ""} htmlFor={id}>
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <div className={styles.postponeComponent}>{postponeComponent}</div>
    </div>
  );
};
export default Input;
