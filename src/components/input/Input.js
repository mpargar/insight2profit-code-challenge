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
  autoComplete = "off",
  message,
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
        autoComplete={autoComplete}
      />
      {!!postponeComponent && (
        <div className={styles.postponeComponent}>{postponeComponent}</div>
      )}
      {!!message && <div className={styles.error}>{message}</div>}
    </div>
  );
};
export default Input;
